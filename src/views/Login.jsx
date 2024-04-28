// imports
import LoginForm from "../components/LoginForm.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import {useState} from "react";
import Button from "../components/UI/Button.jsx";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);

  const toggle = () => {
    setToggleForm(!toggleForm);
  };

  return (
    <>
      {toggleForm ? <LoginForm /> : <RegisterForm />}
      <Button
        text={toggleForm ? 'Not registered yet?' : 'Go to login'}
        handleClick={toggle}
      />
    </>
  );
};

export default Login;
