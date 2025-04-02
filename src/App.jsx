import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Music from "./components/Music";
import Home from "./components/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Music />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
      <Analytics />
    </div>
  );
}

export default App;