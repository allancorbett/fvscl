<style>
  form {
    display: flex;
    flex-direction: column;
    gap: var(--space-1);
  }
  form > :global(*:last-child) {
    margin-bottom: 0;
  }
</style>

<form>
  <slot />
</form>
