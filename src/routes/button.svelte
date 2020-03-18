<script>
  import { onMount } from "svelte";

  import Button from "../components/Button.svelte";
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";

  let baseH;
  let baseFS;
  let basePL;
  let basePT;
  let xsH;
  let xsFS;
  let xsPL;
  let xsPT;
  let smH;
  let smFS;
  let smPL;
  let smPT;
  let lgH;
  let lgFS;
  let lgPL;
  let lgPT;
  let xlH;
  let xlFS;
  let xlPL;
  let xlPT;

  onMount(() => {
    let base = document.querySelector(".base button");
    let baseBtn = window.getComputedStyle(base);
    baseH = baseBtn.getPropertyValue("height");
    baseFS = baseBtn.getPropertyValue("font-size");
    basePL = baseBtn.getPropertyValue("padding-left");
    basePT = baseBtn.getPropertyValue("padding-top");
    let xs = document.querySelector(".xs button");
    let xsBtn = window.getComputedStyle(xs);
    xsH = xsBtn.getPropertyValue("height");
    xsFS = xsBtn.getPropertyValue("font-size");
    xsPL = xsBtn.getPropertyValue("padding-left");
    xsPT = xsBtn.getPropertyValue("padding-top");
    let sm = document.querySelector(".sm button");
    let smBtn = window.getComputedStyle(sm);
    smH = smBtn.getPropertyValue("height");
    smFS = smBtn.getPropertyValue("font-size");
    smPL = smBtn.getPropertyValue("padding-left");
    smPT = smBtn.getPropertyValue("padding-top");
    let lg = document.querySelector(".lg button");
    let lgBtn = window.getComputedStyle(lg);
    lgH = lgBtn.getPropertyValue("height");
    lgFS = lgBtn.getPropertyValue("font-size");
    lgPL = lgBtn.getPropertyValue("padding-left");
    lgPT = lgBtn.getPropertyValue("padding-top");
    let xl = document.querySelector(".xl button");
    let xlBtn = window.getComputedStyle(xl);
    xlH = xlBtn.getPropertyValue("height");
    xlFS = xlBtn.getPropertyValue("font-size");
    xlPL = xlBtn.getPropertyValue("padding-left");
    xlPT = xlBtn.getPropertyValue("padding-top");

    function resize() {
      let base = document.querySelector(".base button");
      let baseBtn = window.getComputedStyle(base);
      baseH = baseBtn.getPropertyValue("height");
      baseFS = baseBtn.getPropertyValue("font-size");
      basePL = baseBtn.getPropertyValue("padding-left");
      basePT = baseBtn.getPropertyValue("padding-top");
      let xs = document.querySelector(".xs button");
      let xsBtn = window.getComputedStyle(xs);
      xsH = xsBtn.getPropertyValue("height");
      xsFS = xsBtn.getPropertyValue("font-size");
      xsPL = xsBtn.getPropertyValue("padding-left");
      xsPT = xsBtn.getPropertyValue("padding-top");
      let sm = document.querySelector(".sm button");
      let smBtn = window.getComputedStyle(sm);
      smH = smBtn.getPropertyValue("height");
      smFS = smBtn.getPropertyValue("font-size");
      smPL = smBtn.getPropertyValue("padding-left");
      smPT = smBtn.getPropertyValue("padding-top");
      let lg = document.querySelector(".lg button");
      let lgBtn = window.getComputedStyle(lg);
      lgH = lgBtn.getPropertyValue("height");
      lgFS = lgBtn.getPropertyValue("font-size");
      lgPL = lgBtn.getPropertyValue("padding-left");
      lgPT = lgBtn.getPropertyValue("padding-top");
      let xl = document.querySelector(".xl button");
      let xlBtn = window.getComputedStyle(xl);
      xlH = xlBtn.getPropertyValue("height");
      xlFS = xlBtn.getPropertyValue("font-size");
      xlPL = xlBtn.getPropertyValue("padding-left");
      xlPT = xlBtn.getPropertyValue("padding-top");
    }
    window.onresize = resize;
  });
</script>

<style>
  .wrapper {
    display: grid;
    gap: var(--gap);
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  }
  .render {
    background: var(--render-background);
    padding: var(--space-0);
    display: flex;
    gap: var(--gap);
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
  <div class="render base">
    <Button>Button</Button>
  </div>
  <Text>
    <Heading level="5">Default</Heading>
    <ul>
      <li>
        Current height:
        <strong>{baseH}</strong>
      </li>
      <li>
        Current font-size:
        <strong>{baseFS}</strong>
      </li>
      <li>
        Current horizontal padding:
        <strong>{basePL}</strong>
      </li>
      <li>
        Current vertical padding:
        <strong>{basePT}</strong>
      </li>
    </ul>
  </Text>
  <div class="render">
    <Button primary>Button</Button>
    <Button positive>Button</Button>
    <Button negative>Button</Button>
    <Button ghost>Button</Button>
  </div>
  <Text>
    <Heading level="5">Primary, Positive, Negative, Ghost</Heading>
    <p>All based around the same sizes as the default button</p>
  </Text>
  <div class="render xs">
    <Button sizeXs>Button</Button>
  </div>
  <Text>
    <Heading level="5">
      <code>sizeXs</code>
    </Heading>
    <ul>
      <li>
        Current height:
        <strong>{xsH}</strong>
      </li>
      <li>
        Current font-size:
        <strong>{xsFS}</strong>
      </li>
      <li>
        Current horizontal padding:
        <strong>{xsPL}</strong>
      </li>
      <li>
        Current vertical padding:
        <strong>{xsPT}</strong>
      </li>
    </ul>

  </Text>
  <div class="render sm">
    <Button sizeSm>Button</Button>
  </div>
  <Text>
    <Heading level="5">
      <code>sizeSm</code>
    </Heading>
    <ul>
      <li>
        Current height:
        <strong>{smH}</strong>
      </li>
      <li>
        Current font-size:
        <strong>{smFS}</strong>
      </li>
      <li>
        Current horizontal padding:
        <strong>{smPL}</strong>
      </li>
      <li>
        Current vertical padding:
        <strong>{smPT}</strong>
      </li>
    </ul>
  </Text>
  <div class="render lg">
    <Button sizeLg>Button</Button>
  </div>
  <Text>
    <Heading level="5">
      <code>sizeLg</code>
    </Heading>
    <ul>
      <li>
        Current height:
        <strong>{lgH}</strong>
      </li>
      <li>
        Current font-size:
        <strong>{lgFS}</strong>
      </li>
      <li>
        Current horizontal padding:
        <strong>{lgPL}</strong>
      </li>
      <li>
        Current vertical padding:
        <strong>{lgPT}</strong>
      </li>
    </ul>
  </Text>
  <div class="render xl">
    <Button sizeXl>Button</Button>
  </div>
  <Text>
    <Heading level="5">
      <code>sizeXl</code>
    </Heading>
    <ul>
      <li>
        Current height:
        <strong>{xlH}</strong>
      </li>
      <li>
        Current font-size:
        <strong>{xlFS}</strong>
      </li>
      <li>
        Current horizontal padding:
        <strong>{xlPL}</strong>
      </li>
      <li>
        Current vertical padding:
        <strong>{xlPT}</strong>
      </li>
    </ul>
  </Text>
</div>
