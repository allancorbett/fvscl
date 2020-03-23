<script>
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Input from "../components/Input.svelte";
</script>

<style>
  .container {
    box-shadow: var(--shadow-1);
    width: 100%;
    background: var(--color-body-background);
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .channels {
    background-color: var(--color-body-text);
    color: var(--color-body-background);
    padding: var(--gap);
  }
  .chat {
    display: flex;
    flex-direction: column;
  }
  .info {
    display: flex;
    flex-wrap: wrap;
    padding: var(--gap);
    border-bottom: var(--border-width-base) solid var(--color-body-text);
  }
  .info :global(h5) {
    flex: 1 1 100%;
  }
</style>

<div class="container">
  <div class="channels">
    <Heading level="4">Acme Co.</Heading>
    <Text small>Francisco McKenzie</Text>
  </div>
  <div class="chat">
    <div class="info">
      <Heading level="5">General</Heading>
      <Text small>56 members | 289 files | This is the general channel 👀</Text>
    </div>
  </div>
</div>
