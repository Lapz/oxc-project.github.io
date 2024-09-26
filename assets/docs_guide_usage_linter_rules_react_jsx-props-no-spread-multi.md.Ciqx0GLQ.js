import{_ as p,c as o,j as a,a as i,G as e,w as n,a2 as h,B as r,o as d}from"./chunks/framework.DlAqvapY.js";const F=JSON.parse('{"title":"react/jsx-props-no-spread-multi","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md","filePath":"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md"}'),k={name:"docs/guide/usage/linter/rules/react/jsx-props-no-spread-multi.md"},c={id:"react-jsx-props-no-spread-multi",tabindex:"-1"},u={class:"rule-meta"};function g(E,s,y,m,x,f){const l=r("Badge"),t=r("Alert");return d(),o("div",null,[a("h1",c,[s[0]||(s[0]=i("react/jsx-props-no-spread-multi ")),e(l,{type:"info",text:"Correctness"}),s[1]||(s[1]=i()),s[2]||(s[2]=a("a",{class:"header-anchor",href:"#react-jsx-props-no-spread-multi","aria-label":'Permalink to "react/jsx-props-no-spread-multi <Badge type="info" text="Correctness" />"'},"​",-1))]),a("div",u,[e(t,{class:"default-on",type:"success"},{default:n(()=>s[3]||(s[3]=[a("span",{class:"emoji"},"✅",-1),i(" This rule is turned on by default. ")])),_:1}),e(t,{class:"fix",type:"info"},{default:n(()=>s[4]||(s[4]=[a("span",{class:"emoji"},"🛠️",-1),i(" An auto-fix is available for this rule. ")])),_:1})]),s[5]||(s[5]=h(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces that any unique expression is only spread once.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Generally spreading the same expression twice is an indicator of a mistake since any attribute between the spreads may be overridden when the intent was not to. Even when that is not the case this will lead to unnecessary computations being performed.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} /&gt;</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">props} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myAttr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/jsx_props_no_spread_multi.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,11))])}const C=p(k,[["render",g]]);export{F as __pageData,C as default};