import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserProvider = ({ children }) => {
  const [pokemones, setPokemones] = useState([]);
  /* ESTADO pokemon Y FUNCION setPokemon PARA ACTUALIZAR, CON ESTADOS INICIALES VACIOS */
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "",
    stats: [],
    type: [],
  });

  /* AL CARGAR LA PAGINA POR PRIMERA VEZ TOMA UNOS SEGUNDOS EN CARGAR LA PAGINA POR LA API */

  /* API PARA LOS POKEMONES, PARA VISTA POKEMONES */
  useEffect(() => {
    const fetchPokemones = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        /* SE EXTRAE name DE CADA OBJETO data.results Y SE CREA NUEVA MATRIZ DE OBJETOS CON SOLO name */
        const getName = data.results.map(({ name }) => ({ name }));
        /* ACTUALIZA EL ESTADO */
        setPokemones(getName);
      } catch (e) {
        alert("Error en API DE POKEMONES", e);
      }
    };
    fetchPokemones();
  }, []);

  /* API PARA CADA POKEMON, SE OCUPA EN VISTA POKEMON */
  /* name PARAMETRO PARA OBTENER DATOS DEL POKEMON POR SU NOMBRE */
  const fetchPokemon = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();
    /* PARA ACTUALIZAR ESTADO CON ESTAS PROPIEDADES DE LA API */
    setPokemon({
      name: data.name,
      img: data.sprites.other.dream_world.front_default,
      stats: data.stats,
      type: data.types,
    });
  };

  return (
    <userContext.Provider value={{ pokemones, pokemon, fetchPokemon }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
