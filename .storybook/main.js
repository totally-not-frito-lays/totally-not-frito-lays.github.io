/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)",
    "../src/lib/components/**/*.stories.@(js|ts|svelte)"
  ],
  addons: [
    "@storybook/addon-svelte-csf",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
};
export default config;
