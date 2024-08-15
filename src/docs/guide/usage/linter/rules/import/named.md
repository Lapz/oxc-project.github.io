<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# import/named <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Verifies that all named imports are part of the set of named exports in
the referenced module.

For `export`, verifies that all named exports exist in the referenced
module.

Note: for packages, the plugin will find exported names from
`jsnext:main` (deprecated) or `module`, if present in `package.json`.
Redux's npm module includes this key, and thereby is lintable, for
example.

A module path that is ignored or not unambiguously an ES module will not
be reported when imported. Note that type imports and exports, as used
by Flow, are always ignored.

### Why is this bad?

### Example

Given

```js
// ./foo.js
export const foo = "I'm so foo";
```

The following is considered valid:

```js
// ./bar.js
import { foo } from "./foo";

// ES7 proposal
export { foo as bar } from "./foo";

// node_modules without jsnext:main are not analyzed by default
// (import/ignore setting)
import { SomeNonsenseThatDoesntExist } from "react";
```

...and the following are reported:

```js
// ./baz.js
import { notFoo } from "./foo";

// ES7 proposal
export { notFoo as defNotBar } from "./foo";

// will follow 'jsnext:main', if available
import { dontCreateStore } from "redux";
```