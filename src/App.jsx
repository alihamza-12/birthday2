import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import InitialView from "./components/InitialView";
import MainView from "./components/MainView";
import Character from "./components/Character";
import Wishie1 from "./components/Wishie1";
import Wishie2 from "./components/Wishie2";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGiftClick = () => {
    setIsLoggedIn(true);
    navigate("/main");
  };

  return (
    <Routes>
      <Route path="/" element={<InitialView onGiftClick={handleGiftClick} />} />
      <Route
        path="/main"
        element={
          <Layout>
            <MainView />
          </Layout>
        }
      />
      <Route
        path="/character"
        element={
          <Layout>
            <Character />
          </Layout>
        }
      />
      <Route
        path="/wishie1"
        element={
          <Layout>
            <Wishie1 />
          </Layout>
        }
      />
      <Route
        path="/wishie2"
        element={
          <Layout>
            <Wishie2 />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
