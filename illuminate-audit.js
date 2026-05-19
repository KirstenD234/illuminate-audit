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

    // REPLACE YOUR_API_KEY and YOUR_GROUP_ID with your real MailerLite values
    fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
        email: emailVal,
        fields: {
          name: name,
          audit_profile: sessionStorage.getItem('auditProfile') || '',
          audit_score: sessionStorage.getItem('auditScore') || 'none'
        },
        groups: ['YOUR_GROUP_ID']
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
      if (!start) { return false; }
      start.addEventListener('click', startQuiz);
      var startTop = document.getElementById('btn-start-top');
      if (startTop) { startTop.addEventListener('click', startQuiz); }
      document.getElementById('btn-next').addEventListener('click', nextQuestion);
      document.getElementById('btn-back').addEventListener('click', prevQuestion);
      document.getElementById('btn-submit').addEventListener('click', submitEmail);
      document.getElementById('btn-retake').addEventListener('click', retake);
      return true;
    } catch(e) { return false; }
  }

  // Use MutationObserver to watch for the button appearing in the DOM
  var observer = new MutationObserver(function() {
    if (wireButtons()) {
      observer.disconnect();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Also try immediately and at intervals as fallback
  if (!wireButtons()) {
    var attempts = 0;
    var interval = setInterval(function() {
      attempts++;
      if (wireButtons() || attempts > 50) {
        clearInterval(interval);
      }
    }, 200);
  }

  return {};
})();
