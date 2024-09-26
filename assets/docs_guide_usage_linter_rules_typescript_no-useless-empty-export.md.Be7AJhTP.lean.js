import{_ as n,c as p,j as s,a as t,G as a,w as o,a2 as d,B as r,o as h}from"./chunks/framework.DlAqvapY.js";const E=JSON.parse('{"title":"typescript/no-useless-empty-export","description":"","frontmatter":{},"headers":[],"relativePath":"docs/guide/usage/linter/rules/typescript/no-useless-empty-export.md","filePath":"docs/guide/usage/linter/rules/typescript/no-useless-empty-export.md"}'),c={name:"docs/guide/usage/linter/rules/typescript/no-useless-empty-export.md"},u={id:"typescript-no-useless-empty-export",tabindex:"-1"},k={class:"rule-meta"};function m(y,e,g,f,x,b){const l=r("Badge"),i=r("Alert");return h(),p("div",null,[s("h1",u,[e[0]||(e[0]=t("typescript/no-useless-empty-export ")),a(l,{type:"info",text:"Correctness"}),e[1]||(e[1]=t()),e[2]||(e[2]=s("a",{class:"header-anchor",href:"#typescript-no-useless-empty-export","aria-label":'Permalink to "typescript/no-useless-empty-export <Badge type="info" text="Correctness" />"'},"​",-1))]),s("div",k,[a(i,{class:"default-on",type:"success"},{default:o(()=>e[3]||(e[3]=[s("span",{class:"emoji"},"✅",-1),t(" This rule is turned on by default. ")])),_:1}),a(i,{class:"fix",type:"info"},{default:o(()=>e[4]||(e[4]=[s("span",{class:"emoji"},"🛠️",-1),t(" An auto-fix is available for this rule. ")])),_:1})]),e[5]||(e[5]=d(`<h3 id="what-it-does" tabindex="-1">What it does <a class="header-anchor" href="#what-it-does" aria-label="Permalink to &quot;What it does&quot;">​</a></h3><p>Disallow empty exports that don&#39;t change anything in a module file.</p><h2 id="why-is-this-bad" tabindex="-1">Why is this bad? <a class="header-anchor" href="#why-is-this-bad" aria-label="Permalink to &quot;Why is this bad?&quot;">​</a></h2><p>An empty <code>export {}</code> statement is sometimes useful in TypeScript code to turn a file that would otherwise be a script file into a module file. Per the <a href="https://www.typescriptlang.org/docs/handbook/modules/introduction.html" target="_blank" rel="noreferrer">TypeScript Handbook Modules page</a>:</p><p>In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module. Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).</p><p>However, an <code>export {}</code> statement does nothing if there are any other top-level import or export statements in a file.</p><p>This rule reports an <code>export {}</code> that doesn&#39;t do anything in a file already using ES modules.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Examples of <strong>incorrect</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div><p>Examples of <strong>correct</strong> code for this rule:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ul><li><a href="https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/typescript/no_useless_empty_export.rs" target="_blank" rel="noreferrer">Rule Source</a></li></ul>`,14))])}const w=n(c,[["render",m]]);export{E as __pageData,w as default};