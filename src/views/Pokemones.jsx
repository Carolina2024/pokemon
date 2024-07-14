import { useContext, useState } from "react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  /* REQUERIMIENTO 2 */
  /* PARA OBTENER LA LISTA DE POKEMONES DESDE CONTEXT */
  const { pokemones } = useContext(userContext);
  /* PARA NAVEGAR A RUTAS */
  const navigate = useNavigate();
  /* PARA EL ESTADO Y ACTUALIZACION DEL SELECT */
  const [name, setName] = useState("");

  const detallePokemones = () => {
    /* IR A LA RUTA, EL VALOR se añade a pokemones CON LA SELECCION DEL USUARIO EN EL NAME */
    navigate(`/pokemones/${name}`);
  };

  return (
    <div className="text-center mt-4">
      <h2>Selecciona un pokemon</h2>
      <div className="d-flex flex-column align-items-center">
        <select
          className="mb-3 text-center"
          style={{ height: "40px", width: "220px", borderRadius: "4px" }}
          /* PARA CAMBIAR VALOR */
          onChange={({ target }) => setName(target.value)}
          value={name}
        >
          <option value="">Pokemones</option>
          {/* SE RECORRE POKEMONES CON PARAMETRO pokemon DE CADA ELEMENTO INDIVIDUAL CON PROPIEDAD name */}
          {pokemones.map((pokemon) => (
            /* pokemon.name PARA IDENTIFICAR CADA POKEMON COMO UNICO EN LA OPCION EN EL MENU DESPLEGABLE */
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
        {/* IR A LA FUNCION DE NAVEGAR A LA RUTA */}
        <button className="btn btn-dark" onClick={detallePokemones}>
          Ver Detalle
        </button>
      </div>
    </div>
  );
};

export default Pokemones;
