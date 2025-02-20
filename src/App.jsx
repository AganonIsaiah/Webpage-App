import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./pages/Music";
import Home from "./pages/Home";
import BackgroundPlayer from "./components/BackgroundPlayer";

function App() {
  return (
    <Router>
      <BackgroundPlayer />
      <Routes>
        <Route path="/" element={<Music />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;