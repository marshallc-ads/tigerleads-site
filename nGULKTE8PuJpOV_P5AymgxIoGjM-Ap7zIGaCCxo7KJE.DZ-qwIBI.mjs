import{t as e}from"./rolldown-runtime.fXUlgfaW.mjs";import{A as t,C as n,D as r,_ as i,c as a,h as o,k as s,l as c,o as l}from"./react.BM0wrt_Q.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BOnp_uBl.mjs";import{B as m,J as h,M as g,O as _,a as v,ct as y,dt as b,ft as x,ht as S,i as C,mt as w,pt as T,u as E,xt as D}from"./framer.CzpY7Hh7.mjs";import{n as O,t as k}from"./Embed.BvGIe1GO.mjs";import{n as A,r as j}from"./iZpOGVXr_.C-pjTkB7.mjs";var M,N,P,F,I,L,R,z,B,V,H;e((()=>{l(),h(),p(),n(),O(),A(),M=m(k),N={},P=[],F=`framer-HJeMY`,I={laIbRkiS_:`framer-v-ikqv3x`},L=(e,t,n)=>e&&t?`position`:n,R=({value:e})=>T()?null:a(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),z=({height:e,id:t,width:n,...r})=>({...r}),B=D(o(function(e,n){let o=r(null),l=n??o,p=i(),{activeLocale:m,setLocale:h}=w();y();let{style:_,className:T,layoutId:D,variant:O,...A}=z(e);S(t(()=>j({},m),[m]));let[M,P]=x(O,N,!1),B=g(F),V=s(E)?.isLayoutTemplate,H=L(V,!!s(d)?.transition?.layout);return b({}),a(E.Provider,{value:{activeVariantId:M,primaryVariantId:`laIbRkiS_`,variantClassNames:I},children:c(f,{id:D??p,children:[a(R,{value:`html body { background: var(--token-3231f815-59bd-4709-9984-27f462c2029e, rgb(255, 255, 255)); }`}),a(u.div,{...A,className:g(B,`framer-ikqv3x`,T),ref:l,style:{..._},children:a(C,{children:a(v,{className:`framer-ic8gve-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:H,nodeId:`FWYbCmbfV`,scopeId:`iZpOGVXr_`,children:a(k,{height:`100%`,html:`<!--
  TigerLeads.AI — "How We Source Our Data" Section (v6)
  Changes from v5:
   1. Tiger stripe removed — "Source" word is now solid orange like
      the rest of the headline. Span kept so it's easy to add a different
      treatment later.
-->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>How We Source Our Data — TigerLeads.AI</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
<style>
  /* ===== Scoped styles ===== */
  .tl-source {
    --tl-bg-dark:      #0A0A0A;
    --tl-bg-2:         #111111;
    --tl-card:         #141414;
    --tl-card-hover:   #181818;
    --tl-border:       rgba(255, 255, 255, 0.06);

    --tl-orange:       #F97316;
    --tl-orange-bright:#FF8A2B;
    --tl-orange-deep:  #C2410C;
    --tl-orange-glow:  rgba(249, 115, 22, 0.18);
    --tl-orange-edge:  rgba(249, 115, 22, 0.35);

    --tl-teal:         #00858A;
    --tl-teal-bright:  #00A8AE;
    --tl-teal-glow:    rgba(0, 133, 138, 0.20);
    --tl-teal-edge:    rgba(0, 133, 138, 0.40);

    --tl-text-dark:    #F5F5F5;
    --tl-text-light:   #0A0A0A;
    --tl-text-muted-d: #9A9A9A;
    --tl-text-muted-l: #525252;
    --tl-text-dim:     #6E6E6E;

    --tl-display: "Anton", "Bebas Neue", "Impact", sans-serif;
    --tl-body:    "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

    font-family: var(--tl-body);
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
  }
  .tl-source *,
  .tl-source *::before,
  .tl-source *::after { box-sizing: border-box; }

  /* ===== Bands ===== */
  .tl-band {
    position: relative;
    padding: 96px 24px;
  }
  .tl-band__inner {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }

  /* ===== Light bands (warm + textured, not flat white) ===== */
  .tl-band--light {
    background:
      radial-gradient(ellipse 55% 45% at 8% 0%,   rgba(249,115,22,0.10), transparent 65%),
      radial-gradient(ellipse 55% 45% at 92% 100%, rgba(0,133,138,0.08), transparent 65%),
      linear-gradient(180deg, #FFFFFF 0%, #FBF9F6 100%);
    color: var(--tl-text-light);
  }
  /* Faint dot grid texture */
  .tl-band--light::before {
    content: "";
    position: absolute; inset: 0;
    background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 90%);
    -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 90%);
    pointer-events: none;
    z-index: 1;
  }

  /* ===== Dark band ===== */
  .tl-band--dark {
    background:
      radial-gradient(ellipse 60% 50% at 18% 8%,  rgba(249,115,22,0.10), transparent 60%),
      radial-gradient(ellipse 60% 50% at 85% 92%, rgba(0,133,138,0.10),  transparent 60%),
      linear-gradient(180deg, #0E0E10 0%, #0A0A0A 50%, #0B0B0E 100%);
    color: var(--tl-text-dark);
  }
  .tl-band--dark::before {
    content: "";
    position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 55% 40% at 12% 0%,   rgba(249,115,22,0.18), transparent 70%),
      radial-gradient(ellipse 55% 40% at 92% 100%, rgba(0,133,138,0.16),  transparent 70%),
      radial-gradient(ellipse 40% 30% at 50% 55%,  rgba(255,255,255,0.025), transparent 75%);
    pointer-events: none;
    z-index: 0;
  }
  .tl-band--dark::after {
    content: "";
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.030) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.030) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 95%);
    -webkit-mask-image: radial-gradient(ellipse 95% 85% at 50% 50%, black 40%, transparent 95%);
    pointer-events: none;
    z-index: 0;
  }

  /* ===== Headline ===== */
  .tl-headline {
    font-family: var(--tl-display);
    font-weight: 400;
    font-size: clamp(44px, 6.5vw, 88px);
    line-height: 0.95;
    letter-spacing: 0.005em;
    margin: 0 0 20px;
    text-transform: uppercase;
    text-align: center;
    color: var(--tl-orange);
    text-shadow: 0 2px 24px rgba(249,115,22,0.20);
  }

  /* Accent word inherits orange from parent — kept as a span so it can
     easily get a different treatment later if desired */
  .tl-headline__accent {
    color: inherit;
  }

  .tl-lede {
    font-size: clamp(16px, 1.4vw, 19px);
    line-height: 1.65;
    color: var(--tl-text-muted-l);
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  .tl-lede strong { color: var(--tl-text-light); font-weight: 600; }

  /* ===== Pillars grid ===== */
  .tl-pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 18px;
    margin-bottom: 56px;
  }
  .tl-pillar {
    position: relative;
    padding: 32px 28px 28px;
    background: var(--tl-card);
    border: 1px solid var(--tl-border);
    border-radius: 14px;
    transition: border-color .25s ease, transform .25s ease, background .25s ease;
  }
  .tl-pillar:hover {
    background: var(--tl-card-hover);
    transform: translateY(-2px);
  }
  .tl-pillar::before {
    content: "";
    position: absolute;
    top: 0; left: 28px;
    width: 32px; height: 2px;
    border-radius: 0 0 2px 2px;
  }
  .tl-pillar.tone-orange::before { background: var(--tl-orange); }
  .tl-pillar.tone-teal::before   { background: var(--tl-teal); }
  .tl-pillar.tone-orange:hover   { border-color: var(--tl-orange-edge); }
  .tl-pillar.tone-teal:hover     { border-color: var(--tl-teal-edge); }
  .tl-pillar__num {
    font-family: var(--tl-display);
    font-size: 14px;
    color: var(--tl-text-dim);
    letter-spacing: 0.2em;
    margin-bottom: 18px;
  }
  .tl-pillar__icon {
    width: 44px; height: 44px;
    display: inline-flex;
    align-items: center; justify-content: center;
    border-radius: 10px;
    margin-bottom: 18px;
  }
  .tl-pillar.tone-orange .tl-pillar__icon {
    background: rgba(249, 115, 22, 0.10);
    border: 1px solid var(--tl-orange-edge);
    color: var(--tl-orange);
  }
  .tl-pillar.tone-teal .tl-pillar__icon {
    background: rgba(0, 133, 138, 0.12);
    border: 1px solid var(--tl-teal-edge);
    color: var(--tl-teal);
  }
  .tl-pillar__title {
    font-family: var(--tl-display);
    font-weight: 400;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 10px;
    color: var(--tl-text-dark);
  }
  .tl-pillar__body {
    font-size: 14.5px;
    color: var(--tl-text-muted-d);
    margin: 0;
    line-height: 1.6;
  }

  /* ===== Trust strip ===== */
  .tl-trust-wrap { margin: 0 0 56px; }
  .tl-trust-wrap__line {
    height: 1px;
    width: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.35) 25%, rgba(0,133,138,0.35) 75%, transparent 100%);
    margin: 0;
    border: 0;
  }
  .tl-trust {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0;
    background: linear-gradient(180deg, rgba(249,115,22,0.04) 0%, rgba(0,133,138,0.04) 100%);
  }
  .tl-trust__cell {
    padding: 32px 24px;
    border-right: 1px solid var(--tl-border);
    text-align: center;
  }
  .tl-trust__cell:last-child { border-right: none; }
  .tl-trust__num {
    font-family: var(--tl-display);
    font-size: 38px;
    line-height: 1;
    margin-bottom: 6px;
  }
  .tl-trust__cell:nth-child(odd)  .tl-trust__num { color: var(--tl-orange); }
  .tl-trust__cell:nth-child(even) .tl-trust__num { color: var(--tl-teal); }
  .tl-trust__label {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--tl-text-muted-d);
  }

  /* ===== Compliance ===== */
  .tl-compliance {
    display: flex;
    align-items: flex-start;
    gap: 24px;
    padding: 32px 36px;
    background:
      linear-gradient(135deg, rgba(249,115,22,0.10) 0%, rgba(0,133,138,0.08) 100%),
      linear-gradient(180deg, #1a1a1c 0%, #131316 100%);
    border: 1px solid rgba(255,255,255,0.10);
    border-radius: 0 14px 14px 0;
    position: relative;
    box-shadow:
      0 10px 40px rgba(0,0,0,0.45),
      0 0 0 1px rgba(249,115,22,0.10),
      0 -1px 0 rgba(255,255,255,0.04) inset;
  }
  .tl-compliance::before {
    content: "";
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, var(--tl-orange) 0%, var(--tl-teal) 100%);
    border-radius: 4px 0 0 4px;
    box-shadow: 0 0 20px rgba(249,115,22,0.35);
  }
  .tl-compliance__icon {
    flex-shrink: 0;
    width: 44px; height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(249,115,22,0.20), rgba(0,133,138,0.20));
    color: var(--tl-teal-bright);
    display: flex; align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.10);
    box-shadow: 0 0 20px rgba(0,133,138,0.15);
  }
  .tl-compliance__title {
    font-family: var(--tl-display);
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0 0 8px;
    color: var(--tl-text-dark);
  }
  .tl-compliance__title em { font-style: normal; color: var(--tl-teal-bright); }
  .tl-compliance__title b  { font-weight: 400; color: var(--tl-orange); }
  .tl-compliance__text {
    margin: 0;
    color: var(--tl-text-muted-d);
    font-size: 14.5px;
    line-height: 1.6;
    max-width: 800px;
  }

  /* ===== Closer (light band) ===== */
  .tl-closer {
    text-align: center;
    padding: 16px 0 8px;
  }
  /* Decorative ornament above slogan: lines + diamond */
  .tl-closer__ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 28px;
  }
  .tl-closer__ornament-line {
    flex: 0 1 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(249,115,22,0.55) 50%, rgba(0,133,138,0.55));
  }
  .tl-closer__ornament-line:last-child {
    background: linear-gradient(90deg, rgba(0,133,138,0.55), rgba(249,115,22,0.55) 50%, transparent);
  }
  .tl-closer__ornament-mark {
    width: 10px; height: 10px;
    transform: rotate(45deg);
    background: linear-gradient(135deg, var(--tl-orange), var(--tl-teal));
    box-shadow: 0 0 14px rgba(249,115,22,0.40);
  }

  .tl-closer__slogan {
    font-family: var(--tl-display);
    font-size: clamp(32px, 4.5vw, 52px);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 14px;
    color: var(--tl-text-light);
  }
  .tl-closer__slogan b  { font-weight: 400; color: var(--tl-orange); }
  .tl-closer__slogan em { font-style: normal; color: var(--tl-teal); }

  .tl-closer__sub {
    color: var(--tl-text-muted-l);
    font-size: 16px;
    max-width: 560px;
    margin: 0 auto 32px;
  }

  .tl-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    background: linear-gradient(135deg, var(--tl-orange) 0%, var(--tl-orange-bright) 100%);
    color: #0A0A0A;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 999px;
    transition: transform .2s ease, box-shadow .2s ease;
    box-shadow:
      0 12px 32px rgba(249,115,22,0.35),
      0 0 0 1px rgba(255,255,255,0.10) inset;
  }
  .tl-cta:hover {
    transform: translateY(-2px);
    box-shadow:
      0 16px 40px rgba(249,115,22,0.45),
      0 0 0 2px var(--tl-teal-edge),
      0 0 0 1px rgba(255,255,255,0.10) inset;
  }
  .tl-cta svg { transition: transform .2s ease; }
  .tl-cta:hover svg { transform: translateX(4px); }

  /* ===== Responsive ===== */
  @media (max-width: 720px) {
    .tl-band { padding: 64px 18px; }
    .tl-pillar { padding: 26px 22px 22px; }
    .tl-compliance { flex-direction: column; padding: 24px 24px 24px 28px; gap: 14px; }
    .tl-trust__cell { border-right: none; border-bottom: 1px solid var(--tl-border); }
    .tl-trust__cell:last-child { border-bottom: none; }
    .tl-closer__ornament-line { flex: 0 1 60px; }
  }
</style>
</head>
<body>

<section class="tl-source" id="how-we-source">

  <!-- ===== TOP BAND ===== -->
  <div class="tl-band tl-band--light">
    <div class="tl-band__inner">
      <h2 class="tl-headline">
        How We <span class="tl-headline__accent">Source</span><br/>
        Our Data
      </h2>
      <p class="tl-lede">
        Our leads aren't bought from list brokers and they aren't scraped from places they shouldn't be.
        Every opportunity in the TigerLeads dashboard begins as <strong>public-record activity</strong> —
        filings, permits, and project data that municipalities, counties, and state agencies are
        legally required to publish. We aggregate it, structure it, and put it in front of the
        contractors and suppliers who can actually use it.
      </p>
    </div>
  </div>

  <!-- ===== MIDDLE BAND ===== -->
  <div class="tl-band tl-band--dark">
    <div class="tl-band__inner">

      <div class="tl-pillars">

        <article class="tl-pillar tone-orange">
          <div class="tl-pillar__num">01</div>
          <div class="tl-pillar__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
          </div>
          <h3 class="tl-pillar__title">Public Permit Records</h3>
          <p class="tl-pillar__body">
            Construction, renovation, and improvement permits filed with municipalities are the
            backbone of our pipeline. These are open public records — lawful, transparent, and
            often overlooked. We surface them at scale.
          </p>
        </article>

        <article class="tl-pillar tone-teal">
          <div class="tl-pillar__num">02</div>
          <div class="tl-pillar__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/></svg>
          </div>
          <h3 class="tl-pillar__title">Government Datasets</h3>
          <p class="tl-pillar__body">
            City, county, and state agencies publish project filings, contractor licensing data,
            and code-related activity through official channels. We connect those channels into
            a single, unified view.
          </p>
        </article>

        <article class="tl-pillar tone-orange">
          <div class="tl-pillar__num">03</div>
          <div class="tl-pillar__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6c0 1.66 4 3 9 3s9-1.34 9-3-4-3-9-3-9 1.34-9 3z"/><path d="M3 6v6c0 1.66 4 3 9 3s9-1.34 9-3V6"/><path d="M3 12v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
          </div>
          <h3 class="tl-pillar__title">Proprietary Aggregation</h3>
          <p class="tl-pillar__body">
            Raw public data is messy. Our internal pipeline — refined over years — cleans,
            standardizes, and cross-references every record before it reaches your dashboard,
            so what you see is structured and ready to act on.
          </p>
        </article>

        <article class="tl-pillar tone-teal">
          <div class="tl-pillar__num">04</div>
          <div class="tl-pillar__icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
          </div>
          <h3 class="tl-pillar__title">Continuous Refresh</h3>
          <p class="tl-pillar__body">
            New filings hit the public record every day. Our systems track them on an ongoing
            basis and route qualified opportunities to your feed — so you can be the first call,
            not the third quote.
          </p>
        </article>

      </div>

      <div class="tl-trust-wrap">
        <hr class="tl-trust-wrap__line" />
        <div class="tl-trust">
          <div class="tl-trust__cell">
            <div class="tl-trust__num">39</div>
            <div class="tl-trust__label">States Covered</div>
          </div>
          <div class="tl-trust__cell">
            <div class="tl-trust__num">300+</div>
            <div class="tl-trust__label">Jurisdictions</div>
          </div>
          <div class="tl-trust__cell">
            <div class="tl-trust__num">50K+</div>
            <div class="tl-trust__label">Active Permits</div>
          </div>
          <div class="tl-trust__cell">
            <div class="tl-trust__num">Daily</div>
            <div class="tl-trust__label">Updates</div>
          </div>
          <div class="tl-trust__cell">
            <div class="tl-trust__num">24/7</div>
            <div class="tl-trust__label">Access</div>
          </div>
        </div>
        <hr class="tl-trust-wrap__line" />
      </div>

      <div class="tl-compliance">
        <div class="tl-compliance__icon" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
        </div>
        <div>
          <h3 class="tl-compliance__title"><b>100% Public.</b> <em>100% Lawful.</em></h3>
          <p class="tl-compliance__text">
            We do not buy private contact lists, skirt access controls, or trade in data that
            shouldn't be ours to handle. Every record we work with originates in the public domain.
            Our automated and manual review process — referenced in our FAQ — exists to filter
            noise, not to manufacture leads. If a record can't be verified, it doesn't reach you.
          </p>
        </div>
      </div>

    </div>
  </div>

  <!-- ===== BOTTOM BAND ===== -->
  <div class="tl-band tl-band--light">
    <div class="tl-band__inner">
      <div class="tl-closer">
        <div class="tl-closer__ornament" aria-hidden="true">
          <span class="tl-closer__ornament-line"></span>
          <span class="tl-closer__ornament-mark"></span>
          <span class="tl-closer__ornament-line"></span>
        </div>
        <h3 class="tl-closer__slogan"><b>Chase Every Lead.</b> <em>Strike First.</em></h3>
        <p class="tl-closer__sub">
          Public data, structured for the contractors and suppliers who actually move on it.
        </p>
        <a class="tl-cta" href="https://app.tigerleads.ai/">
          Get Started for Free
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </div>
  </div>

</section>

</body>
</html>
`,id:`FWYbCmbfV`,layoutId:`FWYbCmbfV`,radius:`0px`,style:{width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})}),a(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-HJeMY.framer-1fj8rc3, .framer-HJeMY .framer-1fj8rc3 { display: block; }`,`.framer-HJeMY.framer-ikqv3x { align-content: center; align-items: center; background-color: var(--token-3231f815-59bd-4709-9984-27f462c2029e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-HJeMY .framer-ic8gve-container { flex: none; height: auto; position: relative; width: 100%; }`],`framer-HJeMY`),V=B,B.displayName=`Page`,B.defaultProps={height:2572,width:1200},_(B,[{explicitInter:!0,fonts:[]},...M],{supportsExplicitInterCodegen:!0}),H={exports:{default:{type:`reactComponent`,name:`FrameriZpOGVXr_`,slots:[],annotations:{framerScrollSections:`false`,framerAutoSizeImages:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerComponentViewportWidth:`true`,framerContractVersion:`1`,framerIntrinsicHeight:`2572`,framerResponsiveScreen:`true`,framerImmutableVariables:`true`,framerColorSyntax:`true`,framerDisplayContentsDiv:`false`,framerLayoutTemplateFlowEffect:`true`,framerAcceptsLayoutTemplate:`true`,framerIntrinsicWidth:`1200`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{H as __FramerMetadata__,V as default,P as queryParamNames};
//# sourceMappingURL=nGULKTE8PuJpOV_P5AymgxIoGjM-Ap7zIGaCCxo7KJE.DZ-qwIBI.mjs.map