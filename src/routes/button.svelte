<script>
  import Button from "../components/Button.svelte";
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
    <Heading level="3" marginTop>Buttons</Heading>
  </div>
  <div class="render">
    <Button>Button</Button>
  </div>
  <Text>Default</Text>
  <div class="render">
    <Button primary>Button</Button>
  </div>
  <Text>Primary</Text>
  <div class="render">
    <Button positive>Button</Button>
  </div>
  <Text>Positive</Text>
  <div class="render">
    <Button negative>Button</Button>
  </div>
  <Text>Negative</Text>
  <div class="render">
    <Button ghost>Button</Button>
  </div>
  <Text>Ghost</Text>
  <div class="render">
    <Button sizeXs>Button</Button>
  </div>
  <Text>
    <code>sizeXs</code>
  </Text>
  <div class="render">
    <Button sizeSm>Button</Button>
  </div>
  <Text>
    <code>sizeSm</code>
  </Text>
  <div class="render">
    <Button sizeLg>Button</Button>
  </div>
  <Text>
    <code>sizeLg</code>
  </Text>
  <div class="render">
    <Button sizeXl>Button</Button>
  </div>
  <Text>
    <code>sizeXl</code>
  </Text>
</div>
