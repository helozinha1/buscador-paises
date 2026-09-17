import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Navbar  from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { CountryDetails } from "./pages/CountryDetails.jsx";
import { Favorites } from "./pages/Favorites.jsx"; 
import styles from "./App.module.css";


function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div className={styles.container}>
      <Routes>
        <Route path = "/" element={<Home />} ></Route>
        <Route path="/paises/:code" element={ <CountryDetails />} ></Route>
        <Route path="/favoritos" element={<Favorites />} ></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App;

