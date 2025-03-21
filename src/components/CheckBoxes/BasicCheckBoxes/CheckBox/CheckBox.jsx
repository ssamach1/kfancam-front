import { useEffect, useState } from "react";
import { CheckBoxName, Wrapper } from "./styled";
import "./style.css";

const CheckBox = ({ callback, name, type, className, children, maxWidth }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    callback(checked);
  }, [checked]);

  const check = () => {
    setChecked(!checked);
  };

  return (
    <Wrapper>
      <CheckBoxName $maxWidth={maxWidth}>
        {children ? children() : name}
      </CheckBoxName>
      <input
        onChange={check}
        value={name}
        checked={checked}
        type={type}
        className={className}
      ></input>
    </Wrapper>
  );
};

export default CheckBox;
