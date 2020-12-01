import React, { Component } from 'react';
import { NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    render() {
        return (
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">

                <NavbarBrand className="my-0 mr-md-auto font-weight-normal text-dark" tag={Link} to="/">Company Name</NavbarBrand>

                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/">Home</Link>
                    <Link className="p-2 text-dark" to="/partners">Partners</Link>
                    <Link className="p-2 text-dark" to="/services">Services</Link>
                    <Link className="p-2 text-dark" to="/news">News</Link>
                </nav>
            </div>
        );
    };
}