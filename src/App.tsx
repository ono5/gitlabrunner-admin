import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ModelContext from "./context/ModelContext";

function App() {
  const [state, setState] = useState({modelStatus: false})
  const openModel = () => {
    setState({modelStatus: true})
  }
  const closeModel = () => {
    setState({modelStatus: false})
  }

  return (
    <Router>
      <ModelContext.Provider value={{ state, openModel, closeModel }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ModelContext.Provider>
    </Router>
  );
}

export default App;
