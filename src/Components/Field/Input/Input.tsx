import React from "react";

interface inputType {
  required: boolean;
  className: string;
  type: "text" | "email";
}

const InputComponent = (props: inputType) => {
  return <input {...props} />;
};

export default InputComponent;
