import {Link, Outlet} from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks.js";

const Layout = () => {
  const { user, handleAutoLogin } = useUserContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      handleAutoLogin();
    }}, []);

  return (
    <div>
      <nav>
        <Link to="/">Etusivu</Link>
        {user ? (
          <>
            <Link to="/profile">Profiili</Link>
            <Link to="/upload">Upload</Link>
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
