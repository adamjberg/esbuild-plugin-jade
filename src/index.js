const fs = require("fs");
const jade = require("jade");

const pluginJade = () => ({
  name: "jade",
  setup(build) {
    build.onLoad({ filter: /\.(jade)$/ }, async (args) => {
      let template = await fs.promises.readFile(args.path, "utf8");

      const contents = jade.compile(template, { filename: args.path })();

      return { contents, loader: "text" };
    });
  },
});

module.exports = pluginJade;
