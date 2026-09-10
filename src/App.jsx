import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "./App.css";
import Agency from "./Pages/Agency/Agency";
import Work from "./Pages/Work/Work";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </>
  )
}

export default App;