import { compile, getCompiler, getErrors, getModuleSource, getWarnings } from "./helpers";

describe("loader", () => {
  it("should work", async () => {
    const compiler = getCompiler("simple.grammar");
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toMatchSnapshot();
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });
});
