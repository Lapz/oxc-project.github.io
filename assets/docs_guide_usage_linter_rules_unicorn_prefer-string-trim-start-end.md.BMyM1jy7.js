import{_ as n,c as l,j as e,a as t,I as a,w as o,a4 as d,E as s,o as h}from"./chunks/framework.D6UG3LSr.js";const B=JSON.parse('{"title":"unicorn/prefer-string-trim-start-end","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md","filePath":"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"}'),c={name:"docs/guide/usage/linter/rules/unicorn/prefer-string-trim-start-end.md"},p={id:"unicorn-prefer-string-trim-start-end",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#unicorn-prefer-string-trim-start-end","aria-label":'Permalink to "unicorn/prefer-string-trim-start-end <Badge type="info" text="Style" />"'},"​",-1),k={class:"rule-meta"},m=e("span",{class:"emoji"},"🛠️",-1),f=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimLeft" target="_blank" rel="noreferrer"><code>String#trimLeft()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimRight" target="_blank" rel="noreferrer"><code>String#trimRight()</code></a> are aliases of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart" target="_blank" rel="noreferrer"><code>String#trimStart()</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd" target="_blank" rel="noreferrer"><code>String#trimEnd()</code></a>. This is to ensure consistency and use <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions" target="_blank" rel="noreferrer">direction</a>-independent wording.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The <code>trimLeft</code> and <code>trimRight</code> names are confusing and inconsistent with the rest of the language.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trimEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,6);function _(u,E,b,S,y,v){const i=s("Badge"),r=s("Alert");return h(),l("div",null,[e("h1",p,[t("unicorn/prefer-string-trim-start-end "),a(i,{type:"info",text:"Style"}),t(),g]),e("div",k,[a(r,{class:"fix",type:"info"},{default:o(()=>[m,t(" An auto-fix is available for this rule. ")]),_:1})]),f])}const C=n(c,[["render",_]]);export{B as __pageData,C as default};