import {useUserContext} from "../hooks/contextHooks.js";
import Button from "../components/UI/Button.jsx";

const Logout = () => {

  const { handleLogout } = useUserContext();

  return (
    <div>
      <h1>Logout</h1>
      <Button handleClick={handleLogout} text="Logout" />
    </div>
  );
}

export default Logout;
