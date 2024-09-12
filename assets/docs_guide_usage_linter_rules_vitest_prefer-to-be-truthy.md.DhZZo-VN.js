import{_ as o,c as h,j as e,a as s,I as t,w as n,a4 as l,E as a,o as p}from"./chunks/framework.Qpa4gud8.js";const C=JSON.parse('{"title":"vitest/prefer-to-be-truthy","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md","filePath":"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"}'),c={name:"docs/guide/usage/linter/rules/vitest/prefer-to-be-truthy.md"},d={id:"vitest-prefer-to-be-truthy",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#vitest-prefer-to-be-truthy","aria-label":'Permalink to "vitest/prefer-to-be-truthy <Badge type="info" text="Style" />"'},"​",-1),u={class:"rule-meta"},y=e("span",{class:"emoji"},"🛠️",-1),f=l(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>This rule warns when <code>toBe(true)</code> is used with <code>expect</code> or <code>expectTypeOf</code>. With <code>--fix</code>, it will be replaced with <code>toBeTruthy()</code>.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Using <code>toBe(true)</code> is less flexible and may not account for other truthy values like non-empty strings or objects. <code>toBeTruthy()</code> checks for any truthy value, which makes the tests more comprehensive and robust.</p><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">expectTypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toBeTruthy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/vitest/prefer_to_be_truthy.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11);function g(E,_,b,m,x,v){const i=a("Badge"),r=a("Alert");return p(),h("div",null,[e("h1",d,[s("vitest/prefer-to-be-truthy "),t(i,{type:"info",text:"Style"}),s(),k]),e("div",u,[t(r,{class:"fix",type:"info"},{default:n(()=>[y,s(" An auto-fix is available for this rule. ")]),_:1})]),f])}const F=o(c,[["render",g]]);export{C as __pageData,F as default};