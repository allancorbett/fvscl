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
  <Text>Base input</Text>
  <div class="render">
    <Input
      label="Number of things"
      type="number"
      value="314"
      help="We can only accept numbers in this field" />
  </div>
  <Text>Numbers and help text</Text>
  <div class="render">
    <Input label="Disabled" value="Sorry pal" disabled />
  </div>
  <Text>Base input disabled</Text>
  <div class="render">
    <Input textarea label="Please, write something interesting..." />
  </div>
  <Text>Textarea</Text>
</div>
