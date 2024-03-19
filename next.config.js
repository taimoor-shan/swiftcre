const nextMdx = require('@next/mdx');
const withBuilderDevTools = require('@builder.io/dev-tools/next')();

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {/* otherOptions… */}
});

const mergedConfig = {
  ...withMdx,
  ...withBuilderDevTools,
  // Add any additional configuration options here if needed
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
};

module.exports = mergedConfig;
