import { BrowserRouter, Route, Router, Switch} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";
import injectContext from "./store/appContext";
import Navbar from "./Components/Navbar";
import Contacto from "./Views/Contacto";
import Live from "./Views/Live";
import Multimedia from "./Views/Multimedia";
import NotFound from "./Views/NotFound";
import Programas from "./Views/Programas";
import SobreNosotros from "./Views/SobreNosotros";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";





const Layout = () => {
    
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Router>
          {/* PAGES */}
          <Switch>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/multimedia" element={<Multimedia />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/live" element={<Live />} />
          </Switch>  
          
        </Router>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    );
  };
  
  export default injectContext(Layout);