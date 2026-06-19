import "../less/NavBar.less";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import appLogo from "/App-logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**Implements the navbar of the app
 * 
 * @returns The NavBar component
 */
function NavBar() {

    let dName = localStorage.getItem("displayName");
    const [time, setTime] = useState(new Date().getHours());
    let [timeCondition, setTimeCondition] = useState("Good morning ");

    useEffect(() => {
        const intVal = setInterval(() => {
            setTime(new Date().getHours());
            
            if (time > 12) {
                setTimeCondition("Good afternoon ");
            }
            else{
                setTimeCondition("Good morning ");
            }

        });

        return () => clearInterval(intVal);
    }, []);

  return (
    <>
      {sessionStorage.getItem("validLogin") == "true" && <Navbar expand="sm" className="bg-body-tertiary" fixed="top" bg="uniqueColor" data-bs-theme="dark">
        <Container fluid>
        <img src={appLogo} className="logo rounded" alt="App logo"/>
        <div>{timeCondition + dName + "!"}</div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link" to="/home" style={{textDecoration: "none"}}>Home</Link>
              <Link className="link" to="/recipeSearch" style={{textDecoration: "none"}}>Recipe Search</Link>
              <Link className="link" to="/settings" style={{textDecoration: "none"}}>Settings</Link>
              <Link className="link" onClick={() => sessionStorage.removeItem("validLogin")} to="/" style={{textDecoration: "none"}}>Sign out</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>}
    </>
  );
}

export default NavBar;
