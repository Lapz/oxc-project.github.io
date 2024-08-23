<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/erasing-op <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Checks for erasing operations, e.g., `x \* 0``.

Based on https://rust-lang.github.io/rust-clippy/master/#/erasing_op

### Why is this bad?

The whole expression can be replaced by zero. This is most likely not the intended outcome and should probably be corrected.

### Example

```javascript
// Bad
let x = 1;
let y = x * 0;

// Good
let x = 1;
let y = 0;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/erasing_op.rs)