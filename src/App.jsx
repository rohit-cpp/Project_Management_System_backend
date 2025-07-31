import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Button } from "@/components/ui/button";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import Subscription from "./pages/Subscription/Subscription";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./Redux/Auth/Action";
import { store } from "./Redux/Store";
import { fetchProjects } from "./Redux/Project/Action";
import UpgradeSuccess from "./pages/Subscription/UpgradeSuccess";
function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
    dispatch(fetchProjects({}));
  }, [auth.jwt]);
  console.log(auth);

  const [count, setCount] = useState(0);

  return (
    <div>
      {auth.user ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/project/:projectId/issue/:issueId"
              element={<IssueDetails />}
            />
            <Route path="/upgrade_plan" element={<Subscription />} />
            <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
          </Routes>
        </div>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
