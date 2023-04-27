import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Rewards from "./pages/Rewards";
import Menu from "./pages/Menu";
import Campaigns from "./pages/Campaigns";
import Egift from "./pages/Egift";
import Corporate from "./pages/Corporate";
import Login from "./pages/Login";
import Join from "./pages/Join";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/starbucks-clone" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/egift" element={<Egift />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
