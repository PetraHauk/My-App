import {useNavigate} from 'react-router-dom';
import {useAuthentication} from '../hooks/ApiHooks.js';
import useForm from '../hooks/formhooks.js';
import Button from './UI/Button.jsx';
import { useUserContext } from '../hooks/contextHooks';

// LoginForm.jsx
const LoginForm = () => {
  const {login} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };


  const { handleLogin } = useUserContext();

  const doLogin = async () => {
    try {
      handleLogin(inputs);
    } catch (e) {
      alert(e.message);
    }
  };

  /*

  const doLogin = async () => {

    console.log('doLogin', inputs);
    try {
      const userData = await login(inputs);
      console.log('doLogin', userData);
      localStorage.setItem('token', userData.token);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

   */

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );

  console.log(inputs);




  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <Button text="Login" />
      </form>
    </>
  );
};

export default LoginForm;
