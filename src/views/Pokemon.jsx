import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../context/userContext";

const Pokemon = () => {
  /* REQUERIMIENTO 3 */
  /* EXTRAER EL  PARAMETRO, PARA ACCEDER AL VALOR DE name QUE REPRESENTA EL nombre DEL POKEMON SELECCIONADO */
  const { name } = useParams();
  /* CONTIENE EL ESTADO DEL pokemon CON name, img, stats, type Y LAS FUNCIONES PARA OBTENER DATOS DE LA API */
  const { pokemon, fetchPokemon } = useContext(userContext);

  /* LLAMAR A LA API DESDE CONTEXT */
  /* AL CAMBIAR SE LLAMA A LA FUNCION PARA OBTENER NUEVO POKEMON MEDIANTE SU name */
  /* EL name SE PASA A fetchPokemon PARA REALIZAR LA SOLICITUD A LA API Y OBTENER DETALLES DEL POKEMON */
  useEffect(() => {
    fetchPokemon(name);
  }, [name, fetchPokemon]);

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card mt-4" style={{ width: "50%" }}>
        <div className="row g-0">
          <div className="col-md-9 d-flex justify-content-center align-items-center p-4">
            {/* SE OBTIENE LA IMAGEN DEL OBJETO pokemon CON img DESDE CONTEXT */}
            {pokemon.img && (
              <img
                src={pokemon.img}
                className="img-fluid rounded-start"
                alt={pokemon.name}
                style={{ maxHeight: "330px", width: "100%" }}
              />
            )}
          </div>
          <div className="col-md-3">
            <div className="card-body">
              {/* PARA EL NOMBRE DEL POKEMON DESDE OBJETO pokemon CON name DESDE CONTEXT */}
              <h4 className="card-title fw-bold">{pokemon.name}</h4>
              <ul>
                {/* SE RECORRE LA ESTADISTICA CON LA POSICION INDEX CON EL name DE stat Y valor DE stat */}
                {pokemon.stats.map((stat, index) => (
                  <li key={index} className="fs-5">
                    {stat.stat.name}: {stat.base_stat}
                  </li>
                ))}
              </ul>
              <p className="card-text text-muted fs-5">
                {/* SE RECORRE LOS TIPOS DE POKEMON, SE EXTRAE EL name DE OBJETO t.type */}
                {pokemon.type.map((t) => t.type.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
