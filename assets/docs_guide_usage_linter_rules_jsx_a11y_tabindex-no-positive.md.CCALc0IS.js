import{_ as l,c as o,j as s,a,I as i,w as h,a4 as r,E as e,o as d}from"./chunks/framework.D6UG3LSr.js";const F=JSON.parse('{"title":"jsx_a11y/tabindex-no-positive","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.md"}'),p={name:"docs/guide/usage/linter/rules/jsx_a11y/tabindex-no-positive.md"},k={id:"jsx-a11y-tabindex-no-positive",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#jsx-a11y-tabindex-no-positive","aria-label":'Permalink to "jsx_a11y/tabindex-no-positive <Badge type="info" text="Correctness" />"'},"​",-1),g={class:"rule-meta"},E=s("span",{class:"emoji"},"🚧",-1),u=r(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that positive values for the <code>tabIndex</code> attribute are not used in JSX.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>tabIndex</code> values greater than <code>0</code> can make navigation and interaction difficult for keyboard and assistive technology users, disrupting the logical order of content.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;foo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;foo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tabIndex</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;bar&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/tabindex_no_positive.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function _(x,y,b,f,m,v){const t=e("Badge"),n=e("Alert");return d(),o("div",null,[s("h1",k,[a("jsx_a11y/tabindex-no-positive "),i(t,{type:"info",text:"Correctness"}),a(),c]),s("div",g,[i(n,{class:"fix",type:"info"},{default:h(()=>[E,a(" An auto-fix is still under development. ")]),_:1})]),u])}const D=l(p,[["render",_]]);export{F as __pageData,D as default};