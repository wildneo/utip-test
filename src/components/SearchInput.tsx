import React, { useRef, ChangeEvent } from "react";

import FilledInput from "@material-ui/core/FilledInput";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from "@material-ui/core/InputBase";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

export interface Messages {
  searchPlaceholder?: string;
  clearCommand?: string;
}

export interface SearchInputBaseProps {
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  clearTitle?: string;
  Component?: typeof FilledInput | typeof Input | typeof OutlinedInput;
}

const SearchInput = (props: SearchInputBaseProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    value,
    onChange,
    clearTitle,
    placeholder,
    Component = InputBase
  } = props;

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  const handleQueryClear = () => {
    if (inputRef.current) {
      const prototype = Object.getPrototypeOf(inputRef.current);
      const valueSetter = Object.getOwnPropertyDescriptor(prototype, "value")
        ?.set;
      valueSetter?.call(inputRef.current, "");
      inputRef.current.dispatchEvent(new Event("input", { bubbles: true }));
      inputRef.current.focus();
    }
  };

  return (
    <Component
      onChange={handleQueryChange}
      placeholder={placeholder}
      inputRef={inputRef}
      value={value}
      fullWidth
      endAdornment={
        value && (
          <InputAdornment position="end">
            <IconButton
              onClick={handleQueryClear}
              title={clearTitle}
              size="small"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        )
      }
    />
  );
};

export default SearchInput;
