<style>
  form {
    display: flex;
    flex-direction: column;
  }
  form > :global(*) {
    margin-bottom: var(--space-2);
  }
  form > :global(*:last-child) {
    margin-bottom: 0;
  }
</style>

<form>
  <slot />
</form>
