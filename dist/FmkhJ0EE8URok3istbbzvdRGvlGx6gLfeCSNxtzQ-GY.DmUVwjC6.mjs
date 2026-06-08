import{t as e}from"./rolldown-runtime.fXUlgfaW.mjs";import{A as t,C as n,D as r,_ as i,c as a,h as o,k as s,l as c,o as l}from"./react.BM0wrt_Q.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BOnp_uBl.mjs";import{B as m,J as h,M as g,O as _,a as v,ct as y,dt as b,ft as x,ht as S,i as C,mt as w,pt as T,u as E,xt as D}from"./framer.CzpY7Hh7.mjs";import{n as O,t as k}from"./Embed.BvGIe1GO.mjs";import{n as A,r as j}from"./WrCACfeIv.BQqnGfAl.mjs";var M,N,P,F,I,L,R,z,B,V,H,U;e((()=>{l(),h(),p(),n(),O(),A(),M=m(k),N={lzuNR_UIk:`(min-width: 1200px)`,XB2roKoDF:`(max-width: 1199.98px)`},P=[],F=`framer-nW3le`,I={lzuNR_UIk:`framer-v-1l0mr12`,XB2roKoDF:`framer-v-1la0w0n`},L=(e,t,n)=>e&&t?`position`:n,R={Desktop:`lzuNR_UIk`,Phone:`XB2roKoDF`},z=({value:e})=>T()?null:a(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),B=({height:e,id:t,width:n,...r})=>({...r,variant:R[r.variant]??r.variant??`lzuNR_UIk`}),V=D(o(function(e,n){let o=r(null),l=n??o,p=i(),{activeLocale:m,setLocale:h}=w();y();let{style:_,className:T,layoutId:D,variant:O,...A}=B(e);S(t(()=>j({},m),[m]));let[M,P]=x(O,N,!1),V=g(F),H=s(E)?.isLayoutTemplate,U=L(H,!!s(d)?.transition?.layout);return b({}),a(E.Provider,{value:{activeVariantId:M,humanReadableVariantMap:R,primaryVariantId:`lzuNR_UIk`,variantClassNames:I},children:c(f,{id:D??p,children:[a(z,{value:`html body { background: var(--token-3231f815-59bd-4709-9984-27f462c2029e, rgb(255, 255, 255)); }`}),a(u.div,{...A,className:g(V,`framer-1l0mr12`,T),ref:l,style:{..._},children:a(C,{children:a(v,{className:`framer-1hi58ni-container`,id:`1hi58ni`,isAuthoredByUser:!0,isModuleExternal:!0,layout:U,nodeId:`oTeFmhHyN`,scopeId:`WrCACfeIv`,children:a(k,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Contact TigerLeads.AI — Get in Touch</title>
<meta name="description" content="Reach the right team at TigerLeads.AI fast. Smart contact form routes your message to sales, support, partnerships, or feedback automatically." />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0b;
    --bg-elev: #121214;
    --bg-card: #161618;
    --bg-input: #0f0f11;
    --border: #26262a;
    --border-strong: #34343a;
    --text: #f5f5f7;
    --text-dim: #9a9aa3;
    --text-mute: #6a6a73;
    --accent: #FF6A1A;          /* tiger orange */
    --accent-hot: #FF8A3D;
    --accent-deep: #C84A06;
    --accent-glow: rgba(255, 106, 26, 0.18);
    --success: #2fbf71;
    --warn: #f0b429;
    --danger: #e5484d;
    --radius: 10px;
    --radius-lg: 16px;
    --shadow-card: 0 1px 0 rgba(255,255,255,0.03), 0 24px 48px -24px rgba(0,0,0,0.6);
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Manrope', system-ui, -apple-system, sans-serif;
    font-size: 16px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,106,26,0.08), transparent 60%),
      radial-gradient(ellipse 60% 40% at 90% 100%, rgba(255,106,26,0.04), transparent 60%);
  }

  /* tiger-stripe accent — subtle texture nod to brand */
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: repeating-linear-gradient(
      105deg,
      transparent 0,
      transparent 80px,
      rgba(255,106,26,0.012) 80px,
      rgba(255,106,26,0.012) 82px
    );
    z-index: 0;
  }

  .nav {
    position: relative;
    z-index: 2;
    padding: 22px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    background: rgba(10,10,11,0.7);
    backdrop-filter: blur(8px);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: var(--text);
  }
  .brand-mark {
    width: 44px; height: 44px;
    border-radius: 8px;
    background: #000;
    overflow: hidden;
    display: grid; place-items: center;
    box-shadow: 0 0 0 1px var(--border-strong), 0 6px 16px -6px rgba(255,106,26,0.5);
  }
  .brand-mark img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  .brand-wordmark {
    height: 28px;
    display: block;
  }
  .brand-wordmark img {
    height: 100%;
    width: auto;
    display: block;
  }
  .nav-cta {
    color: var(--text-dim);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
  .nav-cta:hover { color: var(--text); }

  .page {
    position: relative;
    z-index: 1;
    max-width: 1100px;
    margin: 0 auto;
    padding: 56px 24px 80px;
  }

  .hero {
    text-align: center;
    margin-bottom: 48px;
  }
  .eyebrow {
    display: inline-block;
    font-size: 11px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 700;
    margin-bottom: 16px;
    padding: 6px 12px;
    border: 1px solid var(--accent-glow);
    border-radius: 999px;
    background: var(--accent-glow);
  }
  .hero h1 {
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.05;
    letter-spacing: -1.5px;
    margin: 0 0 16px;
  }
  .hero h1 .accent { color: var(--accent); }
  .hero p {
    color: var(--text-dim);
    font-size: 17px;
    max-width: 580px;
    margin: 0 auto;
  }
  .hero-tiger {
    width: 96px;
    height: 96px;
    margin: 0 auto 20px;
    border-radius: 14px;
    overflow: hidden;
    background: #000;
    box-shadow: 0 0 0 1px var(--border-strong),
                0 0 60px -10px rgba(255,106,26,0.45),
                0 18px 40px -18px rgba(0,0,0,0.7);
    animation: tiger-glow 3.5s ease-in-out infinite;
  }
  .hero-tiger img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
  }
  @keyframes tiger-glow {
    0%, 100% { box-shadow: 0 0 0 1px var(--border-strong), 0 0 60px -10px rgba(255,106,26,0.45), 0 18px 40px -18px rgba(0,0,0,0.7); }
    50%      { box-shadow: 0 0 0 1px var(--border-strong), 0 0 80px -10px rgba(255,106,26,0.65), 0 18px 40px -18px rgba(0,0,0,0.7); }
  }

  .layout {
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 32px;
    align-items: start;
  }
  @media (max-width: 560px) {
    .brand-wordmark { display: none; }
    .nav { padding: 16px 18px; }
  }
  @media (max-width: 920px) {
    .layout { grid-template-columns: 1fr; }
  }

  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 32px;
    box-shadow: var(--shadow-card);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  .full { grid-column: 1 / -1; }

  label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 7px;
    letter-spacing: 0.1px;
  }
  label .req { color: var(--accent); margin-left: 2px; }
  label .hint { color: var(--text-mute); font-weight: 400; margin-left: 6px; font-size: 12px; }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  select,
  textarea {
    width: 100%;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    color: var(--text);
    padding: 12px 14px;
    font: inherit;
    font-size: 15px;
    transition: border-color .15s ease, box-shadow .15s ease, background .15s ease;
  }
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-glow);
    background: #131316;
  }
  input::placeholder, textarea::placeholder { color: var(--text-mute); }
  textarea { resize: vertical; min-height: 140px; font-family: inherit; }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1L6 6L11 1' stroke='%23FF6A1A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>");
    background-repeat: no-repeat;
    background-position: right 14px center;
    padding-right: 38px;
    cursor: pointer;
  }
  select:disabled {
    color: var(--text-mute);
    cursor: not-allowed;
    opacity: 0.55;
  }
  select option { background: var(--bg-card); color: var(--text); }

  /* Cascade animation */
  .cascade-row {
    grid-column: 1 / -1;
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transform: translateY(-4px);
    transition: max-height .35s ease, opacity .25s ease .05s, transform .25s ease;
  }
  .cascade-row.visible {
    max-height: 220px;
    opacity: 1;
    transform: translateY(0);
  }

  /* Deflection / instant-answer card */
  .deflect {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, rgba(255,106,26,0.08), rgba(255,106,26,0.02));
    border: 1px solid rgba(255,106,26,0.28);
    border-radius: var(--radius);
    padding: 18px 20px;
    display: none;
    animation: slidein .3s ease;
  }
  .deflect.visible { display: block; }
  .deflect-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 8px;
  }
  .deflect-tag::before {
    content: "";
    width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 8px var(--accent);
  }
  .deflect h4 {
    font-family: 'Archivo', sans-serif;
    margin: 0 0 8px;
    font-size: 17px;
    font-weight: 700;
    color: var(--text);
  }
  .deflect p {
    margin: 0 0 12px;
    color: var(--text-dim);
    font-size: 14.5px;
    line-height: 1.55;
  }
  .deflect-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .deflect-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid var(--border-strong);
    background: var(--bg-elev);
    color: var(--text);
    cursor: pointer;
    transition: all .15s ease;
    font-family: inherit;
  }
  .deflect-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  .deflect-btn.primary {
    background: var(--accent);
    color: #0a0a0b;
    border-color: var(--accent);
  }
  .deflect-btn.primary:hover {
    background: var(--accent-hot);
    color: #0a0a0b;
  }

  /* Routing badge — shows where message is going */
  .routing {
    grid-column: 1 / -1;
    display: none;
    align-items: center;
    gap: 12px;
    padding: 12px 14px;
    background: var(--bg-elev);
    border: 1px dashed var(--border-strong);
    border-radius: var(--radius);
    font-size: 13px;
    color: var(--text-dim);
    animation: slidein .3s ease;
  }
  .routing.visible { display: flex; }
  .routing-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--success);
    box-shadow: 0 0 10px var(--success);
    flex-shrink: 0;
  }
  .routing-team {
    color: var(--text);
    font-weight: 600;
  }
  .routing-time {
    margin-left: auto;
    font-size: 12px;
    color: var(--text-mute);
  }

  @keyframes slidein {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Optional context fields (e.g., Lead ID) */
  .context-field {
    grid-column: 1 / -1;
    display: none;
    animation: slidein .3s ease;
  }
  .context-field.visible { display: block; }

  .checkbox-row {
    grid-column: 1 / -1;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 4px;
  }
  .checkbox-row input[type="checkbox"] {
    margin-top: 3px;
    accent-color: var(--accent);
    width: 16px; height: 16px;
    cursor: pointer;
  }
  .checkbox-row label {
    margin: 0;
    font-weight: 400;
    color: var(--text-dim);
    font-size: 14px;
    cursor: pointer;
  }
  .checkbox-row a { color: var(--accent); text-decoration: none; }
  .checkbox-row a:hover { text-decoration: underline; }

  .submit-row {
    grid-column: 1 / -1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    flex-wrap: wrap;
  }
  .submit-note {
    font-size: 12.5px;
    color: var(--text-mute);
  }
  .btn-submit {
    background: linear-gradient(180deg, var(--accent-hot) 0%, var(--accent) 100%);
    color: #0a0a0b;
    border: none;
    padding: 14px 28px;
    border-radius: var(--radius);
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .15s ease;
    box-shadow: 0 8px 20px -8px var(--accent), inset 0 1px 0 rgba(255,255,255,0.25);
  }
  .btn-submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px -8px var(--accent), inset 0 1px 0 rgba(255,255,255,0.3);
  }
  .btn-submit:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* sidebar */
  .side-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
  }
  .side-card + .side-card { margin-top: 16px; }
  .side-card h3 {
    font-family: 'Archivo', sans-serif;
    font-size: 15px;
    margin: 0 0 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    color: var(--text);
  }
  .side-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 10px 0;
    border-top: 1px solid var(--border);
    font-size: 14px;
    color: var(--text-dim);
  }
  .side-item:first-of-type { border-top: none; padding-top: 0; }
  .side-item strong { display: block; color: var(--text); font-weight: 600; margin-bottom: 2px; font-size: 13.5px; }
  .side-item a { color: var(--accent); text-decoration: none; }
  .side-item a:hover { text-decoration: underline; }
  .side-icon {
    width: 28px; height: 28px;
    border-radius: 7px;
    background: var(--bg-elev);
    border: 1px solid var(--border-strong);
    display: grid; place-items: center;
    flex-shrink: 0;
    color: var(--accent);
  }

  .response-times .rt {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 13.5px;
    color: var(--text-dim);
    border-top: 1px solid var(--border);
  }
  .response-times .rt:first-of-type { border-top: none; padding-top: 0; }
  .response-times .rt strong { color: var(--text); font-weight: 600; }

  /* Success screen */
  .success-screen {
    display: none;
    text-align: center;
    padding: 48px 32px;
  }
  .success-screen.visible { display: block; }
  .success-mark {
    width: 64px; height: 64px;
    border-radius: 50%;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, var(--accent), var(--accent-deep));
    display: grid; place-items: center;
    color: #0a0a0b;
    font-size: 32px;
    font-weight: 900;
    box-shadow: 0 0 40px var(--accent-glow);
  }
  .success-screen h2 {
    font-family: 'Archivo', sans-serif;
    font-size: 28px;
    margin: 0 0 12px;
    letter-spacing: -0.5px;
  }
  .success-screen p { color: var(--text-dim); margin: 0 0 8px; }
  .success-meta {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 16px;
    background: var(--bg-elev);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 13px;
    color: var(--text-dim);
  }
  .success-meta strong { color: var(--accent); }

  footer {
    text-align: center;
    padding: 32px 24px;
    color: var(--text-mute);
    font-size: 13px;
    border-top: 1px solid var(--border);
    margin-top: 40px;
  }
  .footer-wordmark {
    margin-bottom: 12px;
  }
  .footer-wordmark img {
    height: 38px;
    width: auto;
    display: inline-block;
    opacity: 0.95;
  }
</style>
</head>
<body>

<main class="page">

  <header class="hero">
    <div class="hero-tiger"><img src="data:image/jpeg;base64,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" alt="" /></div>
    <span class="eyebrow">Contact · Chase Every Lead. Strike First.</span>
    <h1>Get in <span class="accent">Touch.</span></h1>
    <p>Tell us what you need and we'll route you to the right person — fast. Most questions get answered before you even hit send.</p>
  </header>

  <div class="layout">

    <section class="card">
      <form id="contactForm" novalidate>
        <div class="form-grid">

          <div>
            <label for="firstName">First Name<span class="req">*</span></label>
            <input id="firstName" name="firstName" type="text" required autocomplete="given-name" />
          </div>

          <div>
            <label for="lastName">Last Name<span class="req">*</span></label>
            <input id="lastName" name="lastName" type="text" required autocomplete="family-name" />
          </div>

          <div>
            <label for="email">Email Address<span class="req">*</span></label>
            <input id="email" name="email" type="email" required autocomplete="email" />
          </div>

          <div>
            <label for="phone">Phone Number<span class="hint">(optional)</span></label>
            <input id="phone" name="phone" type="tel" autocomplete="tel" />
          </div>

          <div class="full">
            <label for="company">Company Name<span class="hint">(optional)</span></label>
            <input id="company" name="company" type="text" autocomplete="organization" />
          </div>

          <!-- LEVEL 1 -->
          <div class="full">
            <label for="subject">What can we help you with?<span class="req">*</span></label>
            <select id="subject" name="subject" required>
              <option value="">— Select a subject —</option>
              <option value="general">General Inquiry</option>
              <option value="sales">Sales Question</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <!-- LEVEL 2 -->
          <div id="level2Wrap" class="cascade-row">
            <label for="level2">More specifically…<span class="req">*</span></label>
            <select id="level2" name="level2"></select>
          </div>

          <!-- LEVEL 3 -->
          <div id="level3Wrap" class="cascade-row">
            <label for="level3">And which one?<span class="req">*</span></label>
            <select id="level3" name="level3"></select>
          </div>

          <!-- LEVEL 4 -->
          <div id="level4Wrap" class="cascade-row">
            <label for="level4">Last detail<span class="req">*</span></label>
            <select id="level4" name="level4"></select>
          </div>

          <!-- DEFLECTION CARD (instant answer) -->
          <div id="deflectCard" class="deflect">
            <div class="deflect-tag">Instant Answer</div>
            <h4 id="deflectTitle"></h4>
            <p id="deflectBody"></p>
            <div class="deflect-actions" id="deflectActions"></div>
          </div>

          <!-- CONTEXT FIELD (e.g., Lead ID) -->
          <div id="contextField" class="context-field">
            <label for="contextInput" id="contextLabel">Reference / Lead ID</label>
            <input id="contextInput" name="contextInput" type="text" placeholder="" />
          </div>

          <!-- ROUTING BADGE -->
          <div id="routingBadge" class="routing">
            <span class="routing-dot"></span>
            <div>
              Routing to <span class="routing-team" id="routingTeam">—</span>
            </div>
            <span class="routing-time" id="routingTime"></span>
          </div>

          <div class="full">
            <label for="message">Your Message<span class="req">*</span></label>
            <textarea id="message" name="message" required placeholder="Tell us a bit more so we can help you faster…"></textarea>
          </div>

          <div class="checkbox-row">
            <input id="agree" name="agree" type="checkbox" required />
            <label for="agree">
              I agree to the
              <a href="https://tigerleads.ai/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>
              and
              <a href="https://tigerleads.ai/terms-of-service" target="_blank" rel="noopener">Terms of Service</a>.
            </label>
          </div>

          <div class="submit-row">
            <span class="submit-note">We'll never share your info. You'll get a confirmation email immediately.</span>
            <button type="submit" class="btn-submit" id="submitBtn">Send Message →</button>
          </div>

        </div>

        <!-- hidden routing tag (sent to backend / mail-server filter) -->
        <input type="hidden" id="routingTag" name="routingTag" value="" />
        <input type="hidden" id="routeEmail" name="routeEmail" value="" />
        <input type="hidden" id="priority" name="priority" value="" />
      </form>

      <!-- success state -->
      <div class="success-screen" id="successScreen">
        <div class="success-mark">✓</div>
        <h2>Message Received.</h2>
        <p>We've routed your inquiry to the right team and sent you a confirmation email.</p>
        <p>Tiger spotted. We'll strike fast.</p>
        <div class="success-meta">
          Routed to <strong id="successTeam"></strong> · Expected reply <strong id="successTime"></strong>
        </div>
      </div>
    </section>

    <aside>
      <div class="side-card">
        <h3>Skip the Form</h3>
        <div class="side-item">
          <div class="side-icon">📧</div>
          <div>
            <strong>Support</strong>
            <a href="mailto:accounts@tigerleads.ai">accounts@tigerleads.ai</a>
          </div>
        </div>
        <div class="side-item">
          <div class="side-icon">💼</div>
          <div>
            <strong>Sales</strong>
            <a href="mailto:accounts@tigerleads.ai">accounts@tigerleads.ai</a>
          </div>
        </div>
        <div class="side-item">
          <div class="side-icon">🤝</div>
          <div>
            <strong>Partnerships</strong>
            <a href="mailto:accounts@tigerleads.ai">accounts@tigerleads.ai</a>
          </div>
        </div>
        <div class="side-item">
          <div class="side-icon">📞</div>
          <div>
            <strong>Phone</strong>
            <a href="tel:+18554784290">(855) 478-4290</a>
          </div>
        </div>
      </div>

      <div class="side-card response-times">
        <h3>Response Times</h3>
        <div class="rt"><span>Sales</span><strong>&lt; 4 business hrs</strong></div>
        <div class="rt"><span>Technical Support</span><strong>&lt; 1 business day</strong></div>
        <div class="rt"><span>Partnerships</span><strong>2–3 business days</strong></div>
        <div class="rt"><span>General / Feedback</span><strong>2–3 business days</strong></div>
      </div>

      <div class="side-card">
        <h3>Office</h3>
        <div class="side-item">
          <div class="side-icon">📍</div>
          <div>
            <strong>Alliance Data Solutions</strong>
            712 N Pine Ave., Ste #B<br/>
            Green Cove Springs, FL 32043
          </div>
        </div>
      </div>
    </aside>

  </div>
</main>

<script>
/* =====================================================================
   FUNNEL CONFIG
   ---------------------------------------------------------------------
   This is the single source of truth for the cascading subject system.
   Each leaf can carry:
     - route:    email address the form should send to
     - tag:      machine-readable tag for backend / auto-responder rules
     - team:     human label shown in the routing badge
     - time:     expected response time
     - prefill:  message body pre-populated for the user
     - deflect:  optional { title, body, actions[] } shown as instant answer
     - context:  optional { label, placeholder } extra field (e.g., Lead ID)
     - children: nested options for deeper levels
   To add or edit options, edit this object only — no other code changes.
===================================================================== */
const FUNNEL = {
  general: {
    label: "General Inquiry",
    children: {
      about: {
        label: "About TigerLeads",
        children: {
          how_works: {
            label: "How does TigerLeads work?",
            route: "info@tigerleads.ai", tag: "GEN-ABOUT-HOW", team: "General Info", time: "2–3 business days",
            deflect: {
              title: "Here's the 30-second version.",
              body: "TigerLeads.AI surfaces verified, high-intent contractor and supplier jobs in your area. Each job card shows a free summary; you spend credits to unlock the customer's full contact info and project scope. No bidding, no chasing.",
              actions: [
                { label: "See how it works →", href: "https://tigerleads.ai/#process", primary: true },
                { label: "Get started free", href: "https://app.tigerleads.ai/" }
              ]
            },
            prefill: "I'd like to learn more about how TigerLeads works.\\n\\nWhat I'm specifically curious about:\\n"
          },
          coverage: {
            label: "Where do you operate?",
            route: "info@tigerleads.ai", tag: "GEN-ABOUT-COVERAGE", team: "General Info", time: "2–3 business days",
            deflect: {
              title: "All 50 states. 300+ jurisdictions.",
              body: "We aggregate active jobs and permits nationwide with daily updates and 24/7 access. Coverage depth varies by metro — drop your city below and we'll confirm what's live in your area.",
              actions: [{ label: "View coverage map →", href: "https://tigerleads.ai/#benefits" }]
            },
            prefill: "I want to confirm coverage in my area.\\n\\nMy city / metro:\\nMy trade or industry:\\n"
          },
          company: {
            label: "Company / press info",
            route: "info@tigerleads.ai", tag: "GEN-ABOUT-COMPANY", team: "General Info", time: "2–3 business days",
            prefill: "I'd like more info about TigerLeads / Alliance Data Solutions.\\n\\nWhat I need:\\n"
          }
        }
      },
      getting_started: {
        label: "Getting started / free trial",
        children: {
          signup: {
            label: "How do I sign up?",
            route: "info@tigerleads.ai", tag: "GEN-START-SIGNUP", team: "General Info", time: "Self-serve",
            deflect: {
              title: "You can sign up right now — free.",
              body: "Create an account in about 2 minutes. No credit card required to browse jobs. You only spend credits when you decide to unlock a lead.",
              actions: [{ label: "Create free account →", href: "https://app.tigerleads.ai/", primary: true }]
            },
            prefill: "I tried signing up and ran into an issue. Details:\\n"
          },
          free_trial: {
            label: "Is there a free trial?",
            route: "sales@tigerleads.ai", tag: "GEN-START-TRIAL", team: "Sales", time: "< 4 business hrs",
            deflect: {
              title: "Yes — start free, no card required.",
              body: "Browse the live job board and your dashboard for free. You only pay when you choose a paid plan to start unlocking leads.",
              actions: [{ label: "Start free →", href: "https://app.tigerleads.ai/", primary: true }]
            },
            prefill: "I want to take advantage of the free trial.\\n\\nMy trade / industry:\\nMy service area:\\n"
          },
          credit_card: {
            label: "Do I need a credit card to start?",
            route: "info@tigerleads.ai", tag: "GEN-START-CARD", team: "General Info", time: "Self-serve",
            deflect: {
              title: "No card needed to browse.",
              body: "You can sign up, set your trade and territory, and explore the live job board completely free. A card is only required when you select a paid plan to start unlocking leads.",
              actions: [{ label: "Sign up free →", href: "https://app.tigerleads.ai/", primary: true }]
            },
            prefill: "Question about getting started without a card:\\n"
          }
        }
      },
      other: {
        label: "Something else",
        route: "info@tigerleads.ai", tag: "GEN-OTHER", team: "General Info", time: "2–3 business days",
        prefill: "I have a general question:\\n"
      }
    }
  },

  sales: {
    label: "Sales Question",
    children: {
      pricing: {
        label: "Pricing & Plans",
        children: {
          compare: {
            label: "Compare plans",
            route: "sales@tigerleads.ai", tag: "SALES-PRICING-COMPARE", team: "Sales", time: "< 4 business hrs",
            deflect: {
              title: "Quick plan breakdown.",
              body: "Starter $99.99/mo (150 credits, 1 seat). Professional $149.99/mo (300 credits, 2 seats). Enterprise $299.99/mo (1,000 credits, 5 seats). All plans include first-purchase bonuses. Custom plans available for larger teams.",
              actions: [
                { label: "See full pricing →", href: "https://tigerleads.ai/#pricing", primary: true },
                { label: "Talk to sales", href: "#", action: "continue" }
              ]
            },
            prefill: "I'm comparing plans and would like a recommendation.\\n\\nTeam size:\\nExpected leads/month:\\nTrade or industry:\\nService area:\\n"
          },
          enterprise: {
            label: "Custom / Enterprise pricing",
            route: "sales@tigerleads.ai", tag: "SALES-PRICING-ENTERPRISE", team: "Enterprise Sales", time: "< 4 business hrs",
            prefill: "I'm interested in a custom / Enterprise plan.\\n\\nCompany size:\\nEstimated # of seats needed:\\nMonthly lead volume target:\\nIndustries / trades covered:\\nGeographic footprint:\\nAny integrations required (CRM, etc.):\\n"
          },
          discount: {
            label: "Annual / volume discount",
            route: "sales@tigerleads.ai", tag: "SALES-PRICING-DISCOUNT", team: "Sales", time: "< 4 business hrs",
            prefill: "I'd like to discuss annual or volume pricing.\\n\\nPlan I'm interested in:\\nNumber of seats:\\nBilling preference (annual / multi-year):\\n"
          }
        }
      },
      credits: {
        label: "How credits work",
        children: {
          how_credits: {
            label: "How does the credit system work?",
            route: "sales@tigerleads.ai", tag: "SALES-CREDITS-HOW", team: "Sales", time: "< 4 business hrs",
            deflect: {
              title: "Credits = unlocks. That's it.",
              body: "Every job card shows a free summary. When a project fits, you spend a set number of credits to unlock the customer's full name, phone, email, and detailed project scope. Unlock cost varies by lead value and is always shown before you spend.",
              actions: [{ label: "Read full FAQ →", href: "https://tigerleads.ai/#faq" }]
            },
            prefill: "I have a question about how credits work:\\n"
          },
          expire: {
            label: "Do credits expire?",
            route: "sales@tigerleads.ai", tag: "SALES-CREDITS-EXPIRE", team: "Sales", time: "< 4 business hrs",
            deflect: {
              title: "Credits don't expire.",
              body: "Monthly subscription credits reset with your billing cycle, but bonus credits and Boost Pack credits stay in your account as long as your subscription is active.",
              actions: [{ label: "Got it, close form", href: "#", action: "close" }]
            },
            prefill: "Follow-up question on credit expiration:\\n"
          },
          buy_extra: {
            label: "Buy extra credit packs",
            route: "sales@tigerleads.ai", tag: "SALES-CREDITS-EXTRA", team: "Sales", time: "< 4 business hrs",
            prefill: "I'd like to buy additional credits beyond my plan.\\n\\nCurrent plan:\\nQuantity I'm looking for:\\nUse case:\\n"
          }
        }
      },
      industry: {
        label: "Is TigerLeads right for my business?",
        children: {
          contractor: {
            label: "I'm a Contractor",
            children: {
              gc:        { label: "General Contractor / Builder",   route: "sales@tigerleads.ai", tag: "SALES-FIT-GC",        team: "Sales", time: "< 4 business hrs", prefill: "I'm a General Contractor evaluating TigerLeads.\\n\\nProject types I do:\\nAvg project size ($):\\nService area:\\nWhat I need most:\\n" },
              electrical:{ label: "Electrical",                      route: "sales@tigerleads.ai", tag: "SALES-FIT-ELECTRICAL",team: "Sales", time: "< 4 business hrs", prefill: "I'm an Electrical contractor evaluating TigerLeads.\\n\\nResidential / commercial / both:\\nService area:\\nWhat I need most:\\n" },
              plumbing:  { label: "Plumbing",                        route: "sales@tigerleads.ai", tag: "SALES-FIT-PLUMBING",  team: "Sales", time: "< 4 business hrs", prefill: "I'm a Plumbing contractor evaluating TigerLeads.\\n\\nResidential / commercial / both:\\nService area:\\nWhat I need most:\\n" },
              hvac:      { label: "HVAC",                            route: "sales@tigerleads.ai", tag: "SALES-FIT-HVAC",      team: "Sales", time: "< 4 business hrs", prefill: "I'm an HVAC contractor evaluating TigerLeads.\\n\\nResidential / commercial / both:\\nService area:\\nWhat I need most:\\n" },
              roofing:   { label: "Roofing",                         route: "sales@tigerleads.ai", tag: "SALES-FIT-ROOFING",   team: "Sales", time: "< 4 business hrs", prefill: "I'm a Roofing contractor evaluating TigerLeads.\\n\\nResidential / commercial / both:\\nService area:\\nWhat I need most:\\n" },
              remodel:   { label: "Remodeling / Interior",           route: "sales@tigerleads.ai", tag: "SALES-FIT-REMODEL",   team: "Sales", time: "< 4 business hrs", prefill: "I'm a Remodeling contractor evaluating TigerLeads.\\n\\nProject types I do:\\nService area:\\nWhat I need most:\\n" },
              landscape: { label: "Landscaping / Hardscape",         route: "sales@tigerleads.ai", tag: "SALES-FIT-LANDSCAPE", team: "Sales", time: "< 4 business hrs", prefill: "I'm a Landscaping contractor evaluating TigerLeads.\\n\\nResidential / commercial / both:\\nService area:\\nWhat I need most:\\n" },
              other:     { label: "Other trade",                     route: "sales@tigerleads.ai", tag: "SALES-FIT-OTHER-TRADE",team:"Sales", time: "< 4 business hrs", prefill: "I'm a contractor evaluating TigerLeads.\\n\\nMy specific trade:\\nService area:\\nWhat I need most:\\n" }
            }
          },
          supplier: {
            label: "I'm a Supplier",
            children: {
              materials: { label: "Building materials",        route: "sales@tigerleads.ai", tag: "SALES-FIT-SUP-MATERIALS", team: "Sales", time: "< 4 business hrs", prefill: "I'm a building-materials supplier evaluating TigerLeads.\\n\\nProduct categories:\\nDistribution footprint:\\nWhat I need most:\\n" },
              equipment: { label: "Equipment / tools",         route: "sales@tigerleads.ai", tag: "SALES-FIT-SUP-EQUIPMENT", team: "Sales", time: "< 4 business hrs", prefill: "I'm an equipment / tools supplier evaluating TigerLeads.\\n\\nProduct categories:\\nDistribution footprint:\\nWhat I need most:\\n" },
              specialty: { label: "Specialty / niche supply",  route: "sales@tigerleads.ai", tag: "SALES-FIT-SUP-SPECIALTY", team: "Sales", time: "< 4 business hrs", prefill: "I'm a specialty supplier evaluating TigerLeads.\\n\\nNiche / specialty:\\nDistribution footprint:\\nWhat I need most:\\n" }
            }
          },
          other_pro: {
            label: "Other professional",
            route: "sales@tigerleads.ai", tag: "SALES-FIT-OTHER-PRO", team: "Sales", time: "< 4 business hrs",
            prefill: "I'm not a contractor or supplier but I'm interested in TigerLeads.\\n\\nMy role / business:\\nWhat I'm hoping to do with TigerLeads:\\n"
          }
        }
      },
      demo: {
        label: "Schedule a live demo",
        route: "sales@tigerleads.ai", tag: "SALES-DEMO", team: "Sales", time: "< 4 business hrs",
        prefill: "I'd like to schedule a live demo.\\n\\nBest day / time window:\\nTime zone:\\nDecision-makers who'll attend:\\nTop questions I want covered:\\n"
      }
    }
  },

  support: {
    label: "Technical Support",
    children: {
      account: {
        label: "Account & Login",
        children: {
          forgot_pw: {
            label: "Forgot password",
            route: "support@tigerleads.ai", tag: "SUPP-ACCT-PW", team: "Support", time: "Self-serve",
            deflect: {
              title: "Reset it yourself in 30 seconds.",
              body: "Use the password reset link on the login page. The email arrives within a minute — check spam if you don't see it. Still stuck? Continue this form and we'll help you manually.",
              actions: [
                { label: "Reset password →", href: "https://app.tigerleads.ai/", primary: true },
                { label: "Still need help", href: "#", action: "continue" }
              ]
            },
            prefill: "Password reset isn't working for me.\\n\\nEmail on the account:\\nWhat happens when I try to reset:\\n"
          },
          locked: {
            label: "Account locked / can't log in",
            route: "support@tigerleads.ai", tag: "SUPP-ACCT-LOCKED", team: "Support", time: "< 1 business day",
            prefill: "I can't log into my account.\\n\\nEmail on the account:\\nLast time it worked:\\nError message I see:\\n",
            context: { label: "Email on the account", placeholder: "you@company.com" }
          },
          twofa: {
            label: "Two-factor / 2FA issue",
            route: "support@tigerleads.ai", tag: "SUPP-ACCT-2FA", team: "Support", time: "< 1 business day",
            prefill: "I'm having a 2FA issue.\\n\\nEmail on the account:\\nWhat's happening:\\n"
          }
        }
      },
      billing: {
        label: "Billing & Payment",
        children: {
          update_card: {
            label: "Update payment method",
            route: "support@tigerleads.ai", tag: "SUPP-BILL-CARD", team: "Support", time: "Self-serve",
            deflect: {
              title: "Self-serve in your dashboard.",
              body: "Go to Account Settings → Billing to update your card. Changes are processed through our secure Stripe integration and apply to your next billing cycle.",
              actions: [
                { label: "Open Account Settings →", href: "https://app.tigerleads.ai/", primary: true },
                { label: "Need help with this", href: "#", action: "continue" }
              ]
            },
            prefill: "I'm having trouble updating my payment method.\\n\\nEmail on the account:\\nWhat goes wrong:\\n"
          },
          failed_pay: {
            label: "Failed payment / declined card",
            route: "support@tigerleads.ai", tag: "SUPP-BILL-FAILED", team: "Support", time: "< 1 business day",
            prefill: "My payment failed and I need help.\\n\\nEmail on the account:\\nDate of the failed charge:\\n"
          },
          refund: {
            label: "Refund request",
            route: "support@tigerleads.ai", tag: "SUPP-BILL-REFUND", team: "Billing", time: "< 1 business day",
            prefill: "I'd like to request a refund.\\n\\nEmail on the account:\\nDate of the charge:\\nAmount:\\nReason for refund:\\n"
          },
          cancel: {
            label: "Cancel subscription",
            route: "support@tigerleads.ai", tag: "SUPP-BILL-CANCEL", team: "Support", time: "Self-serve",
            deflect: {
              title: "You can cancel from your dashboard.",
              body: "Account Settings → Billing → Manage Subscription. Your access continues until the end of your current billing period. We'd love to know why — feedback helps us improve.",
              actions: [
                { label: "Manage subscription →", href: "https://app.tigerleads.ai/", primary: true },
                { label: "Tell us why", href: "#", action: "continue" }
              ]
            },
            prefill: "I'm canceling my subscription.\\n\\nEmail on the account:\\nReason (optional but appreciated):\\n"
          }
        }
      },
      platform: {
        label: "Platform / App issue",
        children: {
          dashboard: {
            label: "Dashboard not loading",
            route: "support@tigerleads.ai", tag: "SUPP-PLATFORM-DASH", team: "Support", time: "< 1 business day",
            prefill: "My dashboard isn't loading.\\n\\nEmail on the account:\\nBrowser & version:\\nDevice / OS:\\nError message (if any):\\nWhen it started:\\n"
          },
          credits_missing: {
            label: "Credits not showing / wrong balance",
            route: "support@tigerleads.ai", tag: "SUPP-PLATFORM-CREDITS", team: "Support", time: "< 1 business day",
            prefill: "My credits aren't showing correctly.\\n\\nEmail on the account:\\nExpected balance:\\nActual balance:\\nLast action that affected credits:\\n"
          },
          unlock_fail: {
            label: "A job won't unlock",
            route: "support@tigerleads.ai", tag: "SUPP-PLATFORM-UNLOCK", team: "Support", time: "< 1 business day",
            prefill: "I tried to unlock a job and it failed.\\n\\nEmail on the account:\\nLead / Job ID:\\nWhat happened (error msg, charged but not unlocked, etc.):\\n",
            context: { label: "Lead / Job ID", placeholder: "e.g., TL-48291" }
          },
          mobile: {
            label: "Mobile / browser bug",
            route: "support@tigerleads.ai", tag: "SUPP-PLATFORM-MOBILE", team: "Support", time: "< 1 business day",
            prefill: "I'm running into a bug on mobile / a specific browser.\\n\\nDevice & OS:\\nBrowser & version:\\nWhat I was doing:\\nWhat happened:\\n"
          }
        }
      },
      lead_quality: {
        label: "Lead quality / dispute",
        children: {
          bad_info: {
            label: "Bad or incorrect lead info",
            route: "support@tigerleads.ai", tag: "SUPP-LEAD-BADINFO", team: "Lead Quality", time: "< 1 business day",
            prefill: "I unlocked a lead and the info appears wrong.\\n\\nLead / Job ID:\\nWhat's incorrect (phone, name, scope, etc.):\\nWhat I tried:\\n",
            context: { label: "Lead / Job ID (required)", placeholder: "e.g., TL-48291" }
          },
          already_sold: {
            label: "Lead already engaged with another contractor",
            route: "support@tigerleads.ai", tag: "SUPP-LEAD-SOLD", team: "Lead Quality", time: "< 1 business day",
            prefill: "I unlocked a lead and the customer was already engaged elsewhere.\\n\\nLead / Job ID:\\nDate I unlocked:\\nWhat the customer told you:\\n",
            context: { label: "Lead / Job ID (required)", placeholder: "e.g., TL-48291" }
          },
          out_of_area: {
            label: "Lead outside my service area",
            route: "support@tigerleads.ai", tag: "SUPP-LEAD-AREA", team: "Lead Quality", time: "< 1 business day",
            prefill: "I unlocked a lead and it's outside my territory.\\n\\nLead / Job ID:\\nMy set service area:\\nLead's location:\\n",
            context: { label: "Lead / Job ID (required)", placeholder: "e.g., TL-48291" }
          },
          credit_refund: {
            label: "Request credit refund on a lead",
            route: "support@tigerleads.ai", tag: "SUPP-LEAD-CREDREFUND", team: "Lead Quality", time: "< 1 business day",
            prefill: "I'd like a credit refund for a specific lead.\\n\\nLead / Job ID:\\nReason for refund request:\\nWhat I tried before requesting:\\n",
            context: { label: "Lead / Job ID (required)", placeholder: "e.g., TL-48291" }
          }
        }
      }
    }
  },

  partnership: {
    label: "Partnership Opportunity",
    children: {
      affiliate: {
        label: "Affiliate / Referral program",
        route: "partners@tigerleads.ai", tag: "PART-AFFILIATE", team: "Partnerships", time: "2–3 business days",
        prefill: "I'm interested in your affiliate / referral program.\\n\\nMy audience / channel:\\nAudience size & vertical:\\nWhy you think we'd be a fit:\\n"
      },
      reseller: {
        label: "Reseller / White-label",
        route: "partners@tigerleads.ai", tag: "PART-RESELLER", team: "Partnerships", time: "2–3 business days",
        prefill: "I'd like to discuss a reseller / white-label arrangement.\\n\\nCompany & website:\\nCustomer base:\\nProposed model:\\n"
      },
      integration: {
        label: "Integration partner (CRM, software, etc.)",
        route: "partners@tigerleads.ai", tag: "PART-INTEGRATION", team: "Partnerships", time: "2–3 business days",
        prefill: "I'd like to discuss an integration partnership.\\n\\nCompany & product:\\nIntegration concept:\\nMutual customer overlap:\\n"
      },
      strategic: {
        label: "Strategic / Enterprise partnership",
        route: "partners@tigerleads.ai", tag: "PART-STRATEGIC", team: "Partnerships", time: "2–3 business days",
        prefill: "I'd like to explore a strategic partnership.\\n\\nCompany & website:\\nProposed structure:\\nWhy now:\\n"
      },
      media: {
        label: "Media / Press / Influencer",
        route: "partners@tigerleads.ai", tag: "PART-MEDIA", team: "PR / Media", time: "2–3 business days",
        prefill: "I'm reaching out about media / press / influencer collaboration.\\n\\nOutlet or channel:\\nDeadline (if applicable):\\nAngle or pitch:\\n"
      },
      investor: {
        label: "Investor inquiry",
        route: "partners@tigerleads.ai", tag: "PART-INVESTOR", team: "Investor Relations", time: "2–3 business days",
        prefill: "I'm an investor interested in TigerLeads.\\n\\nFirm:\\nStage / check size:\\nReason for interest:\\n"
      }
    }
  },

  feedback: {
    label: "Feedback",
    children: {
      feature: {
        label: "Feature request",
        route: "feedback@tigerleads.ai", tag: "FB-FEATURE", team: "Product", time: "We read everything",
        prefill: "Feature request:\\n\\nWhat I want to do:\\nHow I'd use it:\\nWhy it matters to my business:\\n"
      },
      bug: {
        label: "Bug report (cosmetic / minor)",
        route: "feedback@tigerleads.ai", tag: "FB-BUG", team: "Product", time: "We read everything",
        prefill: "Minor bug to report:\\n\\nWhere I saw it:\\nSteps to reproduce:\\nWhat I expected vs what happened:\\n",
        deflect: {
          title: "If it's blocking you, send to Support instead.",
          body: "Cosmetic and minor issues are perfect here — the product team reads them all. If a bug is preventing you from doing your job, switch this form to Technical Support → Platform Issue so it's prioritized.",
          actions: [{ label: "Switch to Support", href: "#", action: "switch-support" }]
        }
      },
      compliment: {
        label: "Compliment / Testimonial",
        route: "feedback@tigerleads.ai", tag: "FB-COMPLIMENT", team: "Marketing", time: "We'll thank you personally",
        deflect: {
          title: "Thank you — seriously.",
          body: "If you're up for it, we'd love to feature your story. Drop your kind words below and check the box if it's okay to share publicly.",
          actions: []
        },
        prefill: "Compliment / testimonial:\\n\\nWhat's working for me:\\nResults I've seen:\\nOkay to share publicly (yes/no):\\n"
      },
      complaint: {
        label: "Complaint / concern",
        route: "feedback@tigerleads.ai", tag: "FB-COMPLAINT", team: "Customer Success", time: "< 1 business day",
        prefill: "I have a concern I'd like to raise.\\n\\nWhat happened:\\nWhen:\\nWhat I'd like to see resolved:\\n"
      },
      suggestion: {
        label: "Suggestion / improvement",
        route: "feedback@tigerleads.ai", tag: "FB-SUGGEST", team: "Product", time: "We read everything",
        prefill: "I have a suggestion:\\n\\nThe idea:\\nWhy it would help:\\n"
      }
    }
  }
};

/* ====================== ENGINE ====================== */
const $ = id => document.getElementById(id);
const subjectSel = $('subject');
const wraps  = [null, null, $('level2Wrap'), $('level3Wrap'), $('level4Wrap')];
const sels   = [null, null, $('level2'),     $('level3'),     $('level4')];
const deflectCard = $('deflectCard');
const routingBadge = $('routingBadge');
const contextField = $('contextField');
const messageField = $('message');

let currentLeaf = null;

function clearLevels(fromLevel) {
  for (let i = fromLevel; i <= 4; i++) {
    wraps[i].classList.remove('visible');
    sels[i].innerHTML = '';
    sels[i].value = '';
  }
}

function populateSelect(selectEl, optionsObj) {
  selectEl.innerHTML = '<option value="">— Select —</option>';
  Object.entries(optionsObj).forEach(([key, val]) => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = val.label;
    selectEl.appendChild(opt);
  });
}

function isLeaf(node) { return node && !node.children; }

function showDeflection(leaf) {
  if (!leaf.deflect) {
    deflectCard.classList.remove('visible');
    return;
  }
  $('deflectTitle').textContent = leaf.deflect.title;
  $('deflectBody').textContent = leaf.deflect.body;
  const actionsWrap = $('deflectActions');
  actionsWrap.innerHTML = '';
  (leaf.deflect.actions || []).forEach(a => {
    const btn = document.createElement(a.href && a.href !== '#' ? 'a' : 'button');
    btn.className = 'deflect-btn' + (a.primary ? ' primary' : '');
    btn.textContent = a.label;
    if (btn.tagName === 'A') {
      btn.href = a.href;
      if (a.href.startsWith('http')) { btn.target = '_blank'; btn.rel = 'noopener'; }
    } else {
      btn.type = 'button';
      btn.addEventListener('click', () => {
        if (a.action === 'close') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          deflectCard.classList.remove('visible');
        } else if (a.action === 'continue') {
          deflectCard.classList.remove('visible');
          messageField.focus();
        } else if (a.action === 'switch-support') {
          subjectSel.value = 'support';
          subjectSel.dispatchEvent(new Event('change'));
        }
      });
    }
    actionsWrap.appendChild(btn);
  });
  deflectCard.classList.add('visible');
}

