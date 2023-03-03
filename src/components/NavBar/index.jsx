import CartWidget from "../CartWidget"
import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
    return (
        <div className="navBar">
            <Navbar bg="primary" variant="light">
                <Container>
                <Navbar.Brand href="#home">URU-SHOP</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">SUPER</Nav.Link>
                    <Nav.Link href="#features">ROPA</Nav.Link>
                    <Nav.Link href="#pricing">ELECTRO</Nav.Link>
                    <Nav.Link href="#pricing">FARMACIA</Nav.Link>
                    <Nav.Link href="#pricing">VIAJES</Nav.Link>
                </Nav>
                </Container>
                <CartWidget/>
            </Navbar>
          {/* <navbar>
            <ul>
                <li>
                    <button>SUPER</button>
                </li>
                <li>
                    <button>ROPA</button>
                </li>
                <li>
                    <button>ELECTRO</button>
                </li>
                <li>
                    <button>FARMACIA</button>
                </li>
                <li>
                    <button>VIAJES</button>
                </li>
      </ul> 
      </navbar> */}
            
        </div>    
    )
}

export default NavBar