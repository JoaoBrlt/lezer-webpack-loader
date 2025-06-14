import { compile, getCompiler, getErrors, getModuleSource, getWarnings } from "./helpers";

describe('"typescript" option', () => {
  it("should work with true", async () => {
    const compiler = getCompiler("simple.grammar", { typeScript: true });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });

  it("should work with false", async () => {
    const compiler = getCompiler("simple.grammar", { typeScript: false });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });
});
