import {
  compile,
  getCompiler,
  getErrors,
  getModuleSource,
  getWarnings,
} from "./helpers";

describe('"includeNames" option', () => {
  it("should work with true", async () => {
    const compiler = getCompiler("simple.grammar", { includeNames: true });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toEqual(expect.stringContaining("export const\n"));
    expect(output).toEqual(expect.stringContaining("export const parser"));
    expect(output).toEqual(expect.stringContaining("termNames:"));
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });

  it("should work with false", async () => {
    const compiler = getCompiler("simple.grammar", { includeNames: false });
    const stats = await compile(compiler);
    const output = getModuleSource("simple.grammar", stats);

    expect(output).toEqual(expect.stringContaining("export const\n"));
    expect(output).toEqual(expect.stringContaining("export const parser"));
    expect(output).toEqual(expect.not.stringContaining("termNames:"));
    expect(getErrors(stats)).toHaveLength(0);
    expect(getWarnings(stats)).toHaveLength(0);
  });
});
