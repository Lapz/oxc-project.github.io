<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/prefer-modern-math-apis <Badge type="info" text="Restriction" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

Checks for usage of legacy patterns for mathematical operations.

### Why is this bad?

Modern JavaScript provides more concise and readable alternatives to legacy patterns.

Currently, the following cases are checked:

- Prefer `Math.log10(x)` over alternatives
- Prefer `Math.hypot(…)` over alternatives

### Example

```javascript
// Bad
Math.log(x) * Math.LOG10E;
Math.sqrt(a * a + b * b);

// Good
Math.log10(x);
Math.hypot(a, b);
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/prefer_modern_math_apis.rs)