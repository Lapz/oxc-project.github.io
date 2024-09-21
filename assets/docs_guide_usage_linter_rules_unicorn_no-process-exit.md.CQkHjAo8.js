import{_ as o,c as r,j as s,a as e,I as a,w as l,a4 as c,E as i,o as p}from"./chunks/framework.Qpa4gud8.js";const F=JSON.parse('{"title":"unicorn/no-process-exit","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-process-exit.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-process-exit.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-process-exit.md"},d={id:"unicorn-no-process-exit",tabindex:"-1"},u=s("a",{class:"header-anchor",href:"#unicorn-no-process-exit","aria-label":'Permalink to "unicorn/no-process-exit <Badge type="info" text="Restriction" />"'},"​",-1),k={class:"rule-meta"},g=s("span",{class:"emoji"},"🚧",-1),_=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow <code>process.exit()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Only use <code>process.exit()</code> in CLI apps. Throw an error instead.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (problem) process.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (problem) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throw</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#!/usr/bin/env node</span></span>
<span class="line"><span>if (problem) process.exit(1);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_process_exit.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,12);function x(m,b,E,f,y,v){const t=i("Badge"),n=i("Alert");return p(),r("div",null,[s("h1",d,[e("unicorn/no-process-exit "),a(t,{type:"info",text:"Restriction"}),e(),u]),s("div",k,[a(n,{class:"fix",type:"info"},{default:l(()=>[g,e(" An auto-fix is still under development. ")]),_:1})]),_])}const q=o(h,[["render",x]]);export{F as __pageData,q as default};