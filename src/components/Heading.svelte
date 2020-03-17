<script>
  export let level = [1, 2, 3, 4, 5, 6];
  export let underline = false;
  export let marginTop = false;
  export let marginBottom = true;
</script>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: var(--line-height-tight);
  }
  .underline {
    text-decoration: underline;
  }
  .marginTop {
    margin-top: 0.5em;
  }
  .marginBottom {
    margin-bottom: 0.5em;
  }
</style>

{#if level === '1'}
  <h1 class:marginTop class:marginBottom class:underline>
    <slot />
  </h1>
{:else if level === '2'}
  <h2 class:marginTop class:marginBottom class:underline>
    <slot />
  </h2>
{:else if level === '3'}
  <h3 class:marginTop class:marginBottom class:underline>
    <slot />
  </h3>
{:else if level === '4'}
  <h4 class:marginTop class:marginBottom class:underline>
    <slot />
  </h4>
{:else if level === '5'}
  <h5 class:marginTop class:marginBottom class:underline>
    <slot />
  </h5>
{:else if level === '6'}
  <h6 class:marginTop class:marginBottom class:underline>
    <slot />
  </h6>
{/if}