function showRouting(leaf) {
  $('routingTeam').textContent = leaf.team || 'TigerLeads team';
  $('routingTime').textContent = leaf.time ? '⏱ ' + leaf.time : '';
  routingBadge.classList.add('visible');
  $('routingTag').value   = leaf.tag   || '';
  $('routeEmail').value   = leaf.route || '';
  $('priority').value     = leaf.time  || '';
}

function showContextField(leaf) {
  if (leaf.context) {
    $('contextLabel').textContent = leaf.context.label;
    $('contextInput').placeholder = leaf.context.placeholder || '';
    contextField.classList.add('visible');
  } else {
    contextField.classList.remove('visible');
    $('contextInput').value = '';
  }
}

function applyPrefill(leaf) {
  // Only prefill if user hasn't already typed something custom
  if (!messageField.value || messageField.dataset.prefilled === 'true') {
    messageField.value = leaf.prefill || '';
    messageField.dataset.prefilled = 'true';
  }
}

function resetMeta() {
  deflectCard.classList.remove('visible');
  routingBadge.classList.remove('visible');
  contextField.classList.remove('visible');
  $('contextInput').value = '';
  $('routingTag').value = '';
  $('routeEmail').value = '';
  $('priority').value   = '';
  currentLeaf = null;
}

function handleLeaf(leaf) {
  currentLeaf = leaf;
  showDeflection(leaf);
  showRouting(leaf);
  showContextField(leaf);
  applyPrefill(leaf);
}

