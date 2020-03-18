<script>
  import Nav from "../components/Nav.svelte";
  import Text from "../components/Text.svelte";

  export let segment;
</script>

<style>
  div {
    position: relative;
  }
  main {
    position: relative;
    max-width: calc(100vw - var(--gap) - var(--gap));
    margin: 0 auto;
    box-sizing: border-box;
  }
  footer {
    padding: var(--gap);
    font-size: var(--font-size-sm);
    display: flex;
    justify-content: flex-end;
  }
</style>

<div>

  <Nav {segment} />

  <main>
    <slot />
  </main>
</div>
<footer>
  <Text small>
    <a target="_blank" href="https://github.com/allancorbett/fvscl/">
      Code is on Github
    </a>
    - made by
    <a target="_blank" href="http://superallan.com">Allan Corbett</a>
    in 2020.
  </Text>
</footer>
