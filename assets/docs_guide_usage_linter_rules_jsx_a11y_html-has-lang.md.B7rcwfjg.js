import{_ as t,c as i,j as s,a,I as n,a4 as l,o as h,E as o}from"./chunks/framework.D6UG3LSr.js";const b=JSON.parse('{"title":"jsx_a11y/HTML-has-lang","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md"}'),r={name:"docs/guide/usage/linter/rules/jsx_a11y/html-has-lang.md"},d={id:"jsx-a11y-html-has-lang",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#jsx-a11y-html-has-lang","aria-label":'Permalink to "jsx_a11y/HTML-has-lang <Badge type="info" text="Correctness" />"'},"​",-1),c=l(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Ensures that every HTML document has a lang attribute</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>If the language of a web page is not specified, the screen reader assumes the default language set by the user. Language settings become an issue for users who speak multiple languages and access website in more than one language.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div>`,7);function g(k,u,_,m,y,x){const e=o("Badge");return h(),i("div",null,[s("h1",d,[a("jsx_a11y/HTML-has-lang "),n(e,{type:"info",text:"Correctness"}),a(),p]),c])}const f=t(r,[["render",g]]);export{b as __pageData,f as default};