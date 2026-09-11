import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import { CountryDetails } from "./pages/CountryDetails.jsx";
import { Favorites } from "./pages/Favorites.jsx";  

function App() {
  return(
    <BrowserRouter>
    <Navbar />
    <div className={styles.container}>
      <Routes>
        <Route path = "/" element={<Home />} ></Route>
        <Route path="/pais/:code" element={ <CountryDetails />} ></Route>
        <Route path="/favoritos" element={<Favorites />} ></Route>

      </Routes>
    </div>
    </BrowserRouter>
  )
}
export default App;

