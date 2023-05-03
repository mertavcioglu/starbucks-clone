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
import items from "./components/api/items.json";
import EspressoDrinks from "./components/items/drinks/EspressoDrinks";
import FilteredCoffee from "./components/items/drinks/FilteredCoffee";
import TurkishCoffee from "./components/items/drinks/TurkishCoffee";
import Cakes from "./components/items/foods/Cakes";
import Cheesecakes from "./components/items/foods/Cheesecakes";
import PageNotFound from "./components/items/PageNotFound";
import CoffeeBean from "./components/items/coffeeAtHome/CoffeeBean";

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
          path="/menu/*"
          element={<PageNotFound title="qQWWQEQEQWE" items={items} />}
        />
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
        {/* içeceklerin devamı burada olacak*/}
        <Route
          path="/menu/foods/cakes"
          element={<Cakes title="Paste ve Kekler" items={items} />}
        />
        <Route
          path="/menu/foods/cheesecakes"
          element={<Cheesecakes title="Cheesecakeler" items={items} />}
        />
        {/* yiyeceklerin devamı burada olacak*/}
        <Route
          path="/menu/coffeeAtHome/CoffeeBean"
          element={<CoffeeBean title="Çekirdek Kahveler" items={items} />}
        />
        {/* coffeeAtHome devamı burada olacak*/}
      </Routes>
    </div>
  );
}

export default App;
