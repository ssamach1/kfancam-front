import {
  CheckBoxWrapper,
  SplittedArraysWrapper,
  TitleCheckBox,
} from "../../Inputs/styled.jsx";
import React from "react";
import CheckBox from "./CheckBox/CheckBox.jsx";

const BasicCheckBoxes = React.memo(
  ({
    title,
    callback,
    value,
    receivedFilters,
    className,
    maxHeight,
    minWidth,
    forNames,
    groupName,
  }) => {
    function getNumberOfGroups(value) {
      if (value <= 5) return 1;
      if (value <= 12) return 2;
      else return 3;
    }

    function splitArrayIntoChunks(array, n) {
      const result = [];
      const chunkSize = Math.floor(array.length / n);
      const remainder = array.length % n;
      let start = 0;

      for (let i = 0; i < n; i++) {
        const end = start + chunkSize + (i < remainder ? 1 : 0);
        result.push(array.slice(start, end));
        start = end;
      }

      return result;
    }

    const splittedInputsArray = splitArrayIntoChunks(
      value,
      getNumberOfGroups(value.length)
    );

    return (
      <div>
        <TitleCheckBox>{title}</TitleCheckBox>
        <SplittedArraysWrapper>
          {splittedInputsArray.map((array, index) => {
            return (
              <CheckBoxWrapper
                $minWidth={minWidth}
                $maxHeight={maxHeight}
                key={index}
              >
                {array.map((filter, index) => (
                  <CheckBox
                    callback={callback}
                    name={filter}
                    receivedFilter={
                      receivedFilters ? receivedFilters[index] : filter
                    }
                    className={className}
                    groupName={groupName}
                    type="checkbox"
                    key={`${filter}-${index}`}
                  >
                    {forNames ? forNames[index] : ""}
                  </CheckBox>
                ))}
              </CheckBoxWrapper>
            );
          })}
        </SplittedArraysWrapper>
      </div>
    );
  }
);

export default BasicCheckBoxes;
