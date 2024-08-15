<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/bad-min-max-func <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

Checks whether the clamp function `Math.min(Math.max(x, y), z)` always evaluate to a
constant result because the arguments are in the wrong order.

### Example

```javascript
Math.min(Math.max(100, x), 0);
Math.max(1000, Math.min(0, z));
```