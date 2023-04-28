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
import EspressoDrinks from "./components/items/drinks/EspressoDrinks";
import FilteredCoffee from "./components/items/drinks/FilteredCoffee";
import TurkishCoffee from "./components/items/drinks/TurkishCoffee";
import items from "./components/api/items.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/starbucks-clone" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/menu" element={<Menu title="Menu" />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/egift" element={<Egift />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route
          path="/menu/drinks/espressoDrinks"
          element={
            <EspressoDrinks title="Espresso Bazlı İçecekler" items={items} />
          }
        />
        <Route
          path="/menu/drinks/filteredCoffee"
          element={<FilteredCoffee title="Filtre Kahveler" items={items} />}
        />
        <Route
          path="/menu/drinks/turkishCoffee"
          element={<TurkishCoffee title="Türk Kahvesi" items={items} />}
        />
      </Routes>
    </div>
  );
}

export default App;
