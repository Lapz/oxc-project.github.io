import{_ as o,c as s,j as t,a as e,I as n,a4 as i,o as r,E as c}from"./chunks/framework.D6UG3LSr.js";const v=JSON.parse('{"title":"nextjs/no-page-custom-font","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md","filePath":"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"}'),d={name:"docs/guide/usage/linter/rules/nextjs/no-page-custom-font.md"},l={id:"nextjs-no-page-custom-font",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#nextjs-no-page-custom-font","aria-label":'Permalink to "nextjs/no-page-custom-font <Badge type="info" text="Correctness" />"'},"​",-1),p=i('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Prevent page-only custom fonts.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><ul><li>The custom font you&#39;re adding was added to a page - this only adds the font to the specific page and not the entire application.</li><li>The custom font you&#39;re adding was added to a separate component within pages/_document.js - this disables automatic font optimization.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/nextjs/no_page_custom_font.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',9);function u(m,_,f,g,x,b){const a=c("Badge");return r(),s("div",null,[t("h1",l,[e("nextjs/no-page-custom-font "),n(a,{type:"info",text:"Correctness"}),e(),h]),p])}const y=o(d,[["render",u]]);export{v as __pageData,y as default};