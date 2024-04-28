import './App.css';
import Home from './views/Home.jsx';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Profile} from './views/Profile.jsx';
import Layout from './components/Layout.jsx';
import Upload from './views/Upload.jsx';
import Single from "./views/Single.jsx";
import Login from "./views/Login.jsx";
import { UserProvider } from './contexts/UserContext.jsx';
import Logout from "./views/Logout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <UserProvider>
        <Layout />
        <h1 className="text-2xl m-5">My App</h1>

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />
          <Route path={"/media/:id"} element={<Single />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"logout"} element={<Logout />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};
export default App;
