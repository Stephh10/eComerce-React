import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Category from "./pages/Category/Category";
import Footer from "./components/Footer/Footer";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/Details/Details";
import Notification from "./helpers/Notification";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/item/:itemId" element={<Details />} />
        <Route path="/mens" element={<Category category="mens" />} />
        <Route path="/women" element={<Category category="women" />} />
        <Route path="/kids" element={<Category category="kids" />} />
        <Route path="/auth" element={<LoginRegister />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="*"
          element={<Error errorMsg={"Page not found"} status={404} />}
        />
      </Routes>
      <Notification />
      <Footer />
    </>
  );
}

export default App;
