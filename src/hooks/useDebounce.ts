import React from "react";

const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};

export default useDebounce;
