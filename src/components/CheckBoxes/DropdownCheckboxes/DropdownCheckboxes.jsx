import React, { useEffect, useState } from "react";
import "./style.css";
import { DropdownCheckBoxesWrapper } from "./styled";
import { TitleCheckBox } from "../../../components/CheckBoxes/BasicCheckBoxes/styled";
import DropdownCheckBox from "./DropdownCheckBox/DropdownCheckBox";

const DropdownCheckboxes = React.memo(
  ({
    callback,
    receivedFilters,
    value,
    className,
    maxHeight,
    minWidth,
    forNames,
    siteTagFilter,
    name,
    groupName,
    title,
    activatedByDefault,
  }) => {
    const [dropdown, setDropdown] = useState(activatedByDefault);
    const [arrow, setArrow] = useState(activatedByDefault);

    useEffect(() => {
      if (!activatedByDefault) {
        setDropdown(false);
        setArrow(false);
      }
    }, [groupName]);

    return (
      <div className="dropdown">
        <div
          className="dropdownTitleWrapper"
          onClick={() => {
            dropdown ? setDropdown(false) : setDropdown(true);
            arrow ? setArrow(false) : setArrow(true);
          }}
        >
          {title ? (
            <TitleCheckBox>{title}</TitleCheckBox>
          ) : (
            <div className="dropdownTitle">{name}</div>
          )}
          <svg
            className={arrow ? "dropdownArrow active" : "dropdownArrow"}
            viewBox="0 0 360 360"
            space="preserve"
          >
            <g id="SVGRepo_iconCarrier">
              <path
                id="XMLID_225_"
                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
              />
            </g>
          </svg>
        </div>
        {dropdown ? (
          <div>
            <DropdownCheckBoxesWrapper
              $minWidth={minWidth}
              $maxHeight={maxHeight}
            >
              {value.map((filter, index) => (
                <DropdownCheckBox
                  key={filter}
                  callback={callback}
                  receivedFilter={
                    receivedFilters ? receivedFilters[index] : filter
                  }
                  name={filter}
                  className={className}
                  type="checkbox"
                  siteTagFilter={siteTagFilter}
                >
                  {forNames ? forNames[index] : ""}
                </DropdownCheckBox>
              ))}
            </DropdownCheckBoxesWrapper>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
);

export default DropdownCheckboxes;