/* Level wiring */
subjectSel.addEventListener('change', e => {
  resetMeta();
  clearLevels(2);
  const node = FUNNEL[e.target.value];
  if (!node) return;
  if (isLeaf(node)) { handleLeaf(node); return; }
  populateSelect(sels[2], node.children);
  wraps[2].classList.add('visible');
});

sels[2].addEventListener('change', e => {
  resetMeta();
  clearLevels(3);
  const parent = FUNNEL[subjectSel.value];
  const node = parent && parent.children[e.target.value];
  if (!node) return;
  if (isLeaf(node)) { handleLeaf(node); return; }
  populateSelect(sels[3], node.children);
  wraps[3].classList.add('visible');
});

sels[3].addEventListener('change', e => {
  resetMeta();
  clearLevels(4);
  const parent = FUNNEL[subjectSel.value]?.children?.[sels[2].value];
  const node = parent && parent.children[e.target.value];
  if (!node) return;
  if (isLeaf(node)) { handleLeaf(node); return; }
  populateSelect(sels[4], node.children);
  wraps[4].classList.add('visible');
});

sels[4].addEventListener('change', e => {
  resetMeta();
  const parent = FUNNEL[subjectSel.value]?.children?.[sels[2].value]?.children?.[sels[3].value];
  const node = parent && parent.children[e.target.value];
  if (!node) return;
  if (isLeaf(node)) handleLeaf(node);
});

