<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Executive Energy Audit | Illuminate</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --sage: #aac1b3; --sage-light: #ddeae3; --sage-dark: #6a9278;
      --taupe: #cdc0b0; --rose: #d1bab4; --cream: #f9f6f1;
      --charcoal: #444444; --charcoal-light: #6b6b6b; --white: #ffffff;
    }
    body { font-family: 'DM Sans', sans-serif; background: #F9F6F1; color: var(--charcoal); min-height: 100vh; }
    .wrap { max-width: 680px; margin: 0 auto; padding: 0 1.5rem; }

    /* INTRO */
    #screen-intro { padding: 4rem 0 3rem; }
    .eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: var(--sage-dark); margin-bottom: 1.2rem; }
    #screen-intro h1 { font-family: 'Cormorant Garamond', serif; font-size: 2.9rem; font-weight: 300; line-height: 1.12; margin-bottom: 1.4rem; }
    #screen-intro h1 em { font-style: italic; color: var(--sage-dark); }
    .intro-promise { background: var(--sage-light); border-left: 3px solid var(--sage-dark); border-radius: 0 5px 5px 0; padding: 1.1rem 1.3rem; margin-bottom: 1.5rem; font-size: 15px; font-weight: 400; line-height: 1.7; color: var(--charcoal); }
    .intro-promise strong { font-weight: 500; color: var(--sage-dark); }
    .intro-body { font-size: 15px; font-weight: 300; line-height: 1.75; color: var(--charcoal); margin-bottom: 1rem; }
    .pain-list { list-style: none; margin: 1rem 0 1.5rem; display: flex; flex-direction: column; gap: 8px; }
    .pain-list li { font-size: 14px; font-weight: 300; color: var(--charcoal); padding-left: 20px; position: relative; line-height: 1.5; }
    .pain-list li::before { content: ''; position: absolute; left: 4px; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: var(--rose); }
    .outcomes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 1.5rem 0; }
    .outcome-card { background: var(--white); border: 1px solid var(--taupe); border-radius: 6px; padding: 1rem 1.1rem; }
    .outcome-number { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; color: var(--sage); line-height: 1; margin-bottom: 4px; }
    .outcome-label { font-size: 13px; font-weight: 500; color: var(--charcoal); margin-bottom: 3px; }
    .outcome-desc { font-size: 12px; font-weight: 300; color: var(--charcoal); line-height: 1.5; }
    .for-who { display: block; background: var(--charcoal); color: var(--white); font-size: 20px; font-weight: 500; padding: 14px 20px; border-radius: 4px; margin-bottom: 1.4rem; line-height: 1.4; }
    .quick-wins { list-style: none; display: flex; flex-direction: column; gap: 6px; margin: 1rem 0 1.4rem; }
    .quick-wins li { font-size: 14px; font-weight: 500; color: var(--charcoal); letter-spacing: 0.01em; }
    .quick-wins li { color: var(--charcoal); }
    .intro-meta { font-size: 12px; color: var(--charcoal); margin: 1.2rem 0 1.8rem; display: flex; gap: 1.5rem; flex-wrap: wrap; }
    .intro-meta span::before { content: ''; display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--sage); margin-right: 6px; vertical-align: middle; }

    /* BUTTONS */
    .btn-primary { display: inline-block; padding: 15px 30px; background: var(--sage); color: var(--white); border: none; border-radius: 4px; font-family: 'DM Sans', sans-serif; font-size: 15px; font-weight: 500; cursor: pointer; transition: background 0.2s; letter-spacing: 0.02em; }
    .btn-primary:hover { background: var(--sage-dark); }
    .btn-primary:disabled { background: var(--taupe); cursor: not-allowed; }
    .btn-secondary { display: inline-block; padding: 12px 24px; background: transparent; color: var(--charcoal-light); border: 1.5px solid var(--taupe); border-radius: 4px; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 400; cursor: pointer; transition: border-color 0.2s, color 0.2s; }
    .btn-secondary:hover { border-color: var(--sage); color: var(--charcoal); }

    /* QUIZ */
    #screen-quiz { padding: 2.5rem 0 3rem; display: none; }
    .progress-wrap { margin-bottom: 2rem; }
    .progress-top { display: flex; justify-content: space-between; font-size: 11px; color: var(--charcoal-light); margin-bottom: 6px; letter-spacing: 0.06em; text-transform: uppercase; }
    .progress-bar { height: 3px; background: var(--taupe); border-radius: 2px; overflow: hidden; }
    .progress-fill { height: 100%; background: var(--sage); border-radius: 2px; transition: width 0.4s ease; }
    .q-dimension { font-size: 10px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--sage-dark); margin-bottom: 0.6rem; }
    .q-text { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 300; line-height: 1.3; color: var(--charcoal); margin-bottom: 1.8rem; }
    .options { display: flex; flex-direction: column; gap: 0.6rem; }
    .option { display: flex; align-items: flex-start; gap: 12px; padding: 13px 16px; background: var(--white); border: 1.5px solid var(--taupe); border-radius: 5px; cursor: pointer; transition: border-color 0.15s, background 0.15s; font-size: 14px; font-weight: 300; line-height: 1.5; color: var(--charcoal); text-align: left; width: 100%; }
    .option:hover { border-color: var(--sage); background: var(--sage-light); }
    .option.selected { border-color: var(--sage-dark); background: var(--sage-light); }
    .option-letter { flex-shrink: 0; width: 22px; height: 22px; border-radius: 50%; border: 1.5px solid var(--taupe); display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; color: var(--charcoal-light); margin-top: 1px; transition: background 0.15s, border-color 0.15s; }
    .option.selected .option-letter { background: var(--sage-dark); border-color: var(--sage-dark); color: var(--white); }
    .quiz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; }

    /* RESULT */
    #screen-result { padding: 0 0 3rem; display: none; }
    .result-header { padding: 3rem 1.5rem 2.5rem; margin: 0 -1.5rem; position: relative; overflow: hidden; }
    .result-header::before { content: ''; position: absolute; width: 220px; height: 220px; border-radius: 50%; border: 35px solid rgba(255,255,255,0.12); top: -70px; right: -55px; }
    .result-header::after { content: ''; position: absolute; width: 130px; height: 130px; border-radius: 50%; border: 22px solid rgba(255,255,255,0.15); top: -30px; right: -20px; }
    .result-eyebrow { font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.7); margin-bottom: 0.8rem; }
    .result-name { font-family: 'Cormorant Garamond', serif; font-size: 2.6rem; font-weight: 300; color: var(--white); margin-bottom: 0.5rem; line-height: 1.1; }
    .result-range { display: inline-block; background: rgba(255,255,255,0.2); color: var(--white); font-size: 11px; font-weight: 500; padding: 4px 12px; border-radius: 20px; margin-bottom: 1rem; }
    .result-tagline { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 300; font-style: italic; color: rgba(255,255,255,0.92); line-height: 1.5; max-width: 480px; }
    .result-outcomes { background: var(--charcoal); margin: 0 -1.5rem; padding: 1.2rem 1.5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; }
    .result-outcome-item { background: var(--charcoal); padding: 0.9rem; text-align: center; }
    .result-outcome-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300; color: var(--sage); line-height: 1; margin-bottom: 4px; }
    .result-outcome-text { font-size: 11px; font-weight: 300; color: #aaa; line-height: 1.4; }
    .result-body { padding: 1.5rem 0; }
    .result-section { margin-bottom: 1.6rem; }
    .result-label { font-size: 10px; font-weight: 500; letter-spacing: 0.15em; text-transform: uppercase; color: var(--sage-dark); margin-bottom: 0.5rem; padding-bottom: 4px; border-bottom: 1px solid var(--sage-light); }
    .result-text { font-size: 14px; font-weight: 300; line-height: 1.75; color: var(--charcoal-light); }
    .result-bullets { list-style: none; display: flex; flex-direction: column; gap: 7px; }
    .result-bullets li { font-size: 14px; font-weight: 300; line-height: 1.6; color: var(--charcoal-light); padding-left: 18px; position: relative; }
    .result-bullets li::before { content: ''; position: absolute; left: 4px; top: 8px; width: 5px; height: 5px; border-radius: 50%; background: var(--sage); }
    .gains-box { background: var(--white); border: 1px solid var(--taupe); border-radius: 8px; padding: 1.4rem; margin: 1.4rem 0; }
    .gains-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 0.6rem; }
    .gains-list li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-weight: 300; line-height: 1.55; color: var(--charcoal); }
    .gain-icon { flex-shrink: 0; width: 20px; height: 20px; background: var(--sage-light); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; color: var(--sage-dark); font-weight: 500; margin-top: 1px; }
    .next-step-box { background: var(--sage-light); border: 1px solid var(--sage); border-radius: 6px; padding: 1.25rem 1.4rem; margin: 1.4rem 0; }
    .next-step-box .result-label { border-bottom-color: var(--sage); }
    .next-step-box .result-text { color: var(--charcoal); }
    .divider { height: 1px; background: var(--taupe); margin: 1.5rem 0; }
    .email-capture { background: var(--charcoal); border-radius: 8px; padding: 2rem; margin-top: 1.5rem; }
    .email-capture h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 300; color: var(--cream); margin-bottom: 0.5rem; line-height: 1.2; }
    .email-capture p { font-size: 13px; font-weight: 300; color: #aaa; margin-bottom: 1.25rem; line-height: 1.65; }
    .email-form { display: flex; flex-direction: column; gap: 10px; }
    .email-input { padding: 13px 16px; border: 1px solid #666; border-radius: 4px; background: transparent; font-family: 'DM Sans', sans-serif; font-size: 14px; color: var(--cream); outline: none; transition: border-color 0.2s; }
    .email-input::placeholder { color: #777; }
    .email-input:focus { border-color: var(--sage); }
    .email-note { font-size: 11px; color: #666; margin-top: 2px; }
    .retake-link { display: block; text-align: center; margin-top: 1.5rem; font-size: 13px; color: var(--charcoal-light); cursor: pointer; text-decoration: underline; text-underline-offset: 3px; }
    .retake-link:hover { color: var(--charcoal); }

    @media (max-width: 480px) {
      #screen-intro h1 { font-size: 2.2rem; }
      .outcomes-grid { grid-template-columns: 1fr 1fr; }
      .q-text { font-size: 1.35rem; }
      .result-name { font-size: 2rem; }
    }
  </style>
</head>
<body>
<div class="wrap">

  <!-- INTRO -->
  <div id="screen-intro">
    <p class="eyebrow">Executive Energy Audit</p>
    <p class="for-who">For headteachers and school leaders who are brilliant at the job but running on fumes.</p>
    <ul class="quick-wins">
      <li>&#10003; 10 questions</li>
      <li>&#10003; 5 minutes</li>
      <li>&#10003; Instant result</li>
      <li>&#10003; Free personalised PDF report</li>
    </ul>
    <button class="btn-primary" id="btn-start-top">Start my Audit now &#8594;</button>
    <div style="margin-bottom:1.5rem;"></div>
    <div class="intro-promise">
      <strong>After this Audit you will know:</strong> which specific area of your leadership is draining you most, where your boundaries are collapsing, and the most important thing to change first.
    </div>
    <p class="intro-body">Sound familiar?</p>
    <ul class="pain-list">
      <li>You leave work and the mental load comes with you</li>
      <li>You are present in body but somewhere else in your head</li>
      <li>You say yes when every part of you wants to say no</li>
      <li>You feel guilty when you stop</li>
      <li>You keep missing the moments that matter</li>
      <li>You are achieving everything and quietly wondering if this is it</li>
    </ul>
    <p class="intro-body">This is not a productivity quiz. It is a diagnostic.</p>
    <p class="intro-body" style="font-weight:400; color: var(--charcoal);">Here is what you will walk away with:</p>
    <div class="outcomes-grid">
      <div class="outcome-card">
        <div class="outcome-number">01</div>
        <div class="outcome-label">Your Energy Profile</div>
        <div class="outcome-desc">Know exactly which of the 5 leadership archetypes you are and what it means right now</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-number">02</div>
        <div class="outcome-label">Your Drain Map</div>
        <div class="outcome-desc">The 3 specific energy leaks most likely driving your depletion, named and explained</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-number">03</div>
        <div class="outcome-label">What Changes</div>
        <div class="outcome-desc">A clear picture of what your life and leadership look like once this is fixed</div>
      </div>
      <div class="outcome-card">
        <div class="outcome-number">04</div>
        <div class="outcome-label">Your PDF Report</div>
        <div class="outcome-desc">A full personalised report delivered to your inbox, yours to keep and act on</div>
      </div>
    </div>
    <button class="btn-primary" id="btn-start">Start my Audit now &#8594;</button>
  </div>

  <!-- QUIZ -->
  <div id="screen-quiz">
    <div class="progress-wrap">
      <div class="progress-top">
        <span id="progress-label">Question 1 of 10</span>
        <span id="progress-pct">0%</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width:0%"></div></div>
    </div>
    <div class="question-area">
      <p class="q-dimension" id="q-dimension"></p>
      <p class="q-text" id="q-text"></p>
      <div class="options" id="options-list"></div>
    </div>
    <div class="quiz-nav">
      <button class="btn-secondary" id="btn-back" style="visibility:hidden">Back</button>
      <button class="btn-primary" id="btn-next" disabled>Next</button>
    </div>
  </div>

  <!-- RESULT -->
  <div id="screen-result">
    <div class="result-header" id="result-header">
      <p class="result-eyebrow">Your Executive Energy Audit result</p>
      <h2 class="result-name" id="result-name"></h2>
      <span class="result-range" id="result-range"></span>
      <p class="result-tagline" id="result-tagline"></p>
    </div>
    <div class="result-outcomes">
      <div class="result-outcome-item">
        <div class="result-outcome-num">2-3hrs</div>
        <div class="result-outcome-text">of daily energy recovered when the right boundaries are in place</div>
      </div>
      <div class="result-outcome-item">
        <div class="result-outcome-num">6wks</div>
        <div class="result-outcome-text">average time for clients to feel meaningfully different with structured support</div>
      </div>
      <div class="result-outcome-item">
        <div class="result-outcome-num">100%</div>
        <div class="result-outcome-text">of clients report feeling more present at home after redesigning how they lead</div>
      </div>
    </div>
    <div class="result-body">
      <div class="result-section">
        <p class="result-label">You are</p>
        <p class="result-text" id="result-description"></p>
      </div>
      <div class="result-section">
        <p class="result-label">What this means for you right now</p>
        <ul class="result-bullets" id="result-reveals"></ul>
      </div>
      <div class="divider"></div>
      <div class="result-section">
        <p class="result-label">Where your energy is going</p>
        <ul class="result-bullets" id="result-leaks"></ul>
      </div>
      <div class="gains-box">
        <p class="result-label">What changes when you fix this</p>
        <ul class="gains-list" id="result-gains"></ul>
      </div>
      <div class="next-step-box">
        <p class="result-label">Your next step</p>
        <p class="result-text" id="result-next"></p>
      </div>
      <div class="result-section">
        <p class="result-label">Recommended reading</p>
        <ul class="result-bullets" id="result-resources"></ul>
      </div>
      <div class="email-capture">
        <h3>Get your full report sent to your inbox</h3>
        <p>Your personalised PDF includes a deeper breakdown of your profile and a clear roadmap for your next steps. Free. Yours to keep.</p>
        <div class="email-form">
          <input class="email-input" type="text" placeholder="Your first name" id="capture-name" />
          <input class="email-input" type="email" placeholder="Your email address" id="capture-email" />
          <button class="btn-primary" id="btn-submit" style="width:100%">Send me my full report &#8594;</button>
        </div>
        <p class="email-note">No spam. No selling. Just your report, straight to your inbox.</p>
      </div>
      <span class="retake-link" id="btn-retake">Retake the Audit</span>
    </div>
  </div>

</div>
<script>
var IlluminateAudit = (function() {

  var questions = [
    { dimension: "Energy and Recovery", text: "At the end of a typical working day, how do you feel?", options: ["Tired but satisfied, recovered by the next morning","Drained more often than not, but it passes","Consistently exhausted in a way that sleep is not fixing","Flat, empty, or running on autopilot most of the time","I genuinely cannot remember the last time I felt properly rested"] },
    { dimension: "Boundaries and Capacity", text: "How often do you say yes to things you actually want to say no to?", options: ["Rarely. I have a reasonably clear sense of what I will and will not take on","Sometimes, mostly for good reasons","Often. It feels easier than the conversation that comes with saying no","Almost always. I do not really feel like I have a choice","I have stopped noticing. Saying yes is just what I do"] },
    { dimension: "Identity and Sense of Self", text: "How connected do you feel to who you actually are, outside of your role?", options: ["Pretty connected. My work is part of me but it is not all of me","Reasonably so, though I notice it fading during busy periods","I am not sure. I have not had much time to think about it","Mostly I feel like my role. I am not sure who I am without it","Quite disconnected. I do not really recognise myself at the moment"] },
    { dimension: "Mental Load", text: "How much of your thinking capacity goes on things nobody else sees or knows about?", options: ["Some, but it feels manageable","A fair amount. I carry a lot of invisible coordination and planning","More than I can easily articulate. It is relentless","It is almost constant. The list in my head never stops","I am so used to carrying it that I have stopped noticing it as load"] },
    { dimension: "Confidence and Voice", text: "How easy do you find it to speak up honestly, at work and in your personal life?", options: ["Generally quite easy. I know my own mind and I say it","Mostly fine, though I hold back in certain situations","I edit myself more than I would like to","I often stay quiet when I have something to say","I have lost confidence in my own perspective. I second-guess everything"] },
    { dimension: "Recovery and Restoration", text: "When you do have time to yourself, how does it feel?", options: ["Genuinely restorative. I use it well and come back better for it","Mostly good, though I am often thinking about what needs doing","I struggle to switch off even when I have the space","I feel guilty or restless, like I should be doing something","I do not really have time to myself. Or if I do, I am too exhausted to enjoy it"] },
    { dimension: "Relationships and Support", text: "How well supported do you feel, at work and at home?", options: ["Well supported in most areas","Reasonably supported, though I sometimes wish I had more","I manage mostly on my own. I do not ask for help easily","Quite isolated. There are not many people I can be honest with","I feel alone with most of it. I do not think people really understand what I am carrying"] },
    { dimension: "Purpose and Engagement", text: "How engaged do you feel with your work right now?", options: ["Genuinely engaged. I care about what I do and it shows","Mostly engaged, though my enthusiasm dips from time to time","Going through the motions more than I would like","Disengaged. I am showing up but I am not really there","I am struggling to remember why any of this matters"] },
    { dimension: "Physical Signals", text: "How would you describe what your body is telling you right now?", options: ["Generally fine. I am paying attention and things feel okay","A few things I am keeping an eye on but nothing alarming","I am noticing more physical symptoms than usual and ignoring most of them","My body is regularly telling me something is wrong and I keep pushing through","I feel physically depleted in a way that has become my normal"] },
    { dimension: "Future Orientation", text: "When you think about the next few years, what comes up?", options: ["Mostly positive. I have a sense of direction and I am looking forward to it","Some optimism, some uncertainty. I am figuring it out","I feel unclear about what I want or where I am heading","I have stopped thinking that far ahead. I am just getting through","The idea of the future feels heavy or blank. I am finding it hard to imagine feeling differently"] }
  ];

  var profiles = {
    reservoir: {
      name: "The Reservoir", range: "Score: 10-19", accent: "#aac1b3",
      tagline: "You have more capacity than most. Now let us make sure you keep it.",
      description: "You are in a genuinely good place. Your energy is largely intact, your boundaries are holding, and you are recovering between demands. That is not nothing. Most senior women I work with would give a lot to be where you are right now. The question is not how to fix something that is broken. It is how to protect something that is working, before the next wave of pressure arrives.",
      reveals: ["You have a clear enough sense of where your energy goes and why","You can mostly switch off and you feel it when you cannot","Your relationships at work and home feel broadly sustainable right now"],
      leaks: ["Small yeses that feel harmless and add up to significant drain over time","Holding your boundaries through willpower rather than structures that do the work for you","Deprioritising your own development because everyone else's feels more urgent right now"],
      gains: ["Boundaries that hold without the guilt or the energy it takes to defend them","More mental space at the end of the day, and actually present when you are with your family","A proactive plan so that the next big pressure point does not knock you sideways","A leadership approach you can sustain for the long term, not just the next quarter"],
      next: "Now is the perfect time to get intentional. Not because something is wrong, but because women who build the right structures at this stage do not end up in burnout. They keep their capacity, their relationships, and their love for their work. That is exactly what the Sustainable Leadership Method is designed to help you do. Let us build those structures now, before you need them.",
      resources: ["Burnout by Emily and Amelia Nagoski","Essentialism by Greg McKeown","HBR: Resilience Is About How You Recharge, Not How You Endure"]
    },
    adapter: {
      name: "The Adapter", range: "Score: 20-29", accent: "#b8a898",
      tagline: "You are holding it together brilliantly. But at some point, holding it together stops working.",
      description: "You are coping. Often impressively. You have learned to absorb pressure, stay functional, and keep everyone around you reassured. The problem is that coping takes energy too. The gap between what you are showing on the outside and what you are actually feeling on the inside is growing. The strategies keeping you afloat right now have a ceiling. You do not need more resilience. You need a different way of working.",
      reveals: ["You are delivering at a high level but running on less than people realise","You are starting to notice a quiet drift from yourself, a 'is this still me?' in the background","Switching off is becoming harder. The to-do list follows you everywhere"],
      leaks: ["Coping mechanisms that look like competence but quietly cost you energy every single day","Absorbing everyone else's stress and emotional load with nothing coming back the other way","Staying busy so you do not have to sit with the harder questions about what you actually want"],
      gains: ["An end to the Sunday evening dread and the feeling of never really being off","Boundaries that you actually keep, not just ones that sound good in theory","More genuine presence at home because the mental load is not following you through the door","A clearer sense of who you are outside your role, and energy left to enjoy it"],
      next: "The most important thing right now is working out which of your strategies are genuinely sustaining you, and which ones are slowly draining you while looking like they are helping. That is the starting point of the Sustainable Leadership Method. Most of my clients at this stage tell me that after six weeks of working together they feel like themselves again. Let us start that conversation.",
      resources: ["The Gifts of Imperfection by Brene Brown","Set Boundaries, Find Peace by Nedra Tawwab","McKinsey: Women in the Workplace annual report"]
    },
    strained: {
      name: "The Strained Executive", range: "Score: 30-37", accent: "#c4937a",
      tagline: "Your body knows. Your leadership knows. Now it is time to actually listen.",
      description: "You are still delivering. You are probably still delivering brilliantly. But the cost is no longer invisible, at least not to you. Physical symptoms, a growing disconnection from yourself, fewer people you can actually be honest with. You have been pushing through for a while now. The good news is that women at this profile respond quickly to the right support. The patterns driving your depletion are specific and fixable. But they will not fix themselves.",
      reveals: ["You are pushing through physical or cognitive symptoms your body has been flagging for a while","There is a growing gap between who you are at work and what you actually feel like inside","You are more isolated than you let on. The people around you think you are fine"],
      leaks: ["Leading from obligation rather than genuine engagement, going through the motions and hoping nobody notices","People-pleasing patterns that are quietly consuming your time, your evenings, and your weekends","Taking on organisational pressure as if it is your personal failure to solve"],
      gains: ["Physical energy that is no longer rationed across the day just to get through it","Evenings and weekends that belong to you again, not to the mental overspill from work","Clearer thinking, less second-guessing, and decisions that feel grounded rather than reactive","The ability to be properly present with the people who matter most, without the guilt and the half-attention"],
      next: "Generic advice will not touch what you are experiencing. What you need is someone to sit with you specifically, work out what is actually driving your depletion, and build something that fits your real life and your real leadership. That is exactly what the Sustainable Leadership Method is designed to do. Please get in touch. This is exactly what I am here for.",
      resources: ["Come As You Are by Emily Nagoski","Real Self-Care by Pooja Lakshmin MD","HBR: Beating Burnout special report"]
    },
    invisible: {
      name: "The Invisible Carrier", range: "Score: 38-44", accent: "#7a8a7e",
      tagline: "You are holding far more than anyone around you knows. And you have been doing it for a very long time.",
      description: "You are still showing up. Still delivering. Still holding things together at work and probably at home too. And almost nobody knows how much it is costing you, because you have become expert at making it look manageable. The gap between what people see and what you are actually running on is wide. You may have quietly started wondering how much longer you can keep going like this. That is not weakness. That is the most important signal you have had in years. Please do not ignore it.",
      reveals: ["You are performing at a high level on the outside while running close to empty on the inside","You are carrying a caring, domestic, or emotional load that does not show up anywhere but affects everything","You have started to lose your sense of what you actually want. The future feels unclear or heavy"],
      leaks: ["The invisible labour that nobody assigns, nobody acknowledges, and nobody sees, but that you carry every single day","Scanning everyone else's state and needs before you even register your own","A deep resistance to asking for help, because somewhere along the way that started to feel like proof that you cannot cope"],
      gains: ["A leadership model that accounts for everything you are carrying, not just what shows up on your job description","Time and presence with your family that is not shadowed by the weight of everything you are holding","The ability to ask for what you need without the shame spiral that comes with it at the moment","A future that you can actually imagine again, one that excites you rather than exhausts you before it has started"],
      next: "The goal right now is you. Not your output, not your team, not your performance. You. The Sustainable Leadership Method starts exactly where you are and builds from there. Women who come to me at this stage often say the first session alone changed something. Please get in touch. I would really like to work with you.",
      resources: ["Real Self-Care by Pooja Lakshmin MD","Burnout by Emily and Amelia Nagoski","Maslach Burnout Inventory, a clinically validated self-assessment worth doing"]
    },
    threshold: {
      name: "The Threshold Leader", range: "Score: 45-50", accent: "#6b5c5c",
      tagline: "You have been running on empty for long enough. It is time to stop and let someone help.",
      description: "This score reflects significant depletion across almost every area of your life and leadership. You are probably still functioning. But it is costing you in ways that go far beyond work now. I want to say this directly to you: this is not a reflection of your capability or your character. It is what happens when a brilliant woman is asked to give too much for too long with not enough support. You have not failed. You have been let down by a model of leadership that was never built with you in mind. And that can change.",
      reveals: ["The exhaustion you are carrying is not something sleep or a holiday is going to touch right now","You are struggling to recognise yourself, in how you feel, how you lead, and who you are when the door closes","An emotional flatness has crept in quietly over time, a way of keeping going that is slowly costing you everything"],
      leaks: ["Running entirely on output with no genuine recovery built in anywhere in your life","A deep disconnection from your own needs and early warning signals, you have stopped being able to hear yourself","Shame about where you have ended up, which is the very thing making it hardest to reach out"],
      gains: ["Energy that is genuinely yours again, not rationed and spent before the day has started","The ability to be fully present with your children without the guilt, the distraction, and the half-version of yourself","A leadership identity you actually recognise and feel proud of, not one you are performing","A life that has room in it for you, not just for everyone else's demands and expectations"],
      next: "Please do not try to think your way through this alone. The Sustainable Leadership Method begins exactly where you are, not where you think you should be. You do not need to have it together to get started. You just need to make one move. Please get in touch. I am here and I would very much like to talk with you.",
      resources: ["Burnout by Emily and Amelia Nagoski, start here","Your GP, please treat this as a genuine recommendation not a suggestion","CIPD: Supporting Mental Health at Work guidance"]
    }
  };

  var currentQ = 0;
  var answers = [];
  for (var i = 0; i < questions.length; i++) { answers.push(null); }
  sessionStorage.removeItem('auditProfile');
  sessionStorage.removeItem('auditScore');

  function getProfile(score) {
    if (score <= 19) return profiles.reservoir;
    if (score <= 29) return profiles.adapter;
    if (score <= 37) return profiles.strained;
    if (score <= 44) return profiles.invisible;
    return profiles.threshold;
  }

  function show(id) { document.getElementById(id).style.display = 'block'; }
  function hide(id) { document.getElementById(id).style.display = 'none'; }

  function startQuiz() {
    hide('screen-intro');
    show('screen-quiz');
    renderQuestion();
    window.scrollTo(0, 0);
  }

  function renderQuestion() {
    var q = questions[currentQ];
    var letters = ['A','B','C','D','E'];
    document.getElementById('q-dimension').textContent = q.dimension;
    document.getElementById('q-text').textContent = q.text;
    document.getElementById('progress-label').textContent = 'Question ' + (currentQ + 1) + ' of ' + questions.length;
    var pct = Math.round((currentQ / questions.length) * 100);
    document.getElementById('progress-pct').textContent = pct + '%';
    document.getElementById('progress-fill').style.width = pct + '%';
    document.getElementById('btn-back').style.visibility = currentQ > 0 ? 'visible' : 'hidden';
    document.getElementById('btn-next').disabled = answers[currentQ] === null;
    document.getElementById('btn-next').textContent = currentQ === questions.length - 1 ? 'See my result' : 'Next';

    var list = document.getElementById('options-list');
    list.innerHTML = '';
    q.options.forEach(function(opt, i) {
      var btn = document.createElement('button');
      btn.className = 'option' + (answers[currentQ] === i ? ' selected' : '');
      btn.innerHTML = '<span class="option-letter">' + letters[i] + '</span><span>' + opt + '</span>';
      btn.addEventListener('click', function() { selectAnswer(i); });
      list.appendChild(btn);
    });
  }

  function selectAnswer(i) {
    answers[currentQ] = i;
    var opts = document.querySelectorAll('.option');
    for (var x = 0; x < opts.length; x++) {
      opts[x].classList.toggle('selected', x === i);
    }
    document.getElementById('btn-next').disabled = false;
  }

  function nextQuestion() {
    if (answers[currentQ] === null) return;
    if (currentQ < questions.length - 1) {
      currentQ++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function prevQuestion() {
    if (currentQ > 0) { currentQ--; renderQuestion(); }
  }

  function showResult() {
    var score = 0;
    for (var i = 0; i < answers.length; i++) { score += answers[i] + 1; }
    var profile = getProfile(score);
    sessionStorage.setItem('auditProfile', profile.name);
    sessionStorage.setItem('auditScore', String(score));

    hide('screen-quiz');
    show('screen-result');

    document.getElementById('result-header').style.background = profile.accent;
    document.getElementById('result-name').textContent = profile.name;
    document.getElementById('result-range').textContent = profile.range;
    document.getElementById('result-tagline').textContent = profile.tagline;
    document.getElementById('result-description').textContent = profile.description;
    document.getElementById('result-next').textContent = profile.next;

    ['reveals','leaks','resources'].forEach(function(key) {
      document.getElementById('result-' + key).innerHTML = profile[key].map(function(item) {
        return '<li>' + item + '</li>';
      }).join('');
    });

    document.getElementById('result-gains').innerHTML = profile.gains.map(function(g) {
      return '<li><span class="gain-icon">&#10003;</span><span>' + g + '</span></li>';
    }).join('');

    window.scrollTo(0, 0);
  }

  function submitEmail() {
    var nameEl = document.getElementById('capture-name');
    var emailEl = document.getElementById('capture-email');
    if (!nameEl || !emailEl) { alert('Form fields not found. Please try again.'); return; }
    var name = nameEl.value.trim();
    var emailVal = emailEl.value.trim();
    if (!emailVal) { alert('Please enter your email address.'); return; }

    // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTg1ZTM2ZWQ3NmE1ZGQ1NDE3MDcwYjk0MGY1NjEwYTNjYWZlNzhmYThhM2JhNWUyNzc2ZTUzNmE1OTAzYTczM2E1ZWE3N2IxOGU3MmNlNTUiLCJpYXQiOjE3NzkyMDc3MzkuMDMxMTc2LCJuYmYiOjE3NzkyMDc3MzkuMDMxMTgsImV4cCI6NDkzNDg4MTMzOS4wMjIxMTEsInN1YiI6IjIzNzYzNTMiLCJzY29wZXMiOltdfQ.vFnuiKJ491B-TSrpUG3eYoM-ohVzsbX6XAJmDTXKlN3h0tTbJ--M4KWVPUP7ASj52jqc9ylpcbiZEwG7gaI4cdtHxE4bPpy1G0gCPg5GYThCoumoTU-sGLwUCVm960A693b0D5KxwFKeSNuiXNVcs47UkZoxksiyPOhYGLjgET7fD01RsfhHxXIPaolgW8AM3XoZxOQAwwHKq0-hQirrvfSaYCSH6m885SMojI-PtCzRmUzbIIiFOVdw5Vvayz5kQgdurDuxvGwjBEEsf3mnAy8D5Nz_qelJQu2c83hWsEZFP-EllysGDby0Xk79kY9brn_o-2hwf661R6ZX5RZxBi529gM1lBbe_4AvfkHsP-o0AMyMuOlN4fAruPuwpb-Mtr8Q91qbqN-UYi7O7e4QZ44lY5uw5ITLmZvFF2-9B99JfqrT7n4kntdn_uE_prHkiZ53PPkY3Hqr_LNYdxMQveEk2R5hIrFCLPka6iiLjf4xXCR6AzfOS63TP143xpIPNYZzkBlhLSyKqUiyVoKm5sHi6vUuX-2fNWJKILwtOq_ssnMoaTVXcmkXVhc7bngmqCjC6Dtgu0aJarw-90XMcXLNLykUgxfRoKACKVaiej9j2yIR5v9yo2Q07yRHy9OyMdgbqkde-o-RsHMDEiBcClC0HxaJr4g1J3w3PVMrIsE
 and 187819358113761175 with your real MailerLite values
    fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTg1ZTM2ZWQ3NmE1ZGQ1NDE3MDcwYjk0MGY1NjEwYTNjYWZlNzhmYThhM2JhNWUyNzc2ZTUzNmE1OTAzYTczM2E1ZWE3N2IxOGU3MmNlNTUiLCJpYXQiOjE3NzkyMDc3MzkuMDMxMTc2LCJuYmYiOjE3NzkyMDc3MzkuMDMxMTgsImV4cCI6NDkzNDg4MTMzOS4wMjIxMTEsInN1YiI6IjIzNzYzNTMiLCJzY29wZXMiOltdfQ.vFnuiKJ491B-TSrpUG3eYoM-ohVzsbX6XAJmDTXKlN3h0tTbJ--M4KWVPUP7ASj52jqc9ylpcbiZEwG7gaI4cdtHxE4bPpy1G0gCPg5GYThCoumoTU-sGLwUCVm960A693b0D5KxwFKeSNuiXNVcs47UkZoxksiyPOhYGLjgET7fD01RsfhHxXIPaolgW8AM3XoZxOQAwwHKq0-hQirrvfSaYCSH6m885SMojI-PtCzRmUzbIIiFOVdw5Vvayz5kQgdurDuxvGwjBEEsf3mnAy8D5Nz_qelJQu2c83hWsEZFP-EllysGDby0Xk79kY9brn_o-2hwf661R6ZX5RZxBi529gM1lBbe_4AvfkHsP-o0AMyMuOlN4fAruPuwpb-Mtr8Q91qbqN-UYi7O7e4QZ44lY5uw5ITLmZvFF2-9B99JfqrT7n4kntdn_uE_prHkiZ53PPkY3Hqr_LNYdxMQveEk2R5hIrFCLPka6iiLjf4xXCR6AzfOS63TP143xpIPNYZzkBlhLSyKqUiyVoKm5sHi6vUuX-2fNWJKILwtOq_ssnMoaTVXcmkXVhc7bngmqCjC6Dtgu0aJarw-90XMcXLNLykUgxfRoKACKVaiej9j2yIR5v9yo2Q07yRHy9OyMdgbqkde-o-RsHMDEiBcClC0HxaJr4g1J3w3PVMrIsE'
      },
      body: JSON.stringify({
        email: emailVal,
        fields: {
          name: name,
          audit_profile: sessionStorage.getItem('auditProfile') || '',
          audit_score: sessionStorage.getItem('auditScore') || 'none'
        },
        groups: ['187819358113761175']
      })
    })
    .then(function(res) { return res.json(); })
    .then(function() {
      alert('Your report is on its way' + (name ? ', ' + name : '') + '. Check your inbox.');
    })
    .catch(function() {
      alert('Something went wrong. Please try again.');
    });
  }

  function retake() {
    currentQ = 0;
    for (var i = 0; i < answers.length; i++) { answers[i] = null; }
    hide('screen-result');
    show('screen-intro');
    window.scrollTo(0, 0);
  }

  // Poll until buttons exist -- bulletproof for Squarespace Code Blocks
  function wireButtons() {
    try {
      var start = document.getElementById('btn-start');
      if (!start) { setTimeout(wireButtons, 150); return; }
      start.addEventListener('click', startQuiz);
      var startTop = document.getElementById('btn-start-top');
      if (startTop) { startTop.addEventListener('click', startQuiz); }
      document.getElementById('btn-next').addEventListener('click', nextQuestion);
      document.getElementById('btn-back').addEventListener('click', prevQuestion);
      document.getElementById('btn-submit').addEventListener('click', submitEmail);
      document.getElementById('btn-retake').addEventListener('click', retake);
    } catch(e) { setTimeout(wireButtons, 150); }
  }
  setTimeout(wireButtons, 300);

  return {};
})();

</script>
</body>
</html>

