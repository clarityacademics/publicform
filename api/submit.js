/* =========================================================================
   api/submit.js  —  the part that sends you the email
   =========================================================================

   WHAT THIS FILE DOES
   When a student submits the form, the browser sends the typed-up results
   here. This file then emails those results to you using "Resend"
   (a free email service). It also attaches the same results as a .txt file.

   ┌───────────────────────────────────────────────────────────────────┐
   │  TABLE OF CONTENTS                                                   │
   │   [A] SETTINGS  — the email address + sender (change these)          │
   │   [B] THE HANDLER — receives the form and sends the email           │
   │   [C] HELPER — makes a safe filename                                 │
   └───────────────────────────────────────────────────────────────────┘

   THINGS YOU MIGHT CHANGE
   • Who gets the email ............ SETTINGS.sendTo   (below)
   • Who it appears to be from ...... SETTINGS.sendFrom (below)

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
    // The browser sends: { name, grade, date, body }  ("body" is the report text)
    const { name, grade, date, body, htmlBody } = req.body || {};

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
    const stamp = new Date().toLocaleString("en-US",{timeZone:"America/New_York",dateStyle:"long",timeStyle:"short"});
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
        to: [SETTINGS.sendTo],
        subject: subject,
        html: htmlBody || undefined,       // the pretty formatted version (what Gmail shows)
        text: body,                       // plain-text fallback for old email clients
        attachments: [                    // the same results, as a .txt file
          {
            filename: "root-cause-snapshot-" + safeName(studentName) + ".txt",
            content: Buffer.from(body, "utf8").toString("base64"),
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
   [C] HELPER — turn a student's name into a safe filename
   (e.g. "Maria O'Brien" -> "maria-o-brien")
   ------------------------------------------------------------------------- */
function safeName(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")  // replace anything that isn't a letter/number with "-"
    .replace(/^-+|-+$/g, "")      // trim leading/trailing dashes
    .slice(0, 40) || "student";
}
