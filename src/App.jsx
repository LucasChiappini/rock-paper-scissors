import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import "./styles/App.css";
const App = () => {
  return (
    <div className="background-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/Game" element={<Game />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
