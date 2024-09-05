import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import AuthPage from "./pages/AuthPage/Auth";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import Notification from "./components/Notification/Notification";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Notification />
    </>
  );
}

export default App;
