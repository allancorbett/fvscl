<script>
  import Text from "../components/Text.svelte";
  export let textarea;
  export let type = "Text";
  export let label = "Label";
  export let help = false;
  export let disabled = false;
  export let value = "";
</script>

<style>
  label {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    line-height: var(--line-height-tight);
    width: 100%;
    gap: var(--space--2);
  }
  textarea {
    width: calc(100% - var(--space--1) - var(--space--1));
    padding: var(--space--1);
    font-size: var(--font-size-base);
    font-family: var(--font-family-base);
    background-color: hsla(
      var(--color-body-h),
      var(--color-body-s),
      100%,
      var(--color-body-a)
    );
    border-radius: var(--border-radius-0);
    border: var(--border-width-base) solid var(--color-input-border);
  }
  input {
    width: calc(100% - var(--space--1) - var(--space--1));
    padding: var(--space--1);
    font-size: var(--font-size-base);
    font-family: var(--font-family-base);
    background-color: hsla(
      var(--color-body-h),
      var(--color-body-s),
      100%,
      var(--color-body-a)
    );
    border-radius: var(--border-radius-0);
    border: var(--border-width-base) solid var(--color-input-border);
  }
  [disabled],
  [disabled]:hover,
  [disabled]:focus,
  [disabled]:active {
    cursor: not-allowed;
    background-color: hsla(var(--color-body-h), var(--color-body-s), 40%, 0.2);
    border-color: var(--color-input-border);
  }
  input:active,
  input:focus {
    border-color: var(--color-input-border-active);
  }
</style>

{#if textarea}
  <textarea placeholder={label} />
{:else}
  <label for={label}>
    {label}
    <input placeholder={label} {disabled} {value} {type} />
    {#if help}
      <Text tiny>
        <p>{help}</p>
      </Text>
    {/if}
  </label>
{/if}
