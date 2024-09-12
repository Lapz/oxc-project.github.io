import{_ as t,c as i,j as a,a as e,I as n,a4 as h,o,E as r}from"./chunks/framework.Qpa4gud8.js";const E=JSON.parse('{"title":"jsx_a11y/heading-has-content","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md","filePath":"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md"}'),c={name:"docs/guide/usage/linter/rules/jsx_a11y/heading-has-content.md"},d={id:"jsx-a11y-heading-has-content",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#jsx-a11y-heading-has-content","aria-label":'Permalink to "jsx_a11y/heading-has-content <Badge type="info" text="Correctness" />"'},"​",-1),p=h('<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforce that heading elements (h1, h2, etc.) have content and that the content is accessible to screen readers. Accessible means that it is not hidden using the aria-hidden prop.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Screen readers alert users to the presence of a heading tag. If the heading is empty or the text cannot be accessed, this could either confuse users or even prevent them from accessing information on the page&#39;s structure.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Foo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/jsx_a11y/heading_has_content.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>',12);function g(u,_,k,x,m,b){const s=r("Badge");return o(),i("div",null,[a("h1",d,[e("jsx_a11y/heading-has-content "),n(s,{type:"info",text:"Correctness"}),e(),l]),p])}const y=t(c,[["render",g]]);export{E as __pageData,y as default};