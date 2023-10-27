import React, { useEffect } from "react";
import { isLoggedInContext } from "../App";

export const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  const [minLengthError, setMinLengthError] = React.useState(false);
  const [falseSymbols, setFalseSymbols] = React.useState(false);
  const [nameSymbols, setNameSymbols] = React.useState(false);
  const [maxLengthError, setMaxLengthError] = React.useState(false);
  const [falsePhoneSymbols, setFalsePhoneSymbols] = React.useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLengthError":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;
        case "falseSymbols":
          /[^a-z0-9\-@]+$/i.test(value)
            ? setFalseSymbols(true)
            : setFalseSymbols(false);
          break;
        case "nameSymbols":
          /[^a-z0-9]+$/i.test(value)
            ? setNameSymbols(true)
            : setNameSymbols(false);
          break;
        case "maxLengthError":
          value.length > validations[validation]
            ? setMaxLengthError(true)
            : setMaxLengthError(false);
          break;
        case "falsePhoneSymbols":
          /[^0-9-+()]$/i.test(value)
            ? setFalsePhoneSymbols(true)
            : setFalsePhoneSymbols(false);
          break;

        default:
        // do nothing
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
    falseSymbols,
    nameSymbols,
    maxLengthError,
    falsePhoneSymbols,
  };
};

const useInput = (initialValue, validations) => {
  const [value, setValue] = React.useState(initialValue);
  const [isDirty, setDirty] = React.useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
    isDirty,
    ...valid,
  };
};

export default useInput;
