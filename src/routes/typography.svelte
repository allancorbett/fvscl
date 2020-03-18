<script>
  import { onMount } from "svelte";
  import Messagebox from "../components/Messagebox.svelte";
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
  import Grid from "../components/Grid.svelte";

  let h1CurrentSize;
  let h2CurrentSize;
  let h3CurrentSize;
  let h4CurrentSize;
  let h5CurrentSize;
  let h6CurrentSize;
  let textBaseCurrentSize;
  let textSmallCurrentSize;
  let textTinyCurrentSize;

  onMount(() => {
    let h1 = document.querySelector("h1");
    let h1Size = window.getComputedStyle(h1);
    h1CurrentSize = h1Size.getPropertyValue("font-size");
    let h2 = document.querySelector("h2");
    let h2Size = window.getComputedStyle(h2);
    h2CurrentSize = h2Size.getPropertyValue("font-size");
    let h3 = document.querySelector("h3");
    let h3Size = window.getComputedStyle(h3);
    h3CurrentSize = h3Size.getPropertyValue("font-size");
    let h4 = document.querySelector("h4");
    let h4Size = window.getComputedStyle(h4);
    h4CurrentSize = h4Size.getPropertyValue("font-size");
    let h5 = document.querySelector("h5");
    let h5Size = window.getComputedStyle(h5);
    h5CurrentSize = h5Size.getPropertyValue("font-size");
    let h6 = document.querySelector("h6");
    let h6Size = window.getComputedStyle(h6);
    h6CurrentSize = h6Size.getPropertyValue("font-size");
    let textBase = document.querySelector(".textBase");
    let textBaseSize = window.getComputedStyle(textBase);
    textBaseCurrentSize = textBaseSize.getPropertyValue("font-size");
    let textSmall = document.querySelector(".textSmall");
    let textSmallSize = window.getComputedStyle(textSmall);
    textSmallCurrentSize = textSmallSize.getPropertyValue("font-size");
    let textTiny = document.querySelector(".textTiny");
    let textTinySize = window.getComputedStyle(textTiny);
    textTinyCurrentSize = textTinySize.getPropertyValue("font-size");

    function resize() {
      let h1 = document.querySelector("h1");
      let h1Size = window.getComputedStyle(h1);
      h1CurrentSize = h1Size.getPropertyValue("font-size");
      let h2 = document.querySelector("h2");
      let h2Size = window.getComputedStyle(h2);
      h2CurrentSize = h2Size.getPropertyValue("font-size");
      let h3 = document.querySelector("h3");
      let h3Size = window.getComputedStyle(h3);
      h3CurrentSize = h3Size.getPropertyValue("font-size");
      let h4 = document.querySelector("h4");
      let h4Size = window.getComputedStyle(h4);
      h4CurrentSize = h4Size.getPropertyValue("font-size");
      let h5 = document.querySelector("h5");
      let h5Size = window.getComputedStyle(h5);
      h5CurrentSize = h5Size.getPropertyValue("font-size");
      let h6 = document.querySelector("h6");
      let h6Size = window.getComputedStyle(h6);
      h6CurrentSize = h6Size.getPropertyValue("font-size");
      let textBase = document.querySelector(".textBase");
      let textBaseSize = window.getComputedStyle(textBase);
      textBaseCurrentSize = textBaseSize.getPropertyValue("font-size");
      let textSmall = document.querySelector(".textSmall");
      let textSmallSize = window.getComputedStyle(textSmall);
      textSmallCurrentSize = textSmallSize.getPropertyValue("font-size");
      let textTiny = document.querySelector(".textTiny");
      let textTinySize = window.getComputedStyle(textTiny);
      textTinyCurrentSize = textTinySize.getPropertyValue("font-size");
    }
    window.onresize = resize;
  });
</script>

<style>
  .title {
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
  p {
    max-width: 60ch;
  }
  .textExample {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--gap);
  }
</style>

<svelte:head>
  <title>Typography</title>
