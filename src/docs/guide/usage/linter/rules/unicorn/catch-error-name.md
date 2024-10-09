<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# unicorn/catch-error-name <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🚧</span> An auto-fix is still under development.
</Alert>
</div>

### What it does

This rule enforces naming conventions for catch statements.

### Why is this bad?

### Examples

Examples of **incorrect** code for this rule:

```javascript
try {
} catch (foo) {}
```

Examples of **correct** code for this rule:

```javascript
try {
} catch (error) {}
```

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/unicorn/catch_error_name.rs)