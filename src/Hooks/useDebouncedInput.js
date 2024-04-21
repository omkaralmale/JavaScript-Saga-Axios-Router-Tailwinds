import React from "react";

export function useDebouncedInput(callback, delay) {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue) {
        callback(inputValue);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [inputValue, callback, delay]);

  return [inputValue, setInputValue];
}
