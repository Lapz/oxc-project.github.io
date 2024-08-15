<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/ban-ts-comment <Badge type="info" text="Pedantic" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

This rule lets you set which directive comments you want to allow in your codebase.

### Why is this bad?

Using TypeScript directives to suppress TypeScript compiler errors
reduces the effectiveness of TypeScript overall.

### Example

```ts
if (false) {
  // @ts-ignore: Unreachable code error
  console.log("hello");
}
```