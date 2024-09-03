import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/Authentication";
import FormLabel from "./InputLabels/FormLabel";
import TextField from "./TextField/TextField";
import Input from "./Inputs/Input";
import Storage from "./LocalStorage/Storage";

const initialValue = { username: "", password: "", role: "" };

const LoginForm = () => {
  const [formValues, setFormValues] = useState(initialValue);
  const [inputErrors, setInputErrors] = useState({});
  const [flag, setFlag] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    Storage.set("authFlag", flag);
  }, [flag]);

  const handleSubmit = (event) => {
    const validate = (values) => {
      let errors = null;
      const digits = /[0-9]/g;
      if (!values.username) {
        errors = { ...errors, username: "Username must be required" };
      }
      if (!values.password || values.password.length <= 8) {
        errors = {
          ...errors,
          password: "Password is required and must have 8 characters",
        };
      } else if (!digits.test(values.password)) {
        errors = { ...errors, password: "Password requires atleast 1 digit" };
      } else if (formValues.role === "admin") {
        setFlag(true);
        auth.Login(values);
        navigate("/profile");
      }

      setInputErrors(errors ?? {});
      return !errors;
    };
    const isvalidte = validate(formValues);
    !isvalidte && event.preventDefault();
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} className="loginForm">
        <div>
          <TextField
            label="Username:"
            name="username"
            message={inputErrors.username}
            type="text"
            value={formValues.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            label="Password:"
            name="password"
            message={inputErrors.password}
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          Please specify your role:
          <div>
            <FormLabel label="Admin" htmlFor="role"></FormLabel>
            <Input
              type="radio"
              name="role"
              value="admin"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <FormLabel label="Manager" htmlFor="role"></FormLabel>
            <Input
              type="radio"
              name="role"
              value="manager"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="buttons">
          <button type="submit" value="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
