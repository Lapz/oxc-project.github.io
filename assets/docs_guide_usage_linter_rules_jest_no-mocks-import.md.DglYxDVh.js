import{_ as t,c as i,j as e,a as s,I as o,a4 as n,o as r,E as l}from"./chunks/framework.Qpa4gud8.js";const y=JSON.parse('{"title":"jest/no-mocks-import","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jest/no-mocks-import.md","filePath":"docs/guide/usage/linter/rules/jest/no-mocks-import.md"}'),h={name:"docs/guide/usage/linter/rules/jest/no-mocks-import.md"},p={id:"jest-no-mocks-import",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#jest-no-mocks-import","aria-label":'Permalink to "jest/no-mocks-import <Badge type="info" text="Style" />"'},"​",-1),d=n(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule reports imports from a path containing a <strong>mocks</strong> component.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> thing </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./__mocks__/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./__mocks__/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;__mocks__&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jest/no_mocks_import.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,7);function k(m,_,u,g,E,f){const a=l("Badge");return r(),i("div",null,[e("h1",p,[s("jest/no-mocks-import "),o(a,{type:"info",text:"Style"}),s(),c]),d])}const b=t(h,[["render",k]]);export{y as __pageData,b as default};