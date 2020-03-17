<script>
  export let type = "Text";
  export let label = "Label";
  export let disabled = false;
  export let value = "";
</script>

<style>
  label {
    display: flex;
    flex-direction: column;
    line-height: var(--line-height-tight);
  }
  input {
    margin-top: var(--space--2);
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

<label for={label}>
  {label}
  <input placeholder={label} {disabled} {value} {type} />
</label>