// Track if user has typed their own message (so we don't overwrite)
messageField.addEventListener('input', () => {
  messageField.dataset.prefilled = 'false';
});

/* ====================== SUBMIT ====================== */
$('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!$('contactForm').checkValidity()) {
    $('contactForm').reportValidity();
    return;
  }
  if (!currentLeaf) {
    alert('Please complete the subject selection so we can route your message correctly.');
    return;
  }

  const submitBtn = $('submitBtn');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  // Build the structured payload your backend / email parser will love
  const payload = {
    routing: {
      tag: currentLeaf.tag,
      route_to: currentLeaf.route,
      team: currentLeaf.team,
      sla: currentLeaf.time
    },
    contact: {
      first_name: $('firstName').value.trim(),
      last_name:  $('lastName').value.trim(),
      email:      $('email').value.trim(),
      phone:      $('phone').value.trim(),
      company:    $('company').value.trim()
    },
    subject_path: [
      subjectSel.options[subjectSel.selectedIndex]?.text,
      sels[2].options[sels[2].selectedIndex]?.text,
      sels[3].options[sels[3].selectedIndex]?.text,
      sels[4].options[sels[4].selectedIndex]?.text
    ].filter(Boolean).filter(t => !t.startsWith('—')),
    context_value: $('contextInput').value.trim(),
    message: messageField.value.trim(),
    submitted_at: new Date().toISOString()
  };

  // ---------------------------------------------------------------
  // TODO (backend): POST \`payload\` to your endpoint, e.g.
  // await fetch('/api/contact', { method:'POST', body: JSON.stringify(payload) });
  // The payload includes routing.tag and routing.route_to so your mail
  // server / Zapier / n8n flow can:
  //   1. Send an immediate auto-reply tailored to the tag
  //   2. Forward to the right team inbox automatically
  //   3. Create a ticket with the SLA pre-set
  // ---------------------------------------------------------------
  console.log('TigerLeads contact payload', payload);

  // Simulated success
  await new Promise(r => setTimeout(r, 600));

  // Show success screen
  $('contactForm').style.display = 'none';
  $('successTeam').textContent = currentLeaf.team || 'our team';
  $('successTime').textContent = currentLeaf.time || 'soon';
  $('successScreen').classList.add('visible');
});
<\/script>

