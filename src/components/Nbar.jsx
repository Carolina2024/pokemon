import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logopoke from "../assets/img/logopoke.png";

const Nbar = () => {
  const navLinkStyle = { textDecoration: "none" };
  /* REQUERIMIENTO 1 */
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <Navbar
      className="d-flex justify-content-between align-items-center"
      style={{ height: "100px", backgroundColor: "#333" }}
    >
      <Container>
        <div className="d-flex align-items-center">
          {/* IMAGEN PARA EL LOGO */}
          <img src={logopoke} alt="" />
        </div>
        <Nav className="ms-auto">
          <div className="me-4">
            <NavLink className={setActiveClass} to={"/"} style={navLinkStyle}>
              Home
            </NavLink>
          </div>
          <div className="me-4">
            <NavLink
              className={setActiveClass}
              to={"/pokemones"}
              style={navLinkStyle}
            >
              Pokemones
            </NavLink>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Nbar;
