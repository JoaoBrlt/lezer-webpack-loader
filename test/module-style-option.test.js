import { compile, getCompiler, getErrors, getModuleSource, getWarnings } from "./helpers";

describe('"moduleStyle" option', () => {
  it('should work with "es"', async () => {
    const compiler = getCompiler("simple.grammar", { moduleStyle: "es" });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });

  it('should work with "cjs"', async () => {
    const compiler = getCompiler("simple.grammar", { moduleStyle: "cjs" });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });
});
