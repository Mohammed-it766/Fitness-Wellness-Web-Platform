
<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;900&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --lime: #C8F135;
    --dark: #0D0D0D;
    --card-bg: #161616;
    --card-2: #1E1E1E;
    --muted: #888;
    --text: #F5F5F0;
    --accent: #FF5A1F;
  }

  .fw-wrap {
    background: var(--dark);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* NAV */
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 32px;
    border-bottom: 0.5px solid #2a2a2a;
  }
  .logo {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: 22px;
    letter-spacing: 0.05em;
    color: var(--lime);
    text-transform: uppercase;
  }
  .nav-links {
    display: flex;
    gap: 28px;
    list-style: none;
  }
  .nav-links li {
    font-size: 13px;
    font-weight: 400;
    color: var(--muted);
    cursor: pointer;
    letter-spacing: 0.04em;
    transition: color 0.2s;
  }
  .nav-links li:hover { color: var(--text); }
  .nav-links li.active { color: var(--lime); }
  .nav-cta {
    background: var(--lime);
    color: var(--dark);
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 9px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .nav-cta:hover { opacity: 0.85; }

  /* HERO */
  .hero {
    padding: 64px 32px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  .hero-tag {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 16px;
  }
  .hero-h1 {
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 900;
    font-size: 76px;
    line-height: 0.92;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    color: var(--text);
    margin-bottom: 24px;
  }
  .hero-h1 span { color: var(--lime); }
  .hero-sub {
    font-size: 15px;
    font-weight: 300;
    color: var(--muted);
    line-height: 1.7;
    max-width: 380px;
    margin-bottom: 32px;
  }
  .hero-btns {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .btn-primary {
    background: var(--lime);
    color: var(--dark);
    font-family: 'Barlow Condensed', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 13px 28px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.85; }
  .btn-ghost {
    color: var(--muted);
    font-size: 13px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s;
    background: none;
    border: none;
  }
  .btn-ghost:hover { color: var(--text); }
  .play-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 0.5px solid #444;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }

  /* HERO STATS CARD */
  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .stat-card-main {
    background: var(--card-bg);
    border: 0.5px solid #2a2a2a;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .stat-ring {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
  }
  .stat-info h3 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: var(--lime);
    line-height: 1;
  }
  .stat-info p {
    font-size: 12px;
    color: var(--muted);
    margin-top: 4px;
    letter-spacing: 0.03em;
  }
  .stat-bar {
    margin-top: 12px;
    height: 4px;
    background: #2a2a2a;
    border-radius: 2px;
    overflow: hidden;
    width: 140px;
  }
  .stat-bar-fill {
    height: 100%;
    background: var(--lime);
    border-radius: 2px;
    animation: fillBar 1.5s ease forwards;
  }
  @keyframes fillBar { from { width: 0; } to { width: var(--pct); } }

  .mini-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .mini-stat {
    background: var(--card-bg);
    border: 0.5px solid #2a2a2a;
    border-radius: 10px;
    padding: 16px;
  }
  .mini-stat .val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: var(--text);
  }
  .mini-stat .lbl {
    font-size: 11px;
    color: var(--muted);
    margin-top: 2px;
    letter-spacing: 0.04em;
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    background: var(--lime);
  }
  .dot.orange { background: var(--accent); }

  /* TABS */
  .section-tabs {
    padding: 0 32px;
    margin-top: 48px;
  }
  .tabs-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .tabs-header h2 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 38px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .tabs-nav {
    display: flex;
    gap: 4px;
  }
  .tab-btn {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 7px 14px;
    border: 0.5px solid #333;
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
    color: var(--muted);
    transition: all 0.2s;
  }
  .tab-btn.active, .tab-btn:hover {
    background: var(--lime);
    color: var(--dark);
    border-color: var(--lime);
  }

  /* PROGRAM CARDS */
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .prog-card {
    background: var(--card-bg);
    border: 0.5px solid #2a2a2a;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.2s, transform 0.2s;
  }
  .prog-card:hover {
    border-color: #444;
    transform: translateY(-2px);
  }
  .prog-card.featured {
    grid-column: span 1;
    border-color: var(--lime);
  }
  .prog-thumb {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    position: relative;
  }
  .prog-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 3px;
    background: var(--lime);
    color: var(--dark);
  }
  .prog-body {
    padding: 16px;
  }
  .prog-body h4 {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    margin-bottom: 4px;
  }
  .prog-meta {
    font-size: 12px;
    color: var(--muted);
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .prog-progress {
    height: 3px;
    background: #2a2a2a;
    border-radius: 2px;
    overflow: hidden;
  }
  .prog-progress-fill {
    height: 100%;
    border-radius: 2px;
    animation: fillBar 1.5s ease forwards;
  }
  .lime-fill { background: var(--lime); }
  .orange-fill { background: var(--accent); }
  .blue-fill { background: #4A9FFF; }

  /* NUTRITION */
  .nutrition-section {
    padding: 48px 32px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }
  .section-label {
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 10px;
  }
  .section-h {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 16px;
  }
  .macro-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 24px;
  }
  .macro-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .macro-name {
    font-size: 13px;
    color: var(--muted);
    width: 80px;
  }
  .macro-bar-wrap {
    flex: 1;
    height: 6px;
    background: #222;
    border-radius: 3px;
    overflow: hidden;
  }
  .macro-bar-inner {
    height: 100%;
    border-radius: 3px;
    animation: fillBar 1.5s ease forwards;
  }
  .macro-val {
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    width: 50px;
    text-align: right;
  }

  /* MEAL CARDS */
  .meal-cards {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .meal-card {
    background: var(--card-bg);
    border: 0.5px solid #2a2a2a;
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .meal-card:hover { border-color: #444; }
  .meal-icon {
    font-size: 24px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    border-radius: 8px;
    flex-shrink: 0;
  }
  .meal-info { flex: 1; }
  .meal-info h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .meal-info p {
    font-size: 12px;
    color: var(--muted);
  }
  .meal-cal {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--lime);
  }

  /* SCHEDULE */
  .schedule-section {
    padding: 0 32px 48px;
  }
  .week-strip {
    display: flex;
    gap: 8px;
    margin: 20px 0 24px;
  }
  .day-chip {
    flex: 1;
    text-align: center;
    padding: 10px 6px;
    border-radius: 8px;
    border: 0.5px solid #2a2a2a;
    cursor: pointer;
    transition: all 0.2s;
  }
  .day-chip .day-name {
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    display: block;
    margin-bottom: 4px;
  }
  .day-chip .day-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    font-weight: 700;
  }
  .day-chip.active {
    background: var(--lime);
    border-color: var(--lime);
  }
  .day-chip.active .day-name { color: #555; }
  .day-chip.active .day-num { color: var(--dark); }
  .day-chip.has-dot::after {
    content: '';
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    margin: 4px auto 0;
  }

  .agenda-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .agenda-item {
    background: var(--card-bg);
    border: 0.5px solid #2a2a2a;
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .agenda-time {
    font-size: 12px;
    color: var(--muted);
    width: 55px;
    flex-shrink: 0;
  }
  .agenda-line {
    width: 2px;
    height: 36px;
    border-radius: 1px;
    flex-shrink: 0;
  }
  .agenda-content { flex: 1; }
  .agenda-content h5 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 2px;
  }
  .agenda-content p { font-size: 12px; color: var(--muted); }
  .agenda-dur {
    font-size: 12px;
    color: var(--muted);
    font-weight: 300;
    font-style: italic;
  }

  /* FOOTER STRIP */
  .footer-strip {
    background: var(--card-bg);
    border-top: 0.5px solid #2a2a2a;
    padding: 20px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .footer-strip p { font-size: 12px; color: var(--muted); }
  .streak-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #1E1E1E;
    border: 0.5px solid #333;
    border-radius: 6px;
    padding: 8px 14px;
  }
  .streak-badge .fire { font-size: 16px; }
  .streak-badge .streak-text { font-size: 12px; color: var(--muted); }
  .streak-badge .streak-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: var(--accent);
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fw-wrap > * {
    animation: fadeUp 0.5s ease both;
  }
  .hero { animation-delay: 0.05s; }
  .section-tabs { animation-delay: 0.1s; }
</style>

<div class="fw-wrap">
  <h2 class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Fitness and Wellness Platform — Dashboard showing workouts, nutrition, and schedule</h2>

  <!-- NAV -->
  <nav class="nav">
    <div class="logo">⚡ VitalForm</div>
    <ul class="nav-links">
      <li class="active">Dashboard</li>
      <li>Workouts</li>
      <li>Nutrition</li>
      <li>Progress</li>
      <li>Community</li>
    </ul>
    <button class="nav-cta">Start Training</button>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-left">
      <p class="hero-tag">Week 6 · Strength Phase</p>
      <h1 class="hero-h1">BUILD<br>YOUR<br><span>BEST</span><br>BODY.</h1>
      <p class="hero-sub">Personalized workouts, smart nutrition tracking, and recovery insights — all in one platform built for real results.</p>
      <div class="hero-btns">
        <button class="btn-primary" onclick="sendPrompt('Show me a personalized 7-day workout plan')">Today's Workout ↗</button>
        <button class="btn-ghost">
          <span class="play-icon">▶</span>
          Watch intro
        </button>
      </div>
    </div>
    <div class="hero-right">
      <div class="stat-card-main">
        <svg class="stat-ring" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="#222" stroke-width="8"/>
          <circle cx="40" cy="40" r="34" fill="none" stroke="#C8F135" stroke-width="8"
            stroke-dasharray="213.6" stroke-dashoffset="54"
            stroke-linecap="round" transform="rotate(-90 40 40)"/>
          <text x="40" y="38" text-anchor="middle" fill="#F5F5F0" font-family="'Barlow Condensed',sans-serif" font-size="16" font-weight="700">74%</text>
          <text x="40" y="52" text-anchor="middle" fill="#888" font-family="'DM Sans',sans-serif" font-size="8">Goal</text>
        </svg>
        <div class="stat-info">
          <h3>2,847</h3>
          <p>Calories burned today</p>
          <div class="stat-bar">
            <div class="stat-bar-fill" style="--pct: 74%;"></div>
          </div>
          <p style="margin-top: 6px; font-size: 11px; color: #555;">Target: 3,200 kcal</p>
        </div>
      </div>
      <div class="mini-stats">
        <div class="mini-stat">
          <div class="val">47<span style="font-size:14px;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:300"> min</span></div>
          <div class="lbl"><span class="dot"></span>Active time</div>
        </div>
        <div class="mini-stat">
          <div class="val">8,214</div>
          <div class="lbl"><span class="dot orange"></span>Steps today</div>
        </div>
        <div class="mini-stat">
          <div class="val">62<span style="font-size:14px;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:300"> bpm</span></div>
          <div class="lbl"><span class="dot" style="background:#4A9FFF"></span>Resting HR</div>
        </div>
        <div class="mini-stat">
          <div class="val">7.4<span style="font-size:14px;color:var(--muted);font-family:'DM Sans',sans-serif;font-weight:300"> hrs</span></div>
          <div class="lbl"><span class="dot" style="background:#b87fff"></span>Sleep</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROGRAMS -->
  <section class="section-tabs">
    <div class="tabs-header">
      <h2>Your Programs</h2>
      <div class="tabs-nav">
        <button class="tab-btn active">Active</button>
        <button class="tab-btn">All</button>
        <button class="tab-btn">Completed</button>
      </div>
    </div>
    <div class="programs-grid">
      <div class="prog-card featured" onclick="sendPrompt('Show me details for the Power Hypertrophy program')">
        <div class="prog-thumb" style="background: linear-gradient(135deg, #1a1a0d 0%, #2a2a10 100%);">
          💪
          <span class="prog-badge">Active</span>
        </div>
        <div class="prog-body">
          <h4>Power Hypertrophy</h4>
          <div class="prog-meta">
            <span>Day 18 of 30</span>
            <span>4× / week</span>
          </div>
          <div class="prog-progress">
            <div class="prog-progress-fill lime-fill" style="--pct: 60%;"></div>
          </div>
        </div>
      </div>
      <div class="prog-card" onclick="sendPrompt('Tell me about the mobility & flexibility program')">
        <div class="prog-thumb" style="background: linear-gradient(135deg, #0d1a18 0%, #102a24 100%);">
          🧘
        </div>
        <div class="prog-body">
          <h4>Mobility & Flex</h4>
          <div class="prog-meta">
            <span>Day 5 of 21</span>
            <span>Daily</span>
          </div>
          <div class="prog-progress">
            <div class="prog-progress-fill" style="--pct: 23%; background: #4A9FFF;"></div>
          </div>
        </div>
      </div>
      <div class="prog-card" onclick="sendPrompt('Show me the sprint & cardio program details')">
        <div class="prog-thumb" style="background: linear-gradient(135deg, #1a0d0d 0%, #2a1212 100%);">
          🏃
        </div>
        <div class="prog-body">
          <h4>Sprint & Cardio</h4>
          <div class="prog-meta">
            <span>Day 12 of 28</span>
            <span>3× / week</span>
          </div>
          <div class="prog-progress">
            <div class="prog-progress-fill orange-fill" style="--pct: 43%;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NUTRITION + SCHEDULE -->
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0; padding: 0 32px;">

    <!-- NUTRITION -->
    <div style="padding: 48px 32px 48px 0; border-right: 0.5px solid #2a2a2a;">
      <p class="section-label">Nutrition Tracker</p>
      <h2 class="section-h">Today's<br>Fueling</h2>
      <p style="font-size: 14px; color: var(--muted); font-weight: 300; line-height: 1.6;">2,140 of 2,800 kcal consumed. Keep it up — you're on track for your surplus goal.</p>
      <div class="macro-list">
        <div class="macro-row">
          <span class="macro-name">Protein</span>
          <div class="macro-bar-wrap"><div class="macro-bar-inner lime-fill" style="--pct: 82%;"></div></div>
          <span class="macro-val">164g</span>
        </div>
        <div class="macro-row">
          <span class="macro-name">Carbs</span>
          <div class="macro-bar-wrap"><div class="macro-bar-inner" style="--pct: 61%; background:#4A9FFF;"></div></div>
          <span class="macro-val">218g</span>
        </div>
        <div class="macro-row">
          <span class="macro-name">Fat</span>
          <div class="macro-bar-wrap"><div class="macro-bar-inner orange-fill" style="--pct: 71%;"></div></div>
          <span class="macro-val">64g</span>
        </div>
        <div class="macro-row">
          <span class="macro-name">Fiber</span>
          <div class="macro-bar-wrap"><div class="macro-bar-inner" style="--pct: 55%; background:#b87fff;"></div></div>
          <span class="macro-val">22g</span>
        </div>
      </div>
    </div>

    <!-- MEAL LOG -->
    <div style="padding: 48px 0 48px 32px;">
      <p class="section-label">Today's Meals</p>
      <div class="meal-cards" style="margin-top: 16px;">
        <div class="meal-card">
          <div class="meal-icon">🥣</div>
          <div class="meal-info">
            <h5>Protein Oat Bowl</h5>
            <p>Breakfast · 7:30 AM</p>
          </div>
          <div class="meal-cal">487</div>
        </div>
        <div class="meal-card">
          <div class="meal-icon">🥗</div>
          <div class="meal-info">
            <h5>Grilled Chicken Salad</h5>
            <p>Lunch · 12:15 PM</p>
          </div>
          <div class="meal-cal">612</div>
        </div>
        <div class="meal-card">
          <div class="meal-icon">🍫</div>
          <div class="meal-info">
            <h5>Whey Protein Shake</h5>
            <p>Snack · 3:00 PM</p>
          </div>
          <div class="meal-cal">210</div>
        </div>
        <div class="meal-card" style="border-style: dashed; border-color: #333; cursor: pointer;" onclick="sendPrompt('Suggest a healthy dinner for muscle gain with around 700 calories')">
          <div class="meal-icon" style="background: transparent; font-size: 18px; color: var(--muted);">+</div>
          <div class="meal-info">
            <h5 style="color: var(--muted); font-weight: 400;">Log dinner</h5>
            <p>Tap to add or get suggestions ↗</p>
          </div>
          <div style="font-size: 11px; color: var(--muted);">~831 left</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SCHEDULE -->
  <section class="schedule-section">
    <p class="section-label">Weekly Schedule</p>
    <h2 class="section-h" style="margin-bottom: 0;">This Week</h2>
    <div class="week-strip">
      <div class="day-chip">
        <span class="day-name">Mon</span>
        <span class="day-num">28</span>
      </div>
      <div class="day-chip has-dot">
        <span class="day-name">Tue</span>
        <span class="day-num">29</span>
      </div>
      <div class="day-chip has-dot">
        <span class="day-name">Wed</span>
        <span class="day-num">30</span>
      </div>
      <div class="day-chip active">
        <span class="day-name">Thu</span>
        <span class="day-num">1</span>
      </div>
      <div class="day-chip">
        <span class="day-name">Fri</span>
        <span class="day-num">2</span>
      </div>
      <div class="day-chip">
        <span class="day-name">Sat</span>
        <span class="day-num">3</span>
      </div>
      <div class="day-chip">
        <span class="day-name">Sun</span>
        <span class="day-num">4</span>
      </div>
    </div>
    <div class="agenda-list">
      <div class="agenda-item">
        <div class="agenda-time">6:00 AM</div>
        <div class="agenda-line" style="background: var(--lime);"></div>
        <div class="agenda-content">
          <h5>Morning Mobility Flow</h5>
          <p>15-min warm-up · Full body</p>
        </div>
        <div class="agenda-dur">15 min</div>
      </div>
      <div class="agenda-item">
        <div class="agenda-time">7:00 AM</div>
        <div class="agenda-line" style="background: var(--accent);"></div>
        <div class="agenda-content">
          <h5>Chest & Triceps — Hypertrophy A</h5>
          <p>Power Hypertrophy · Day 18</p>
        </div>
        <div class="agenda-dur">55 min</div>
      </div>
      <div class="agenda-item">
        <div class="agenda-time">12:00 PM</div>
        <div class="agenda-line" style="background: #4A9FFF;"></div>
        <div class="agenda-content">
          <h5>Zone 2 Walk / Light Cardio</h5>
          <p>Active recovery · Low intensity</p>
        </div>
        <div class="agenda-dur">30 min</div>
      </div>
      <div class="agenda-item">
        <div class="agenda-time">9:00 PM</div>
        <div class="agenda-line" style="background: #b87fff;"></div>
        <div class="agenda-content">
          <h5>Evening Stretch & Wind Down</h5>
          <p>Sleep prep · Parasympathetic</p>
        </div>
        <div class="agenda-dur">20 min</div>
      </div>
    </div>
  </section>

  <!-- FOOTER STRIP -->
  <footer class="footer-strip">
    <p>VitalForm · Week 6 of your 12-week transformation</p>
    <div class="streak-badge">
      <span class="fire">🔥</span>
      <span class="streak-num">14</span>
      <span class="streak-text">day streak</span>
    </div>
    <button class="btn-primary" style="font-size: 12px; padding: 9px 18px;" onclick="sendPrompt('Give me a full analysis of my fitness progress and what I should focus on next')">View Full Progress ↗</button>
  </footer>
</div>

