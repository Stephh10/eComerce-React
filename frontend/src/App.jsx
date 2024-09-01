import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Category from "./pages/Category/Category";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mens" element={<Category />} />
        <Route path="/women" element={<Category />} />
        <Route path="/kids" element={<Category />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
