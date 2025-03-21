import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const SortingSelect = React.memo(({ value, onChange, name, options }) => {
  const [radio, setRadio] = useState(false);
  const [arrow, setArrow] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    window.addEventListener("click", (event) => {
      if (
        radio &&
        event.target !== selectRef.current &&
        !selectRef.current.contains(event.target)
      ) {
        setRadio(false);
        setArrow(false);
      }
    });
    return () =>
      window.removeEventListener("click", (event) => {
        if (
          radio &&
          event.target !== selectRef.current &&
          !selectRef.current.contains(event.target)
        ) {
          setRadio(false);
          setArrow(false);
        }
      });
  });

  return (
    <div ref={selectRef} className="dropdown">
      <div
        className="dropdownTitleWrapper"
        onClick={() => {
          radio ? setRadio(false) : setRadio(true);
          arrow ? setArrow(false) : setArrow(true);
        }}
      >
        <div className="dropdownTitle">{name}</div>
        <svg
          // eslint-disable-next-line
          className={arrow ? "dropdownArrow" + " " + "active" : "dropdownArrow"}
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
      {radio ? (
        <div className="radio-input">
          {options.map((option, index) => (
            <label key={index} className="label">
              <input
                type="radio"
                checked={value === option.value ? true : false}
                id={option.value}
                key={option.value}
                name="value-radio"
                value={option.value}
                onChange={(e) => {
                  onChange(e.target.value);
                  setRadio(false);
                  setArrow(false);
                }}
              />
              <p className="text" key={option.name}>
                {option.name}
              </p>
            </label>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
});

export default SortingSelect;
