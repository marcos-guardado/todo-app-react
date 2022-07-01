import React from "react";
import CustomButton from "../Button/CustomButton";
import "./CustomInput.css";
import { ICustomInput } from "./CustomInput.interface";

const CustomInput: React.FC<ICustomInput> = ({
  taskText,
  onChange,
  buttonText,
  label,
  onClick,
  value,
}) => {
  return (
    <div className="custom-input-container">
      <section className="input-container">
        <p>{taskText}</p>
        <input value={value} onChange={onChange} />
        {buttonText && <CustomButton label={label} onClick={onClick} />}
      </section>
    </div>
  );
};

export default CustomInput;
