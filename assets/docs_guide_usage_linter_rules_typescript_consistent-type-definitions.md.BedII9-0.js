import{_ as p,c as o,j as s,a as e,I as i,w as l,a3 as h,E as t,o as r}from"./chunks/framework.wOwjnRe1.js";const v=JSON.parse('{"title":"typescript/consistent-type-definitions","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/consistent-type-definitions.md","filePath":"docs/guide/usage/linter/rules/typescript/consistent-type-definitions.md"}'),d={name:"docs/guide/usage/linter/rules/typescript/consistent-type-definitions.md"},c={id:"typescript-consistent-type-definitions",tabindex:"-1"},k=s("a",{class:"header-anchor",href:"#typescript-consistent-type-definitions","aria-label":'Permalink to "typescript/consistent-type-definitions <Badge type="info" text="Style" />"'},"​",-1),y={class:"rule-meta"},_=s("span",{class:"emoji"},"🛠️",-1),g=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce type definitions to consistently use either interface or type.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>TypeScript provides two common ways to define an object type: interface and type. The two are generally very similar, and can often be used interchangeably. Using the same type declaration style consistently helps with code readability.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// incorrect, when set to &quot;interface&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// incorrect when set to &quot;type&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function u(f,m,E,b,x,A){const a=t("Badge"),n=t("Alert");return r(),o("div",null,[s("h1",c,[e("typescript/consistent-type-definitions "),i(a,{type:"info",text:"Style"}),e(),k]),s("div",y,[i(n,{class:"fix",type:"info"},{default:l(()=>[_,e(" An auto-fix is available for this rule. ")]),_:1})]),g])}const w=p(d,[["render",u]]);export{v as __pageData,w as default};