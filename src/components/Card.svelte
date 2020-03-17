<script>
  let class_name = "";
  export { class_name as class };
</script>

<style>
  div {
    padding: var(--space-0);
    background: var(--color-body-background);
    box-shadow: var(--shadow-0);
  }
</style>

<div class={class_name}>
  <slot />
</div>
