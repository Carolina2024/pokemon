import pikachu from "../assets/img/pikachu.jpg";

const Home = () => {
  return (
    <div className="text-center mt-4">
      <h1>Bienvenido maestro pokemón</h1>
      {/* IMAGEN DE PIKACHU PARA VISTA HOME */}
      <img src={pikachu} alt="" />
    </div>
  );
};

export default Home;
