import{_ as o,c as l,j as e,a,I as s,w as d,a4 as c,E as n,o as r}from"./chunks/framework.D6UG3LSr.js";const w=JSON.parse('{"title":"unicorn/no-null","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/unicorn/no-null.md","filePath":"docs/guide/usage/linter/rules/unicorn/no-null.md"}'),h={name:"docs/guide/usage/linter/rules/unicorn/no-null.md"},p={id:"unicorn-no-null",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#unicorn-no-null","aria-label":'Permalink to "unicorn/no-null <Badge type="info" text="Style" />"'},"​",-1),k={class:"rule-meta"},_=e("span",{class:"emoji"},"🛠️",-1),g=c(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow the use of the <code>null</code> literal, to encourage using <code>undefined</code> instead.</p><h3 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h3><p>There are some reasons for using <code>undefined</code> instead of <code>null</code>.</p><ul><li>From experience, most developers use <code>null</code> and <code>undefined</code> inconsistently and interchangeably, and few know when to use which.</li><li>Supporting both <code>null</code> and <code>undefined</code> complicates input validation.</li><li>Using <code>null</code> makes TypeScript types more verbose: <code>type A = {foo?: string | null}</code> vs <code>type A = {foo?: string}</code>.</li></ul><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Bad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Good</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo;</span></span></code></pre></div>`,7);function f(m,y,b,x,E,v){const i=n("Badge"),t=n("Alert");return r(),l("div",null,[e("h1",p,[a("unicorn/no-null "),s(i,{type:"info",text:"Style"}),a(),u]),e("div",k,[s(t,{class:"fix",type:"info"},{default:d(()=>[_,a(" An auto-fix is available for this rule. ")]),_:1})]),g])}const D=o(h,[["render",f]]);export{w as __pageData,D as default};