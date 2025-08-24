import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import { FaSignInAlt } from 'react-icons/fa'; // Importa o ícone de entrada

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" dark expand="md" className="fixed-top">
                <Container>
                <NavbarBrand href="/"><b>SIBRE</b></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>                           
                            <NavItem>
                                <NavLink href="/comunhao">Atividades</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/oracao">Apoio Espiritual</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contato">Contato</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/sobre">Sobre</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarBrand href="http://pure-grace-production.up.railway.app/">
                            <span title="Área restrita, necessário uso de senha">
                                <FaSignInAlt />
                            </span>
                        </NavbarBrand>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Menu;
