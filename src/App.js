import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Home";
import Multimedia from "./Components/Multimedia";
import Programas from "./Components/Programas";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contacto from "./Components/Contacto";
import SobreNosotros from "./Components/SobreNosotros";
import Live from "./Components/Live";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/multimedia" element={<Multimedia />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/live" element={<Live />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
