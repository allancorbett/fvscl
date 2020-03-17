<script>
  import Heading from "../components/Heading.svelte";
  import Messagebox from "../components/Messagebox.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import Input from "../components/Input.svelte";
  import Form from "../components/Form.svelte";
</script>

<style>
  .render {
    background: var(--render-background);
    padding: var(--space-3);
    margin: var(--space-2) 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
  }
  .group {
    display: flex;
    justify-content: space-between;
  }
  :global(.login) {
    max-width: 40ch;
    width: 100%;
  }
  :global(.register) {
    max-width: 80ch;
    width: 100%;
  }
</style>

<div class="render">
  <Card class="login">
    <Form>
      <Heading level="3">Login</Heading>
      <Messagebox negative>Sorry, something's gone wrong.</Messagebox>
      <Input disabled label="Email" type="email" value="jacinzag@kitew.pf" />
      <Input label="Password" type="password" />
      <div class="group">
        <Button ghost>Go Back</Button>
        <Button primary disabled>Submit</Button>
      </div>
    </Form>
  </Card>
  <Card class="register">
    <Form>
      <Heading level="3">Register</Heading>
      <Input label="Name" type="text" />
      <Input label="Email" type="Email" />
      <Input label="Date of Birth" type="date" />
      <Input label="Level of Prep" type="range" />
      <div class="group">
        <Button ghost>Go Back</Button>
        <Button primary>Submit</Button>
      </div>
    </Form>
  </Card>
</div>
