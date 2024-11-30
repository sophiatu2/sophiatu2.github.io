import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Art from "./components/Art";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
