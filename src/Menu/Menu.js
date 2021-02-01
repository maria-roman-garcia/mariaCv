import React, { useContext } from 'react';
import './Menu.scss';
//Context
import Context from '../Context/Context';
//Bootstrap
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {

    const allContext = useContext(Context);
    const contextInfo = allContext.contextInfo;
    const setContextInfo = allContext.setContextInfo;

    const menuItems = [
        {
            id: 1,
            name: "About me"
        },
        {
            id: 2,
            name: "Experience"
        },
        {
            id: 3,
            name: "Training"
        },
        {
            id: 4,
            name: "Tools experience"
        },
        {
            id: 5,
            name: "Projects"
        }
    ]

    return (
        <div className="Menu maxScreenSize">
            <Navbar expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {menuItems.map((item, index) =>
                            <div key={index} onClick={() => setContextInfo({ ...contextInfo, menuSelected: item.id })}>
                                <Nav.Link>
                                    <p className={item.id === contextInfo.menuSelected && "menuSelected"}>{item.name}</p>
                                    <div className={item.id === contextInfo.menuSelected && "underline"}></div>
                                </Nav.Link>
                            </div>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu;