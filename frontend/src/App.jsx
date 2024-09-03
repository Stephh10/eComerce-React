import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Category from "./pages/Category/Category";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Cart from "./pages/Cart/Cart";
import Notification from "./helpers/Notification";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mens" element={<Category category="men" />} />
        <Route path="/women" element={<Category category="women" />} />
        <Route path="/kids" element={<Category category="kid" />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Notification />
      <Footer />
    </>
  );
}

export default App;
