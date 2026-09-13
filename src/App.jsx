import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;