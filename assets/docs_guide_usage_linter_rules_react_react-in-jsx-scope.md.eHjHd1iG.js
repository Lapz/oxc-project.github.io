import{_ as i,c as t,j as a,a as s,I as n,a4 as r,o as l,E as h}from"./chunks/framework.D6UG3LSr.js";const b=JSON.parse('{"title":"react/react-in-jsx-scope","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md","filePath":"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md"}'),c={name:"docs/guide/usage/linter/rules/react/react-in-jsx-scope.md"},o={id:"react-react-in-jsx-scope",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#react-react-in-jsx-scope","aria-label":'Permalink to "react/react-in-jsx-scope <Badge type="info" text="Suspicious" />"'},"​",-1),d=r(`<div class="rule-meta"></div><h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow missing React when using JSX</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>When using JSX, <code>&lt;a /&gt;</code> expands to <code>React.createElement(&quot;a&quot;)</code>. Therefore the <code>React</code> variable must be in scope.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;react&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/react_in_jsx_scope.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,9);function k(u,g,E,_,x,m){const e=h("Badge");return l(),t("div",null,[a("h1",o,[s("react/react-in-jsx-scope "),n(e,{type:"info",text:"Suspicious"}),s(),p]),d])}const f=i(c,[["render",k]]);export{b as __pageData,f as default};