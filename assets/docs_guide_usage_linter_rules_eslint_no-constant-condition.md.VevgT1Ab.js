import{_ as o,c as l,j as s,a as t,I as e,w as d,a4 as c,E as a,o as r}from"./chunks/framework.D6UG3LSr.js";const B=JSON.parse('{"title":"eslint/no-constant-condition","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-constant-condition.md","filePath":"docs/guide/usage/linter/rules/eslint/no-constant-condition.md"}'),h={name:"docs/guide/usage/linter/rules/eslint/no-constant-condition.md"},p={id:"eslint-no-constant-condition",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#eslint-no-constant-condition","aria-label":'Permalink to "eslint/no-constant-condition <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},k=s("span",{class:"emoji"},"✅",-1),m=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow constant expressions in conditions</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>A constant expression (for example, a literal) as a test condition might be a typo or development trigger for a specific behavior.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  doSomethingUnfinished</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,6);function g(f,E,b,x,y,v){const i=a("Badge"),n=a("Alert");return r(),l("div",null,[s("h1",p,[t("eslint/no-constant-condition "),e(i,{type:"info",text:"Correctness"}),t(),_]),s("div",u,[e(n,{class:"default-on",type:"success"},{default:d(()=>[k,t(" This rule is turned on by default. ")]),_:1})]),m])}const P=o(h,[["render",g]]);export{B as __pageData,P as default};