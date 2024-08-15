import{_ as n,c as e,j as s,a as i,I as t,a4 as h,o as l,E as o}from"./chunks/framework.D6UG3LSr.js";const m=JSON.parse('{"title":"eslint/no-unsafe-optional-chaining","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.md","filePath":"docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.md"}'),p={name:"docs/guide/usage/linter/rules/eslint/no-unsafe-optional-chaining.md"},r={id:"eslint-no-unsafe-optional-chaining",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#eslint-no-unsafe-optional-chaining","aria-label":'Permalink to "eslint/no-unsafe-optional-chaining <Badge type="info" text="Restriction" />"'},"​",-1),d=h(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow use of optional chaining in contexts where the undefined value is not allowed</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>The optional chaining (?.) expression can short-circuit with a return value of undefined. Therefore, treating an evaluated optional chaining expression as a function, object, number, etc., can cause TypeError or unexpected results. For example:</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj?.foo; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (obj?.foo); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj?.foo); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bar </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj?.foo; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// TypeError</span></span></code></pre></div>`,7);function c(g,E,u,y,f,_){const a=o("Badge");return l(),e("div",null,[s("h1",r,[i("eslint/no-unsafe-optional-chaining "),t(a,{type:"info",text:"Restriction"}),i(),k]),d])}const A=n(p,[["render",c]]);export{m as __pageData,A as default};