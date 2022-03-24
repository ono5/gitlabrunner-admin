import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import Nav from "./components/Nav";

function App() {

  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
