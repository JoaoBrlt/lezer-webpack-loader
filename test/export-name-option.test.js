import {
  compile,
  getCompiler,
  getErrors,
  getModuleSource,
  getWarnings,
} from "./helpers";

describe('"exportName" option', () => {
  it("should work", async () => {
    const compiler = getCompiler("simple.grammar", {
      exportName: "simpleParser",
    });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });
});
