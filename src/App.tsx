import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      {/* https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
