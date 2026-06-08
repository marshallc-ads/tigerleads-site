import{t as e}from"./rolldown-runtime.fXUlgfaW.mjs";import{A as t,C as n,D as r,_ as i,c as a,h as o,k as s,l as c,o as l}from"./react.BM0wrt_Q.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BOnp_uBl.mjs";import{B as m,J as h,M as g,O as _,a as v,ct as y,dt as b,ft as x,ht as S,i as C,mt as w,pt as T,u as E,xt as D}from"./framer.CzpY7Hh7.mjs";import{n as O,t as k}from"./Embed.BvGIe1GO.mjs";import{n as A,r as j}from"./yU9Ros53P.CZFoZJzh.mjs";var M,N,P,F,I,L,R,z,B,V,H;e((()=>{l(),h(),p(),n(),O(),A(),M=m(k),N={},P=[],F=`framer-wvKWE`,I={LyHFh56rW:`framer-v-a88928`},L=(e,t,n)=>e&&t?`position`:n,R=({value:e})=>T()?null:a(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),z=({height:e,id:t,width:n,...r})=>({...r}),B=D(o(function(e,n){let o=r(null),l=n??o,p=i(),{activeLocale:m,setLocale:h}=w();y();let{style:_,className:T,layoutId:D,variant:O,...A}=z(e);S(t(()=>j({},m),[m]));let[M,P]=x(O,N,!1),B=g(F),V=s(E)?.isLayoutTemplate,H=L(V,!!s(d)?.transition?.layout);return b({}),a(E.Provider,{value:{activeVariantId:M,primaryVariantId:`LyHFh56rW`,variantClassNames:I},children:c(f,{id:D??p,children:[a(R,{value:`html body { background: var(--token-3231f815-59bd-4709-9984-27f462c2029e, rgb(255, 255, 255)); }`}),a(u.div,{...A,className:g(B,`framer-a88928`,T),ref:l,style:{..._},children:a(C,{children:a(v,{className:`framer-1t9jmkl-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:H,nodeId:`SrG94s9iN`,scopeId:`yU9Ros53P`,children:a(k,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us — TigerLeads.AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --ink: #0A0A0B;
      --ink-2: #15151A;
      --surface: #1C1C22;
      --line-dark: #2A2A30;
      --paper: #FFFFFF;
      --paper-2: #F7F6F2;
      --text: #FAFAF8;
      --text-muted: #A8A8B0;
      --body: #2C2C32;
      --body-muted: #5C5C64;
      --line: #E8E6DE;
      --accent: #FF6B1A;
      --accent-2: #FF8642;
      --accent-deep: #C24A0E;
      --cyan: #00858A;
      --cyan-bright: #1AA5AB; /* lighter, for slogan/text accents */
      --cyan-deep: #005F63;   /* darker, for hover/borders */
    }

    /* Framer embed fixes */
    html, body {
      width: 100%; max-width: 100%;
      margin: 0; padding: 0;
      overflow-x: hidden;
    }
    section { width: 100%; max-width: 100%; }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--paper);
      color: var(--body);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    .container { max-width: 1240px; margin: 0 auto; padding: 0 1.75rem; }

    .eyebrow {
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--accent);
    }
    .eyebrow.cyan { color: var(--cyan-bright); }

    /* ============ NAV (matches existing site) ============ */
    nav {
      position: sticky; top: 0; z-index: 100;
      background: rgba(10, 10, 11, 0.94);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid var(--line-dark);
    }
    .nav-inner {
      max-width: 1240px; margin: 0 auto; padding: 0.5rem 1.75rem;
      display: flex; justify-content: space-between; align-items: center;
    }
    .logo {
      display: flex; align-items: center;
      text-decoration: none;
      flex-shrink: 0;
    }
    .logo img {
      height: 100px;
      width: auto;
      display: block;
    }
    .nav-links { display: flex; gap: 2.25rem; }
    .nav-links a {
      color: var(--text-muted); text-decoration: none;
      font-size: 0.88rem; font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover, .nav-links a.active { color: var(--text); }
    .nav-cta {
      background: var(--accent); color: var(--ink);
      padding: 0.6rem 1.2rem; border-radius: 6px;
      font-weight: 700; font-size: 0.85rem;
      text-decoration: none;
      transition: background 0.2s;
    }
    .nav-cta:hover { background: var(--accent-2); }

    /* ============ HERO ============ */
    .hero {
      background: var(--ink);
      color: var(--text);
      padding: 6.5rem 0 5.5rem;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: ''; position: absolute;
      top: -20%; right: -10%;
      width: 55vw; height: 55vw;
      background: radial-gradient(circle, rgba(255,107,26,0.16) 0%, transparent 65%);
      pointer-events: none;
    }
    .hero-inner { position: relative; z-index: 2; max-width: 920px; }
    .hero .eyebrow { margin-bottom: 1.5rem; }
    .hero h1 {
      font-size: clamp(2.4rem, 5.2vw, 4.4rem);
      font-weight: 800;
      line-height: 1.05;
      letter-spacing: -0.02em;
      margin-bottom: 1.75rem;
      max-width: 22ch;
    }
    .hero h1 .accent { color: var(--accent); }
    .hero-lede {
      font-size: 1.1rem;
      max-width: 60ch;
      color: rgba(250, 250, 248, 0.72);
      line-height: 1.65;
    }
    .hero-slogan {
      margin-top: 3rem;
      padding-top: 1.75rem;
      border-top: 1px solid var(--line-dark);
      font-size: 0.95rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--cyan-bright);
    }
    .hero-slogan span { color: var(--cyan-bright); }

    /* ============ STORY ============ */
    .story {
      background: var(--paper);
      padding: 6rem 0;
    }
    .story-inner {
      max-width: 780px; margin: 0 auto;
    }
    .story .eyebrow { margin-bottom: 1.5rem; }
    .story h2 {
      font-size: clamp(1.9rem, 3.4vw, 2.75rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin-bottom: 2.25rem;
      color: var(--ink);
    }
    .story p {
      font-size: 1.05rem;
      color: var(--body);
      margin-bottom: 1.4rem;
      line-height: 1.7;
    }
    .story p strong { color: var(--ink); font-weight: 700; }
    .story p a { color: var(--accent); font-weight: 600; text-decoration: none; border-bottom: 1px solid rgba(255,107,26,0.4); }
    .story p a:hover { color: var(--accent-deep); border-bottom-color: var(--accent-deep); }
    .story-quote {
      margin: 2.5rem 0;
      padding: 1.75rem 0 1.75rem 1.5rem;
      border-left: 3px solid var(--cyan);
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: var(--ink);
      line-height: 1.35;
    }
    .story-quote .cyan { color: var(--cyan-deep); }

    /* ============ MISSION ============ */
    .mission {
      background: var(--paper-2);
      padding: 5rem 0;
      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .mission-inner { max-width: 880px; margin: 0 auto; text-align: center; }
    .mission .eyebrow { margin-bottom: 1.5rem; }
    .mission h2 {
      font-size: clamp(1.7rem, 3vw, 2.4rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.2;
      color: var(--ink);
      margin-bottom: 1.5rem;
    }
    .mission h2 .accent { color: var(--accent); }
    .mission h2 .accent.cyan { color: var(--cyan-bright); }
    .mission-sub {
      font-size: 1.05rem;
      color: var(--body-muted);
      max-width: 56ch;
      margin: 0 auto;
    }

    /* ============ VALUES ============ */
    .values {
      background: var(--paper);
      padding: 6rem 0;
    }
    .section-header { margin-bottom: 3.5rem; max-width: 60ch; }
    .section-header .eyebrow { margin-bottom: 1rem; }
    .section-header h2 {
      font-size: clamp(1.9rem, 3.4vw, 2.75rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      color: var(--ink);
    }
    .values-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .value-card {
      background: var(--paper-2);
      border: 1px solid var(--line);
      border-radius: 10px;
      padding: 2rem;
      transition: border-color 0.25s, transform 0.25s;
    }
    .value-card:hover {
      border-color: var(--accent);
      transform: translateY(-3px);
    }
    .value-card.cyan-card:hover { border-color: var(--cyan); }
    .value-card.cyan-card .value-num { color: var(--cyan-bright); }
    .value-card.cyan-card ul li::before { background: var(--cyan); }
    .value-num {
      font-size: 0.78rem;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 0.75rem;
      display: block;
    }
    .value-card h3 {
      font-size: 1.4rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      margin-bottom: 0.85rem;
      color: var(--ink);
    }
    .value-card > p {
      font-size: 0.97rem;
      color: var(--body-muted);
      margin-bottom: 1.1rem;
      line-height: 1.6;
    }
    .value-card ul {
      list-style: none;
      padding: 0;
    }
    .value-card ul li {
      font-size: 0.92rem;
      color: var(--body);
      padding: 0.4rem 0 0.4rem 1.4rem;
      position: relative;
      line-height: 1.5;
      border-top: 1px solid rgba(232,230,222,0.6);
    }
    .value-card ul li:first-child { border-top: none; padding-top: 0; }
    .value-card ul li:last-child { padding-bottom: 0; }
    .value-card ul li::before {
      content: '';
      position: absolute;
      left: 0; top: 0.95rem;
      width: 8px; height: 1px;
      background: var(--accent);
    }
    .value-card ul li:first-child::before { top: 0.55rem; }

    /* ============ TEAM ============ */
    .team {
      background: var(--ink);
      color: var(--text);
      padding: 6rem 0;
    }
    .team .section-header { display: flex; justify-content: space-between; align-items: end; max-width: none; gap: 4rem; margin-bottom: 3.5rem; }
    .team .section-header .left { max-width: 30ch; }
    .team .section-header .right { color: rgba(250,250,248,0.7); max-width: 50ch; font-size: 1rem; line-height: 1.65; }
    .team .section-header h2 { color: var(--text); }

    /* Founder Spotlight */
    .founder-spotlight {
      background: var(--surface);
      border: 1px solid var(--line-dark);
      border-left: 3px solid var(--accent);
      border-radius: 12px;
      padding: 2.5rem;
      margin-bottom: 3rem;
      display: grid;
      grid-template-columns: 360px 1fr;
      gap: 2.5rem;
      align-items: start;
    }
    .founder-photo {
      aspect-ratio: 1 / 1;
      border-radius: 10px;
      overflow: hidden;
      background: var(--ink-2);
    }
    .founder-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .founder-content .role {
      font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase;
      color: var(--accent); font-weight: 700; margin-bottom: 0.6rem;
    }
    .founder-content h3 {
      font-size: 2rem; font-weight: 800; letter-spacing: -0.02em;
      margin-bottom: 1.25rem; color: var(--text);
    }
    .founder-content p {
      color: rgba(250,250,248,0.78);
      font-size: 1rem; line-height: 1.7;
      margin-bottom: 1rem;
    }
    .founder-content p strong { color: var(--text); font-weight: 700; }
    .founder-content p a {
      color: var(--accent); text-decoration: none; font-weight: 600;
      border-bottom: 1px solid rgba(255,107,26,0.4);
    }
    .founder-content p a:hover { color: var(--accent-2); }
    .founder-tags {
      display: flex; flex-wrap: wrap; gap: 0.6rem;
      margin-top: 1.5rem; padding-top: 1.5rem;
      border-top: 1px solid var(--line-dark);
    }
    .founder-tag {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.4rem 0.85rem;
      background: rgba(255,107,26,0.1);
      color: var(--accent-2);
      border: 1px solid rgba(255,107,26,0.3);
      border-radius: 100px;
    }
    .founder-tag.cyan {
      background: rgba(46,190,212,0.1);
      color: var(--cyan-bright);
      border-color: rgba(46,190,212,0.35);
    }

    /* Team Grid */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
    .member {
      background: var(--surface);
      border: 1px solid var(--line-dark);
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.25s, border-color 0.25s;
      display: flex; flex-direction: column;
    }
    .member:hover {
      transform: translateY(-3px);
      border-color: var(--accent);
    }
    .photo-frame {
      aspect-ratio: 1 / 1;
      background: var(--ink-2);
      overflow: hidden;
    }
    .photo-frame img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .photo-placeholder {
      width: 100%; height: 100%;
      background: linear-gradient(135deg, var(--ink-2) 0%, #0F0F12 100%);
      display: flex; align-items: center; justify-content: center;
      position: relative;
    }
    .photo-placeholder::before {
      content: ''; position: absolute; inset: 0;
      background-image: repeating-linear-gradient(
        45deg,
        transparent 0px, transparent 14px,
        rgba(255,107,26,0.06) 14px, rgba(255,107,26,0.06) 15px
      );
    }
    .photo-placeholder .initials {
      font-size: 2.6rem;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: 0.02em;
      position: relative; z-index: 2;
    }
    .photo-placeholder .pending {
      position: absolute; bottom: 0.85rem; left: 0; right: 0;
      text-align: center;
      font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: rgba(250,250,248,0.4);
      z-index: 2;
    }
    .member-info { padding: 1.25rem 1.25rem 1.5rem; flex: 1; }
    .member-role {
      font-size: 0.65rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 700;
      margin-bottom: 0.4rem;
    }
    .member-role.cyan { color: var(--cyan-bright); }
    .member-name {
      font-size: 1.08rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      margin-bottom: 0.65rem;
      color: var(--text);
    }
    .member-bio {
      font-size: 0.85rem;
      color: rgba(250,250,248,0.7);
      line-height: 1.55;
    }
    .member-credentials {
      margin-top: 0.9rem;
      padding-top: 0.85rem;
      border-top: 1px solid var(--line-dark);
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      color: var(--text-muted);
      font-weight: 500;
      line-height: 1.4;
    }
    .member-credentials strong {
      color: var(--text);
      font-weight: 700;
    }
    .member-credentials.cyan strong { color: var(--cyan-bright); }

    /* ============ CTA ============ */
    .cta {
      background: var(--accent);
      color: var(--ink);
      padding: 5.5rem 0;
      position: relative;
      overflow: hidden;
    }
    .cta-inner {
      max-width: 1100px; margin: 0 auto; padding: 0 1.75rem;
      position: relative; z-index: 2;
      display: grid; grid-template-columns: 1.3fr 1fr;
      gap: 3rem; align-items: center;
    }
    .cta h2 {
      font-size: clamp(1.9rem, 3.6vw, 2.9rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.05;
    }
    .cta-side p {
      font-size: 1.02rem;
      margin-bottom: 1.5rem;
      color: rgba(10,10,11,0.85);
      line-height: 1.6;
    }
    .cta-button {
      display: inline-block;
      background: var(--ink); color: var(--text);
      padding: 0.9rem 1.6rem;
      text-decoration: none;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: 700;
      transition: background 0.2s;
    }
    .cta-button:hover { background: #2A2A30; }
    .cta-contact {
      margin-top: 1.5rem;
      font-size: 0.88rem;
      line-height: 1.85;
      color: rgba(10,10,11,0.78);
    }
    .cta-contact a { color: var(--ink); font-weight: 700; text-decoration: none; }

    /* ============ FOOTER ============ */
    footer {
      background: var(--ink);
      color: var(--text-muted);
      padding: 2.25rem 0;
      font-size: 0.85rem;
      border-top: 1px solid var(--line-dark);
    }
    .footer-inner {
      max-width: 1240px; margin: 0 auto; padding: 0 1.75rem;
      display: flex; justify-content: space-between; align-items: center;
      gap: 2rem; flex-wrap: wrap;
    }
    .footer-slogan {
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 0.78rem;
      color: var(--cyan-bright);
    }
    .footer-slogan span { color: var(--cyan-bright); }

    /* ============ RESPONSIVE ============ */
    @media (max-width: 1080px) {
      .team-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 880px) {
      .nav-links { display: none; }
      .founder-spotlight { grid-template-columns: 1fr; gap: 2rem; }
      .founder-photo { max-width: 320px; }
      .team .section-header { flex-direction: column; align-items: start; gap: 1.5rem; }
      .values-grid { grid-template-columns: 1fr; }
      .cta-inner { grid-template-columns: 1fr; }
      .team-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (max-width: 560px) {
      .container { padding: 0 1.25rem; }
      .nav-inner { padding: 0.85rem 1.25rem; }
      .hero { padding: 4.5rem 0 3.5rem; }
      .founder-spotlight { padding: 1.75rem; }
      .team-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- ============ HERO ============ -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="eyebrow">About Us</div>
      <h1>Built by people who actually <span class="accent">know the business.</span></h1>
      <p class="hero-lede">
        TigerLeads.AI wasn't built by marketers who decided construction looked like a profitable
        vertical. It was built by a permit expediter and entrepreneur who has spent his entire career
        inside the industry — and who got tired of watching contractors, sub-contractors, tradesmen,
        and suppliers waste money on advertising and lead services that never understood the work.
      </p>
      <div class="hero-slogan">Chase Every Lead. <span>Strike First.</span></div>
    </div>
  </section>

  <!-- ============ STORY ============ -->
  <section class="story">
    <div class="container story-inner">
      <div class="eyebrow">Our Story</div>
      <h2>Two decades inside the construction pipeline.</h2>
      <p>
        Twenty-one years ago, our founder Marshall Chmura started <a href="https://alliancepermitting.com" target="_blank">Alliance Permitting</a>
        — a nationwide permit expediting company that has guided <strong>tens of thousands of commercial and residential projects</strong>
        through the full lifecycle of construction, from <strong>Design to CO</strong>. Two decades sitting between architects, contractors,
        sub-contractors, tradesmen, suppliers, and building departments showed Marshall something most people in this industry
        never get the chance to see: how a project <em>actually</em> moves.
      </p>
      <p>
        It also showed him a problem. The construction industry is fragmented. Lead generation is fragmented.
        Marketing is fragmented. The people doing the work — and the people who need the work done — spend a
        fortune trying to find each other through ads, broker lists, and middlemen who don't understand the trades.
        Most of that spend never turns into revenue.
      </p>
      <p>
        Marshall wanted to bring it all together. <strong>One platform. Design to CO.</strong> Contractors,
        sub-contractors, tradesmen, suppliers, and the projects connecting them — without the wasted ad spend
        and the brokered lead lists.
      </p>
      <div class="story-quote">For most of his career, that platform wasn't technically possible. <span class="cyan">AI changed that.</span></div>
      <p>
        TigerLeads.AI is the answer. It's a steep climb to bring an entire industry under one roof — and we're
        not afraid of the mountain.
      </p>
    </div>
  </section>

  <!-- ============ MISSION ============ -->
  <section class="mission">
    <div class="container mission-inner">
      <div class="eyebrow cyan">Our Mission</div>
      <h2>Get contractors, sub-contractors, tradesmen, and suppliers from <span class="accent">"there's a project out there"</span> to <span class="accent cyan">"I'm on the phone with the customer"</span> — faster than anyone else.</h2>
      <p class="mission-sub">
        Cleaner data. Real opportunities. Verified contacts. No wasted ad spend, no broker markups, no mystery
        pricing. Just a direct line between the people doing the work and the people who need it done.
      </p>
    </div>
  </section>

  <!-- ============ VALUES ============ -->
  <section class="values">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">What We Believe</div>
        <h2>Four principles. No exceptions.</h2>
      </div>
      <div class="values-grid">

        <div class="value-card">
          <span class="value-num">01 — Quality</span>
          <h3>Quality beats quantity.</h3>
          <p>A hundred junk leads aren't worth one verified one. Every opportunity on TigerLeads.AI gets vetted before it ever hits your dashboard.</p>
          <ul>
            <li>Automated and manual review on every lead before it goes live</li>
            <li>Verified customer data — name, phone, email, and full project scope</li>
            <li>Spam, duplicates, and dead leads filtered out at the source</li>
            <li>Honest project specs so you know what you're buying</li>
          </ul>
        </div>

        <div class="value-card cyan-card">
          <span class="value-num">02 — Speed</span>
          <h3>Speed is a feature.</h3>
          <p>The first contractor to call usually wins the job. We cut every second of lag between a project hitting the market and you having the customer's number.</p>
          <ul>
            <li>Instant alerts on new high-intent jobs in your trade and territory</li>
            <li>One-click unlock — no bidding, no waiting, no callback queue</li>
            <li>24/7 access across all 50 states and 300+ jurisdictions</li>
            <li>Built around the truth that the early call wins the contract</li>
          </ul>
        </div>

        <div class="value-card">
          <span class="value-num">03 — Fairness</span>
          <h3>Pay for what you use.</h3>
          <p>No bloated subscriptions, no long-term lock-ins, no hidden fees. Credits unlock the leads you choose, and the math always works in your favor.</p>
          <ul>
            <li>Credit-based pricing — only pay for the leads you actually want</li>
            <li>Unlock costs shown up front, before you ever spend a credit</li>
            <li>First-purchase bonuses, stay-active rewards, and boost packs</li>
            <li>Transparent plans, transparent pricing, transparent everything</li>
          </ul>
        </div>

        <div class="value-card cyan-card">
          <span class="value-num">04 — Independence</span>
          <h3>Independence matters.</h3>
          <p>Most of our customers are small and mid-sized contractors, sub-contractors, tradesmen, and suppliers competing against companies ten times their size. Our job is to level that field.</p>
          <ul>
            <li>Direct customer contact info on every unlock — no gatekeepers</li>
            <li>Compete with national firms without their advertising budgets</li>
            <li>You own the customer relationship from the first call onward</li>
            <li>Built to work with you, not take a cut of every job you win</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ TEAM ============ -->
  <section class="team">
    <div class="container">
      <div class="section-header">
        <div class="left">
          <div class="eyebrow cyan">The Team</div>
          <h2>The people behind the platform.</h2>
        </div>
        <p class="right">
          A focused team of builders, engineers, designers, and operators based in Green Cove Springs, Florida —
          working on the platform every day so contractors, sub-contractors, tradesmen, and suppliers don't have
          to. We aggregate project and permit activity across 300+ jurisdictions and serve every state in the country.
        </p>
      </div>

      <!-- FOUNDER SPOTLIGHT -->
      <div class="founder-spotlight">
        <div class="founder-photo">
          <img src="images/0iSn5BtMYofoGQw26VPQQm2AtE.jpg" alt="Marshall Chmura, Founder of TigerLeads.AI" />
        </div>
        <div class="founder-content">
          <div class="role">Founder &amp; CEO</div>
          <h3>Marshall Chmura</h3>
          <p>
            Marshall Chmura has spent his entire adult career inside the construction industry. Twenty-one years
            ago he founded <strong>Alliance Permitting</strong> — a nationwide permit expediting company that has
            guided <strong>tens of thousands of commercial and residential projects</strong> from <strong>Design to CO</strong>.
            From a single Florida office to clients in jurisdictions across the country, Alliance Permitting became one
            of the trusted names in an industry where speed and accuracy decide everything.
          </p>
          <p>
            That experience gave Marshall an unusually complete view of how construction actually works. Two decades
            sitting between architects, contractors, sub-contractors, tradesmen, suppliers, and building departments
            showed him exactly where projects stall, what every party needs at every stage, and where money gets
            burned on advertising and lead services that don't understand the trades.
          </p>
          <p>
            Marshall is also the founder of <a href="https://alliancedatasolutions.ai" target="_blank">Alliance Data Solutions, LLC</a>,
            the parent company behind TigerLeads.AI and the data-and-leads infrastructure platform serving the wider
            construction market. <strong>TigerLeads.AI is the customer-facing side of that vision</strong> — AI-powered
            project intelligence built to connect contractors, sub-contractors, tradesmen, and suppliers to verified,
            high-intent opportunities in their region, without the bloated ad spend and broker markups that have
            drained budgets for years.
          </p>
          <p>
            He's also a licensed Florida real estate professional, giving him an additional vantage point on the
            property, development, and investment activity that drives construction demand. He still sets the
            long-term direction of the company — and he's still the person most likely to answer the phone when
            an early customer calls.
          </p>
          <div class="founder-tags">
            <span class="founder-tag">Alliance Permitting · Founder</span>
            <span class="founder-tag cyan">Alliance Data Solutions · Founder</span>
            <span class="founder-tag cyan">TigerLeads.AI · Founder</span>
            <span class="founder-tag cyan">FL Real Estate Licensed</span>
            <span class="founder-tag">21+ Years in Construction</span>
          </div>
        </div>
      </div>

      <!-- TEAM GRID -->
      <div class="team-grid">

        <article class="member">
          <div class="photo-frame">
            <img src="images/3r3O32OI8JSVBDUZ7TKfGVMOyc.jpg" alt="Elaina Chmura, Founder" />
          </div>
          <div class="member-info">
            <div class="member-role">Founder</div>
            <div class="member-name">Elaina Chmura</div>
            <p class="member-bio">
              Elaina co-founded TigerLeads.AI alongside Marshall and leads the company's brand, customer experience,
              and operational culture. She owns the end-to-end experience contractors, sub-contractors, tradesmen,
              and suppliers have with the platform — from first marketing touchpoint and onboarding walkthrough to
              the day-to-day moments inside the dashboard. Her focus is making sure the messaging matches the product,
              the product matches what customers actually need, and the people behind it remain reachable and
              accountable. She also helps shape the partnership and growth strategy connecting Alliance Permitting,
              Alliance Data Solutions, and TigerLeads.AI under one cohesive vision.
            </p>
          </div>
        </article>

        <article class="member">
          <div class="photo-frame">
            <img src="images/M43r7XvLKAAJZs46WJc0GI5VPkk.jpg" alt="Weston Senetore, Web Development" />
          </div>
          <div class="member-info">
            <div class="member-role">Web Development</div>
            <div class="member-name">Weston Senetore</div>
            <p class="member-bio">
              Weston leads web development at TigerLeads.AI, owning the customer-facing platform that contractors,
              sub-contractors, tradesmen, and suppliers interact with every day. He builds and maintains the public
              site, the in-app dashboard, the credit and subscription flows, and the team-seat management interfaces —
              ensuring the experience is fast, reliable, and intuitive across desktop and mobile, in any region and
              any browser. His work is the layer that turns the data and AI infrastructure built by the engineering
              team into the polished, production-grade product customers see when they sign up, browse leads, and
              unlock opportunities.
            </p>
          </div>
        </article>

        <article class="member">
          <div class="photo-frame">
            <img src="images/wXP3JMzW2PLZgoKXwIOJCllr85U.jpg" alt="Deva Atturu, AI Specialist" />
          </div>
          <div class="member-info">
            <div class="member-role cyan">AI Specialist</div>
            <div class="member-name">Deva Atturu</div>
            <p class="member-bio">
              Deva brings 4+ years of experience building production AI and data systems across financial services
              and applied research. At Alliance Data Solutions, he develops agentic GenAI workflows that pair
              Claude-driven automation with Python-based scrapers and REST API integrations — transforming messy
              external data into the clean, analytics-ready inputs that power TigerLeads.AI's lead-matching engine.
            </p>
            <div class="member-credentials cyan">
              <strong>M.S. Computer Science</strong><br>
              Florida Institute of Technology
            </div>
          </div>
        </article>

        <article class="member">
          <div class="photo-frame">
            <div class="photo-placeholder">
              <div class="initials">MF</div>
              <div class="pending">Photo Pending</div>
            </div>
          </div>
          <div class="member-info">
            <div class="member-role cyan">AI Engineer</div>
            <div class="member-name">Mike Finocchiaro</div>
            <p class="member-bio">
              Mike is the AI Engineer behind TigerLeads.AI's data infrastructure, building the systems that ingest,
              verify, and route project intelligence across the platform. He owns the data pipelines that pull permit
              and project signals from 300+ jurisdictions, the automated verification layer that filters out spam,
              duplicates, and dead leads before they reach a customer dashboard, and the production infrastructure
              that keeps the platform running 24/7 across all 50 states. His work converts the raw, fragmented data
              published by hundreds of disparate municipal systems into the clean, high-intent leads that contractors,
              sub-contractors, tradesmen, and suppliers can actually act on.
            </p>
          </div>
        </article>

        <article class="member">
          <div class="photo-frame">
            <img src="images/rreCXBv3uoTMkD8RhRnmXJlG4.jpg" alt="Sydney Cox, Operations Manager" />
          </div>
          <div class="member-info">
            <div class="member-role">Operations Manager</div>
            <div class="member-name">Sydney Cox</div>
            <p class="member-bio">
              Sydney leads day-to-day operations at TigerLeads.AI, coordinating the moving parts that keep a fast-moving
              lead platform running cleanly. She manages internal workflow between the engineering, AI, and customer-facing
              teams, oversees customer support and account escalations, and serves as the operational connective tissue
              between Alliance Data Solutions and the contractors, sub-contractors, tradesmen, and suppliers using the
              platform every day. From onboarding and credit and subscription questions to coordinating release rollouts
              and tracking platform performance, Sydney makes sure the company runs on time and the experience customers
              have is the one the team intends to deliver.
            </p>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="cta">
    <div class="cta-inner">
      <h2>Ready to chase every lead?</h2>
      <div class="cta-side">
        <p>Join thousands of contractors, sub-contractors, tradesmen, and suppliers finding better opportunities every day. Start your free trial — no credit card required.</p>
        <a href="https://app.tigerleads.ai/" class="cta-button">Get Started Free →</a>
        <div class="cta-contact">
          <strong>Alliance Data Solutions, LLC</strong><br>
          712 N Pine Ave, Suite B · Green Cove Springs, FL 32043<br>
          <a href="tel:+18554784290">(855) 478-4290</a> · <a href="mailto:support@tigerleads.ai">support@tigerleads.ai</a>
        </div>
      </div>
    </div>
  </section>
</body>
</html>`,id:`SrG94s9iN`,layoutId:`SrG94s9iN`,radius:`0px`,style:{width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})}),a(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-wvKWE.framer-12dgdno, .framer-wvKWE .framer-12dgdno { display: block; }`,`.framer-wvKWE.framer-a88928 { align-content: center; align-items: center; background-color: var(--token-3231f815-59bd-4709-9984-27f462c2029e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-wvKWE .framer-1t9jmkl-container { flex: none; height: auto; position: relative; width: 100%; }`],`framer-wvKWE`),V=B,B.displayName=`Page`,B.defaultProps={height:7425,width:1200},_(B,[{explicitInter:!0,fonts:[]},...M],{supportsExplicitInterCodegen:!0}),H={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FrameryU9Ros53P`,slots:[],annotations:{framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerDisplayContentsDiv:`false`,framerContractVersion:`1`,framerComponentViewportWidth:`true`,framerIntrinsicHeight:`7425`,framerImmutableVariables:`true`,framerAutoSizeImages:`true`,framerIntrinsicWidth:`1200`,framerAcceptsLayoutTemplate:`true`,framerLayoutTemplateFlowEffect:`true`,framerResponsiveScreen:`true`,framerScrollSections:`false`,framerColorSyntax:`true`}},__FramerMetadata__:{type:`variable`}}}}))();export{H as __FramerMetadata__,V as default,P as queryParamNames};
//# sourceMappingURL=2ptwug8WrxYj4i2TEgtHtjTBHbErSLV57xRCd0ZxdNY.DNJBYV5w.mjs.map