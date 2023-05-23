import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '6bh7vx',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
