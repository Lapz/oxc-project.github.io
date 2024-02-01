import{_ as s,C as a,o as n,c as o,H as t,Q as l}from"./chunks/framework.19e7bb63.js";const m=JSON.parse('{"title":"Oxlint General Availability","description":"","frontmatter":{"title":"Oxlint General Availability","outline":"deep","authors":["boshen"]},"headers":[],"relativePath":"blog/2023-12-12-announcing-oxlint.md","filePath":"blog/2023-12-12-announcing-oxlint.md"}'),i={name:"blog/2023-12-12-announcing-oxlint.md"},r=l('<p>We&#39;re thrilled to announce that oxlint is now generally available! This milestone signifies our team&#39;s ability to promptly address and triage issues.</p><p>Oxlint is a JavaScript linter designed to catch erroneous or useless code without requiring any configurations by default.</p><h2 id="how-to-use" tabindex="-1">How to Use <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to Use&quot;">​</a></h2><p>At this stage, oxlint is <strong>not intended to fully replace ESLint</strong>; it serves as an enhancement when ESLint&#39;s slowness becomes a bottleneck in your workflow.</p><p>For faster feedback loops, we recommend running oxlint before ESLint in your lint-staged or CI setup, considering it only takes a few seconds to run on large codebases.</p><p>To test oxlint in your JavaScript / TypeScript codebase, simply execute the following command at the root directory of your repository:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-y1F2c" id="tab-i4JZtYl" checked="checked"><label for="tab-i4JZtYl">npm</label><input type="radio" name="group-y1F2c" id="tab-V8DNi68"><label for="tab-V8DNi68">pnpm</label><input type="radio" name="group-y1F2c" id="tab-IM6PqLZ"><label for="tab-IM6PqLZ">yarn</label><input type="radio" name="group-y1F2c" id="tab-Aall9gp"><label for="tab-Aall9gp">bun</label><input type="radio" name="group-y1F2c" id="tab-HN0XnG-"><label for="tab-HN0XnG-">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dlx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dlx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bunx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bunx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxlint@latest</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deno</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">npm:oxlint@latest</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deno</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">npm:oxlint@latest</span></span></code></pre></div></div></div><p>Alternatively, refer to the <a href="/docs/guide/usage/linter.html">installation guide</a> for detailed instructions.</p><h2 id="design" tabindex="-1">Design <a class="header-anchor" href="#design" aria-label="Permalink to &quot;Design&quot;">​</a></h2><h3 id="_50-100-times-faster-than-eslint" tabindex="-1">50-100 Times Faster than ESLint <a class="header-anchor" href="#_50-100-times-faster-than-eslint" aria-label="Permalink to &quot;50-100 Times Faster than ESLint&quot;">​</a></h3><p>In real-world scenarios, Shopify reported that their 75 CI minutes ESLint run is now only 10 seconds.</p><p>From Jason Miller, Shopify DX and creator of Preact:</p><blockquote><p>oxlint has been a massive win for us at Shopify. Our previous linting setup took 75 minutes to run, so we were fanning it out across 40+ workers in CI.</p><p>By comparison, oxlint takes around 10 seconds to lint the same codebase on a single worker, and the output is easier to interpret.</p><p>We even caught a few bugs that were hidden or skipped by our old setup when we migrated!</p></blockquote><p>The majority of the performance gains stem from Oxlint being purposefully designed for performance, utilizing Rust and parallel processing as key factors.</p><h3 id="lint-for-correctness" tabindex="-1">Lint for Correctness <a class="header-anchor" href="#lint-for-correctness" aria-label="Permalink to &quot;Lint for Correctness&quot;">​</a></h3><p>Oxlint defaults to identifying erroneous, redundant, or confusing code — prioritizing correctness over unnecessary nitpicking rules (categorized as <code>perf</code>, <code>suspicious</code>, <code>pedantic</code>, or <code>style</code>), which are disabled by default.</p><h3 id="ease-of-use" tabindex="-1">Ease of Use <a class="header-anchor" href="#ease-of-use" aria-label="Permalink to &quot;Ease of Use&quot;">​</a></h3><p>Setting up new JavaScript / TypeScript codebases is becoming increasingly complex. There&#39;s a high likelihood of encountering compatibility issues among your tools, potentially resulting in hours of wasted time.</p><p>That&#39;s why we designed oxlint to be zero-config out of the box; even Node.js is not a requirement. Most adjustments can be made through the command-line, and reading from ESLint configuration file is currently work in progress.</p><h3 id="enhanced-diagnostics" tabindex="-1">Enhanced Diagnostics <a class="header-anchor" href="#enhanced-diagnostics" aria-label="Permalink to &quot;Enhanced Diagnostics&quot;">​</a></h3><p>Understanding linter messages can be challenging. Oxlint aims to simplify this by pinpointing root causes and providing helpful messages — eliminating the need for lengthy rule documentation reading, saving valuable time.</p><p>Running <code>oxlint -D perf</code> in the <a href="https://github.com/microsoft/vscode" target="_blank" rel="noreferrer">vscode repository</a>:</p><img width="100%" src="https://github.com/oxc-project/oxc/assets/1430279/094a3b24-0433-42ae-aad2-48a7dec2b985"><h3 id="consolidated-rules" tabindex="-1">Consolidated Rules <a class="header-anchor" href="#consolidated-rules" aria-label="Permalink to &quot;Consolidated Rules&quot;">​</a></h3><p>Oxlint does not provide a plugin system yet, but we are actively consolidating rules from popular plugins like TypeScript, React, Jest, Unicorn, JSX-a11y and Import.</p><p>We recognize the importance of plugins in the JavaScript ecosystem and are also investigating a DSL-based plugin system.</p><p>However, you might appreciate a standalone linter — no need to manage a list of plugin dependencies, navigate through <a href="https://github.com/antfu/eslint-ts-patch" target="_blank" rel="noreferrer">compatibility issues</a>, or <a href="https://github.com/import-js/eslint-plugin-import/pull/2504#issuecomment-1191057877" target="_blank" rel="noreferrer">resort to forked plugins due to version constraints</a>.</p><hr><p>Happy linting and have a joyful holiday season!</p><p>To get started, follow the <a href="/docs/guide/usage/linter.html">installation guide</a>, learn more about the <a href="/docs/guide/introduction.html">oxc project</a>, or discuss on <a href="https://news.ycombinator.com/item?id=38652887" target="_blank" rel="noreferrer">Hacker News</a>.</p>',30);function p(c,d,h,u,g,y){const e=a("AppBlogPostHeader");return n(),o("div",null,[t(e),r])}const f=s(i,[["render",p]]);export{m as __pageData,f as default};
