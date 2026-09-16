import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Agency from "./Pages/Agency/Agency";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Work />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </div>
    </>
  )
}

export default App;