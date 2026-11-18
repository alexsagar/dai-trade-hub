import { documentTypes } from "./documents";
import { objectTypes } from "./objects";
import { pageTypes } from "./pages";

export const schemaTypes = [...objectTypes, ...pageTypes, ...documentTypes];

/** One fixed document per page; the _id equals the type name. */
export const SINGLETONS = ["siteSettings", ...pageTypes.map((t) => t.name)];
