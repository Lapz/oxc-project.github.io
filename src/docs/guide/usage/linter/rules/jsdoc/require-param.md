<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# jsdoc/require-param <Badge type="info" text="Pedantic" />

<div class="rule-meta">
</div>

### What it does

Requires that all function parameters are documented with JSDoc `@param` tags.

### Why is this bad?

The rule is aimed at enforcing code quality and maintainability by requiring that all function parameters are documented.

### Example

```javascript
// Passing
/** @param foo */
function quux(foo) {}

// Failing
/** @param foo */
function quux(foo, bar) {}
```