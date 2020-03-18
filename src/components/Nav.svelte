<script>
  export let segment;
</script>

<style>
  nav {
    background-color: var(--color-body-text);
    padding: 0 var(--space-0);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    margin-bottom: 0;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
    /* font-weight: var(--font-weight-bold); */
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - var(--space--1) - var(--space--1));
    height: var(--space--2);
    background-color: var(--color-body-background);
    display: block;
    bottom: 0;
  }

  a {
    text-decoration: none;
    padding: var(--space-0) var(--space--1);
    display: block;
    color: var(--color-body-background);
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        home
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'typography' ? 'page' : undefined}
        href="typography">
        typography
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'spacing' ? 'page' : undefined}
        href="spacing">
        spacing
      </a>
    </li>
    <li>
      <a aria-current={segment === 'button' ? 'page' : undefined} href="button">
        button
      </a>
    </li>
    <li>
      <a aria-current={segment === 'input' ? 'page' : undefined} href="input">
        input
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'examples' ? 'page' : undefined}
        href="examples">
        examples
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li> -->
  </ul>
</nav>
