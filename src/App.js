import "./App.css";
import SideMenu from "./components/SideMenu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/SideBarItems/Login";
import SignUp from "./components/SideBarItems/SignUp";
import Upload from "./components/SideBarItems/Upload";
import Download from "./components/SideBarItems/Download";
import Records from "./components/SideBarItems/Records";
import Mail from "./components/SideBarItems/Mail";
import { useState } from "react";

function App() {
  const [inactive, setInactive] = useState(false);
  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
        <div className={`container ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
            <Route exact path="/authentication" element={<h1>Auth</h1>} />
            <Route exact path="/authentication/login" element={<Login />} />
            <Route exact path="/authentication/signUp" element={<SignUp />} />
            <Route exact path="/records" element={<Records />} />
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/file" element={<h1>File</h1>} />
            <Route exact path="/file/upload" element={<Upload />} />
            <Route exact path="/file/download" element={<Download />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
