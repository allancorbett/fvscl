<script>
  // export let text;
  export let marginTop = false;
  export let marginBottom = true;
  export let small = false;
  export let tiny = false;
  export let loose = false;
  export let tight = false;
</script>

<style>
  .wrapper {
    margin-bottom: 1em;
  }
  .wrapper > :global(*) {
    margin-top: 0;
  }
  .marginTop > :global(*) {
    margin-top: 1em;
  }
  .marginBottom > :global(*) {
    margin-bottom: 1em;
  }
  .marginBottom > :global(*:last-child) {
    margin-bottom: 0;
  }
  .small {
    font-size: var(--step--1);
  }
  .tiny {
    font-size: var(--step--2);
  }
  .loose {
    line-height: var(--line-height-loose);
  }
  .tight {
    line-height: var(--line-height-tight);
  }
</style>

<div
  class="wrapper"
  class:small
  class:tiny
  class:loose
  class:tight
  class:marginBottom
  class:marginTop>
  <slot />
</div>
