<script>
  import Input from "../components/Input.svelte";
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
</script>

<style>
  .wrapper {
    display: grid;
    gap: var(--space-0);
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
  .render {
    background: var(--render-background);
    padding: var(--space-0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    grid-column: 1 / -1;
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
</style>

<div class="wrapper">
  <div class="title">
    <Heading level="3" marginTop>Inputs</Heading>
  </div>
  <div class="render">
    <Input />
  </div>
  <Text>Base input with default values</Text>
  <div class="render">
    <Input disabled />
  </div>
  <Text>Base input disabled</Text>
</div>
