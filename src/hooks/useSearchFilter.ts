import React from "react";

import searchFilter from "../utils/searchFilter";
import useDebounce from "./useDebounce";

export interface Options {
  minQueryLength?: number;
}

const useSearchFilter = <T extends {}>(
  collection: T[],
  includeProps: Partial<keyof T>[],
  options?: Options
) => {
  const [query, setQuery] = React.useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [filtered, setFiltered] = React.useState(collection);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedProps = React.useMemo(() => includeProps, []);
  const minQueryLength = (options && options.minQueryLength) || undefined;

  React.useEffect(() => {
    setFiltered(
      searchFilter(collection, {
        query: debouncedQuery,
        minQueryLength,
        includeProps: memoizedProps
      })
    );
  }, [collection, debouncedQuery, memoizedProps, minQueryLength]);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    filteredCollection: filtered,
    inputProps: {
      value: query,
      onChange
    }
  };
};

export default useSearchFilter;
