import { useEffect, useRef, useState } from "react";
import "./style.css";
import { getFormattedForSearchString } from "helpers/getFormattedForSearchString";
import getSongName from "helpers/getSongName";
import { CheckBoxName, Wrapper } from "./styled";

const DropdownCheckBox = ({
  callback,
  name,
  receivedFilter,
  type,
  className,
  children,
  siteTagFilter,
}) => {
  const isInitialRender = useRef(true);
  receivedFilter
    ? (receivedFilter = getFormattedForSearchString(
        getSongName(receivedFilter)
      ))
    : (name = getFormattedForSearchString(getSongName(name)));

  const [checked, setChecked] = useState(
    siteTagFilter
      ? siteTagFilter.includes(receivedFilter.toLowerCase())
        ? true
        : false
      : false
  );

  useEffect(() => {
    if (!siteTagFilter.includes(receivedFilter)) setChecked(false);
  }, [siteTagFilter]);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else callback(receivedFilter ? receivedFilter : name, checked);
  }, [checked]);

  const check = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper>
      <CheckBoxName>{children ? children() : name}</CheckBoxName>
      {
        <input
          onChange={check}
          value={name}
          type={type}
          checked={checked}
          className={className}
        ></input>
      }
    </Wrapper>
  );
};

export default DropdownCheckBox;
