<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# typescript/prefer-function-type <Badge type="info" text="Style" />

<div class="rule-meta">
<Alert class="fix" type="info">
<span class="emoji">🛠️</span> An auto-fix is available for this rule for some violations.
</Alert>
</div>

### What it does

Enforce using function types instead of interfaces with call signatures.
TypeScript allows for two common ways to declare a type for a function:

- Function type: `() => string`
- Object type with a signature: `{ (): string }`

The function type form is generally preferred when possible for being more succinct.

This rule suggests using a function type instead of an interface or object type literal with a single call signature.

### Example

```ts
// error
interface Example {
  (): string;
}

function foo(example: { (): number }): number {
  return example();
}

interface ReturnsSelf {
  (arg: string): this;
}

// success
type Example = () => string;

function foo(example: () => number): number {
  return bar();
}

// returns the function itself, not the `this` argument.
type ReturnsSelf = (arg: string) => ReturnsSelf;

function foo(bar: { (): string; baz: number }): string {
  return bar();
}

interface Foo {
  bar: string;
}
interface Bar extends Foo {
  (): void;
}

// multiple call signatures (overloads) is allowed:
interface Overloaded {
  (data: string): number;
  (id: number): string;
}
// this is equivalent to Overloaded interface.
type Intersection = ((data: string) => number) & ((id: number) => string);
```