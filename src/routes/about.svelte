<script>
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Grid from "../components/Grid.svelte";
</script>

<style>
  p {
    max-width: 60ch;
  }
  .title {
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
</style>

<Grid loose>
  <div class="title">
    <Heading marginTop level="3">About</Heading>
  </div>
  <section>
    <Heading level="2">What?</Heading>
    <Text>
      <p>FVSCL, a Fluid Visual Scaling Component Library.</p>
      <p>
        Using
        <a target="_blank" href="https://utopia.fyi/">Utopia</a>
        as a jumping off point I wanted to create a visually, responsive
        Component Library (though, really, I wouldn't suggest using any of the
        components in anger) to explain and demonstrate what could be possible.
      </p>
      <p>
        Whilst it's more of a proof-of-concept than deployable, production ready
        app there is probably something useful to be gleaned by taking a look at
        <a target="_blank" href="https://github.com/allancorbett/fvscl/">
          the source code on Github.
        </a>
      </p>
    </Text>
  </section>
  <section>
    <Heading level="2">Why?</Heading>
    <Text>
      <p>
        We use the web in a million different screen sizes, in a million
        different settings and on a million different devices. We should have
        fluid, responsive elements that can resize to be comfortable in and
        across this landscape. Hopefully, by basing all sizing screen size we
        can get a little closer to that world.
      </p>
    </Text>
  </section>

  <section>
    <Heading level="2">How?</Heading>
    <Text>
      <p>
        By importing custom css properties in to the root level, they are then
        accesible to all child elements. The real magic is done via the
        <a target="_blank" href="https://utopia.fyi/generator/">
          Utopia CSS Generator
        </a>
        which generates a file full of variables that can then be reused across
        a "component library" to keep things nice and consistent.
      </p>
      <p>
        I've used
        <a target="_blank" href="https://svelte.dev/">Svelte</a>
        partly to play with it and partly because it's the current darling of
        developers around the world. It seems alright, but I could have done the
        same things in plain html and js has only been used to show the current
        scale of things.
      </p>
    </Text>
  </section>
  <section>
    <Heading level="2">Where are the...?</Heading>
    <Text>
      <p>
        Not here, this is about visually scaling, not about generating a whole
        framework for your app.
      </p>

      <p>
        Any of the colours used are placeholders and don't really represent
        much.
      </p>
      <p>
        The typography is really about the sizes and relative scaling - the
        font-family is based around whatever OS you're using.
      </p>
      <p>Missing components may or may not come in the future. Who knows.</p>
    </Text>
  </section>
  <section>
    <Heading level="2">Who?</Heading>
    <Text>
      <p>
        Allan Corbett, a designer who can code. Find me on
        <a target="_blank" href="https://github.com/allancorbett">Github</a>
        or view more things that I've done at
        <a target="_blank" href="http://superallan.com">superallan.com</a>
        .
      </p>
    </Text>
  </section>
</Grid>
