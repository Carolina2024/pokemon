import "./App.css";
import UserProvider from "./context/userContext"; /* se agrega */
import Nbar from "./components/Nbar";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Pokemon from "./views/Pokemon";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <Nbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          {/* SE DEFINE LA RUTA DE VISTA POKEMON, PARA QUE CAPTURE EL NAME DEL POKEMON */}
          <Route path="/pokemones/:name" element={<Pokemon />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
