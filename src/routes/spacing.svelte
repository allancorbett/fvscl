<script>
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
  .title {
    grid-column: 1 / -1;
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
  .tile {
    background: var(--render-background);
    padding: var(--space-0);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tile > * {
    background-color: var(--color-body-text);
  }
  .space--2 {
    height: var(--space--2);
    width: var(--space--2);
  }
  .space--1 {
    height: var(--space--1);
    width: var(--space--1);
  }
  .space-0 {
    height: var(--space-0);
    width: var(--space-0);
  }
  .space-1 {
    height: var(--space-1);
    width: var(--space-1);
  }
  .space-2 {
    height: var(--space-2);
    width: var(--space-2);
  }
  .space-3 {
    height: var(--space-3);
    width: var(--space-3);
  }
  .space-4 {
    height: var(--space-4);
    width: var(--space-4);
  }
  .space-5 {
    height: var(--space-5);
    width: var(--space-5);
  }
</style>

<svelte:head>
  <title>Spacing</title>
</svelte:head>

<div class="wrapper">
  <div class="title">
    <Heading level="3" marginTop>Spacing</Heading>
  </div>
  <div class="tile">
    <div class="space--2" />
  </div>
  <Text marginBottom={false}>
    <code>space--2</code>
  </Text>
  <div class="tile">
    <div class="space--1" />
  </div>
  <Text marginBottom={false}>
    <code>space--1</code>
  </Text>
  <div class="tile">
    <div class="space-0" />
  </div>
  <Text marginBottom={false}>
    <code>space-0</code>
    used as the base size for padding, margins and gaps
  </Text>
  <div class="tile">
    <div class="space-1" />
  </div>
  <Text marginBottom={false}>
    <code>space-1</code>
  </Text>
  <div class="tile">
    <div class="space-2" />
  </div>
  <Text marginBottom={false}>
    <code>space-2</code>
  </Text>
  <div class="tile">
    <div class="space-3" />
  </div>
  <Text marginBottom={false}>
    <code>space-3</code>
  </Text>
  <div class="tile">
    <div class="space-4" />
  </div>
  <Text marginBottom={false}>
    <code>space-4</code>
  </Text>
  <div class="tile">
    <div class="space-5" />
  </div>
  <Text marginBottom={false}>
    <code>space-5</code>
  </Text>
</div>
