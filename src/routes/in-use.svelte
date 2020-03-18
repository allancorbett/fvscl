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
  :global(.social) {
    max-width: 60ch;
    width: 100%;
    display: grid;
    gap: var(--space-0);
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto;
  }
  :global(.social img) {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    height: var(--space-5);
    width: var(--space-5);
    border-radius: var(--space-5);
  }
  :global(.social textarea) {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    height: var(--space-5);
  }
  :global(.social button) {
    grid-column: 3 / -1;
    grid-row: 2 / -1;
  }
</style>

<div class="render">
  <Card class="social">
    <img class="avatar" src="avatar.jpg" alt="" />
    <Input textarea label="What are you thinking?" />
    <Button sizeSm primary>Share</Button>
  </Card>
  <Card class="login">
    <Form>
      <Heading level="3">Login</Heading>
      <Messagebox negative>Sorry, something's gone wrong.</Messagebox>
      <Input disabled label="Email" type="email" value="jacinzag@kitew.pf" />
      <Input
        label="Password"
        type="password"
        help="Passwords must be between longer than 8 characters and contain at
        least 1 digit and 1 special character" />
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
      <div class="group">
        <Button ghost>Go Back</Button>
        <Button primary>Submit</Button>
      </div>
    </Form>
  </Card>
</div>
