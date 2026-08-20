<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Root Cause Snapshot — Clarity Academics</title>

<!-- Brand fonts (loaded from Google Fonts, free + automatic) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">

<!--
=========================================================================
  ROOT CAUSE SNAPSHOT  —  Clarity Academics intake form (multi-step)
=========================================================================

  WHAT THIS FILE IS
  This single file is the whole form your students see. It is plain
  HTML + CSS + JavaScript, so you can open it in any text editor and
  change things. There is no build step. It shows ONE section at a time
  (like a wizard) with Back / Next buttons and a progress bar.

  ┌───────────────────────────────────────────────────────────────────┐
  │  TABLE OF CONTENTS  (search the file for these labels to jump)      │
  │                                                                     │
  │   [1] STYLES ............ how it looks (colors, fonts, hover, etc.) │
  │   [2] PAGE STRUCTURE .... the fixed parts (header + thank-you page) │
  │   [3] SETTINGS .......... small on/off switches you can change      │
  │   [4] FORM CONTENT ...... ★ YOUR QUESTIONS — edit text here ★       │
  │   [5] PAGE BUILDER ...... turns the content above into the form     │
  │   [6] STEP NAVIGATION ... the Back / Next / progress-bar logic      │
  │   [7] RESULTS BUILDER ... turns answers into the plain-text report  │
  │   [8] SUBMIT HANDLER .... sends the report to your email            │
  └───────────────────────────────────────────────────────────────────┘

  THE TWO THINGS MOST PEOPLE WANT TO CHANGE
  • Edit / add / remove questions  ->  go to  [4] FORM CONTENT  below.
  • Change the email it sends to    ->  open  api/submit.js  (separate file).

  NEW: the welcome screen now asks "Where should we send the results?"
  That address rides along with the answers to api/submit.js. To make it
  optional instead of required, see requireEmail in [3] SETTINGS.

  TIPS FOR EDITING (if you've never touched code)
  • Only change the words BETWEEN the "quotation marks".
  • Keep every comma and every quotation mark where it is.
  • To undo a mistake, press Ctrl+Z (Cmd+Z on Mac).
=========================================================================
-->

<style>
/* =====================================================================
   [1] STYLES
   Colors come from the Clarity Academics brand guide. To recolor the
   whole form, change the hex codes in the :root block below once.
   ===================================================================== */
:root{
  --indigo:#3A5167;   /* main text + headings   */
  --indigo-d:#2E4252; /* darker indigo          */
  --moss:#8A9A5B;     /* green accents          */
  --moss-d:#72804A;   /* darker green           */
  --sand:#DDBE9B;     /* tan rules              */
  --sand-l:#EFE1CD;   /* light tan fills        */
  --cream:#EFE9E1;    /* cream panels           */
  --clay:#B26A4F;     /* clay (buttons, eyebrows)*/
  --clay-d:#8F533F;   /* darker clay (hover)    */
  --soft:#5E6B79;     /* muted body text        */
  --mut:#9AA0A7;      /* lightest grey text     */
  --field:#C2B39B;    /* input borders          */
  --line:#ECE5D8;     /* hairlines              */
  --page:#F4F1EA;     /* page background        */
  --maxw:760px;       /* form width             */
}

*{ box-sizing:border-box; }
body{
  margin:0; background:var(--page); color:var(--indigo);
  font-family:'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  line-height:1.55; -webkit-font-smoothing:antialiased;
}
.wrap{ max-width:var(--maxw); margin:0 auto; padding:40px 20px 72px; }
.card{
  background:#fff; border:1px solid var(--line); border-top:4px solid var(--clay);
  border-radius:16px; padding:40px 46px 44px;
  box-shadow:0 18px 50px rgba(58,81,103,.09);
}
/* --- generous mobile spacing (this was the main fix) --- */
@media (max-width:640px){
  .wrap{ padding:16px 12px 56px; }
  .card{ padding:28px 22px 34px; border-radius:14px; }
}

/* ---- persistent slim brand bar (top of every step) ---- */
.brandbar{ display:flex; align-items:center; justify-content:space-between; padding-bottom:20px; margin-bottom:6px; border-bottom:1px solid var(--line); }
.logo-row{ display:flex; align-items:center; gap:10px; }
.logo-row svg{ height:26px; width:auto; display:block; }
.wordmark{ font-family:'Cormorant',serif; font-weight:700; font-size:21px; color:var(--indigo); }
.stepcount{ font-family:'Cormorant',serif; font-size:19px; color:var(--mut); letter-spacing:1px; }
.stepcount b{ color:var(--clay); font-weight:700; }

/* ---- title (welcome step) ---- */
.eyebrow{ font-weight:700; letter-spacing:2.8px; font-size:12px; text-transform:uppercase; color:var(--clay); margin:26px 0 6px; }
h1.title{ font-family:'Cormorant',serif; font-weight:700; font-size:50px; line-height:1.02; color:var(--indigo); margin:0; }
@media (max-width:640px){ h1.title{ font-size:38px; } .eyebrow{ margin-top:18px; } }
.title-rule{ height:3px; width:62px; background:var(--clay); border-radius:2px; margin:16px 0 0; }
.lede{ color:var(--soft); font-size:16px; margin:20px 0 0; }

/* ---- "how to answer" box ---- */
.howto{ background:var(--cream); border:1px solid #e4d8c4; border-radius:14px; padding:20px 22px; margin:24px 0 6px; }
.howto h2{ font-family:'Cormorant',serif; font-weight:600; font-size:22px; color:var(--indigo-d); margin:0 0 8px; }
.howto .sub{ color:var(--soft); font-size:14.5px; margin:0 0 12px; }
.anchors{ display:flex; flex-wrap:wrap; gap:9px; }
.anchor{ display:flex; align-items:center; gap:8px; background:#fff; border:1px solid #e4d8c4; border-radius:9px; padding:8px 12px; font-size:13px; color:var(--soft); }
.anchor b{ display:inline-flex; align-items:center; justify-content:center; width:23px; height:23px; border-radius:50%; background:var(--indigo); color:#fff; font-size:12px; }
.howto .foot{ color:var(--mut); font-size:13px; margin:13px 0 0; }

/* ---- name / grade / email ---- */
.idrow{ display:flex; flex-wrap:wrap; gap:16px; margin:26px 0 4px; }
.idrow + .idrow{ margin-top:6px; }            /* the email row sits just under name/grade */
.idfield{ display:flex; flex-direction:column; gap:6px; }
.idfield.name{ flex:1 1 240px; }
.idfield.small{ flex:0 1 150px; }
.idfield.email{ flex:1 1 100%; }              /* full width — it's a longer question */
.idfield label{ font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; color:var(--clay); }  /* eyebrow = clay */
/* the email question is a full sentence, so it reads better in normal case */
.idfield.email label{ text-transform:none; letter-spacing:.3px; font-size:13px; font-weight:600; }
.idfield .helper{ color:var(--mut); font-size:12.5px; margin-top:-1px; }
input[type=text], input[type=email], textarea{
  font-family:inherit; font-size:15.5px; color:var(--indigo); background:#fff;
  border:1px solid var(--field); border-radius:9px; padding:11px 13px; width:100%;
  transition:border-color .15s, box-shadow .15s;
}
input[type=text]:hover, input[type=email]:hover, textarea:hover{ border-color:var(--moss); }
input[type=text]:focus, input[type=email]:focus, textarea:focus{ outline:none; border-color:var(--indigo); box-shadow:0 0 0 3px rgba(58,81,103,.13); }
input::placeholder{ color:#C4C8CC; }
textarea{ resize:vertical; min-height:74px; }

/* ---- progress bar (section steps) ---- */
.progress{ margin:22px 0 26px; }
.progress-meta{ display:flex; justify-content:space-between; font-size:11.5px; letter-spacing:1.8px; text-transform:uppercase; color:var(--clay); font-weight:700; margin-bottom:9px; }
.progress-track{ height:5px; background:var(--line); border-radius:999px; overflow:hidden; }
.progress-fill{ height:100%; width:0; background:linear-gradient(90deg, var(--clay), var(--clay-d)); border-radius:999px; transition:width .45s ease; }

/* ---- a step (one section per screen) ---- */
.step-anim{ animation:stepIn .45s ease; }
@keyframes stepIn{ from{ opacity:0; transform:translateY(12px); } to{ opacity:1; transform:none; } }

/* ---- section header ---- */
.section{ margin-top:6px; }
.sec-head{ display:flex; align-items:center; gap:13px; padding-bottom:10px; border-bottom:2px solid var(--sand); }
.chip{ flex:0 0 auto; width:32px; height:32px; border-radius:9px; background:var(--indigo); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:16px; }
.sec-head h2{ font-family:'Cormorant',serif; font-weight:700; font-size:27px; color:var(--indigo); margin:0; line-height:1.05; }
.sec-head .sub{ color:var(--mut); font-size:13px; margin:3px 0 0; }
.sec-anchor{ color:var(--mut); font-size:12.5px; margin:12px 0 2px; }

/* ---- sub-group label (Sleep, Nutrition…) — eyebrow = clay ---- */
.glabel{ font-weight:700; letter-spacing:1.3px; text-transform:uppercase; color:var(--clay); font-size:12px; margin:26px 0 6px; }

/* ---- a rating question row (statement + the 1–5 circles) ---- */
.qrow{ display:flex; align-items:center; gap:18px; padding:13px 12px; border-radius:11px; transition:background .12s; }
.qrow:hover{ background:#FAF7F0; }                                            /* hover: highlight the row */
.qtext{ flex:1; font-size:15px; }
.qtext .qn{ color:var(--mut); font-weight:700; font-size:13px; margin-right:7px; }
.scale{ display:flex; gap:9px; flex:0 0 auto; }
.opt{ position:relative; display:inline-flex; }
.opt input{ position:absolute; inset:0; opacity:0; cursor:pointer; }          /* the real radio, hidden */
.opt .dot{
  display:flex; align-items:center; justify-content:center;
  width:32px; height:32px; border:1.5px solid var(--field); border-radius:50%;
  font-size:13px; color:var(--mut); background:#fff; cursor:pointer; transition:all .12s;
}
.opt:hover .dot{ border-color:var(--indigo); background:var(--sand-l); transform:translateY(-1px); }
.opt input:checked + .dot{ background:var(--indigo); border-color:var(--indigo); color:#fff; font-weight:700; }
.opt input:focus-visible + .dot{ box-shadow:0 0 0 3px rgba(58,81,103,.2); }
/* on phones: stack the statement above a full-width, easy-to-tap scale */
@media (max-width:560px){
  .qrow{ flex-direction:column; align-items:stretch; gap:14px; padding:16px 8px; }
  .scale{ width:100%; justify-content:space-between; gap:8px; }
  .opt .dot{ width:46px; height:46px; font-size:15px; }
}

/* ---- checkbox lists (supports + study tools) ---- */
.ms-prompt{ font-family:'Cormorant',serif; font-weight:600; font-size:20px; color:var(--indigo-d); margin:24px 0 10px; }
.checklist{ display:grid; grid-template-columns:1fr 1fr; gap:10px 20px; margin-top:4px; }
@media (max-width:560px){ .checklist{ grid-template-columns:1fr; gap:6px; } }
.check{ display:flex; align-items:flex-start; gap:11px; padding:11px 12px; border:1px solid transparent; border-radius:9px; cursor:pointer; transition:background .12s, border-color .12s; font-size:14.5px; }
.check:hover{ background:#FAF7F0; border-color:#eee0cb; }
.check input{ width:19px; height:19px; margin-top:1px; accent-color:var(--indigo); cursor:pointer; flex:0 0 auto; }
.check.disabled{ opacity:.45; cursor:not-allowed; }

/* ---- study-tools table ---- */
.tools{ width:100%; border-collapse:collapse; margin-top:10px; border:1px solid var(--line); border-radius:11px; overflow:hidden; }
.tools th, .tools td{ padding:13px 14px; border-bottom:1px solid #f0eadf; text-align:left; font-size:14.5px; }
.tools tbody tr:last-child td{ border-bottom:none; }
.tools thead th{ background:var(--sand-l); color:var(--indigo-d); font-size:11.5px; letter-spacing:.8px; text-transform:uppercase; }
.tools .center{ text-align:center; width:88px; }
.tools tbody tr:hover{ background:#FAF7F0; }
.tools input{ width:19px; height:19px; accent-color:var(--indigo); cursor:pointer; }
.hint{ color:var(--mut); font-size:13px; font-style:italic; margin-top:10px; }

/* ---- daily-routine pills ---- */
.rq{ margin-top:20px; }
.rq .q{ font-size:15px; margin-bottom:11px; }
.rq .q .qn{ color:var(--mut); font-weight:700; margin-right:7px; }
.opts-inline{ display:flex; flex-wrap:wrap; gap:9px; }
.pill{ position:relative; display:inline-flex; }
.pill input{ position:absolute; inset:0; opacity:0; cursor:pointer; }
.pill span{ border:1px solid var(--field); border-radius:22px; padding:10px 17px; font-size:14px; background:#fff; cursor:pointer; transition:all .12s; }
.pill:hover span{ border-color:var(--indigo); background:var(--sand-l); }
.pill input:checked + span{ background:var(--indigo); border-color:var(--indigo); color:#fff; }
.scale-anchors{ display:flex; justify-content:space-between; max-width:380px; color:var(--mut); font-size:12px; margin-top:9px; }

/* ---- open-ended prompts ---- */
.prompt{ margin-top:22px; }
.prompt .q{ font-size:15px; margin-bottom:10px; }
.prompt .q .qn{ color:var(--mut); font-weight:700; margin-right:7px; }
.muted{ color:var(--mut); font-style:italic; }
.frame{ font-style:italic; color:var(--clay-d); font-size:14.5px; margin:0 0 10px; }
.sublabel{ font-weight:700; color:var(--clay); font-size:11.5px; letter-spacing:.6px; text-transform:uppercase; margin:12px 0 5px; }

/* ---- navigation buttons ---- */
.nav{ display:flex; gap:14px; justify-content:space-between; align-items:center; margin-top:40px; }
.nav.center{ justify-content:center; }
.btn{
  font-family:inherit; font-size:16px; font-weight:700; color:#fff; background:var(--clay);
  border:none; border-radius:11px; padding:14px 32px; cursor:pointer;
  transition:transform .12s, background .12s, box-shadow .12s; box-shadow:0 6px 16px rgba(178,106,79,.25);
}
.btn:hover{ background:var(--clay-d); transform:translateY(-2px); box-shadow:0 9px 22px rgba(178,106,79,.32); }
.btn:active{ transform:translateY(0); }
.btn:disabled{ opacity:.6; cursor:wait; transform:none; box-shadow:none; }
.btn-ghost{
  font-family:inherit; font-size:15px; font-weight:600; color:var(--soft); background:transparent;
  border:1px solid var(--field); border-radius:11px; padding:13px 26px; cursor:pointer; transition:all .14s;
}
.btn-ghost:hover{ border-color:var(--indigo); color:var(--indigo); background:#faf7f0; }
.error{ color:#b3402e; font-size:13.5px; margin-top:14px; font-weight:600; text-align:center; }
.note{ color:var(--mut); font-size:12.5px; margin-top:16px; text-align:center; }

/* ---- thank-you page ---- */
#thankyou{ text-align:center; padding:54px 20px; }
#thankyou .check-ic{ width:80px; height:80px; border-radius:50%; background:var(--moss); color:#fff; display:flex; align-items:center; justify-content:center; margin:0 auto 22px; font-size:42px; }
#thankyou h1{ font-family:'Cormorant',serif; font-weight:700; font-size:42px; color:var(--indigo); margin:0 0 12px; }
#thankyou p{ color:var(--soft); font-size:16.5px; max-width:460px; margin:0 auto; }
</style>
</head>

<body>
<!-- =====================================================================
     [2] PAGE STRUCTURE
     The brand bar, welcome screen, navigation, and thank-you screen live
     here. The actual question sections are built automatically by the
     JavaScript further down, from the FORM CONTENT you edit in [4].
     ===================================================================== -->

<div class="wrap" id="form-view">
  <div class="card">

    <!-- persistent brand bar -->
    <div class="brandbar">
      <div class="logo-row">
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" style="height:120px; width:auto;">
  <defs>
    <style>
      .st0 {
        font-family: CormorantGaramond-Bold, 'Cormorant Garamond';
        font-size: 100px;
        font-weight: 700;
      }
      .st1 { fill: #ddbe9b; }
      .st2 { fill: #8a9a5b; }
      .st3 { fill: #3a5167; }
    </style>
  </defs>
  <polygon class="st3" points="139.79 697.51 139.79 550.85 189.79 500 239.79 550.85 239.79 697.51 189.79 749.55 139.79 697.51"/>
  <polygon class="st2" points="260.66 697.51 260.29 435 310.66 375 360.29 435 360.66 697.51 310.66 750 260.66 697.51"/>
  <polygon class="st1" points="381.57 697.51 381.16 310 431.53 250 481.16 310 481.57 697.51 431.57 750 381.57 697.51"/>
  <text class="st0" transform="translate(500 571.79)"><tspan x="0" y="0">Clarity </tspan><tspan x="0" y="120">Academics</tspan></text>
      </svg>
      </div>
      <div class="stepcount" id="stepcount" hidden></div>
    </div>

    <!-- progress bar (hidden on the welcome screen) -->
    <div class="progress" id="progress" hidden>
      <div class="progress-meta"><span id="progress-label"></span></div>
      <div class="progress-track"><div class="progress-fill" id="progress-fill"></div></div>
    </div>

    <form id="rcs-form" novalidate>

      <!-- STEP 0: welcome -->
      <div class="step" id="step-welcome">
        <div class="eyebrow">CLARITY INSIGHT SESSION</div>
        <h1 class="title">Root Cause Snapshot</h1>
        <div class="title-rule"></div>
        <p class="lede" id="lede"></p>      <!-- filled from FORM CONTENT -->
        <div class="howto" id="howto"></div><!-- filled from FORM CONTENT -->
        <div class="idrow">
          <div class="idfield name"><label for="f-name">Name *</label><input id="f-name" type="text" autocomplete="name"></div>
          <div class="idfield small"><label for="f-grade">Grade</label><input id="f-grade" type="text"></div>
        </div>
        <!-- the email question (change the wording between the > and < below) -->
        <div class="idrow">
          <div class="idfield email">
            <label for="f-email">Where should we send the results?</label>
            <input id="f-email" type="email" autocomplete="email" placeholder="you@example.com">
          </div>
        </div>
      </div>

      <!-- the section steps get inserted here automatically -->
      <div id="steps"></div>

      <!-- navigation -->
      <div class="nav" id="nav">
        <button type="button" class="btn-ghost" id="back-btn">Back</button>
        <button type="button" class="btn" id="next-btn">Begin the check-in</button>
        <button type="submit" class="btn" id="submit-btn" hidden>Submit my answers</button>
      </div>
      <div class="error" id="form-error" hidden></div>
      <div class="note" id="privacy-note">Your answers go straight to your coach. Nothing is shared publicly.</div>
    </form>
  </div>
</div>

<!-- THE THANK-YOU VIEW (hidden until the form is submitted) -->
<div class="wrap" id="thankyou-view" hidden>
  <div class="card">
    <div id="thankyou">
      <div class="check-ic">&#10003;</div>
      <h1>Thank you!</h1>
      <p>Your answers have been sent to your coach. There&rsquo;s nothing else you need to do &mdash; you can close this tab.</p>
    </div>
  </div>
</div>

<script>
/* =====================================================================
   [3] SETTINGS
   ===================================================================== */
const SETTINGS = {
  apiEndpoint: "/api/submit",   // where answers are sent (leave as-is)
  maxSupports: 3,               // "Supports" question: how many a student may pick
  toolsTopMax: 3,               // Study tools: how many "Top" picks allowed
  toolsBottomMax: 2,            // Study tools: how many "Bottom" picks allowed
  requireEmail: true,           // must a student fill in the email question? (true / false)
};

/* =====================================================================
   [4] FORM CONTENT   ★ EDIT YOUR QUESTIONS HERE ★
   The entire questionnaire as data. To change wording, edit the text
   inside the quotes. To add a rating question, copy a line inside an
   "items" list and change the words. Keep the commas and quotes intact.
   (Sections are shown to students in this exact order, one per screen.)
   ===================================================================== */
const FORM_CONTENT = {
  "intro": {
    "lede": "Welcome! This check-in helps me understand how you learn, what’s working, and where a little support could make a big difference. There are no right or wrong answers — just be honest. Most students finish in about 25–35 minutes.",
    "howtoTitle": "How to answer the rating statements",
    "howtoSub": "For each statement, pick the number that fits you best:",
    "anchors": [
      [
        "1",
        "Strongly disagree"
      ],
      [
        "2",
        "Disagree"
      ],
      [
        "3",
        "Neutral"
      ],
      [
        "4",
        "Agree"
      ],
      [
        "5",
        "Strongly agree"
      ]
    ],
    "howtoFoot": "You’ll see about 70 quick rating statements, one short study-tools pick, three routine questions, and six open-ended prompts.",
    "scaleShort": "1 = Strongly disagree   ·   5 = Strongly agree"
  },
  "sections": [
    {
      "num": 1,
      "type": "likert",
      "title": "Well-Being Foundations",
      "subtitle": "Sleep, food, movement, and stress.",
      "groups": [
        {
          "label": "Sleep",
          "items": [
            "I get enough sleep to feel rested most school days.",
            "I keep a consistent bedtime on school nights.",
            "I often stay up much later than I planned on school nights."
          ]
        },
        {
          "label": "Nutrition & Hydration",
          "items": [
            "I eat protein with most meals.",
            "I drink water throughout the day.",
            "Most of my meals include vegetables or fruit."
          ]
        },
        {
          "label": "Movement",
          "items": [
            "I get moderate-to-vigorous physical activity at least three times a week.",
            "I take movement breaks (stretching, walking) during long study sessions.",
            "I’d rather sit than move when I have downtime."
          ]
        },
        {
          "label": "Stress & Support",
          "items": [
            "I use a stress-relief practice (breathing, mindfulness, journaling) regularly.",
            "I have people I trust I can talk to when I’m stressed.",
            "When I’m stressed, I keep it to myself rather than reaching out."
          ]
        }
      ]
    },
    {
      "num": 2,
      "type": "likert",
      "title": "Confidence & Composure",
      "subtitle": "Believing in yourself and handling pressure.",
      "groups": [
        {
          "label": "Confidence",
          "items": [
            "I’m confident I can learn difficult material if I put in the work.",
            "I look for challenging tasks rather than avoiding them.",
            "I often doubt I can master subjects I find hard."
          ]
        },
        {
          "label": "Bouncing Back",
          "items": [
            "After a setback, I bounce back without losing momentum.",
            "I stay calm during exams, even when questions are hard.",
            "A bad grade can shake my motivation for weeks."
          ]
        }
      ]
    },
    {
      "num": 3,
      "type": "likert",
      "title": "Motivation & Engagement",
      "subtitle": "What keeps you going.",
      "groups": [
        {
          "label": "Choices & Interest",
          "items": [
            "I’m more motivated when I get to choose how I approach a task.",
            "I engage more deeply when content connects to my personal interests or goals.",
            "I like having choices in how I learn (videos, problems, discussion, etc.)."
          ]
        },
        {
          "label": "Support & Accountability",
          "items": [
            "I stick to plans better when I get reminders or prompts.",
            "I work better when I have an accountability partner or check-in.",
            "I do better when the adults in my life and I are aligned on what I’m working on (parent, guardian, mentor — whoever fits)."
          ]
        },
        {
          "label": "Rewards & Challenge",
          "items": [
            "Small rewards (badges, points, streaks) help me stay consistent.",
            "Friendly competition motivates me to push harder."
          ]
        },
        {
          "label": "Seeing Progress",
          "items": [
            "I stay consistent when I can clearly see my progress over time.",
            "Celebrating small wins helps me keep going.",
            "I rarely notice when I’m improving at something."
          ]
        }
      ],
      "multiselect": {
        "prompt": "Choose up to 3 supports that would most help you stick with a plan:",
        "options": [
          "Regular check-ins with a peer or tutor",
          "Automated reminders (apps, calendar)",
          "Visual progress dashboards (charts, streaks)",
          "Gamified challenges or leaderboards",
          "Study-buddy or accountability group",
          "Timed focus sessions (Pomodoro)",
          "Written weekly or monthly action plans",
          "Choice of environment (library, café, home)",
          "A mix of solo and group activities",
          "Mini-goals with small rewards"
        ]
      }
    },
    {
      "num": 4,
      "type": "likert",
      "title": "Feedback & Asking for Help",
      "subtitle": "Using feedback and reaching out when stuck.",
      "groups": [
        {
          "label": "Seeking Feedback",
          "items": [
            "I actively seek feedback from teachers, peers, or mentors.",
            "When I get feedback, I act on it within a few days.",
            "I avoid asking for feedback because I don’t want to hear what I did wrong."
          ]
        },
        {
          "label": "Self-Check",
          "items": [
            "After finishing an assignment or test, I evaluate how well I actually understood it (not just the grade).",
            "I’m comfortable making mistakes because they show me what to fix.",
            "When I get something wrong, I’d rather move on than dig into why."
          ]
        },
        {
          "label": "Asking for Help",
          "items": [
            "When I’m stuck on something, I ask a teacher, tutor, or peer for help.",
            "I’m comfortable saying “I don’t understand” in class or to a tutor.",
            "I’d rather struggle alone than admit I’m confused."
          ]
        }
      ]
    },
    {
      "num": 5,
      "type": "likert",
      "title": "Goals & Planning",
      "subtitle": "Setting clear targets.",
      "groups": [
        {
          "label": null,
          "items": [
            "Before each study session, I set a specific goal for what I want to accomplish (not just “study”).",
            "I review and adjust my study goals weekly based on what’s working.",
            "I usually sit down and study without a specific target in mind."
          ]
        }
      ]
    },
    {
      "num": 6,
      "type": "likert",
      "title": "How You Study & Stay Focused",
      "subtitle": "Planning, noticing, and following through.",
      "groups": [
        {
          "label": "Planning & Adapting",
          "items": [
            "Before I start studying, I plan what I’ll do.",
            "When a study method isn’t working, I switch to a different one.",
            "I stick with my original approach even when it’s clearly not working."
          ]
        },
        {
          "label": "Noticing & Adjusting",
          "items": [
            "While studying, I notice when I’m confused and stop to clarify.",
            "I notice when I’m losing focus or getting frustrated and adjust (break, snack, switch task).",
            "I always understand everything I read on the first try."
          ]
        },
        {
          "label": "Getting Started",
          "items": [
            "I tend to put off studying until the last minute.",
            "I struggle to start studying even when I know I should.",
            "Please select Agree (4) for this item."
          ]
        }
      ]
    },
    {
      "num": 7,
      "type": "likert",
      "title": "Practice & Perseverance",
      "subtitle": "Pushing your limits and sticking with it.",
      "groups": [
        {
          "label": "Targeted Practice",
          "items": [
            "I identify my weakest skills and put extra time into them.",
            "I push myself with material that’s harder than what I can already do.",
            "When I study, I tend to focus on what I’m already good at."
          ]
        },
        {
          "label": "Sticking With It",
          "items": [
            "When studying gets hard, I keep going rather than switching to something easier.",
            "I finish what I start, even when it stops being interesting.",
            "I give up on hard problems quickly if I don’t see progress."
          ]
        }
      ]
    },
    {
      "num": 8,
      "type": "likert",
      "title": "Memory & Study Strategies",
      "subtitle": "How you make things stick.",
      "groups": [
        {
          "label": "Recall & Spacing",
          "items": [
            "I use self-quizzing or flashcards in most study sessions.",
            "I spread my studying across days or weeks instead of cramming.",
            "I usually re-read my notes rather than testing myself on them."
          ]
        },
        {
          "label": "Teaching & Connecting",
          "items": [
            "I explain concepts in my own words to someone else (a friend, family member, classmate).",
            "I look for real-world examples that connect what I’m learning to things I care about.",
            "I rarely connect what I’m learning to anything outside school."
          ]
        }
      ]
    },
    {
      "num": 9,
      "type": "likert",
      "title": "Environment & Lifestyle",
      "subtitle": "Your space and daily balance.",
      "groups": [
        {
          "label": "Your Space & Phone",
          "items": [
            "I have a dedicated, distraction-free study space.",
            "I keep my phone out of reach during study sessions.",
            "I check my phone every few minutes when I’m working.",
            "I have never used a pencil."
          ]
        },
        {
          "label": "Balance & Support",
          "items": [
            "I balance academic work with extracurriculars or hobbies without feeling overwhelmed.",
            "My family and community support my academic goals."
          ]
        }
      ]
    },
    {
      "num": 10,
      "type": "tools",
      "title": "Study Tools You Like",
      "subtitle": "Your favorite — and least favorite — methods.",
      "options": [
        "Flashcards (Anki, Quizlet, paper)",
        "Concept maps / mind-maps",
        "Practice problems / problem sets",
        "Video micro-lectures",
        "Audio summaries / podcasts",
        "Group discussion / peer-teaching",
        "Interactive simulations / apps",
        "Written summaries / notes"
      ]
    },
    {
      "num": 11,
      "type": "routine",
      "title": "Your Daily Routine",
      "subtitle": "A few quick questions about your time.",
      "questions": [
        {
          "q": "Last regular school night, roughly how many TOTAL minutes did you spend on schoolwork (homework + studying combined)?",
          "kind": "choice",
          "options": [
            "Less than 30 min",
            "30–60 min",
            "60–90 min",
            "90–120 min",
            "More than 120 min"
          ]
        },
        {
          "q": "Last regular school night, roughly how many minutes did you spend on your hardest or most stressful subject specifically?",
          "kind": "choice",
          "options": [
            "None — I didn’t touch it",
            "Less than 15 min",
            "15–30 min",
            "30–60 min",
            "More than 60 min"
          ]
        },
        {
          "q": "How consistent is your after-school routine from day to day?",
          "kind": "scale",
          "anchors": [
            "totally different every day",
            "basically the same every weekday"
          ]
        }
      ]
    },
    {
      "num": 12,
      "type": "open",
      "title": "In Your Own Words",
      "subtitle": "Take your time — there are no wrong answers.",
      "prompts": [
        {
          "text": "List your hobbies, sports, and activities outside of school.",
          "lines": 3
        },
        {
          "text": "Walk me through your most recent regular school day, hour by hour, starting from when you left school.",
          "note": "(If yesterday wasn’t a typical school day, pick the most recent one that was.)",
          "lines": 6
        },
        {
          "text": "What subjects do you need help with most? For each one, finish this sentence:",
          "frame": "“I understand ______, but I get stuck when ______.”",
          "lines": 4
        },
        {
          "text": "Finish this sentence:",
          "frame": "“School would be better for me if ______.”",
          "lines": 2
        },
        {
          "text": "When you make a mistake on a test or assignment, what happens next — at school, and at home?",
          "note": "(Describe both separately, even briefly.)",
          "split": [
            "At school",
            "At home"
          ],
          "lines": 2
        },
        {
          "text": "What would success look like for you 90 days from now? Be as specific as you can — grades, habits, how you’d feel.",
          "lines": 5
        }
      ]
    },
    {
      "num": 13,
      "type": "open",
      "title": "Anything Else",
      "subtitle": "One last thing.",
      "prompts": [
        {
          "text": "Is there anything I should know about how you learn?",
          "note": "(IEP, 504, accommodations, allergies — anything at all.)",
          "lines": 3
        }
      ]
    }
  ]
};

/* =====================================================================
   [5] PAGE BUILDER
   Reads FORM_CONTENT and creates each section. You normally do NOT need
   to change anything from here down.
   ===================================================================== */
function el(tag, cls, text){
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

function renderIntro(){
  document.getElementById("lede").textContent = FORM_CONTENT.intro.lede;
  const h = document.getElementById("howto");
  h.append(el("h2", null, FORM_CONTENT.intro.howtoTitle));
  h.append(el("div", "sub", FORM_CONTENT.intro.howtoSub));
  const a = el("div", "anchors");
  FORM_CONTENT.intro.anchors.forEach(function(pair){
    const item = el("div", "anchor");
    item.append(el("b", null, pair[0]));
    item.append(document.createTextNode(pair[1]));
    a.append(item);
  });
  h.append(a);
  h.append(el("div", "foot", FORM_CONTENT.intro.howtoFoot));
}

function likertRow(secNum, qNum, statement){
  const row = el("div", "qrow");
  const t = el("div", "qtext");
  t.append(el("span", "qn", qNum + "."));
  t.append(document.createTextNode(statement));
  row.append(t);
  const scale = el("div", "scale");
  for (let d = 1; d <= 5; d++){
    const lab = el("label", "opt");
    const input = el("input");
    input.type = "radio";
    input.name = "q-" + secNum + "-" + qNum;
    input.value = String(d);
    lab.append(input);
    lab.append(el("span", "dot", String(d)));
    scale.append(lab);
  }
  row.append(scale);
  return row;
}

function multiselectBlock(secNum, ms){
  const box = el("div");
  box.append(el("div", "ms-prompt", ms.prompt));
  const grid = el("div", "checklist");
  ms.options.forEach(function(opt){
    const lab = el("label", "check");
    const input = el("input");
    input.type = "checkbox";
    input.name = "ms-" + secNum;
    input.value = opt;
    lab.append(input);
    lab.append(document.createTextNode(opt));
    grid.append(lab);
  });
  box.append(grid);
  return box;
}

function toolsBlock(sec){
  const table = el("table", "tools");
  const thead = el("thead");
  const hr = el("tr");
  hr.append(el("th", null, "Method"));
  hr.append(el("th", "center", "Top 3"));
  hr.append(el("th", "center", "Bottom 2"));
  thead.append(hr);
  table.append(thead);
  const tbody = el("tbody");
  sec.options.forEach(function(method){
    const tr = el("tr");
    tr.append(el("td", null, method));
    ["tools-top", "tools-bot"].forEach(function(grp){
      const td = el("td", "center");
      const input = el("input");
      input.type = "checkbox";
      input.name = grp;
      input.value = method;
      td.append(input);
      tr.append(td);
    });
    tbody.append(tr);
  });
  table.append(tbody);
  const wrap = el("div");
  wrap.append(table);
  wrap.append(el("div", "hint", "Check up to 3 in the Top 3 column and up to 2 in the Bottom 2 column."));
  return wrap;
}

function routineBlock(secNum, qNum, q){
  const wrap = el("div", "rq");
  const qline = el("div", "q");
  qline.append(el("span", "qn", qNum + "."));
  qline.append(document.createTextNode(q.q));
  wrap.append(qline);
  if (q.kind === "choice"){
    const row = el("div", "opts-inline");
    q.options.forEach(function(opt){
      const lab = el("label", "pill");
      const input = el("input");
      input.type = "radio";
      input.name = "rt-" + secNum + "-" + qNum;
      input.value = opt;
      lab.append(input);
      lab.append(el("span", null, opt));
      row.append(lab);
    });
    wrap.append(row);
  } else {
    const scale = el("div", "scale");
    for (let d = 1; d <= 5; d++){
      const lab = el("label", "opt");
      const input = el("input");
      input.type = "radio";
      input.name = "rt-" + secNum + "-" + qNum;
      input.value = String(d);
      lab.append(input);
      lab.append(el("span", "dot", String(d)));
      scale.append(lab);
    }
    wrap.append(scale);
    const anc = el("div", "scale-anchors");
    anc.append(el("span", null, "1 \u2014 " + q.anchors[0]));
    anc.append(el("span", null, "5 \u2014 " + q.anchors[1]));
    wrap.append(anc);
  }
  return wrap;
}

function openBlock(secNum, qNum, p){
  const wrap = el("div", "prompt");
  const qline = el("div", "q");
  qline.append(el("span", "qn", qNum + "."));
  qline.append(document.createTextNode(p.text + (p.note ? " " : "")));
  if (p.note) qline.append(el("span", "muted", p.note));
  wrap.append(qline);
  if (p.frame) wrap.append(el("div", "frame", p.frame));
  if (p.split){
    p.split.forEach(function(label, idx){
      wrap.append(el("div", "sublabel", label));
      const ta = el("textarea");
      ta.id = "op-" + secNum + "-" + qNum + "-" + idx;
      ta.rows = p.lines || 3;
      wrap.append(ta);
    });
  } else {
    const ta = el("textarea");
    ta.id = "op-" + secNum + "-" + qNum;
    ta.rows = p.lines || 3;
    wrap.append(ta);
  }
  return wrap;
}

function renderSection(sec){
  const s = el("div", "section");
  const head = el("div", "sec-head");
  head.append(el("div", "chip", String(sec.num)));
  const titles = el("div");
  titles.append(el("h2", null, sec.title));
  titles.append(el("div", "sub", sec.subtitle));
  head.append(titles);
  s.append(head);

  if (sec.type === "likert"){
    s.append(el("div", "sec-anchor", FORM_CONTENT.intro.scaleShort));
    let q = 0;
    sec.groups.forEach(function(g){
      if (g.label) s.append(el("div", "glabel", g.label));
      g.items.forEach(function(item){ q++; s.append(likertRow(sec.num, q, item)); });
    });
    if (sec.multiselect) s.append(multiselectBlock(sec.num, sec.multiselect));
  } else if (sec.type === "tools"){
    s.append(toolsBlock(sec));
  } else if (sec.type === "routine"){
    sec.questions.forEach(function(q, i){ s.append(routineBlock(sec.num, i + 1, q)); });
  } else if (sec.type === "open"){
    sec.prompts.forEach(function(p, i){ s.append(openBlock(sec.num, i + 1, p)); });
  }
  return s;
}

function limitGroup(name, max){
  const boxes = Array.prototype.slice.call(document.querySelectorAll('input[name="' + name + '"]'));
  function update(){
    const checked = boxes.filter(function(b){ return b.checked; }).length;
    boxes.forEach(function(b){
      if (!b.checked){
        b.disabled = checked >= max;
        const wrapEl = b.closest(".check");
        if (wrapEl) wrapEl.classList.toggle("disabled", checked >= max);
      }
    });
  }
  boxes.forEach(function(b){ b.addEventListener("change", update); });
  update();
}

/* =====================================================================
   [6] STEP NAVIGATION
   Shows one section at a time, with Back / Next / Submit + a progress
   bar. "steps" is a list: step 0 is the welcome screen, then one step
   per section.
   ===================================================================== */
let steps = [];      // the list of screen elements
let current = 0;     // which screen is showing
let lastIndex = 0;   // index of the final section (where Submit appears)

function buildForm(){
  renderIntro();

  // gather the screens: welcome first, then a screen per section
  steps = [ document.getElementById("step-welcome") ];
  const holder = document.getElementById("steps");
  FORM_CONTENT.sections.forEach(function(sec){
    const stepEl = el("div", "step");
    stepEl.append(renderSection(sec));
    holder.append(stepEl);
    steps.push(stepEl);
  });
  lastIndex = steps.length - 1;

  // apply the "pick limits" from SETTINGS
  FORM_CONTENT.sections.forEach(function(sec){
    if (sec.multiselect) limitGroup("ms-" + sec.num, SETTINGS.maxSupports);
  });
  limitGroup("tools-top", SETTINGS.toolsTopMax);
  limitGroup("tools-bot", SETTINGS.toolsBottomMax);

  // wire up the buttons
  document.getElementById("next-btn").addEventListener("click", goNext);
  document.getElementById("back-btn").addEventListener("click", goBack);

  wireAutosave();
  showStep(restoreProgress());
}

function showStep(i){
  current = Math.max(0, Math.min(i, lastIndex));

  // show only the current screen
  steps.forEach(function(s, idx){ s.hidden = (idx !== current); });
  const active = steps[current];
  active.classList.remove("step-anim");
  void active.offsetWidth;          // restart the entrance animation
  active.classList.add("step-anim");

  const onWelcome = (current === 0);
  const onLast = (current === lastIndex);
  const sectionNo = current;        // sections are 1..N (welcome is 0)
  const totalSections = lastIndex;  // number of real sections

  // progress bar + step counter
  const progress = document.getElementById("progress");
  const stepcount = document.getElementById("stepcount");
  if (onWelcome){
    progress.hidden = true;
    stepcount.hidden = true;
  } else {
    progress.hidden = false;
    stepcount.hidden = false;
    document.getElementById("progress-fill").style.width = (sectionNo / totalSections * 100) + "%";
    document.getElementById("progress-label").textContent =
      "Section " + sectionNo + " of " + totalSections + "  \u00b7  " + FORM_CONTENT.sections[sectionNo - 1].title;
    stepcount.innerHTML = "<b>" + String(sectionNo).padStart(2, "0") + "</b> / " + totalSections;
  }

  // buttons
  document.getElementById("back-btn").hidden = onWelcome;
  document.getElementById("next-btn").hidden = onLast;
  document.getElementById("submit-btn").hidden = !onLast;
  document.getElementById("next-btn").textContent = onWelcome ? "Begin the check-in" : "Next";
  document.getElementById("nav").classList.toggle("center", onWelcome);
  document.getElementById("privacy-note").hidden = !(onWelcome || onLast);
  document.getElementById("form-error").hidden = true;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goNext(){
  if (current === 0 && !validateName()) return;
  if (current === 0 && !validateEmail()) return;
  if (current > 0 && !validateCurrentStep()) return;
  showStep(current + 1); saveProgress();
}
function goBack(){ showStep(current - 1); saveProgress(); }

function showIntroError(msg, focusId){
  const err = document.getElementById("form-error");
  err.textContent = msg;
  err.hidden = false;
  const box = document.getElementById(focusId);
  if (box) box.focus();
  return false;
}

function validateName(){
  const name = document.getElementById("f-name").value.trim();
  if (!name){
    return showIntroError("Please enter your name before starting.", "f-name");
  }
  return true;
}

/* The email question. A loose check — it's here to catch typos like a
   missing "@", not to police addresses. Set requireEmail to false in
   [3] SETTINGS if you'd rather make this optional. */
function looksLikeEmail(s){
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s));
}

function validateEmail(){
  const value = document.getElementById("f-email").value.trim();
  if (!value){
    if (!SETTINGS.requireEmail) return true;
    return showIntroError("Please add an email address so we know where to send the results.", "f-email");
  }
  if (!looksLikeEmail(value)){
    return showIntroError("That email address doesn\u2019t look quite right \u2014 please double-check it.", "f-email");
  }
  return true;
}

function validateCurrentStep(){
  const err = document.getElementById("form-error");
  const sec = FORM_CONTENT.sections[current - 1];

  // Helper that shows the error message and stops the student
  function fail(msg){
    err.textContent = msg;
    err.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
  }

  // Section 13 (Anything Else / accommodations) is intentionally optional
  if (sec.num === 13) return true;

  // Rating questions (Sections 1–9)
  if (sec.type === "likert"){
    let q = 0;
    for (let gi = 0; gi < sec.groups.length; gi++){
      for (let ii = 0; ii < sec.groups[gi].items.length; ii++){
        q++;
        if (!document.querySelector('input[name="q-' + sec.num + '-' + q + '"]:checked')){
          return fail("Please answer every question before continuing.");
        }
      }
    }
    if (sec.multiselect){
      if (!document.querySelector('input[name="ms-' + sec.num + '"]:checked')){
        return fail("Please choose at least one support option before continuing.");
      }
    }
  }

  // Study Tools (Section 10)
  else if (sec.type === "tools"){
    if (!document.querySelector('input[name="tools-top"]:checked')){
      return fail("Please check at least one Top 3 method before continuing.");
    }
    if (!document.querySelector('input[name="tools-bot"]:checked')){
      return fail("Please check at least one Bottom 2 method before continuing.");
    }
  }

  // Daily Routine (Section 11)
  else if (sec.type === "routine"){
    for (let i = 0; i < sec.questions.length; i++){
      if (!document.querySelector('input[name="rt-' + sec.num + '-' + (i + 1) + '"]:checked')){
        return fail("Please answer every question before continuing.");
      }
    }
  }

  // Open-ended questions (Section 12)
  else if (sec.type === "open"){
    for (let i = 0; i < sec.prompts.length; i++){
      const p = sec.prompts[i];
      const n = i + 1;
      if (p.split){
        for (let idx = 0; idx < p.split.length; idx++){
          const ta = document.getElementById("op-" + sec.num + "-" + n + "-" + idx);
          if (ta && !ta.value.trim()){
            return fail("Please answer every question before continuing.");
          }
        }
      } else {
        const ta = document.getElementById("op-" + sec.num + "-" + n);
        if (ta && !ta.value.trim()){
          return fail("Please answer every question before continuing.");
        }
      }
    }
  }

  return true;
}
/* =====================================================================
   [7] RESULTS BUILDER
   Turns the answers into the plain-text report that gets emailed.
   Edit the lines that start with  add(...)  to change the email format.
   ===================================================================== */
function val(id){ const e = document.getElementById(id); return e ? e.value : ""; }
function radioVal(name){ const e = document.querySelector('input[name="' + name + '"]:checked'); return e ? e.value : ""; }
function checkedVals(name){
  return Array.prototype.slice.call(document.querySelectorAll('input[name="' + name + '"]:checked'))
              .map(function(e){ return e.value; });
}

function buildReport(){
  const lines = [];
  const add = function(s){ lines.push(s == null ? "" : s); };
  const divider = "============================================================";

  add("ROOT CAUSE SNAPSHOT  —  Clarity Academics");
  add("Submitted: " + new Date().toLocaleString());
  add("");
  add("STUDENT INFORMATION");
  add("Name:  " + (val("f-name").trim() || "(blank)"));
  add("Grade: " + (val("f-grade").trim() || "(blank)"));
  add("Email: " + (val("f-email").trim() || "(blank)"));
  add("");

  FORM_CONTENT.sections.forEach(function(sec){
    add(divider);
    add(sec.num + ". " + sec.title.toUpperCase());
    add(divider);

    if (sec.type === "likert"){
      let q = 0;
      sec.groups.forEach(function(g){
        if (g.label) add("  " + g.label);
        g.items.forEach(function(){
          q++;
          add("   " + q + ". " + (radioVal("q-" + sec.num + "-" + q) || "(blank)"));
        });
      });
      if (sec.multiselect){
        add("");
        add("  Supports selected:");
        const chosen = checkedVals("ms-" + sec.num);
        if (chosen.length) chosen.forEach(function(c){ add("   - " + c); });
        else add("   - (none selected)");
      }
    } else if (sec.type === "tools"){
      const top = checkedVals("tools-top"), bot = checkedVals("tools-bot");
      add("  Top 3:    " + (top.length ? top.join("; ") : "(none)"));
      add("  Bottom 2: " + (bot.length ? bot.join("; ") : "(none)"));
    } else if (sec.type === "routine"){
      sec.questions.forEach(function(q, i){
        add("   " + (i + 1) + ". " + (radioVal("rt-" + sec.num + "-" + (i + 1)) || "(blank)"));
      });
    } else if (sec.type === "open"){
      sec.prompts.forEach(function(p, i){
        const n = i + 1;
        add("   " + n + ". " + p.text);
        if (p.split){
          p.split.forEach(function(label, idx){
            const t = val("op-" + sec.num + "-" + n + "-" + idx).trim();
            add("      " + label + ": " + (t || "(blank)"));
          });
        } else {
          const t = val("op-" + sec.num + "-" + n).trim();
          if (t) t.split(/\r?\n/).forEach(function(row){ add("      " + row); });
          else add("      (blank)");
        }
      });
    }
    add("");
  });

  return lines.join("\n");
}

/* HTML REPORT BUILDER — builds the branded email */
function escapeHtml(s){
  if(s==null)return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}
function renderQRow(num,statement,answer){
  var h='<table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-bottom:1px solid #ECE5D8;"><tr>'
    +'<td style="padding:9px 4px;font-size:13.5px;color:#3A5167;"><b style="color:#9AA0A7;font-size:11.5px;">'+num+'.</b> '+escapeHtml(statement)+'</td>'
    +'<td style="width:170px;padding:9px 4px;text-align:right;white-space:nowrap;">';
  for(var d=1;d<=5;d++){
    var on=(String(answer)===String(d));
    h+='<span style="display:inline-block;width:24px;height:24px;line-height:22px;text-align:center;'
      +'border:1.5px solid '+(on?'#3A5167':'#C2B39B')+';'
      +'background:'+(on?'#3A5167':'#fff')+';color:'+(on?'#fff':'#9AA0A7')+';'
      +'border-radius:50%;font-size:12px;font-weight:'+(on?'700':'400')+';margin-left:4px;">'+d+'</span>';
  }
  return h+'</td></tr></table>';
}
function renderSectionHtml(sec){
  var h='<div style="margin-top:26px;">'
    +'<table cellpadding="0" cellspacing="0" border="0" style="width:100%;padding-bottom:8px;border-bottom:2px solid #DDBE9B;">'
    +'<tr><td style="width:36px;vertical-align:middle;">'
    +'<div style="width:30px;height:30px;background:#3A5167;color:#fff;border-radius:8px;text-align:center;line-height:30px;font-weight:700;font-size:14px;">'+sec.num+'</div></td>'
    +'<td style="vertical-align:middle;padding-left:8px;">'
    +'<div style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#3A5167;">'+escapeHtml(sec.title)+'</div>'
    +'<div style="font-size:12px;color:#9AA0A7;margin-top:2px;">'+escapeHtml(sec.subtitle)+'</div>'
    +'</td></tr></table>';
  if(sec.type==="likert"){
    var vals=[],q=0;
    sec.groups.forEach(function(g){
      if(g.label) h+='<div style="font-weight:700;font-size:11px;color:#B26A4F;letter-spacing:1.2px;text-transform:uppercase;margin:20px 0 6px;">'+escapeHtml(g.label)+'</div>';
      g.items.forEach(function(item){ q++; var ans=radioVal("q-"+sec.num+"-"+q); if(ans)vals.push(Number(ans)); h+=renderQRow(q,item,ans); });
    });
    if(sec.multiselect){
      var chosen=checkedVals("ms-"+sec.num);
      h+='<div style="margin-top:18px;background:#EFE9E1;border:1px solid #e4d8c4;border-radius:9px;padding:12px 14px;">'
        +'<div style="font-family:Georgia,serif;font-weight:600;color:#2E4252;font-size:15px;margin-bottom:6px;">'+escapeHtml(sec.multiselect.prompt)+'</div>'
        +(chosen.length?chosen.map(function(c){return'<div style="font-size:13.5px;color:#3A5167;padding:3px 0;">&#10003; '+escapeHtml(c)+'</div>';}).join("")
          :'<div style="font-size:13px;color:#9AA0A7;font-style:italic;">No options selected</div>')
        +'</div>';
    }
    if(vals.length){
      var avg=vals.reduce(function(a,b){return a+b;},0)/vals.length;
      var status=avg<=2.5?"Critical intervention needed":avg<=3.5?"Moderate growth area":"Established strength";
      var sc=avg<=2.5?"#b3402e":avg<=3.5?"#B26A4F":"#72804A";
      h+='<div style="margin-top:16px;background:#fff;border:1.5px solid #DDBE9B;border-radius:9px;padding:12px 14px;">'
        +'<table cellpadding="0" cellspacing="0" border="0" style="width:100%;"><tr>'
        +'<td style="font-family:Georgia,serif;font-size:14px;color:#72804A;font-weight:600;">Section Average</td>'
        +'<td style="text-align:right;font-size:22px;font-weight:700;color:#3A5167;font-family:Georgia,serif;">'+avg.toFixed(2)+' / 5.00</td></tr>'
        +'<tr><td colspan="2" style="font-size:11.5px;color:'+sc+';font-weight:600;padding-top:2px;letter-spacing:0.4px;">'+status+'</td></tr></table></div>';
    }
  } else if(sec.type==="tools"){
    ["Top 3 favorite","Bottom 2 least favorite"].forEach(function(label,i){
      var picks=checkedVals(i===0?"tools-top":"tools-bot");
      h+='<div style="font-weight:700;font-size:11px;color:#B26A4F;letter-spacing:1.2px;text-transform:uppercase;margin:'+(i===0?"14":"18")+'px 0 4px;">'+label+'</div>'
        +(picks.length?picks.map(function(t){return'<div style="font-size:14px;color:#3A5167;padding:3px 0;">&#10003; '+escapeHtml(t)+'</div>';}).join("")
          :'<div style="font-size:13px;color:#9AA0A7;font-style:italic;">(none)</div>');
    });
  } else if(sec.type==="routine"){
    sec.questions.forEach(function(q,i){
      var ans=radioVal("rt-"+sec.num+"-"+(i+1));
      h+='<div style="margin-top:14px;"><div style="font-size:14px;color:#3A5167;margin-bottom:5px;"><b style="color:#9AA0A7;">'+  (i+1)+'.</b> '+escapeHtml(q.q)+'</div>'
        +'<div style="padding-left:18px;font-size:14px;color:#B26A4F;font-weight:600;">&rarr; '+escapeHtml(ans||"(blank)")+'</div></div>';
    });
  } else if(sec.type==="open"){
    sec.prompts.forEach(function(p,i){
      var n=i+1;
      h+='<div style="margin-top:16px;"><div style="font-size:14px;color:#3A5167;margin-bottom:5px;"><b style="color:#9AA0A7;">'+n+'.</b> '+escapeHtml(p.text)+'</div>';
      if(p.split){
        p.split.forEach(function(label,idx2){
          var t=val("op-"+sec.num+"-"+n+"-"+idx2).trim();
          h+='<div style="margin:6px 0 0 18px;">'
            +'<div style="font-size:11px;color:#B26A4F;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:3px;">'+escapeHtml(label)+'</div>'
            +'<div style="font-size:14px;color:#3A5167;background:#EFE9E1;border-left:3px solid #DDBE9B;padding:8px 12px;border-radius:0 6px 6px 0;white-space:pre-wrap;">'
            +(t?escapeHtml(t):'<span style="color:#9AA0A7;font-style:italic;">(blank)</span>')+'</div></div>';
        });
      } else {
        var t=val("op-"+sec.num+"-"+n).trim();
        h+='<div style="font-size:14px;color:#3A5167;background:#EFE9E1;border-left:3px solid #DDBE9B;padding:10px 14px;border-radius:0 6px 6px 0;margin-left:18px;white-space:pre-wrap;">'
          +(t?escapeHtml(t):'<span style="color:#9AA0A7;font-style:italic;">(blank)</span>')+'</div>';
      }
      h+='</div>';
    });
  }
  return h+'</div>';
}
function buildHtmlReport(){
  var name=val("f-name").trim()||"(blank)";
  var grade=val("f-grade").trim()||"(blank)";
  var email=val("f-email").trim()||"(blank)";
  var now=new Date().toLocaleString();
  var h='<div style="background:#F4F1EA;padding:30px 0;font-family:Montserrat,Helvetica,Arial,sans-serif;color:#3A5167;">'
    +'<table align="center" cellpadding="0" cellspacing="0" border="0" width="640" '
    +'style="max-width:640px;width:100%;background:#fff;border:1px solid #ECE5D8;border-top:4px solid #B26A4F;border-radius:12px;">'
    +'<tr><td style="padding:32px 36px;">'
    +'<div style="font-family:Georgia,serif;font-weight:700;color:#3A5167;font-size:22px;padding-bottom:14px;border-bottom:1px solid #ECE5D8;margin-bottom:18px;">Clarity Academics</div>'
    +'<div style="letter-spacing:2.5px;font-size:11px;color:#B26A4F;font-weight:700;margin:8px 0 6px;">CLARITY INSIGHT SESSION &mdash; RESULTS</div>'
    +'<h1 style="font-family:Georgia,serif;font-weight:700;font-size:38px;color:#3A5167;margin:0 0 8px;line-height:1;">Root Cause Snapshot</h1>'
    +'<div style="height:3px;width:55px;background:#B26A4F;border-radius:2px;margin:8px 0 16px;"></div>'
    +'<table cellpadding="0" cellspacing="0" border="0" style="width:100%;background:#EFE9E1;border:1px solid #e4d8c4;border-radius:9px;margin-bottom:20px;">'
    +'<tr><td style="padding:14px 16px;">'
    +'<div style="font-size:11px;font-weight:700;color:#B26A4F;letter-spacing:1.2px;margin-bottom:6px;">STUDENT INFORMATION</div>'
    +'<div style="font-size:14px;color:#3A5167;line-height:1.7;"><b>Name:</b> '+escapeHtml(name)+'<br><b>Grade:</b> '+escapeHtml(grade)+'<br><b>Email:</b> '+escapeHtml(email)+'<br><b>Submitted:</b> '+escapeHtml(now)+'</div>'
    +'</td></tr></table>';
  FORM_CONTENT.sections.forEach(function(sec){h+=renderSectionHtml(sec);});
  return h+'</td></tr></table></div>';
}

/* =====================================================================
   [8] SUBMIT HANDLER
   On the last screen, build the report, send it to api/submit.js, then
   show the thank-you screen. (If Enter is pressed early, just advance.)
   ===================================================================== */
document.getElementById("rcs-form").addEventListener("submit", async function(e){
  e.preventDefault();

  // Safety: only actually send from the final screen.
  if (current !== lastIndex){ goNext(); return; }

  const name = val("f-name").trim();
  if (!name){ showStep(0); validateName(); return; }
  if (!validateEmailSilently()){ showStep(0); validateEmail(); return; }

  const btn = document.getElementById("submit-btn");
  btn.disabled = true;
  btn.textContent = "Sending\u2026";

  const payload = {
    name:  name,
    grade: val("f-grade").trim(),
    email: val("f-email").trim(),
    body:  buildReport(),
    htmlBody: buildHtmlReport(),
  };

  try {
    const res = await fetch(SETTINGS.apiEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Server responded " + res.status);
    try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
    document.getElementById("form-view").hidden = true;
    document.getElementById("thankyou-view").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err){
    console.error(err);
    const errorBox = document.getElementById("form-error");
    errorBox.textContent = "Sorry, something went wrong sending your answers. Please try again in a moment.";
    errorBox.hidden = false;
    btn.disabled = false;
    btn.textContent = "Submit my answers";
  }
});

/* Same check as validateEmail, but without showing an error or moving
   focus — used to decide whether to bounce back to the welcome screen. */
function validateEmailSilently(){
  const value = val("f-email").trim();
  if (!value) return !SETTINGS.requireEmail;
  return looksLikeEmail(value);
}

/* SAVE PROGRESS — auto-saves answers so students can close and come back */
var STORAGE_KEY = "clarity-root-cause-progress";
var isRestoring = false;

function saveProgress(){
  if (isRestoring) return;
  try {
    var form = document.getElementById("rcs-form");
    var data = { step: current, fields: {} };
    form.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(function(el){
      if (el.id) data.fields[el.id] = el.value;
    });
    form.querySelectorAll('input[type="radio"]:checked').forEach(function(el){
      data.fields["radio:" + el.name] = el.value;
    });
    var checks = {};
    form.querySelectorAll('input[type="checkbox"]:checked').forEach(function(el){
      (checks[el.name] = checks[el.name] || []).push(el.value);
    });
    Object.keys(checks).forEach(function(n){ data.fields["check:" + n] = checks[n]; });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch(e) {}
}

function setChecked(name, value){
  var els = document.querySelectorAll('input[name="' + name + '"]');
  for (var i=0;i<els.length;i++){ if(els[i].value===value){ els[i].checked=true; break; } }
}

function restoreProgress(){
  var raw; try { raw = localStorage.getItem(STORAGE_KEY); } catch(e){ return 0; }
  if (!raw) return 0;
  var data; try { data = JSON.parse(raw); } catch(e){ return 0; }
  isRestoring = true;
  var fields = data.fields || {};
  Object.keys(fields).forEach(function(key){
    if (key.indexOf("radio:") === 0) setChecked(key.slice(6), fields[key]);
    else if (key.indexOf("check:") === 0) (fields[key]||[]).forEach(function(v){ setChecked(key.slice(6),v); });
    else { var el=document.getElementById(key); if(el) el.value=fields[key]; }
  });
  document.querySelectorAll('#rcs-form input[type="checkbox"]').forEach(function(el){
    el.dispatchEvent(new Event("change"));
  });
  isRestoring = false;
  showResumeBanner();
  return data.step || 0;
}

function showResumeBanner(){
  var card = document.querySelector("#form-view .card");
  if (!card) return;
  var bar = document.createElement("div");
  bar.style.cssText = "background:#EFE9E1;border:1px solid #e4d8c4;border-radius:10px;padding:12px 16px;margin-bottom:18px;font-size:14px;color:#3A5167;display:flex;justify-content:space-between;align-items:center;gap:12px;";
  var msg = document.createElement("span");
  msg.innerHTML = "&#10003; Welcome back — we saved your progress.";
  var btn = document.createElement("button");
  btn.type="button"; btn.textContent="Start over";
  btn.style.cssText="background:none;border:1px solid #C2B39B;border-radius:8px;padding:7px 14px;color:#5E6B79;font-family:inherit;font-size:13px;cursor:pointer;";
  btn.addEventListener("click",function(){ try{localStorage.removeItem(STORAGE_KEY);}catch(e){} location.reload(); });
  bar.appendChild(msg); bar.appendChild(btn);
  card.insertBefore(bar, card.firstChild);
}

function wireAutosave(){
  var form = document.getElementById("rcs-form");
  form.addEventListener("input", saveProgress);
  form.addEventListener("change", saveProgress);
}

// build everything as soon as the page loads
buildForm();
</script>
</body>
</html>
