import{_ as s,c as i,j as t,a as e,I as n,a4 as r,o,E as l}from"./chunks/framework.D6UG3LSr.js";const x=JSON.parse('{"title":"typescript/no-empty-interface","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-empty-interface.md","filePath":"docs/guide/usage/linter/rules/typescript/no-empty-interface.md"}'),p={name:"docs/guide/usage/linter/rules/typescript/no-empty-interface.md"},c={id:"typescript-no-empty-interface",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#typescript-no-empty-interface","aria-label":'Permalink to "typescript/no-empty-interface <Badge type="info" text="Style" />"'},"​",-1),d=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the declaration of empty interfaces.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>An empty interface in TypeScript does very little: any non-nullable value is assignable to {}. Using an empty interface is often a sign of programmer error, such as misunderstanding the concept of {} or forgetting to fill in fields. This rule aims to ensure that only meaningful interfaces are declared in the code.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div>`,7);function y(m,f,k,u,g,_){const a=l("Badge");return o(),i("div",null,[t("h1",c,[e("typescript/no-empty-interface "),n(a,{type:"info",text:"Style"}),e(),h]),d])}const E=s(p,[["render",y]]);export{x as __pageData,E as default};