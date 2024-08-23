<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# oxc/no-optional-chaining <Badge type="info" text="Restriction" />

<div class="rule-meta">
</div>

### What it does

Disallow [optional chaining](https://github.com/tc39/proposal-optional-chaining).

### Example

```javascript
const foo = obj?.foo;
obj.fn?.();
```

### Options

```json
{
  "rules": {
    "no-optional-chaining": [
        "error",
        {
            "message": "Our output target is ES2016, and optional chaining results in verbose
            helpers and should be avoided.",
        }
    ]
  }
}
```

- `message`: A custom help message to display when optional chaining is found.

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/oxc/no_optional_chaining.rs)