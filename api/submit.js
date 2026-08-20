/* =========================================================================
   api/submit.js  —  the part that sends you the email
   =========================================================================

   WHAT THIS FILE DOES
   When a student submits the form, the browser sends the typed-up results
   here. This file then emails those results to you using "Resend"
   (a free email service). It also attaches the same results as a .txt file.

   NEW: the form now asks "Where should we send the results?" That address
   comes in as `email`. This file will:
     • add it as a second recipient (so the student gets a copy),
     • set it as the Reply-To (so hitting Reply in Gmail goes to them),
     • print it at the top of the email (so you always have it, even if
       delivery to them fails).

   ┌───────────────────────────────────────────────────────────────────┐
   │  TABLE OF CONTENTS                                                   │
   │   [A] SETTINGS  — the email address + sender (change these)          │
   │   [B] THE HANDLER — receives the form and sends the email           │
   │   [C] HELPERS — safe filename, email check, HTML escaping            │
   └───────────────────────────────────────────────────────────────────┘

   THINGS YOU MIGHT CHANGE
   • Who gets the email ............ SETTINGS.sendTo   (below)
   • Who it appears to be from ...... SETTINGS.sendFrom (below)
   • Copy the student or not ........ SETTINGS.copyStudent (below)

   ONE-TIME SETUP (done outside this file — see README.md):
   • Create a free Resend account and an API key.
   • Add that key to Vercel as an Environment Variable named RESEND_API_KEY.
     (This file reads it automatically; never paste the key in here.)
   ========================================================================= */


/* -------------------------------------------------------------------------
   [A] SETTINGS
   ------------------------------------------------------------------------- */
const SETTINGS = {
  // Where the results email is delivered:
  sendTo: "clarityacademics@gmail.com",

  // Who the email appears to be from.
  // "onboarding@resend.dev" works immediately with no setup, BUT it can only
  // deliver to the email address you used to sign up for Resend (which is the
  // address above, so it works). Later, if you verify your own domain in
  // Resend, change this to something like "Clarity Academics <form@yourdomain.com>".
  sendFrom: "Clarity Academics <onboarding@resend.dev>",

  // Should the student ALSO receive a copy at the address they typed in?
  //
  // IMPORTANT: leave this false while sendFrom is still "onboarding@resend.dev".
  // On that shared test address Resend refuses to deliver to anyone except your
  // own signup address, so a student address would just bounce. Once you've
  // verified your own domain in Resend and updated sendFrom above, flip this
  // to true.
  copyStudent: false,
};


/* -------------------------------------------------------------------------
   [B] THE HANDLER  (you normally don't need to edit this)
   ------------------------------------------------------------------------- */
export default async function handler(req, res) {
  // Only accept form submissions (POST). Ignore everything else.
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // The browser sends: { name, grade, date, email, body }
    // ("body" is the report text, "email" is the new "where should we send
    //  the results?" field)
    const { name, grade, date, body, htmlBody, email } = req.body || {};

    if (!body) {
      return res.status(400).json({ error: "Missing form data." });
    }

    // The secret API key is stored safely in Vercel, not in this file.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in Vercel environment variables.");
      return res.status(500).json({ error: "Email is not configured yet." });
    }

    const studentName = (name && name.trim()) ? name.trim() : "Unknown student";

    // --- the new email field -------------------------------------------
    // Trim it, and only trust it if it actually looks like an address.
    // (A typo like "sarah@gmail" would make Resend reject the whole send,
    //  so anything that fails the check is recorded as text instead.)
    const typedEmail = (email && String(email).trim()) || "";
    const emailIsValid = looksLikeEmail(typedEmail);

    // Who receives it. You always do; the student only if BOTH the address
    // is valid AND you've turned copyStudent on above.
    const recipients = [SETTINGS.sendTo];
    if (emailIsValid && SETTINGS.copyStudent) {
      recipients.push(typedEmail);
    }

    // Put the address at the top of the email so it's never lost.
    const header = typedEmail
      ? "Requested delivery to: " + typedEmail +
        (emailIsValid ? "" : "   (⚠ doesn't look like a valid address)") + "\n\n"
      : "No delivery address provided.\n\n";

    const textBody = header + body;

    // Same thing for the pretty HTML version, if the form sent one.
    const htmlOut = htmlBody
      ? "<p style=\"font:14px/1.5 sans-serif;color:#555\">" +
        escapeHtml(header.trim()) + "</p>" + htmlBody
      : undefined;

    const stamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "long",
      timeStyle: "short",
    });
    const subject = "Root Cause Snapshot — " + studentName + " (" + stamp + ")";

    // Send the email through Resend's API.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: SETTINGS.sendFrom,
        to: recipients,
        // Hitting "Reply" in Gmail will now go straight to the student.
        reply_to: emailIsValid ? typedEmail : undefined,
        subject: subject,
        html: htmlOut,                    // the pretty formatted version (what Gmail shows)
        text: textBody,                   // plain-text fallback for old email clients
        attachments: [                    // the same results, as a .txt file
          {
            filename: "root-cause-snapshot-" + safeName(studentName) + ".txt",
            content: Buffer.from(textBody, "utf8").toString("base64"),
          },
        ],
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend error:", response.status, detail);
      return res.status(502).json({ error: "Email service error." });
    }

    // Everything worked — tell the browser to show the thank-you screen.
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res.status(500).json({ error: "Server error." });
  }
}


/* -------------------------------------------------------------------------
   [C] HELPERS
   ------------------------------------------------------------------------- */

// Turn a student's name into a safe filename
// (e.g. "Maria O'Brien" -> "maria-o-brien")
function safeName(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")  // replace anything that isn't a letter/number with "-"
    .replace(/^-+|-+$/g, "")      // trim leading/trailing dashes
    .slice(0, 40) || "student";
}

// A loose sanity check — "something@something.something", no spaces.
// Deliberately not strict; it's here to catch typos, not to police addresses.
function looksLikeEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s));
}

// Make text safe to drop into the HTML email.
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