</body>
</html>`,id:`oTeFmhHyN`,layoutId:`oTeFmhHyN`,radius:`0px`,style:{height:`100%`,width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})}),a(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-nW3le.framer-fcxg8a, .framer-nW3le .framer-fcxg8a { display: block; }`,`.framer-nW3le.framer-1l0mr12 { align-content: center; align-items: center; background-color: var(--token-3231f815-59bd-4709-9984-27f462c2029e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-nW3le .framer-1hi58ni-container { flex: none; height: 1351px; position: relative; width: 100%; }`,`@media (max-width: 1199.98px) { .framer-nW3le.framer-1l0mr12 { height: 2259px; width: 390px; }}`],`framer-nW3le`),H=V,V.displayName=`Page`,V.defaultProps={height:1871,width:1200},_(V,[{explicitInter:!0,fonts:[]},...M],{supportsExplicitInterCodegen:!0}),U={exports:{default:{type:`reactComponent`,name:`FramerWrCACfeIv`,slots:[],annotations:{framerAutoSizeImages:`true`,framerDisplayContentsDiv:`false`,framerLayoutTemplateFlowEffect:`true`,framerResponsiveScreen:`true`,framerContractVersion:`1`,framerColorSyntax:`true`,framerAcceptsLayoutTemplate:`true`,framerImmutableVariables:`true`,framerComponentViewportWidth:`true`,framerIntrinsicWidth:`1200`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"XB2roKoDF":{"layout":["fixed","fixed"]}}}`,framerScrollSections:`false`,framerIntrinsicHeight:`1871`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{U as __FramerMetadata__,H as default,P as queryParamNames};
//# sourceMappingURL=FmkhJ0EE8URok3istbbzvdRGvlGx6gLfeCSNxtzQ-GY.DmUVwjC6.mjs.map