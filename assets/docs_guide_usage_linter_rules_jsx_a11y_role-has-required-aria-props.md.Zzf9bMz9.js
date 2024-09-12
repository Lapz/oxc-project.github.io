import{_ as i,c as t,j as s,a as e,I as r,a4 as o,o as l,E as h}from"./chunks/framework.Qpa4gud8.js";const f=JSON.parse('{"title":"jsx_a11y/role-has-required-aria-props","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.md"}'),n={name:"docs/guide/usage/linter/rules/jsx_a11y/role-has-required-aria-props.md"},p={id:"jsx-a11y-role-has-required-aria-props",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#jsx-a11y-role-has-required-aria-props","aria-label":'Permalink to "jsx_a11y/role-has-required-aria-props <Badge type="info" text="Correctness" />"'},"​",-1),c=o('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that elements with ARIA roles must have all required attributes for that role.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Certain ARIA roles require specific attributes to express necessary semantics for assistive technology.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> role</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;checkbox&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> aria-checked</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;false&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/role_has_required_aria_props.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12);function k(u,g,_,x,y,b){const a=h("Badge");return l(),t("div",null,[s("h1",p,[e("jsx_a11y/role-has-required-aria-props "),r(a,{type:"info",text:"Correctness"}),e(),d]),c])}const E=i(n,[["render",k]]);export{f as __pageData,E as default};