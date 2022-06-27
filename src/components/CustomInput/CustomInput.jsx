import React from "react";
import CustomButton from "../Button/CustomButton";
import "./CustomInput.css";

const CustomInput = ({ taskText, handleSubmit, buttonText, onChange }, ref) => {
  return (
    <div className="custom-input-container">
      <section className="input-container">
        <p>{taskText}</p>
        <input onChange={onChange} ref={ref} />
      </section>
      {buttonText && <CustomButton onClick={handleSubmit} label={buttonText} />}
    </div>
  );
};

export default React.forwardRef(CustomInput);
