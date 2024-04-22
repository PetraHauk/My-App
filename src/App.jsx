import './App.css';
import Home from './views/Home.jsx';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Profile} from './views/Profile.jsx';
import Layout from './components/Layout';
import Upload from './views/Upload.jsx';
import Single from "./views/Single.jsx";

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>

      <Layout />
      <h1 className="text-2xl m-5">My App</h1>

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/upload"} element={<Upload />} />
        <Route path={"/media/:id"} element={<Single />} />
      </Routes>
    </Router>
  );
};
export default App;
