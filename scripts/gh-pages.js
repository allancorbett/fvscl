ghpages.publish(
  "__sapper__/export/svelte-fvscl",
  {
    branch: "gh-pages",
    repo: "https://github.com/allancorbett/svelte-fvscl.git",
    user: {
      name: "Allan Corbett",
      email: "allancorbett@gmail.com"
    }
  },
  () => {
    console.log("Deploy Complete!");
  }
);
