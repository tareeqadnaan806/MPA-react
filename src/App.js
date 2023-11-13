import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Quote,
  Restaurant,
  Contact,
  Nav,
  Footer,
} from "../src/components/index";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
