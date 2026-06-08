import{t as e}from"./rolldown-runtime.fXUlgfaW.mjs";import{A as t,C as n,D as r,_ as i,c as a,h as o,k as s,l as c,o as l}from"./react.BM0wrt_Q.mjs";import{S as u,a as d,r as f,t as p}from"./motion.BOnp_uBl.mjs";import{B as m,J as h,M as g,O as _,a as v,ct as y,dt as b,ft as x,ht as S,i as C,mt as w,pt as T,u as E,xt as D}from"./framer.CzpY7Hh7.mjs";import{n as O,t as k}from"./Embed.BvGIe1GO.mjs";import{n as A,r as j}from"./C2QnKCDeI.4okHzLp7.mjs";var M,N,P,F,I,L,R,z,B,V,H;e((()=>{l(),h(),p(),n(),O(),A(),M=m(k),N={},P=[],F=`framer-QO6nb`,I={sTay1YyAF:`framer-v-13ppjrc`},L=(e,t,n)=>e&&t?`position`:n,R=({value:e})=>T()?null:a(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),z=({height:e,id:t,width:n,...r})=>({...r}),B=D(o(function(e,n){let o=r(null),l=n??o,p=i(),{activeLocale:m,setLocale:h}=w();y();let{style:_,className:T,layoutId:D,variant:O,...A}=z(e);S(t(()=>j({},m),[m]));let[M,P]=x(O,N,!1),B=g(F),V=s(E)?.isLayoutTemplate,H=L(V,!!s(d)?.transition?.layout);return b({}),a(E.Provider,{value:{activeVariantId:M,primaryVariantId:`sTay1YyAF`,variantClassNames:I},children:c(f,{id:D??p,children:[a(R,{value:`html body { background: var(--token-3231f815-59bd-4709-9984-27f462c2029e, rgb(255, 255, 255)); }`}),a(u.div,{...A,className:g(B,`framer-13ppjrc`,T),ref:l,style:{..._},children:a(C,{children:a(v,{className:`framer-vsk8wf-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:H,nodeId:`K6OES57is`,scopeId:`C2QnKCDeI`,children:a(k,{height:`100%`,html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>How Credits Work — TigerLeads.AI</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --ink:        #050505;
    --ink-2:      #000000;
    --ink-3:      #161513;
    --stripe:     #232120;
    --bone:       #F4EFE6;
    --bone-dim:   #A9A19A;
    --tiger:      #F97316;
    --tiger-deep: #C2410C;
    --tiger-glow: #FF8A2B;
    --cyan:       #00858A;
    --cyan-deep:  #006A6E;
    --cyan-soft:  #00A8AE;
    --rust:       #6B2A0E;
    --line:       rgba(244, 239, 230, 0.08);
    --line-strong:rgba(244, 239, 230, 0.18);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--ink);
    color: var(--bone);
    font-family: 'Archivo', system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.55;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* Force dark bg in case Framer/embed context has light bg bleeding through */
  .tl-credits-page {
    background: var(--ink);
    color: var(--bone);
    position: relative;
  }
  .tl-credits-page * { color: inherit; }

  /* ---------- TYPE ---------- */
  .display {
    font-family: 'Anton', 'Archivo', sans-serif;
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: 0.92;
    text-transform: uppercase;
  }
  .mono {
    font-family: 'IBM Plex Mono', monospace;
    letter-spacing: 0.02em;
  }
  .eyebrow {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--tiger);
    display: inline-flex;
    align-items: center;
    gap: 14px;
  }
  .eyebrow::before {
    content: "";
    width: 36px; height: 2px;
    background: var(--tiger);
  }

  /* ---------- LAYOUT ---------- */
  .wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
  section { position: relative; }

  /* ---------- TIGER STRIPE BAR ---------- */
  .stripe-bar {
    height: 14px;
    background: repeating-linear-gradient(
      -68deg,
      var(--ink) 0 22px,
      var(--tiger) 22px 30px,
      var(--ink) 30px 40px,
      var(--cyan) 40px 44px
    );
    border-bottom: 1px solid var(--line-strong);
  }


  /* ---------- SECTION BACKGROUND VARIATION ---------- */
  /* Default = dark ink. Alt sections sit on slightly lifted ink-2 with
     directional ambient glow so adjacent sections read as distinct bands. */
  section { background: var(--ink); position: relative; }
  section.bg-alt,
  section.bg-alt-2,
  section.bg-light {
    background: #FFFFFF;
    color: #1A1A1A;
  }
  /* Light section overrides — invert all dark-theme styling */
  section.bg-alt *, section.bg-alt-2 *, section.bg-light * { color: inherit; }
  section.bg-alt .section-head::before, section.bg-alt-2 .section-head::before, section.bg-light .section-head::before { background: var(--tiger); }
  section.bg-alt h1, section.bg-alt h2, section.bg-alt h3, section.bg-alt h4,
  section.bg-alt-2 h1, section.bg-alt-2 h2, section.bg-alt-2 h3, section.bg-alt-2 h4,
  section.bg-light h1, section.bg-light h2, section.bg-light h3, section.bg-light h4 { color: #000000; }
  section.bg-alt .sub, section.bg-alt-2 .sub, section.bg-light .sub,
  section.bg-alt p:not(.tagline), section.bg-alt-2 p:not(.tagline), section.bg-light p:not(.tagline) { color: #000000; }
  /* Section dividers: keep but lighten on light backgrounds */
  section.bg-alt + section::before, section + section.bg-alt::before,
  section.bg-alt-2 + section::before, section + section.bg-alt-2::before,
  section.bg-light + section::before, section + section.bg-light::before {
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(249,115,22,0.40) 30%,
      rgba(0,133,138,0.40) 70%,
      transparent 100%);
  }
  /* Cards / surfaces inside light sections — pure white with subtle borders + shadow for separation */
  section.bg-alt .factor-card, section.bg-alt-2 .factor-card, section.bg-light .factor-card,
  section.bg-alt .rule, section.bg-alt-2 .rule, section.bg-light .rule {
    background: #FFFFFF;
    border-color: rgba(0,0,0,0.10);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
  }
  section.bg-alt .rule:hover, section.bg-alt-2 .rule:hover, section.bg-light .rule:hover {
    background: #FAFAFA;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04);
  }
  section.bg-alt .factor-card .factor-id, section.bg-alt-2 .factor-card .factor-id, section.bg-light .factor-card .factor-id,
  section.bg-alt .factor-card .factor-desc, section.bg-alt-2 .factor-card .factor-desc, section.bg-light .factor-card .factor-desc,
  section.bg-alt .factor-card .factor-breakdown div, section.bg-alt-2 .factor-card .factor-breakdown div, section.bg-light .factor-card .factor-breakdown div { color: #000000; }
  section.bg-alt .factor-card .factor-name, section.bg-alt-2 .factor-card .factor-name, section.bg-light .factor-card .factor-name,
  section.bg-alt .factor-card .factor-breakdown strong, section.bg-alt-2 .factor-card .factor-breakdown strong, section.bg-light .factor-card .factor-breakdown strong { color: #000000; }
  section.bg-alt .factor-breakdown, section.bg-alt-2 .factor-breakdown, section.bg-light .factor-breakdown { border-top-color: rgba(0,0,0,0.10); }
  section.bg-alt .rule h4, section.bg-alt-2 .rule h4, section.bg-light .rule h4 { color: #000000; }
  section.bg-alt .rule p, section.bg-alt-2 .rule p, section.bg-light .rule p { color: #000000; }
  section.bg-alt .rules-grid, section.bg-alt-2 .rules-grid, section.bg-light .rules-grid {
    background: rgba(0,0,0,0.08);
    border-color: rgba(0,0,0,0.08);
  }
  /* Tier mapping table inside light sections */
  section.bg-alt .tier-mapping-row, section.bg-alt-2 .tier-mapping-row, section.bg-light .tier-mapping-row { border-color: rgba(0,0,0,0.08); }
  section.bg-alt .tier-mapping-row.thead, section.bg-alt-2 .tier-mapping-row.thead, section.bg-light .tier-mapping-row.thead { color: #000000; }
  section.bg-alt .tier-mapping-row .signal-cell, section.bg-alt-2 .tier-mapping-row .signal-cell, section.bg-light .tier-mapping-row .signal-cell { color: #000000; }
  section.bg-alt .tier-mapping-row .score-cell, section.bg-alt-2 .tier-mapping-row .score-cell, section.bg-light .tier-mapping-row .score-cell,
  section.bg-alt .tier-mapping-row .cost-cell, section.bg-alt-2 .tier-mapping-row .cost-cell, section.bg-light .tier-mapping-row .cost-cell { color: #000000; }
  /* Worked example inside light sections */
  section.bg-alt .worked-example, section.bg-alt-2 .worked-example, section.bg-light .worked-example {
    background: #FFFFFF;
    border-color: rgba(0,133,138,0.40);
    box-shadow: 0 2px 6px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.04);
  }
  /* Title stays bright orange (the focal heading) */
  section.bg-alt .worked-title, section.bg-alt-2 .worked-title, section.bg-light .worked-title { color: var(--tiger); }
  /* Everything else that was previously bone/cream → BLACK on light sections */
  section.bg-alt .worked-sub, section.bg-alt-2 .worked-sub, section.bg-light .worked-sub,
  section.bg-alt .worked-row .row-label, section.bg-alt-2 .worked-row .row-label, section.bg-light .worked-row .row-label,
  section.bg-alt .worked-row .row-detail, section.bg-alt-2 .worked-row .row-detail, section.bg-light .worked-row .row-detail,
  section.bg-alt .worked-row .row-pts, section.bg-alt-2 .worked-row .row-pts, section.bg-light .worked-row .row-pts,
  section.bg-alt .worked-row .row-pts .pts-max, section.bg-alt-2 .worked-row .row-pts .pts-max, section.bg-light .worked-row .row-pts .pts-max,
  section.bg-alt .worked-total .block-label, section.bg-alt-2 .worked-total .block-label, section.bg-light .worked-total .block-label,
  section.bg-alt .worked-total .arrow-symbol, section.bg-alt-2 .worked-total .arrow-symbol, section.bg-light .worked-total .arrow-symbol,
  section.bg-alt .worked-total .block-value.score .max, section.bg-alt-2 .worked-total .block-value.score .max, section.bg-light .worked-total .block-value.score .max {
    color: #000000;
  }
  /* Score number (95), tier (APEX), cost (30 credits) — keep tiger orange (bottom focal values) */
  section.bg-alt .worked-total .block-value.score, section.bg-alt-2 .worked-total .block-value.score, section.bg-light .worked-total .block-value.score { color: var(--tiger); }
  section.bg-alt .worked-row, section.bg-alt-2 .worked-row, section.bg-light .worked-row { border-color: rgba(0,0,0,0.10); }
  section.bg-alt .worked-total, section.bg-alt-2 .worked-total, section.bg-light .worked-total {
    background: #FFFFFF;
    border-color: rgba(0,133,138,0.40);
  }
  section.bg-alt .strike-bar, section.bg-alt-2 .strike-bar, section.bg-light .strike-bar { background: rgba(0,0,0,0.08); }
  /* Define cards (left/right columns) on light bg */
  section.bg-alt .define-col, section.bg-alt-2 .define-col, section.bg-light .define-col { color: #000000; }

  /* === COMPREHENSIVE LIGHT-SECTION FIXES === */
  /* Define row container — pure white card with subtle definition */
  section.bg-alt .define-row, section.bg-alt-2 .define-row, section.bg-light .define-row {
    background: #FFFFFF;
    border-color: rgba(0,0,0,0.10);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
  }
  section.bg-alt .define-row > div, section.bg-alt-2 .define-row > div, section.bg-light .define-row > div {
    border-right-color: rgba(0,0,0,0.08);
  }
  section.bg-alt .define-row h3, section.bg-alt-2 .define-row h3, section.bg-light .define-row h3 { color: #000000; }
  section.bg-alt .define-row p, section.bg-alt-2 .define-row p, section.bg-light .define-row p { color: #000000; }
  /* num-meta replaces the bone-dim inline style on the small suffix in num elements */
  .define-row .num .num-meta { font-size: 24px; color: var(--bone-dim); font-weight: 400; }
  section.bg-alt .define-row .num .num-meta,
  section.bg-alt-2 .define-row .num .num-meta,
  section.bg-light .define-row .num .num-meta { color: #000000; }

  /* Schema arrow break — black "patch" around the ▼ glyph turns white on light bg */
  section.bg-alt .schema-arrow::after,
  section.bg-alt-2 .schema-arrow::after,
  section.bg-light .schema-arrow::after { background: #FFFFFF; }

  /* Score meter — was dark, becomes pure white card with subtle definition */
  section.bg-alt .score-meter, section.bg-alt-2 .score-meter, section.bg-light .score-meter {
    background: #FFFFFF;
    border-color: rgba(0,0,0,0.10);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
  }
  section.bg-alt .score-meter-head .label, section.bg-alt-2 .score-meter-head .label, section.bg-light .score-meter-head .label,
  section.bg-alt .score-labels, section.bg-alt-2 .score-labels, section.bg-light .score-labels { color: #000000; }
  section.bg-alt .score-meter-head .formula, section.bg-alt-2 .score-meter-head .formula, section.bg-light .score-meter-head .formula { color: #000000; }
  section.bg-alt .score-bar, section.bg-alt-2 .score-bar, section.bg-light .score-bar { border-color: rgba(0,0,0,0.08); }
  section.bg-alt .score-zone, section.bg-alt-2 .score-zone, section.bg-light .score-zone { border-right-color: rgba(0,0,0,0.10); }
  /* Score zones: tweak fills and text for legibility on light bg */
  section.bg-alt .score-zone.notlisted, section.bg-alt-2 .score-zone.notlisted, section.bg-light .score-zone.notlisted {
    background: rgba(0,0,0,0.06); color: #6A645E;
  }
  section.bg-alt .score-zone.basic, section.bg-alt-2 .score-zone.basic, section.bg-light .score-zone.basic {
    background: rgba(0,0,0,0.04); color: #6A645E;
  }
  section.bg-alt .score-zone.standard, section.bg-alt-2 .score-zone.standard, section.bg-light .score-zone.standard { color: #C75919; }
  section.bg-alt .score-zone.premium, section.bg-alt-2 .score-zone.premium, section.bg-light .score-zone.premium { color: #FFFFFF; }

  /* Tier mapping table */
  section.bg-alt .tier-mapping, section.bg-alt-2 .tier-mapping, section.bg-light .tier-mapping {
    background: #FFFFFF;
    border-color: rgba(0,0,0,0.10);
    box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
  }
  /* Hero-style sublabel ".sub" already handled above */

  /* Section divider — sits at top of every section after the first */
  section + section::before {
    content: "";
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: min(820px, 86%);
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(249,115,22,0.55) 30%,
      rgba(0,133,138,0.55) 70%,
      transparent 100%);
    pointer-events: none;
    z-index: 2;
  }
  /* Center accent dot punctuating the divider */
  section + section::after {
    content: "";
    position: absolute;
    top: -3px; left: 50%;
    transform: translateX(-50%);
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--tiger);
    box-shadow: 0 0 0 3px var(--ink), 0 0 16px rgba(249,115,22,0.5);
    pointer-events: none;
    z-index: 3;
  }
  /* On light sections, the accent dot needs a white halo not ink */
  section.bg-alt + section::after,
  section.bg-alt-2 + section::after,
  section.bg-light + section::after,
  section + section.bg-alt::after,
  section + section.bg-alt-2::after,
  section + section.bg-light::after {
    box-shadow: 0 0 0 3px #FFFFFF, 0 0 16px rgba(249,115,22,0.5);
  }
  /* Stronger divider for consecutive same-background sections — they otherwise blur */
  section.tiers + section.reveal::before,
  section.schema + section.rules::before {
    height: 3px;
    width: min(900px, 92%);
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(249,115,22,0.85) 30%,
      rgba(0,133,138,0.85) 70%,
      transparent 100%);
  }
  section.tiers + section.reveal::after,
  section.schema + section.rules::after {
    width: 12px; height: 12px;
    top: -5px;
    box-shadow: 0 0 0 4px var(--ink), 0 0 24px rgba(249,115,22,0.6);
  }
  section.schema + section.rules::after {
    box-shadow: 0 0 0 4px #FFFFFF, 0 0 24px rgba(249,115,22,0.6);
  }

  /* ---------- HERO ---------- */
  .hero {
    padding: 64px 0 80px;
    background:
      radial-gradient(900px 500px at 85% -10%, rgba(249,115,22,0.18), transparent 60%),
      radial-gradient(700px 400px at 0% 100%, rgba(0,133,138,0.12), transparent 60%),
      var(--ink);
    border-bottom: 1px solid var(--line);
    overflow: hidden;
  }
  .hero-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 40px;
  }
  .hero-grid > div:first-child {
    width: 100%;
    max-width: 900px;
  }
  .hero h1 {
    font-size: clamp(56px, 8vw, 110px);
    margin-top: 22px;
    color: var(--bone);
    text-align: center;
  }
  .hero h1 .accent {
    color: var(--tiger);
    position: relative;
    display: inline-block;
  }
  /* underline removed */
  .hero p.lede {
    margin: 28px auto 0;
    font-size: 19px;
    color: var(--bone-dim);
    max-width: 620px;
    line-height: 1.55;
    text-align: center;
  }
  .hero .eyebrow {
    justify-content: center;
  }
  .hero-meta {
    margin-top: 36px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 14px;
    border: 1px solid var(--line-strong);
    background: rgba(255,255,255,0.02);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11.5px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--bone);
  }
  .pill .dot {
    width: 7px; height: 7px; background: var(--tiger);
    border-radius: 50%;
    box-shadow: 0 0 0 3px rgba(255,107,26,0.18);
  }

  /* ---------- THE COIN ---------- */
  .coin-stage {
    position: relative;
    height: 420px;
    display: flex; align-items: center; justify-content: center;
  }
  /* Tiger-orange glow behind the coin */
  .coin-stage::before {
    content: "";
    position: absolute;
    inset: 30% 10% auto 10%;
    height: 60px;
    background: radial-gradient(ellipse at center, rgba(249,115,22,0.55), transparent 70%);
    filter: blur(24px);
    z-index: 0;
  }
  /* Cyan glow underneath */
  .coin-stage::after {
    content: "";
    position: absolute;
    inset: 50% 25% auto 25%;
    height: 40px;
    background: radial-gradient(ellipse at center, rgba(0,133,138,0.35), transparent 70%);
    filter: blur(28px);
    z-index: 0;
  }
  /* === COIN (image-based) === */
  .coin {
    position: relative;
    width: 380px;
    height: 380px;
    z-index: 1;
    animation: coinFloat 6s ease-in-out infinite;
    filter: drop-shadow(0 22px 32px rgba(0,0,0,0.55));
  }
  .coin img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @keyframes coinFloat {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }

  /* ---------- SECTION HEAD ---------- */
  .section-head {
    padding: 120px 0 56px;
    position: relative;
  }
  /* Visual ornament above each section head — short orange accent bar */
  .section-head::before {
    content: "";
    position: absolute;
    top: 56px; left: 0;
    width: 56px; height: 3px;
    background: var(--tiger);
  }
  .section-head h2 {
    font-size: clamp(44px, 6vw, 84px);
    margin-top: 28px;
    max-width: 14ch;
  }
  .section-head .sub {
    margin-top: 26px;
    color: var(--bone-dim);
    max-width: 56ch;
    font-size: 17px;
  }

  /* ---------- WHAT IS A CREDIT ---------- */
  .define {
    padding: 0 0 96px;
  }
  .define-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    border: 1px solid var(--line-strong);
    background: var(--ink-2);
  }
  .define-row > div {
    padding: 36px 32px;
    border-right: 1px solid var(--line-strong);
  }
  .define-row > div:last-child { border-right: 0; }
  .define-row .num {
    font-family: 'Anton', sans-serif;
    font-size: 56px;
    color: var(--tiger);
    line-height: 1;
  }
  .define-row h3 {
    margin-top: 14px;
    font-size: 22px;
    font-weight: 700;
    color: var(--bone);
  }
  .define-row p {
    margin-top: 10px;
    color: var(--bone-dim);
    font-size: 15px;
  }

  /* ---------- LEAD TIERS ---------- */
  .tiers { padding: 0 0 100px; }
  .tier-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 12px;
  }
  .tier-card {
    background: var(--ink-2);
    border: 1px solid var(--line-strong);
    padding: 28px 24px 28px;
    position: relative;
    transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    overflow: hidden;
  }
  .tier-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--stripe);
    transition: background 0.25s;
  }
  .tier-card[data-tier="1"]::before { background: var(--bone-dim); }
  .tier-card[data-tier="2"]::before { background: var(--cyan); }
  .tier-card[data-tier="3"]::before { background: var(--tiger); }
  .tier-card[data-tier="4"]::before { background: linear-gradient(90deg, var(--tiger), var(--cyan)); }
  .tier-card[data-tier="4"] .tier-cost .credit-tag {
    color: var(--tiger);
  }
  .tier-card[data-tier="4"]:hover {
    border-color: var(--tiger);
  }
  .tier-card:hover {
    transform: translateY(-6px);
    border-color: var(--tiger);
    background: var(--ink-3);
  }
  .tier-meta {
    display: flex; justify-content: space-between; align-items: flex-start;
    margin-bottom: 24px;
  }
  .claws {
    display: flex; gap: 4px;
  }
  .claw {
    width: 4px; height: 16px;
    background: var(--stripe);
    transform: skewX(-12deg);
    border-radius: 1px;
  }
  .claw.on { background: var(--tiger); }
  .tier-card[data-tier="4"] .claw.on { background: var(--cyan); }
  .tier-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    color: var(--bone-dim);
    text-transform: uppercase;
  }
  .tier-cost {
    font-family: 'Anton', sans-serif;
    font-size: 78px;
    color: var(--bone);
    line-height: 0.9;
    display: flex;
    align-items: baseline;
    gap: 8px;
  }
  .tier-cost .credit-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--tiger);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    align-self: flex-end;
    margin-bottom: 10px;
  }
  .tier-name {
    margin-top: 4px;
    font-family: 'Archivo', sans-serif;
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--bone);
  }
  .tier-desc {
    margin-top: 12px;
    font-size: 14px;
    color: var(--bone-dim);
    line-height: 1.5;
    min-height: 64px;
  }
  .tier-tags {
    margin-top: 20px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    display: flex; flex-wrap: wrap; gap: 6px;
  }
  .tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 4px 8px;
    border: 1px solid var(--line-strong);
    color: var(--bone-dim);
  }
  .tier-disclaimer {
    margin-top: 28px;
    padding: 16px 20px;
    border-left: 3px solid var(--tiger);
    background: rgba(255,107,26,0.06);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
    color: var(--bone);
  }

  /* ---------- BEFORE / AFTER ---------- */
  .reveal { padding: 0 0 100px; }
  .reveal-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 24px;
    align-items: stretch;
    margin-top: 12px;
  }
  .reveal-col-label {
    font-family: 'IBM Plex Mono', monospace;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.2em;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .reveal-col-label.locked { color: var(--bone-dim); }
  .reveal-col-label.unlocked { color: var(--tiger); }
  .reveal-col-label .marker {
    width: 8px; height: 8px;
    border-radius: 50%;
  }
  .reveal-col-label.locked .marker { background: var(--bone-dim); }
  .reveal-col-label.unlocked .marker {
    background: var(--tiger);
    box-shadow: 0 0 0 4px rgba(255,107,26,0.15);
  }

  .lead-card {
    background: var(--ink-2);
    border: 1px solid var(--line-strong);
    padding: 28px;
    position: relative;
    height: 100%;
  }
  .lead-card.unlocked {
    background: linear-gradient(180deg, rgba(255,107,26,0.06) 0%, var(--ink-2) 60%);
    border-color: var(--tiger);
    box-shadow:
      0 0 0 1px rgba(255,107,26,0.3),
      0 30px 60px -30px rgba(255,107,26,0.4);
  }

  .lead-head {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid var(--line);
  }
  .lead-title {
    font-size: 19px;
    font-weight: 800;
    color: var(--bone);
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .lead-id {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--bone-dim);
    margin-top: 2px;
  }
  .lead-badge {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 4px 8px;
    background: var(--ink-3);
    border: 1px solid var(--line-strong);
    color: var(--bone);
  }
  .lead-card.unlocked .lead-badge {
    background: var(--tiger);
    border-color: var(--tiger);
    color: var(--ink);
    font-weight: 700;
  }

  .field {
    display: grid;
    grid-template-columns: 150px 1fr auto;
    gap: 12px;
    padding: 11px 0;
    border-bottom: 1px dashed var(--line);
    align-items: center;
    font-size: 14.5px;
  }
  .field:last-of-type { border-bottom: 0; }
  .field-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .field-value { color: var(--bone); font-weight: 500; }
  .field-value.redacted {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--stripe);
    background: var(--stripe);
    border-radius: 2px;
    padding: 4px 8px;
    font-size: 12px;
    letter-spacing: 0.08em;
    user-select: none;
    width: fit-content;
  }
  .field-icon {
    width: 16px; height: 16px;
    color: var(--bone-dim);
  }
  .lead-card.unlocked .field-icon { color: var(--tiger); }
  .field-value.revealed {
    color: var(--bone);
    font-weight: 600;
  }
  .field-value.revealed.email,
  .field-value.revealed.phone {
    color: var(--tiger);
  }
  .lead-foot {
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid var(--line);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
  }
  .lead-foot .credits-needed {
    color: var(--tiger);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
  }
  .lead-foot .credits-spent {
    color: var(--tiger);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
  }

  /* ---------- PREVIEW BAND + DATA-POINT GROUPS ---------- */
  .data-band {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
    padding: 12px 0 6px;
    margin-top: 10px;
    border-top: 1px solid var(--line);
  }
  .data-band .count {
    color: var(--tiger);
    font-weight: 700;
  }
  .lead-card.unlocked .data-band .count {
    color: var(--tiger);
  }
  .data-band .lock-svg {
    width: 12px; height: 12px;
    color: var(--tiger);
  }
  .lead-card.unlocked .data-band .lock-svg {
    color: var(--tiger);
  }

  .group-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--bone-dim);
    margin-top: 14px;
    padding-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .group-label::before {
    content: "";
    width: 4px; height: 4px;
    background: var(--tiger);
    border-radius: 50%;
  }
  .lead-card.unlocked .group-label::before {
    background: var(--cyan);
  }

  /* compact field row for the 15 data points */
  .field-sm {
    display: grid;
    grid-template-columns: 130px 1fr auto;
    gap: 10px;
    padding: 7px 0;
    border-bottom: 1px dashed var(--line);
    align-items: center;
    font-size: 13px;
  }
  .field-sm:last-of-type { border-bottom: 0; }
  .field-sm .field-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .field-sm .field-value {
    color: var(--bone);
    font-size: 13px;
    line-height: 1.4;
  }
  .field-sm .field-value.redacted {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--stripe);
    background: var(--stripe);
    border-radius: 2px;
    padding: 3px 7px;
    font-size: 11px;
    letter-spacing: 0.06em;
    user-select: none;
    width: fit-content;
  }
  .field-sm .field-value.revealed {
    color: var(--bone);
    font-weight: 500;
  }
  .field-sm .field-value.revealed.highlight {
    color: var(--tiger);
    font-weight: 600;
  }
  .field-sm .field-value.empty-slot {
    color: var(--tiger);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11.5px;
    letter-spacing: 0.06em;
    font-weight: 600;
  }
  .field-sm .field-icon {
    width: 13px; height: 13px;
    color: var(--bone-dim);
  }
  .lead-card.unlocked .field-sm .field-icon { color: var(--tiger); }

  .opportunity-flag {
    margin-top: 8px;
    padding: 10px 12px;
    background: rgba(255,107,26,0.10);
    border-left: 2px solid var(--tiger);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--tiger);
    letter-spacing: 0.06em;
    line-height: 1.5;
  }

  /* ---------- STRIKE SCORE ON LEAD CARD ---------- */
  .strike-meta {
    margin-top: 18px;
    padding: 14px 16px;
    background: rgba(79,217,212,0.04);
    border: 1px solid var(--line-strong);
    border-left: 3px solid var(--cyan);
  }
  .lead-card:not(.unlocked) .strike-meta {
    background: rgba(255,107,26,0.04);
    border-left-color: var(--tiger);
  }
  .strike-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .strike-row .strike-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .strike-row .strike-tier-pill {
    font-family: 'Anton', sans-serif;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: var(--tiger);
    padding: 3px 10px;
    border: 1px solid var(--cyan);
  }
  .lead-card:not(.unlocked) .strike-tier-pill {
    color: var(--tiger);
    border-color: var(--tiger);
  }
  .strike-score-display {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-family: 'Anton', sans-serif;
    margin-bottom: 10px;
  }
  .strike-score-display .num {
    font-size: 38px;
    color: var(--bone);
    line-height: 1;
  }
  .strike-score-display .max {
    font-size: 14px;
    color: var(--bone-dim);
    font-family: 'IBM Plex Mono', monospace;
    letter-spacing: 0.06em;
  }
  .strike-bar {
    height: 6px;
    background: var(--ink-3);
    position: relative;
    overflow: hidden;
  }
  .strike-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--tiger), var(--cyan));
  }
  .strike-mini-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px 16px;
    margin-top: 12px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    color: var(--bone-dim);
    letter-spacing: 0.04em;
  }
  .strike-mini-grid div {
    display: flex; justify-content: space-between;
  }
  .strike-mini-grid strong {
    color: var(--bone);
    font-weight: 600;
  }

  /* ---------- DATA SUCCESS BADGE ---------- */
  .data-success {
    margin-top: 8px;
    padding: 10px 12px;
    background: rgba(79,217,212,0.10);
    border-left: 2px solid var(--cyan);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--tiger);
    letter-spacing: 0.06em;
    line-height: 1.5;
  }

  /* ---------- SCHEMA SECTION ---------- */
  .schema { padding: 0 0 100px; }

  .schema-factors {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 12px;
  }
  .factor-card {
    background: var(--ink-2);
    border: 1px solid var(--line-strong);
    padding: 26px 22px 24px;
    position: relative;
    transition: border-color 0.25s, transform 0.25s;
  }
  .factor-card::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: var(--cyan);
    opacity: 0.5;
  }
  .factor-card:hover {
    transform: translateY(-4px);
    border-color: var(--tiger);
  }
  .factor-card .factor-num {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .factor-card .factor-weight {
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .factor-card .factor-weight .num {
    font-family: 'Anton', sans-serif;
    font-size: 60px;
    color: var(--tiger);
    line-height: 1;
  }
  .factor-card .factor-weight .unit {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--bone-dim);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .factor-card .factor-name {
    margin-top: 6px;
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--bone);
  }
  .factor-card .factor-desc {
    margin-top: 12px;
    font-size: 13.5px;
    color: var(--bone-dim);
    line-height: 1.55;
  }
  .factor-card .factor-breakdown {
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid var(--line);
    display: grid;
    gap: 5px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
  }
  .factor-card .factor-breakdown div {
    display: flex; justify-content: space-between;
    color: var(--bone-dim);
  }
  .factor-card .factor-breakdown strong {
    color: var(--bone);
    font-weight: 600;
  }

  .schema-flow {
    max-width: 920px;
    margin: 56px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .schema-arrow {
    width: 2px;
    height: 44px;
    background: linear-gradient(180deg, var(--cyan), transparent);
    position: relative;
    margin: 14px 0;
  }
  .schema-arrow::after {
    content: "▼";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    color: var(--tiger);
    font-size: 14px;
    background: var(--ink);
    padding: 0 4px;
  }

  /* The score meter (0-100 with tier zones) */
  .score-meter {
    width: 100%;
    background: var(--ink-2);
    border: 1px solid var(--line-strong);
    padding: 28px 32px;
  }
  .score-meter-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }
  .score-meter-head .label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .score-meter-head .formula {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 12px;
    color: var(--bone);
  }
  .score-meter-head .formula span {
    color: var(--tiger);
  }
  .score-bar {
    height: 38px;
    display: flex;
    border: 1px solid var(--line-strong);
    overflow: hidden;
  }
  .score-zone {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    border-right: 1px solid var(--ink);
    position: relative;
  }
  .score-zone:last-child { border-right: 0; }
  .score-zone.notlisted { background: var(--ink-3); color: var(--bone-dim); flex: 0 0 18%; }
  .score-zone.basic     { background: rgba(244,239,230,0.08); color: var(--bone-dim); flex: 0 0 19%; }
  .score-zone.standard  { background: rgba(255,107,26,0.18); color: var(--tiger-glow); flex: 0 0 24%; }
  .score-zone.premium   { background: rgba(255,107,26,0.5); color: var(--bone); flex: 0 0 19%; }
  .score-zone.apex      { background: linear-gradient(90deg, var(--tiger), var(--cyan)); color: var(--ink); flex: 0 0 20%; }
  .score-labels {
    display: flex;
    margin-top: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    color: var(--bone-dim);
  }
  .score-labels span {
    text-align: center;
  }
  .score-labels .l-notlisted { flex: 0 0 18%; }
  .score-labels .l-basic     { flex: 0 0 19%; }
  .score-labels .l-standard  { flex: 0 0 24%; }
  .score-labels .l-premium   { flex: 0 0 19%; }
  .score-labels .l-apex      { flex: 0 0 20%; }

  /* Tier mapping table */
  .tier-mapping {
    width: 100%;
    background: var(--ink-2);
    border: 1px solid var(--line-strong);
  }
  .tier-mapping-row {
    display: grid;
    grid-template-columns: 0.9fr 1fr 0.9fr 2fr;
    align-items: center;
    padding: 18px 28px;
    border-bottom: 1px solid var(--line);
    font-family: 'IBM Plex Mono', monospace;
    font-size: 13px;
  }
  .tier-mapping-row:last-child { border-bottom: 0; }
  .tier-mapping-row.thead {
    background: var(--ink-3);
    font-size: 10.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
    font-weight: 700;
    padding: 14px 28px;
  }
  .tier-mapping-row .score-cell {
    color: var(--bone);
    font-weight: 700;
  }
  .tier-mapping-row .tier-cell {
    font-family: 'Anton', sans-serif;
    font-size: 22px;
    letter-spacing: 0.04em;
  }
  .tier-mapping-row.r-apex .tier-cell { color: var(--tiger); }
  .tier-mapping-row.r-premium .tier-cell { color: var(--tiger); }
  .tier-mapping-row.r-standard .tier-cell { color: var(--tiger-glow); }
  .tier-mapping-row.r-basic .tier-cell { color: var(--bone-dim); }
  .tier-mapping-row.r-notlisted .tier-cell { color: var(--stripe); font-style: italic; }
  .tier-mapping-row .cost-cell {
    color: var(--bone);
    font-weight: 700;
    font-size: 14px;
  }
  .tier-mapping-row.r-notlisted .cost-cell { color: var(--bone-dim); font-weight: 400; }
  .tier-mapping-row .signal-cell {
    color: var(--bone-dim);
    font-family: 'Archivo', sans-serif;
    font-size: 13.5px;
  }

  /* Worked example */
  .worked-example {
    margin-top: 64px;
    background:
      linear-gradient(135deg, rgba(79,217,212,0.05), transparent 60%),
      var(--ink-2);
    border: 1px solid var(--cyan);
    padding: 38px 42px;
    position: relative;
  }
  .worked-example::before {
    content: "";
    position: absolute;
    top: -1px; left: -1px; right: -1px;
    height: 3px;
    background: linear-gradient(90deg, var(--tiger) 0%, var(--cyan) 100%);
  }
  .worked-tag {
    display: inline-flex;
    gap: 8px;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--tiger);
    margin-bottom: 14px;
  }
  .worked-tag::before {
    content: "//";
    color: var(--bone-dim);
  }
  .worked-title {
    font-family: 'Anton', sans-serif;
    font-size: 36px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
    color: var(--bone);
    line-height: 1;
  }
  .worked-sub {
    color: var(--bone-dim);
    font-size: 15px;
    margin-bottom: 28px;
  }
  .worked-rows {
    display: grid;
    gap: 0;
    margin-bottom: 22px;
  }
  .worked-row {
    display: grid;
    grid-template-columns: 32px 1.4fr 1.6fr auto;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px dashed var(--line);
    align-items: center;
  }
  .worked-row .plus {
    font-family: 'IBM Plex Mono', monospace;
    color: var(--tiger);
    font-weight: 700;
    font-size: 16px;
  }
  .worked-row .row-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11.5px;
    letter-spacing: 0.06em;
    color: var(--bone);
    text-transform: uppercase;
    font-weight: 600;
  }
  .worked-row .row-detail {
    color: var(--bone-dim);
    font-size: 13.5px;
  }
  .worked-row .row-pts {
    font-family: 'Anton', sans-serif;
    font-size: 26px;
    color: var(--bone);
    letter-spacing: 0.02em;
    line-height: 1;
  }
  .worked-row .row-pts .pts-max {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 11px;
    color: var(--bone-dim);
    letter-spacing: 0.06em;
  }
  .worked-total {
    margin-top: 14px;
    padding: 22px 26px;
    background: var(--ink);
    border: 1px solid var(--cyan);
    display: grid;
    grid-template-columns: 1fr auto 1fr auto 1fr;
    align-items: center;
    gap: 18px;
  }
  .worked-total .block {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .worked-total .block-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--bone-dim);
  }
  .worked-total .block-value {
    font-family: 'Anton', sans-serif;
    line-height: 1;
    letter-spacing: 0.02em;
  }
  .worked-total .block-value.score {
    font-size: 52px;
    color: var(--bone);
  }
  .worked-total .block-value.score .max {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 14px;
    color: var(--bone-dim);
    letter-spacing: 0.06em;
  }
  .worked-total .block-value.tier {
    font-size: 36px;
    color: var(--tiger);
  }
  .worked-total .block-value.cost {
    font-size: 36px;
    color: var(--tiger);
  }
  .worked-total .arrow-symbol {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 24px;
    color: var(--bone-dim);
  }

  /* schema responsive */
  @media (max-width: 980px) {
    .schema-factors { grid-template-columns: repeat(2, 1fr); }
    .tier-mapping-row { grid-template-columns: 1fr 1fr; gap: 8px 12px; padding: 16px 20px; }
    .tier-mapping-row.thead { display: none; }
    .tier-mapping-row .signal-cell { grid-column: 1 / -1; }
    .worked-row { grid-template-columns: 24px 1fr auto; }
    .worked-row .row-detail { grid-column: 2 / -1; }
    .worked-total { grid-template-columns: 1fr; gap: 10px; text-align: left; }
    .worked-total .arrow-symbol { display: none; }
    .score-zone { font-size: 9px; letter-spacing: 0.08em; }
    .score-labels { font-size: 9.5px; }
  }
  @media (max-width: 540px) {
    .schema-factors { grid-template-columns: 1fr; }
    .worked-example { padding: 26px 22px; }
    .worked-title { font-size: 28px; }
  }

  /* arrow column between cards */
  .reveal-arrow {
    display: flex; flex-direction: column; align-items: center;
    justify-content: center;
    padding: 0 4px;
    min-width: 100px;
  }
  .reveal-arrow .spend {
    font-family: 'Anton', sans-serif;
    font-size: 56px;
    color: var(--tiger);
    line-height: 1;
  }
  .reveal-arrow .spend-sub {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    color: var(--bone-dim);
    text-transform: uppercase;
    margin-top: 6px;
  }
  .reveal-arrow .arrow-line {
    width: 100%;
    height: 1px;
    background: var(--line-strong);
    margin: 22px 0;
    position: relative;
  }
  .reveal-arrow .arrow-line::after {
    content: "→";
    position: absolute;
    right: -2px; top: 50%;
    transform: translateY(-50%);
    color: var(--tiger);
    font-size: 18px;
    background: var(--ink);
    padding-left: 6px;
  }
  .reveal-arrow .label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 10.5px;
    letter-spacing: 0.18em;
    color: var(--bone-dim);
    text-transform: uppercase;
    text-align: center;
  }

  /* ---------- RULES STRIP ---------- */
  .rules {
    padding: 60px 0 100px;
  }
  .rules-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--line-strong);
    border: 1px solid var(--line-strong);
  }
  .rule {
    background: var(--ink-2);
    padding: 36px 28px;
    transition: background 0.25s;
  }
  .rule:hover { background: var(--ink-3); }
  .rule-icon {
    width: 44px; height: 44px;
    border: 1.5px solid var(--tiger);
    color: var(--tiger);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px;
  }
  .rule h4 {
    font-size: 17px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--bone);
    margin-bottom: 10px;
  }
  .rule p {
    color: var(--bone-dim);
    font-size: 14.5px;
    line-height: 1.55;
  }

  /* ---------- CTA ---------- */
  .cta {
    padding: 90px 0 110px;
    background:
      linear-gradient(135deg, rgba(255,107,26,0.10), transparent 60%),
      var(--ink-2);
    border-top: 1px solid var(--line-strong);
    border-bottom: 1px solid var(--line-strong);
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .cta::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .cta-inner { position: relative; z-index: 1; }
  .cta h2 {
    font-size: clamp(48px, 8vw, 110px);
    color: var(--bone);
  }
  .cta h2 span { color: var(--tiger); }
  .cta p {
    margin: 22px auto 36px;
    color: var(--bone-dim);
    max-width: 540px;
    font-size: 17px;
  }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 32px;
    background: var(--tiger);
    color: var(--ink);
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    text-decoration: none;
    border: 0;
    transition: transform 0.2s, background 0.2s;
    box-shadow: 0 6px 0 var(--tiger-deep);
  }
  .btn:hover {
    transform: translateY(-2px);
    background: var(--cyan);
    color: var(--ink);
    box-shadow: 0 8px 0 var(--cyan-deep);
  }
  .btn .arrow { font-size: 18px; }

  /* ---------- ENTRY ANIM ---------- */
  .fade-up {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeUp 0.8s ease forwards;
  }
  @keyframes fadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }

  /* ---------- RESPONSIVE ---------- */
  @media (max-width: 980px) {
    .hero-grid { grid-template-columns: 1fr; gap: 30px; }
    .coin-stage { height: 320px; }
    .coin { width: 280px; height: 280px; }
      .define-row { grid-template-columns: 1fr; }
    .define-row > div { border-right: 0; border-bottom: 1px solid var(--line-strong); }
    .define-row > div:last-child { border-bottom: 0; }
    .tier-grid { grid-template-columns: repeat(2, 1fr); }
    .reveal-grid { grid-template-columns: 1fr; }
    .reveal-arrow { flex-direction: row; padding: 14px 0; gap: 14px; min-width: 0; }
    .reveal-arrow .arrow-line { display: none; }
    .rules-grid { grid-template-columns: 1fr; }
    .field { grid-template-columns: 110px 1fr auto; }
    .field-sm { grid-template-columns: 110px 1fr auto; }
  }
  @media (max-width: 540px) {
    .wrap { padding: 0 20px; }
    .tier-grid { grid-template-columns: 1fr; }
    .hero { padding: 60px 0 50px; }
    .section-head { padding: 80px 0 40px; }
    .section-head::before { top: 36px; }
    .field { grid-template-columns: 95px 1fr auto; gap: 8px; }
    .field-sm { grid-template-columns: 95px 1fr auto; gap: 8px; }
    .field-label { font-size: 10px; }
  }
</style>
</head>
<body>

<div class="tl-credits-page">
<!-- HERO -->
<section class="hero">
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <div class="eyebrow fade-up delay-1">Credits 101 · How they work</div>
        <h1 class="display fade-up delay-2">
          Spend smart.<br/>
          <span class="accent">Strike first.</span><br/>
          Win the job.
        </h1>
        <p class="lede fade-up delay-3">
          Credits are the currency you spend to unlock a lead's full project scope and
          direct customer contact. You see every job's basic preview free — you only
          burn credits on the ones worth chasing.
        </p>
        <div class="hero-meta fade-up delay-3">
          <span class="pill"><span class="dot"></span>Cost shown before you spend</span>
          <span class="pill"><span class="dot"></span>Credits don't expire</span>
          <span class="pill"><span class="dot"></span>5 contractors max per lead</span>
        </div>
      </div>

      <!-- The coin -->
      <div class="coin-stage" aria-hidden="true">
        <div class="coin">
          <img src="images/U6ZseDoK5e37XlBXMxGl2ORb34.png" alt="TigerLeads credit token" loading="eager" />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WHAT IS A CREDIT -->
<section class="define bg-alt">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">01 · The basics</div>
      <h2 class="display">What's a credit, actually?</h2>
      <p class="sub">
        Think of credits like ammunition for a hunt. Your plan loads you up each
        month — you choose when, where, and how aggressively to spend.
      </p>
    </div>

    <div class="define-row">
      <div>
        <div class="num">1<span class="num-meta">:1</span></div>
        <h3>Credits unlock leads, 1 for 1</h3>
        <p>
          Every job posting on TigerLeads has a basic preview anyone can see.
          Spend one credit, get the full project details and direct customer contact info.
        </p>
      </div>
      <div>
        <div class="num">150<span class="num-meta">–1000</span></div>
        <h3>Loaded monthly with your plan</h3>
        <p>
          Starter ships with 150 credits. Professional gets 300. Enterprise unlocks 1,000.
          Plan credits reset on your billing cycle to keep you actively hunting.
        </p>
      </div>
      <div>
        <div class="num">$0</div>
        <h3>Bonuses never expire</h3>
        <p>
          Bonus credits and Boost Pack credits stay in your account as long as your
          subscription is active — stockpile them for the right opportunity.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- LEAD TIERS -->
<section class="tiers">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">02 · Cost by lead type</div>
      <h2 class="display">Bigger prey costs more credits.</h2>
      <p class="sub">
        Unlock cost is set by our <strong style="color:var(--bone);">Strike Score</strong> rating system —
        every lead is graded on data completeness, contact quality, value signal, and recency.
        Our goal is 20/20 data points. When we can't get there, you pay less.
      </p>
    </div>

    <div class="tier-grid">
      <!-- Tier 1 -->
      <div class="tier-card" data-tier="1">
        <div class="tier-meta">
          <span class="tier-num">Tier 01 · Score 20-39</span>
          <div class="claws">
            <span class="claw on"></span>
            <span class="claw"></span>
            <span class="claw"></span>
            <span class="claw"></span>
          </div>
        </div>
        <div class="tier-cost">
          <span>10</span>
          <span class="credit-tag">credits</span>
        </div>
        <div class="tier-name">Basic</div>
        <p class="tier-desc">
          Limited data set. Some fields missing — expect contact info gaps or older filings.
          Worth a look on quick single-trade jobs.
        </p>
        <div class="tier-tags">
          <span class="tag">Repairs</span>
          <span class="tag">Service Calls</span>
          <span class="tag">Single Trade</span>
        </div>
      </div>

      <!-- Tier 2 -->
      <div class="tier-card" data-tier="2">
        <div class="tier-meta">
          <span class="tier-num">Tier 02 · Score 40-64</span>
          <div class="claws">
            <span class="claw on"></span>
            <span class="claw on"></span>
            <span class="claw"></span>
            <span class="claw"></span>
          </div>
        </div>
        <div class="tier-cost">
          <span>15</span>
          <span class="credit-tag">credits</span>
        </div>
        <div class="tier-name">Standard</div>
        <p class="tier-desc">
          Solid baseline of data with core contact info. Mid-size residential remodels,
          installs, and material orders.
        </p>
        <div class="tier-tags">
          <span class="tag">Kitchen</span>
          <span class="tag">Bath</span>
          <span class="tag">HVAC</span>
          <span class="tag">Roofing</span>
        </div>
      </div>

      <!-- Tier 3 -->
      <div class="tier-card" data-tier="3">
        <div class="tier-meta">
          <span class="tier-num">Tier 03 · Score 65-84</span>
          <div class="claws">
            <span class="claw on"></span>
            <span class="claw on"></span>
            <span class="claw on"></span>
            <span class="claw"></span>
          </div>
        </div>
        <div class="tier-cost">
          <span>20</span>
          <span class="credit-tag">credits</span>
        </div>
        <div class="tier-name">Premium</div>
        <p class="tier-desc">
          Strong data set, most fields filled, fresh filing. Whole-home remodels,
          new construction, and high-volume supply orders.
        </p>
        <div class="tier-tags">
          <span class="tag">New Build</span>
          <span class="tag">Full Remodel</span>
          <span class="tag">Bulk Supply</span>
        </div>
      </div>

      <!-- Tier 4 -->
      <div class="tier-card" data-tier="4">
        <div class="tier-meta">
          <span class="tier-num">Tier 04 · Score 85-100</span>
          <div class="claws">
            <span class="claw on"></span>
            <span class="claw on"></span>
            <span class="claw on"></span>
            <span class="claw on"></span>
          </div>
        </div>
        <div class="tier-cost">
          <span>30</span>
          <span class="credit-tag">credits</span>
        </div>
        <div class="tier-name">Apex</div>
        <p class="tier-desc">
          Verified 20/20 data points. Full contact set, recent filing,
          high-value project. Permit-backed and ready-to-quote.
        </p>
        <div class="tier-tags">
          <span class="tag">Commercial</span>
          <span class="tag">Permitted</span>
          <span class="tag">Ready-to-Hire</span>
        </div>
      </div>
    </div>

    <div class="tier-disclaimer">
      <strong style="color:var(--tiger);">How pricing actually works:</strong>
      Final unlock cost is set by the lead's Strike Score — see Section 04 for the full schema.
      Cost is always displayed on the job card before you commit credits.
    </div>
  </div>
</section>

<!-- BEFORE / AFTER REVEAL -->
<section class="reveal">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">03 · The reveal</div>
      <h2 class="display">5 fields free.<br/>15 fields locked.</h2>
      <p class="sub">
        Every job card is built from <strong style="color:var(--bone);">20 high-signal data points</strong>.
        Five — Permit Type, Job Cost, Project Description, County/City, and State — are visible
        free so you can qualify the lead. The other fifteen reveal the moment you unlock.
        Each card carries a <strong style="color: var(--tiger);">Strike Score</strong> that tells you
        exactly how complete and how fresh the data is before you spend a credit.
      </p>
    </div>

    <div class="reveal-grid">

      <!-- ============ LOCKED CARD ============ -->
      <div>
        <div class="reveal-col-label locked">
          <span class="marker"></span>Free preview · No credits spent
        </div>
        <div class="lead-card">
          <div class="lead-head">
            <div>
              <div class="lead-title">Kitchen Remodel</div>
              <div class="lead-id mono">JOB · TL-04827 · TIER 04 · APEX · BUILDING PERMIT</div>
            </div>
            <div class="lead-badge">Locked</div>
          </div>

          <!-- 5 PREVIEW FIELDS -->
          <div class="field">
            <span class="field-label">Permit Type</span>
            <span class="field-value">Building Permit</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">Project Description</span>
            <span class="field-value">Full kitchen remodel — cabinetry, quartz countertops, plumbing reroute, tile flooring (~180 sq ft)</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">Job Cost / Value</span>
            <span class="field-value">$42,500</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">County / City</span>
            <span class="field-value">Duval County · Jacksonville</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">State</span>
            <span class="field-value">FL</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>

          <!-- STRIKE SCORE -->
          <div class="strike-meta">
            <div class="strike-row">
              <span class="strike-label">Strike Score</span>
              <span class="strike-tier-pill">APEX</span>
            </div>
            <div class="strike-score-display">
              <span class="num">95</span>
              <span class="max">/ 100</span>
            </div>
            <div class="strike-bar"><div class="strike-fill" style="width:95%"></div></div>
            <div class="strike-mini-grid">
              <div><span>Data</span><strong>20/20</strong></div>
              <div><span>Contact</span><strong>3/3</strong></div>
              <div><span>Value</span><strong>$42.5k</strong></div>
              <div><span>Filed</span><strong>4d ago</strong></div>
            </div>
          </div>

          <!-- LOCKED FIELDS -->
          <div class="data-band">
            <svg class="lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span><span class="count">+15</span> Data Points Locked</span>
          </div>

          <div class="group-label">Project Details</div>
          <div class="field-sm"><span class="field-label">Permit / Record #</span><span class="field-value redacted">██-2026-██-████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Filing Date</span><span class="field-value redacted">██████ ██, 2026</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Property Type</span><span class="field-value redacted">█████████ · ██████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Permit Sub-Type</span><span class="field-value redacted">██████ ██████████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Job Address</span><span class="field-value redacted">████ ██████ ████ Dr</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Permit Status</span><span class="field-value redacted">█████████ █████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Related Contacts</span><span class="field-value redacted">████ ██████ LLC</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>

          <div class="group-label">Customer Contact</div>
          <div class="field-sm"><span class="field-label">Owner Name</span><span class="field-value redacted">██████ █ ███████ ████████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Name</span><span class="field-value redacted">██████ ████████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Email</span><span class="field-value redacted">█████████@█████.com</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Phone</span><span class="field-value redacted">(904) ███-████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>

          <div class="group-label">Existing Contractor</div>
          <div class="field-sm"><span class="field-label">Contractor Name</span><span class="field-value redacted">█████ █████████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Co.</span><span class="field-value redacted">█████████ ████████ █████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Email</span><span class="field-value redacted">█████████@████████.com</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Phone</span><span class="field-value redacted">(904) ███-████</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>

          <div class="lead-foot">
            <span class="credits-needed">Unlock: 30 credits</span>
            <span style="color: var(--bone-dim);">5 slots open</span>
          </div>
        </div>
      </div>

      <!-- ARROW -->
      <div class="reveal-arrow">
        <div class="spend">30</div>
        <div class="spend-sub">credits</div>
        <div class="arrow-line"></div>
        <div class="label">Tap<br/>unlock</div>
      </div>

      <!-- ============ UNLOCKED CARD ============ -->
      <div>
        <div class="reveal-col-label unlocked">
          <span class="marker"></span>Unlocked · 30 credits spent
        </div>
        <div class="lead-card unlocked">
          <div class="lead-head">
            <div>
              <div class="lead-title">Kitchen Remodel</div>
              <div class="lead-id mono">JOB · TL-04827 · TIER 04 · APEX · BUILDING PERMIT</div>
            </div>
            <div class="lead-badge">Unlocked</div>
          </div>

          <!-- 5 PREVIEW FIELDS -->
          <div class="field">
            <span class="field-label">Permit Type</span>
            <span class="field-value">Building Permit</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">Project Description</span>
            <span class="field-value">Full kitchen remodel — cabinetry, quartz countertops, plumbing reroute, tile flooring (~180 sq ft)</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">Job Cost / Value</span>
            <span class="field-value">$42,500</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">County / City</span>
            <span class="field-value">Duval County · Jacksonville</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="field">
            <span class="field-label">State</span>
            <span class="field-value">FL</span>
            <svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </div>

          <!-- STRIKE SCORE -->
          <div class="strike-meta">
            <div class="strike-row">
              <span class="strike-label">Strike Score</span>
              <span class="strike-tier-pill">APEX</span>
            </div>
            <div class="strike-score-display">
              <span class="num">95</span>
              <span class="max">/ 100</span>
            </div>
            <div class="strike-bar"><div class="strike-fill" style="width:95%"></div></div>
            <div class="strike-mini-grid">
              <div><span>Data</span><strong>20/20</strong></div>
              <div><span>Contact</span><strong>3/3</strong></div>
              <div><span>Value</span><strong>$42.5k</strong></div>
              <div><span>Filed</span><strong>4d ago</strong></div>
            </div>
          </div>

          <!-- DATA BAND -->
          <div class="data-band">
            <svg class="lock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12l5 5L20 7"/></svg>
            <span><span class="count">+15</span> Data Points Revealed</span>
          </div>

          <!-- UNLOCKED, GROUP 1: PROJECT DETAILS -->
          <div class="group-label">Project Details</div>
          <div class="field-sm"><span class="field-label">Permit / Record #</span><span class="field-value revealed">BR-2026-04-9847</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Filing Date</span><span class="field-value revealed">April 26, 2026</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Property Type</span><span class="field-value revealed">Residential · Single Family</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Permit Sub-Type</span><span class="field-value revealed">Interior Renovation – Kitchen</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Job Address</span><span class="field-value revealed highlight">2147 Kernan Forest Dr, Jacksonville FL 32246</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Permit Status</span><span class="field-value revealed">Issued · Active</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Related Contacts</span><span class="field-value revealed">Designer: Rena Designs LLC</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>

          <!-- UNLOCKED, GROUP 2: CUSTOMER CONTACT -->
          <div class="group-label">Customer Contact</div>
          <div class="field-sm"><span class="field-label">Owner Name</span><span class="field-value revealed">Marcus &amp; Rebecca Holloway</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Name</span><span class="field-value revealed">Marcus Holloway</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Email</span><span class="field-value revealed highlight">m.holloway@gmail.com</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Applicant Phone</span><span class="field-value revealed highlight">(904) 555‑0142</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>

          <!-- UNLOCKED, GROUP 3: EXISTING CONTRACTOR (FILLED) -->
          <div class="group-label">Existing Contractor</div>
          <div class="field-sm"><span class="field-label">Contractor Name</span><span class="field-value revealed">David Briarwood</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Co.</span><span class="field-value revealed">Briarwood Construction Group · 4421 Roosevelt Blvd, Jacksonville FL 32210</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Email</span><span class="field-value revealed highlight">dbriarwood@briarwoodconstruction.com</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>
          <div class="field-sm"><span class="field-label">Contractor Phone</span><span class="field-value revealed highlight">(904) 555‑2087</span><svg class="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12l5 5L20 7"/></svg></div>

          <div class="data-success">
            ✓ FULL 20/20 CAPTURED · GC IDENTIFIED · SUBS &amp; SUPPLIERS CAN PITCH NOW
          </div>

          <div class="lead-foot">
            <span class="credits-spent">−30 credits · ready to quote</span>
            <span style="color: var(--bone-dim);">4 slots remaining</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ STRIKE SCORE SCHEMA ============ -->
<section class="schema bg-light">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">04 · The rating system</div>
      <h2 class="display">The Strike Score.<br/>How we price every lead.</h2>
      <p class="sub">
        Our goal is <strong>20 data points on every job</strong> — but
        permit data isn't always perfect. When fields are missing or stale, you pay less. The Strike Score
        is a 0-100 grade built from four factors. The score determines the credit cost. No hidden math,
        no surprises.
      </p>
    </div>

    <!-- THE 4 FACTORS -->
    <div class="schema-factors">
      <div class="factor-card">
        <div class="factor-num">Factor 01</div>
        <div class="factor-weight">
          <span class="num">40</span>
          <span class="unit">pts max</span>
        </div>
        <div class="factor-name">Data Completeness</div>
        <div class="factor-desc">How many of the 20 data points actually arrived from the source. Full set earns full points.</div>
        <div class="factor-breakdown">
          <div><span>20/20 fields</span><strong>40 pts</strong></div>
          <div><span>18-19 fields</span><strong>32 pts</strong></div>
          <div><span>15-17 fields</span><strong>24 pts</strong></div>
          <div><span>12-14 fields</span><strong>16 pts</strong></div>
          <div><span>&lt; 12 fields</span><strong>8 pts</strong></div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-num">Factor 02</div>
        <div class="factor-weight">
          <span class="num">30</span>
          <span class="unit">pts max</span>
        </div>
        <div class="factor-name">Contact Quality</div>
        <div class="factor-desc">Whether you can actually reach the customer. Three channels are weighted: name, phone, and email.</div>
        <div class="factor-breakdown">
          <div><span>All three present</span><strong>30 pts</strong></div>
          <div><span>2 of 3 present</span><strong>20 pts</strong></div>
          <div><span>1 of 3 present</span><strong>10 pts</strong></div>
          <div><span>None present</span><strong>0 pts</strong></div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-num">Factor 03</div>
        <div class="factor-weight">
          <span class="num">15</span>
          <span class="unit">pts max</span>
        </div>
        <div class="factor-name">Value Signal</div>
        <div class="factor-desc">Project size matters. A listed Job Cost confirms scope and helps you triage which leads to chase first.</div>
        <div class="factor-breakdown">
          <div><span>Cost &gt; $50k</span><strong>15 pts</strong></div>
          <div><span>$20k – $50k</span><strong>12 pts</strong></div>
          <div><span>$5k – $20k</span><strong>8 pts</strong></div>
          <div><span>&lt; $5k</span><strong>4 pts</strong></div>
          <div><span>Not listed</span><strong>0 pts</strong></div>
        </div>
      </div>

      <div class="factor-card">
        <div class="factor-num">Factor 04</div>
        <div class="factor-weight">
          <span class="num">15</span>
          <span class="unit">pts max</span>
        </div>
        <div class="factor-name">Recency</div>
        <div class="factor-desc">Fresh permits convert. Old data goes cold. Recent filings score highest because the customer is actively deciding.</div>
        <div class="factor-breakdown">
          <div><span>Filed last 7 days</span><strong>15 pts</strong></div>
          <div><span>7 – 30 days</span><strong>10 pts</strong></div>
          <div><span>30 – 90 days</span><strong>5 pts</strong></div>
          <div><span>&gt; 90 days</span><strong>0 pts</strong></div>
        </div>
      </div>
    </div>

    <!-- FLOW: factors → score → tier -->
    <div class="schema-flow">
      <div class="schema-arrow"></div>

      <!-- The Score Meter -->
      <div class="score-meter">
        <div class="score-meter-head">
          <span class="label">Strike Score (0-100)</span>
          <span class="formula">Sum of <span>Factor 01</span> + <span>02</span> + <span>03</span> + <span>04</span></span>
        </div>
        <div class="score-bar">
          <div class="score-zone notlisted">Not Listed</div>
          <div class="score-zone basic">Basic</div>
          <div class="score-zone standard">Standard</div>
          <div class="score-zone premium">Premium</div>
          <div class="score-zone apex">Apex</div>
        </div>
        <div class="score-labels">
          <span class="l-notlisted">0 – 19</span>
          <span class="l-basic">20 – 39</span>
          <span class="l-standard">40 – 64</span>
          <span class="l-premium">65 – 84</span>
          <span class="l-apex">85 – 100</span>
        </div>
      </div>

      <div class="schema-arrow"></div>

      <!-- Tier → Credit cost mapping -->
      <div class="tier-mapping">
        <div class="tier-mapping-row thead">
          <div>Score Range</div>
          <div>Tier</div>
          <div>Credit Cost</div>
          <div>What You're Buying</div>
        </div>
        <div class="tier-mapping-row r-apex">
          <div class="score-cell">85 – 100</div>
          <div class="tier-cell">APEX</div>
          <div class="cost-cell">30 credits</div>
          <div class="signal-cell">Verified 20/20 data, all contact channels, fresh filing, high project value.</div>
        </div>
        <div class="tier-mapping-row r-premium">
          <div class="score-cell">65 – 84</div>
          <div class="tier-cell">PREMIUM</div>
          <div class="cost-cell">20 credits</div>
          <div class="signal-cell">Strong data set, most contact channels, recent filing, solid value signal.</div>
        </div>
        <div class="tier-mapping-row r-standard">
          <div class="score-cell">40 – 64</div>
          <div class="tier-cell">STANDARD</div>
          <div class="cost-cell">15 credits</div>
          <div class="signal-cell">Core data and at least partial contact info. May be missing some fields or older.</div>
        </div>
        <div class="tier-mapping-row r-basic">
          <div class="score-cell">20 – 39</div>
          <div class="tier-cell">BASIC</div>
          <div class="cost-cell">10 credits</div>
          <div class="signal-cell">Limited data. Worth checking on quick, single-trade jobs where margins are tight.</div>
        </div>
        <div class="tier-mapping-row r-notlisted">
          <div class="score-cell">Below 20</div>
          <div class="tier-cell">Not Listed</div>
          <div class="cost-cell">—</div>
          <div class="signal-cell">Below quality threshold. Filtered before it reaches your dashboard.</div>
        </div>
      </div>
    </div>

    <!-- WORKED EXAMPLE -->
    <div class="worked-example">
      <div class="worked-tag">Worked example</div>
      <h3 class="worked-title">The Kitchen Remodel above, scored.</h3>
      <p class="worked-sub">Here's exactly how the lead from Section 03 earned its 50-credit unlock cost.</p>

      <div class="worked-rows">
        <div class="worked-row">
          <span class="plus">+</span>
          <span class="row-label">Data Completeness</span>
          <span class="row-detail">All 20 of 20 data points captured from the Duval County permit.</span>
          <span class="row-pts">40<span class="pts-max"> / 40</span></span>
        </div>
        <div class="worked-row">
          <span class="plus">+</span>
          <span class="row-label">Contact Quality</span>
          <span class="row-detail">Applicant Name, Phone, and Email all present and verified.</span>
          <span class="row-pts">30<span class="pts-max"> / 30</span></span>
        </div>
        <div class="worked-row">
          <span class="plus">+</span>
          <span class="row-label">Value Signal</span>
          <span class="row-detail">Job Cost listed at $42,500 (mid-range $20k–$50k bracket).</span>
          <span class="row-pts">12<span class="pts-max"> / 15</span></span>
        </div>
        <div class="worked-row">
          <span class="plus">+</span>
          <span class="row-label">Recency</span>
          <span class="row-detail">Filed April 26, 2026 — 4 days ago, well inside the 7-day fresh window.</span>
          <span class="row-pts">13<span class="pts-max"> / 15</span></span>
        </div>
      </div>

      <div class="worked-total">
        <div class="block">
          <span class="block-label">Strike Score</span>
          <span class="block-value score">95<span class="max"> / 100</span></span>
        </div>
        <span class="arrow-symbol">→</span>
        <div class="block">
          <span class="block-label">Tier</span>
          <span class="block-value tier">APEX</span>
        </div>
        <span class="arrow-symbol">→</span>
        <div class="block">
          <span class="block-label">Unlock Cost</span>
          <span class="block-value cost">30 credits</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- THE RULES -->
<section class="rules bg-alt">
  <div class="wrap">
    <div class="section-head">
      <div class="eyebrow">05 · The fine print, plain</div>
      <h2 class="display">The rules of the hunt.</h2>
    </div>

    <div class="rules-grid">
      <div class="rule">
        <div class="rule-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h4>Speed beats exclusivity</h4>
        <p>
          Each lead is available to a maximum of 5 unique user types per category.
          Once those 5 slots fill, the lead closes for that trade. Strike first.
        </p>
      </div>

      <div class="rule">
        <div class="rule-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        </div>
        <h4>You see cost before spending</h4>
        <p>
          Every job card displays its unlock cost up front. No surprise charges, no
          hidden fees — confirm the cost, then commit your credits.
        </p>
      </div>

      <div class="rule">
        <div class="rule-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h4>Every lead is vetted</h4>
        <p>
          Automated and manual vetting filter out spam and incomplete requests. You
          spend credits on legitimate, high-intent customers — not tire-kickers.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta">
  <div class="wrap cta-inner">
    <h2 class="display">Ready to <span>strike?</span></h2>
    <p>
      Join thousands of contractors and suppliers turning credits into closed contracts.
      Start your free trial — no credit card required.
    </p>
    <a class="btn" href="https://app.tigerleads.ai/">
      Get Started Free <span class="arrow">→</span>
    </a>
  </div>
</section>
</div>
</body>
</html>`,id:`K6OES57is`,layoutId:`K6OES57is`,radius:`0px`,style:{width:`100%`},type:`html`,url:``,width:`100%`,zoom:1})})})}),a(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-QO6nb.framer-1w5d8ck, .framer-QO6nb .framer-1w5d8ck { display: block; }`,`.framer-QO6nb.framer-13ppjrc { align-content: center; align-items: center; background-color: var(--token-3231f815-59bd-4709-9984-27f462c2029e, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-QO6nb .framer-vsk8wf-container { flex: none; height: auto; position: relative; width: 100%; }`],`framer-QO6nb`),V=B,B.displayName=`Page`,B.defaultProps={height:9919,width:1200},_(B,[{explicitInter:!0,fonts:[]},...M],{supportsExplicitInterCodegen:!0}),H={exports:{default:{type:`reactComponent`,name:`FramerC2QnKCDeI`,slots:[],annotations:{framerAutoSizeImages:`true`,framerImmutableVariables:`true`,framerResponsiveScreen:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,framerDisplayContentsDiv:`false`,framerContractVersion:`1`,framerAcceptsLayoutTemplate:`true`,framerComponentViewportWidth:`true`,framerScrollSections:`false`,framerIntrinsicWidth:`1200`,framerIntrinsicHeight:`9919`,framerLayoutTemplateFlowEffect:`true`,framerColorSyntax:`true`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{H as __FramerMetadata__,V as default,P as queryParamNames};
//# sourceMappingURL=4dgP_lcu6spM5infK7SnZRJYGoj6wqqJXFf4nBKpypI.B6pdSar4.mjs.map