import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
