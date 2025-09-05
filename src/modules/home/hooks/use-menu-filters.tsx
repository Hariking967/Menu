import { parseAsString, useQueryStates } from "nuqs";

export default function useMenuFilters() {
  return useQueryStates({
    search: parseAsString.withDefault("").withOptions({ clearOnDefault: true }),
  });
}
