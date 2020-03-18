<script>
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Grid from "../components/Grid.svelte";
</script>

<style>
  .title {
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
</style>

<svelte:head>
  <title>Fluid Visual Scaling Component Library</title>
</svelte:head>
<Grid loose>
  <div class="title">
    <Heading marginTop marginBottom={false} level="1">FVSCL</Heading>
  </div>
  <Heading level="2" marginBottom={false}>
    An experiment in Fluid Visual Scaling for a Component Library type thingy.
  </Heading>
  <Text>
    <p>
      Inspired by
      <a href="https://utopia.fyi/">Utopia</a>
    </p>
    <p>
      Built using
      <code>css</code>
      and
      <a href="https://svelte.dev/">Svelte</a>
    </p>
    <p>
      Available to play with on
      <a href="https://github.com/allancorbett/svelte-fvscl/">Github</a>
    </p>
  </Text>
</Grid>
