<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/implements-on-classes <Badge type="info" text="Correctness" />

<div class="rule-meta">
</div>

### What it does

Reports an issue with any non-constructor function using `@implements`.

### Why is this bad?

Constructor functions should be
whether marked with `@class`, `@constructs`, or being an ES6 class constructor.

### Example

```javascript
// Passing
class Foo {
  /**
   * @implements {SomeClass}
   */
  constructor() {}
}
/**
 * @implements {SomeClass}
 * @class
 */
function quux() {}

// Failing
/**
 * @implements {SomeClass}
 */
function quux() {}
```