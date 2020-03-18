<script>
  import { onMount } from "svelte";

  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Highlight from "../components/Highlight.svelte";

  let minus2CurrentWidth;
  let minus1CurrentWidth;
  let baseCurrentWidth;
  let plus1CurrentWidth;
  let plus2CurrentWidth;
  let plus3CurrentWidth;
  let plus4CurrentWidth;
  let plus5CurrentWidth;

  onMount(() => {
    let minus2 = document.querySelector(".space--2");
    let minus2Width = window.getComputedStyle(minus2);
    minus2CurrentWidth = minus2Width.getPropertyValue("width");
    let minus1 = document.querySelector(".space--1");
    let minus1Width = window.getComputedStyle(minus1);
    minus1CurrentWidth = minus1Width.getPropertyValue("width");
    let base = document.querySelector(".space-0");
    let baseWidth = window.getComputedStyle(base);
    baseCurrentWidth = baseWidth.getPropertyValue("width");
    let plus1 = document.querySelector(".space-1");
    let plus1Width = window.getComputedStyle(plus1);
    plus1CurrentWidth = plus1Width.getPropertyValue("width");
    let plus2 = document.querySelector(".space-2");
    let plus2Width = window.getComputedStyle(plus2);
    plus2CurrentWidth = plus2Width.getPropertyValue("width");
    let plus3 = document.querySelector(".space-3");
    let plus3Width = window.getComputedStyle(plus3);
    plus3CurrentWidth = plus3Width.getPropertyValue("width");
    let plus4 = document.querySelector(".space-4");
    let plus4Width = window.getComputedStyle(plus4);
    plus4CurrentWidth = plus4Width.getPropertyValue("width");
    let plus5 = document.querySelector(".space-5");
    let plus5Width = window.getComputedStyle(plus5);
    plus5CurrentWidth = plus5Width.getPropertyValue("width");

    function resize() {
      let minus2 = document.querySelector(".space--2");
      let minus2Width = window.getComputedStyle(minus2);
      minus2CurrentWidth = minus2Width.getPropertyValue("width");
      let minus1 = document.querySelector(".space--1");
      let minus1Width = window.getComputedStyle(minus1);
      minus1CurrentWidth = minus1Width.getPropertyValue("width");
      let base = document.querySelector(".space-0");
      let baseWidth = window.getComputedStyle(base);
      baseCurrentWidth = baseWidth.getPropertyValue("width");
      let plus1 = document.querySelector(".space-1");
      let plus1Width = window.getComputedStyle(plus1);
      plus1CurrentWidth = plus1Width.getPropertyValue("width");
      let plus2 = document.querySelector(".space-2");
      let plus2Width = window.getComputedStyle(plus2);
      plus2CurrentWidth = plus2Width.getPropertyValue("width");
      let plus3 = document.querySelector(".space-3");
      let plus3Width = window.getComputedStyle(plus3);
      plus3CurrentWidth = plus3Width.getPropertyValue("width");
      let plus4 = document.querySelector(".space-4");
      let plus4Width = window.getComputedStyle(plus4);
      plus4CurrentWidth = plus4Width.getPropertyValue("width");
      let plus5 = document.querySelector(".space-5");
      let plus5Width = window.getComputedStyle(plus5);
      plus5CurrentWidth = plus5Width.getPropertyValue("width");
    }
    window.onresize = resize;
  });
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
    currently renders as
    <Highlight>{minus2CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space--1" />
  </div>
  <Text marginBottom={false}>
    <code>space--1</code>
    currently renders as
    <Highlight>{minus1CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-0" />
  </div>
  <Text marginBottom={false}>
    <code>space-0</code>
    used as the base size for padding, margins and gaps. Currently renders as
    <Highlight>{baseCurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-1" />
  </div>
  <Text marginBottom={false}>
    <code>space-1</code>
    currently renders as
    <Highlight>{plus1CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-2" />
  </div>
  <Text marginBottom={false}>
    <code>space-2</code>
    currently renders as
    <Highlight>{plus2CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-3" />
  </div>
  <Text marginBottom={false}>
    <code>space-3</code>
    currently renders as
    <Highlight>{plus3CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-4" />
  </div>
  <Text marginBottom={false}>
    <code>space-4</code>
    currently renders as
    <Highlight>{plus4CurrentWidth}</Highlight>
  </Text>
  <div class="tile">
    <div class="space-5" />
  </div>
  <Text marginBottom={false}>
    <code>space-5</code>
    currently renders as
    <Highlight>{plus5CurrentWidth}</Highlight>
  </Text>
</div>
