<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/no-zero-fractions <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule.
</Alert>
</div>

### What it does

Prevents the use of zero fractions.

### Why is this bad?

There is no difference in JavaScript between, for example, `1`, `1.0` and `1.`, so prefer the former for consistency and brevity.

### Example

Examples of **incorrect** code for this rule:

```javascript
const foo = 1.0;
const foo = -1.0;
const foo = 123_456.000_000;
```

Examples of **correct** code for this rule:

```javascript
const foo = 1;
const foo = -1;
const foo = 123456;
const foo = 1.1;
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/no_zero_fractions.rs)