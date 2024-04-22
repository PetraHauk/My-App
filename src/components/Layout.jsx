import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  return <div>
    <nav>
      <Link to="/">Etusivu</Link>
      <Link to="/profile">Profiili</Link>
      <Link to="/upload">Upload</Link>
    </nav>

    <main>
      <Outlet />
    </main>
  </div>
}

export default Layout;