</svelte:head>
<Grid>
  <div class="title">
    <Heading level="3" marginTop>Headings</Heading>
  </div>
  <div class="examples">
    <Heading level="1">h1 currently has a font-size of {h1CurrentSize}</Heading>
    <Heading level="2">h2 currently has a font-size of {h2CurrentSize}</Heading>
    <Heading level="3">h3 currently has a font-size of {h3CurrentSize}</Heading>
    <Heading level="4">h4 currently has a font-size of {h4CurrentSize}</Heading>
    <Heading level="5">h5 currently has a font-size of {h5CurrentSize}</Heading>
    <Heading level="6">h6 currently has a font-size of {h6CurrentSize}</Heading>
  </div>
  <!-- <Messagebox>
    <Text small>
      <p>Headings have the following props:</p>
      <ul>
        <li>
          <code>underline</code>
          - adds an underline
        </li>
        <li>
          <code>marginTop</code>
          - defaults to
          <strong>false</strong>
          and adds 0.5em margin above elements
        </li>
        <li>
          <code>marginBottom</code>
          - defaults to true and adds 0.5em margin below elements
        </li>
      </ul>
    </Text>
  </Messagebox> -->
  <div class="title">
    <Heading level="3" marginTop>Text</Heading>
  </div>

  <div class="textExample">
    <Heading level="5" underline>Base</Heading>
    <Text>
      <p class="textBase">
        The font-size of body text is
        <strong>{textBaseCurrentSize}.</strong>
      </p>
      <p>
        Excepteur mollit tempor occaecat commodo sit laborum esse nostrud magna
        cupidatat nisi. Minim consectetur velit ea sint dolore et elit dolor non
        voluptate commodo excepteur. Deserunt veniam tempor eiusmod proident
        quis sint aliquip voluptate proident voluptate exercitation Lorem ea.
        Esse esse fugiat fugiat consequat labore Lorem cillum magna culpa magna
        ullamco laborum et. Sunt ad duis proident qui et. Cupidatat magna veniam
        magna duis sit eu nisi cupidatat incididunt esse do fugiat nostrud in.
        Magna Lorem quis officia cillum occaecat ad dolor ea sint aliquip.
      </p>

      <p>
        Pariatur commodo proident consequat laborum amet excepteur nisi fugiat
        minim. Labore et sunt magna dolor ex sit laboris consectetur deserunt
        culpa. Deserunt incididunt dolor fugiat reprehenderit esse irure commodo
        consequat occaecat amet incididunt aliqua. Quis et laborum laborum
        reprehenderit adipisicing veniam dolor ut sit magna exercitation do amet
        cupidatat.
      </p>
    </Text>
    <Heading level="5" underline>Small</Heading>
    <Text small>
      <p class="textSmall">
        The font-size of small text is
        <strong>{textSmallCurrentSize}.</strong>
      </p>
      <p>
        Quis incididunt est occaecat mollit reprehenderit consectetur do sunt
        excepteur aute excepteur. Reprehenderit Lorem ea eu nisi labore nisi
        nisi quis non proident et elit. Veniam fugiat sunt sit do sit excepteur
        cupidatat eu eiusmod voluptate sunt velit. Labore ipsum in sit aute
        Lorem qui ut.
      </p>

      <p>
        Enim consequat commodo exercitation Lorem laboris esse reprehenderit.
        Tempor aliquip exercitation Lorem quis. Qui ea duis do commodo ex.
        Aliquip dolor et fugiat enim reprehenderit ad voluptate in magna dolore
        ex adipisicing commodo.
      </p>

      <p>
        Laboris minim ea cillum cillum. Consectetur fugiat tempor cillum magna
        consequat id dolore laborum exercitation reprehenderit eiusmod duis.
        Cillum anim aliquip et veniam id laboris. Ad magna nulla anim Lorem
        mollit ex. Occaecat anim ea incididunt pariatur reprehenderit sunt sunt
        aliqua voluptate nostrud mollit officia.
      </p>
    </Text>
    <Heading level="5" underline>Tiny</Heading>
    <Text tiny>
      <p class="textTiny">
        The font-size of tiny text is
        <strong>{textTinyCurrentSize}.</strong>
      </p>
      <p>
        Culpa mollit laboris proident qui nisi elit eiusmod do eu voluptate ex
        velit. Aliqua laboris do ad id. Quis labore sunt officia ea. Voluptate
        sint sint incididunt pariatur elit nisi excepteur ipsum aliquip. Laboris
        non ipsum aute anim. Velit elit ad cupidatat dolor pariatur commodo esse
        mollit ex anim nulla.
      </p>

      <p>
        Aliqua esse et veniam consectetur. Officia nulla id aliqua duis anim
        voluptate nostrud minim adipisicing nulla sint ex officia. Aute elit
        dolore voluptate non excepteur pariatur deserunt qui officia tempor
        culpa aliqua consequat.
      </p>

      <p>
        Eiusmod in labore voluptate aute pariatur aliqua labore irure dolor
        deserunt cupidatat consequat aliqua irure. Et non et ullamco nulla
        nostrud. Ipsum aute tempor dolor laboris duis cillum ipsum commodo
        laboris eiusmod. Do dolor mollit est Lorem.
      </p>
    </Text>
  </div>
  <!-- <Messagebox>
    <Text small loose>
      <p>Text has the following props:</p>
      <ul>
        <li>
          <code>marginTop</code>
          - defaults to
          <strong>false</strong>
          and adds 0.5em margin above all child elements
        </li>
        <li>
          <code>marginBottom</code>
          - defaults to
          <strong>true</strong>
          and adds 0.5em margin below all child elements,
          <em>except</em>
          the last child
        </li>
        <li>
          <code>small</code>
          - makes the font-size smaller
        </li>
        <li>
          <code>tiny</code>
          - makes the font-size tiny
        </li>
      </ul>
    </Text>
  </Messagebox> -->
</Grid>
