<script>
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Grid from "../components/Grid.svelte";
</script>

<svelte:head>
  <title>Fluid Visual Scaling Component Library</title>
</svelte:head>

<Grid loose>
  <Heading marginTop marginBottom={false} underline level="1">FVSCL</Heading>
  <Heading level="2" marginBottom={false}>
    An experiment in Fluid Visual Scaling for a Component Library type thingy.
  </Heading>
  <Text>
    <p>
      Inspired by
      <a href="https://utopia.fyi/">Utopia</a>
      and available to play with on
      <a href="https://github.com/allancorbett/svelte-fvscl/">Github</a>
      .
    </p>
  </Text>
</Grid>
