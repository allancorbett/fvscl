<script>
  import Messagebox from "../components/Messagebox.svelte";
  import Heading from "../components/Heading.svelte";
  import Text from "../components/Text.svelte";
</script>

<style>
  .wrapper {
    display: grid;
    gap: var(--gap);
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto;
    align-items: start;
  }
  .title {
    grid-column: 1 / -1;
    border-bottom: var(--border-width-hefty) solid var(--color-body-text);
  }
</style>

<svelte:head>
  <title>Typography</title>
</svelte:head>
<div class="wrapper">
  <div class="title">
    <Heading level="3" marginTop>Headings</Heading>
  </div>
  <Messagebox>
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
  </Messagebox>
  <div class="examples">
    <!-- <Heading level="1">h1 has font-size of {h1Size}</Heading> -->
    <!-- <Heading level="2">h2 has font-size of {h2Size}</Heading> -->
    <!-- <Heading level="3">h3 has font-size of {h3Size}</Heading> -->
    <!-- <Heading level="4">h4 has font-size of {h4Size}</Heading> -->
    <!-- <Heading level="5">h5 has font-size of {h5Size}</Heading> -->
    <!-- <Heading level="6">h6 has font-size of {h6Size}</Heading> -->
    <Heading level="1">Heading level 1</Heading>
    <Heading level="2">Heading level 2</Heading>
    <Heading level="3">Heading level 3</Heading>
    <Heading level="4">Heading level 4</Heading>
    <Heading level="5">Heading level 5</Heading>
    <Heading level="6">Heading level 6</Heading>
  </div>
  <div class="title">
    <Heading level="3" marginTop>Text</Heading>
  </div>
  <Messagebox>
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
  </Messagebox>
  <div>
    <Heading level="5" underline>Base</Heading>
    <Text>
      <p>
        Duis commodo sint laborum cupidatat in. Lorem ipsum ea eiusmod irure
        duis duis. Sint deserunt esse eiusmod ullamco ad aliquip adipisicing
        adipisicing eiusmod. Incididunt dolor eiusmod laboris laborum excepteur
        eiusmod laboris ut. Nulla qui ullamco cillum sint voluptate eu mollit
        qui aute sunt. Dolor et exercitation consequat cupidatat mollit
        adipisicing. Occaecat excepteur ad Lorem non qui in et irure cillum
        dolore.
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
</div>
