<script>
  export let cols = 1;
  export let tight = false;
  export let loose = false;
</script>

<style>
  div {
    display: grid;
    gap: var(--space-0);
    grid-template-columns: repeat(var(--columns), 1fr);
  }
  .tight {
    gap: var(--space--2);
  }
  .loose {
    gap: var(--space-2);
  }
</style>

<div {cols} style="--columns:{cols}" class:tight class:loose>
  <slot />
</div>
