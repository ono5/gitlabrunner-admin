import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ModelProvider from "./context/providers/ModelProvider";
import NavProvider from "./context/providers/NavProvider";
import GitlabRunnersProvider from "./context/providers/GitlabRunnersProvider";
import Nav from "./components/Nav";
import Toggle from "./components/Toggle";

function App() {

  return (
    <Router>
      <ModelProvider>
        <NavProvider>
          <GitlabRunnersProvider>
            <Toggle />
            <Nav />
            <HelmetProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </GitlabRunnersProvider>
        </NavProvider>
      </ModelProvider>
    </Router>
  );
}

export default App;
