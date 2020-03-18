<script>
  import { onMount } from "svelte";
  import Heading from "../components/Heading.svelte";
  import Highlight from "../components/Highlight.svelte";
  import Text from "../components/Text.svelte";
  import Grid from "../components/Grid.svelte";

  let h3CurrentSize;
  let h3CurrentLineHeight;

  onMount(() => {
    let h3 = document.querySelector("h3");
    let h3Size = window.getComputedStyle(h3);
    h3CurrentSize = h3Size.getPropertyValue("font-size");
    h3CurrentLineHeight = h3Size.getPropertyValue("line-height");

    function resize() {
      let h3 = document.querySelector("h3");
      let h3Size = window.getComputedStyle(h3);
      h3CurrentSize = h3Size.getPropertyValue("font-size");
      h3CurrentLineHeight = h3Size.getPropertyValue("line-height");
    }
    window.onresize = resize;
  });
</script>

<style>
  .title {
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
  .render {
    background: var(--render-background);
    padding: var(--space-5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .video {
    max-width: 100%;
    margin: 0;
    box-shadow: var(--shadow-0);
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
  <Heading level="3" marginBottom={false}>
    This text has a font-size of
    <Highlight>{h3CurrentSize}</Highlight>
    and line-height of
    <Highlight>{h3CurrentLineHeight}</Highlight>
    - resize your browser to see it fluidly scale.
  </Heading>
  <Grid loose cols="2">
    <div class="render">
      <video controls autoplay loop class="video" src="example.mp4" />
    </div>
    <Text>
      <p>
        Inspired by
        <a target="_blank" href="https://utopia.fyi/">Utopia</a>
      </p>
      <p>
        Built using
        <code>css</code>
        and
        <a target="_blank" href="https://svelte.dev/">Svelte</a>
      </p>
      <p>
        Available to play with on
        <a target="_blank" href="https://github.com/allancorbett/fvscl/">
          Github
        </a>
      </p>
    </Text>
  </Grid>
</Grid>
