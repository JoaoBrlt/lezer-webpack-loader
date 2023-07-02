const { buildParserFile } = require("@lezer/generator");

export default function loader(source) {
  const result = buildParserFile(source, { exportName: "parser" });
  return result.terms + "\n" + result.parser;
}
