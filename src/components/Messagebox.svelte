<script>
  export let info = true;
  export let positive;
  export let negative;
</script>

<style>
  div {
    background: transparent;
    border-width: var(--border-width-base);
    border-style: solid;
    padding: var(--step-0);
  }
  .info {
    color: var(--color-info-text);
    border-color: var(--color-info-border);
    background-color: var(--color-info-background);
  }
  .negative {
    color: var(--color-negative);
    border-color: var(--color-negative);
    background-color: hsla(
      var(--color-negative-h),
      var(--color-negative-s),
      var(--color-negative-l),
      0.1
    );
  }
  .positive {
    color: var(--color-positive);
    border-color: var(--color-positive);
    background-color: hsla(
      var(--color-positive-h),
      var(--color-positive-s),
      var(--color-positive-l),
      0.1
    );
  }
</style>

<div class:info class:positive class:negative>
  <slot />
</div>
