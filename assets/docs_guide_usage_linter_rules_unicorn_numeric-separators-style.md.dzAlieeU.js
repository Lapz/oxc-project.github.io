import{_ as r,c as h,j as s,a as i,I as a,w as l,a4 as o,E as e,o as p}from"./chunks/framework.Qpa4gud8.js";const B=JSON.parse('{"title":"unicorn/numeric-separators-style","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/numeric-separators-style.md","filePath":"docs/guide/usage/linter/rules/unicorn/numeric-separators-style.md"}'),k={name:"docs/guide/usage/linter/rules/unicorn/numeric-separators-style.md"},d={id:"unicorn-numeric-separators-style",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#unicorn-numeric-separators-style","aria-label":'Permalink to "unicorn/numeric-separators-style <Badge type="info" text="Style" />"'},"​",-1),_={class:"rule-meta"},u=s("span",{class:"emoji"},"🛠️",-1),g=o(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Enforces a convention of grouping digits using numeric separators.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>Long numbers can become really hard to read, so cutting it into groups of digits, separated with a _, is important to keep your code clear. This rule also enforces a proper usage of the numeric separator, by checking if the groups of digits are of the correct size.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> invalid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_23_4444</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_234.56789</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xab_c_d_ef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0b10_00_1111</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0o1_0_44_21</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_294_28771_2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> valid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_234_567</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_234.567_89</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0xab_cd_ef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0b1000_1111</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0o10_4421</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1_294_287_712</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/numeric_separators_style.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,8);function E(y,m,f,C,F,b){const t=e("Badge"),n=e("Alert");return p(),h("div",null,[s("h1",d,[i("unicorn/numeric-separators-style "),a(t,{type:"info",text:"Style"}),i(),c]),s("div",_,[a(n,{class:"fix",type:"info"},{default:l(()=>[u,i(" An auto-fix is available for this rule. ")]),_:1})]),g])}const v=r(k,[["render",E]]);export{B as __pageData,v as default};