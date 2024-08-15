import{_ as r,c as l,j as a,a as s,I as e,w as c,a4 as o,E as t,o as h}from"./chunks/framework.D6UG3LSr.js";const v=JSON.parse('{"title":"eslint/no-empty-character-class","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/eslint/no-empty-character-class.md","filePath":"docs/guide/usage/linter/rules/eslint/no-empty-character-class.md"}'),d={name:"docs/guide/usage/linter/rules/eslint/no-empty-character-class.md"},p={id:"eslint-no-empty-character-class",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#eslint-no-empty-character-class","aria-label":'Permalink to "eslint/no-empty-character-class <Badge type="info" text="Correctness" />"'},"​",-1),_={class:"rule-meta"},k=a("span",{class:"emoji"},"✅",-1),u=o('<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow empty character classes in regular expressions</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Because empty character classes in regular expressions do not match anything, they might be typing mistakes.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">abc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div>',6);function y(g,b,f,x,E,C){const i=t("Badge"),n=t("Alert");return h(),l("div",null,[a("h1",p,[s("eslint/no-empty-character-class "),e(i,{type:"info",text:"Correctness"}),s(),m]),a("div",_,[e(n,{class:"default-on",type:"success"},{default:c(()=>[k,s(" This rule is turned on by default. ")]),_:1})]),u])}const B=r(d,[["render",y]]);export{v as __pageData,B as default};