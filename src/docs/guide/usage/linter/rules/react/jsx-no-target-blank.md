<!-- This file is auto-generated by tasks/website/src/linter/rules/doc_page.rs. Do not edit it manually. -->

# react/jsx-no-target-blank <Badge type="info" text="Correctness" />

<div class="rule-meta">
<Alert class="default-on" type="success">
<span class="emoji">✅</span> This rule is turned on by default.
</Alert>
</div>

### What it does

This rule aims to prevent user generated link hrefs and form actions from creating security vulnerabilities by
requiring `rel='noreferrer'` for external link hrefs and form actions, and optionally any dynamically generated
link hrefs and form actions.

### Why is this bad?

When creating a JSX element that has an `a` tag, it is often desired to have the link open in a new tab using the
`target='_blank'` attribute. Using this attribute unaccompanied by `rel='noreferrer'`, however, is a severe security
vulnerability (see [`noreferrer` docs] and [`noopener` docs] for more details).
This rules requires that you accompany `target='_blank'` attributes with `rel='noreferrer'`.

### Example

```jsx
/// correct
var Hello = <p target="_blank"></p>;
var Hello = <a target="_blank" rel="noreferrer" href="https://example.com"></a>;
var Hello = <a target="_blank" rel="noopener noreferrer" href="https://example.com"></a>;
var Hello = <a target="_blank" href="relative/path/in/the/host"></a>;
var Hello = <a target="_blank" href="/absolute/path/in/the/host"></a>;
var Hello = <a></a>;
/// incorrect
var Hello = <a target="_blank" href="https://example.com/"></a>;
var Hello = <a target="_blank" href={dynamicLink}></a>;
```

[`noreferrer` docs]: https://html.spec.whatwg.org/multipage/links.html#link-type-noreferrer
[`noopener` docs]: https://html.spec.whatwg.org/multipage/links.html#link-type-noopener

## References

- [Rule Source](https://github.com/oxc-project/oxc/blob/main/crates/oxc_linter/src/rules/react/jsx_no_target_blank.rs)