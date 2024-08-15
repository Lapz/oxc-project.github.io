import{_ as l,c as o,j as e,a as s,I as a,w as h,a4 as d,E as t,o as p}from"./chunks/framework.D6UG3LSr.js";const C=JSON.parse('{"title":"eslint/no-dupe-keys","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-dupe-keys.md","filePath":"docs/guide/usage/linter/rules/eslint/no-dupe-keys.md"}'),r={name:"docs/guide/usage/linter/rules/eslint/no-dupe-keys.md"},c={id:"eslint-no-dupe-keys",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#eslint-no-dupe-keys","aria-label":'Permalink to "eslint/no-dupe-keys <Badge type="info" text="Correctness" />"'},"​",-1),u={class:"rule-meta"},_=e("span",{class:"emoji"},"✅",-1),E=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow duplicate keys in object literals</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Multiple properties with the same key in object literals can cause unexpected behavior in your application.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bar: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;baz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  bar: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qux&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div>`,6);function y(g,m,b,f,x,v){const i=t("Badge"),n=t("Alert");return p(),o("div",null,[e("h1",c,[s("eslint/no-dupe-keys "),a(i,{type:"info",text:"Correctness"}),s(),k]),e("div",u,[a(n,{class:"default-on",type:"success"},{default:h(()=>[_,s(" This rule is turned on by default. ")]),_:1})]),E])}const w=l(r,[["render",y]]);export{C as __pageData,w as default};