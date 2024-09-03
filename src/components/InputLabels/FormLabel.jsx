import React from "react";

const FormLabel = ({ label: formLabel, htmlFor }) => {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {formLabel}
    </label>
  );
};

export default FormLabel;
