<script>
  let class_name = "";
  export { class_name as class };
  export let sizeXs = false;
  export let sizeSm = false;
  export let sizeLg = false;
  export let sizeXl = false;
  export let primary = false;
  export let positive = false;
  export let negative = false;
  export let ghost = false;
</script>

<style>
  :root {
    --btn-base-outer: var(--shadow--2);
    --btn-base-inner: 0 0 0 transparent inset;
    --btn-hover-outer: 0 0 0 transparent;
    --btn-hover-inner: 0 0 var(--border-width-base)
      hsla(var(--color-body-h), var(--color-body-s), var(--color-body-l), 0.3)
      inset;
    --btn-active-outer: 0 0 0 transparent;
    --btn-active-inner: var(--shadow--2) inset;
  }
  button {
    position: relative;
    font-size: var(--font-size-base);
    padding: var(--space-0) var(--space-1);
    line-height: var(--line-height-tight);
    font-weight: var(--font-weight-bold);
    background-color: hsla(
      var(--color-body-h),
      var(--color-body-s),
      100%,
      var(--color-body-a)
    );
    border: none;
    border-radius: var(--border-radius-0);
  }
  button::before {
    transition: box-shadow 200ms;
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: var(--border-radius-0);
    box-shadow: var(--btn-base-inner), var(--btn-base-outer);
    mix-blend-mode: multiply;
  }
  button:hover::before,
  button:focus::before {
    box-shadow: var(--btn-hover-inner), var(--btn-hover-outer);
  }
  button:active::before {
    box-shadow: var(--btn-active-inner), var(--btn-active-outer);
  }
  .primary {
    color: var(--color-body-background);
    background-color: hsla(222, 50%, 50%, 1);
  }
  .positive {
    color: var(--color-body-background);
    background-color: var(--color-positive);
  }
  .negative {
    color: var(--color-body-background);
    background-color: var(--color-negative);
  }
  .ghost {
    background-color: transparent;
  }
  .ghost:before {
    display: none;
  }
  .sizeXs {
    font-size: var(--font-size-xs);
    padding: var(--space--2) var(--space--1);
  }
  .sizeSm {
    font-size: var(--font-size-sm);
    padding: var(--space--1) var(--space-0);
  }
  .sizeLg {
    font-size: var(--font-size-lg);
    padding: var(--space-1) var(--space-2);
  }
  .sizeXl {
    font-size: var(--font-size-xl);
    padding: var(--space-2) var(--space-3);
  }
</style>

<button
  class={class_name}
  class:primary
  class:positive
  class:negative
  class:ghost
  class:sizeXs
  class:sizeSm
  class:sizeLg
  class:sizeXl>
  <slot>Button Value</slot>
</button>
