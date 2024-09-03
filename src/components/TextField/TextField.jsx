import React from "react";
import ValidationMessage from "../InputHelperText/ValidationMessage";
import FormLabel from "../InputLabels/FormLabel";
import Input from "../Inputs/Input";

const TextField = ({ label, onChange, name, value, type, message }) => {
  return (
    <>
      <FormLabel label={label} htmlFor={name} />
      <Input {...{ name, type, value, onChange }} />
      <ValidationMessage message={message} />
    </>
  );
};

export default TextField;
