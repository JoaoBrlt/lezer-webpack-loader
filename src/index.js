import { validate } from "schema-utils";
import { buildParserFile } from "@lezer/generator";
import schema from "./options.json";

export default function loader(source) {
  const options = this.getOptions();
  validate(schema, options, { name: "Lezer Loader" });
  const result = buildParserFile(source, options);
  return result.terms + "\n" + result.parser;
}
