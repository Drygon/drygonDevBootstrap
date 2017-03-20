import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { AboutPage, DrawingsPage, HomePage } from '../layout';
import logo from '../images/logo_name.png';

const routes = [
  { 
    path: '/',
    component: HomePage,
    exact: true
  }
  ,{ 
    path: '/about',
    component: AboutPage,    
 },
 {
   path: '/drawings',
   component: DrawingsPage,
 }
]

const style={fontWeight: 'bold'}

const Links = ({ toggleNavbar, collapsed, isActive }) => (
  <div>
    <Navbar fixed="top" color="faded" light toggleable>      
        <NavbarBrand tag={RRNavLink} to="/" activeClassName="active">        
       <img id="logo" className="img-responsive" src={logo} alt="Drygon Logo" />
       </NavbarBrand>                   
      <NavbarToggler right onClick={toggleNavbar} />
      <Collapse className="navbar-toggleable-md" isOpen={collapsed} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/about" activeClassName="active" activeStyle={style} tag={RRNavLink}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drawings" activeClassName="active" activeStyle={style} tag={RRNavLink}>Drawings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/training" activeClassName="active" activeStyle={style} tag={RRNavLink}>Training</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services" activeClassName="active" activeStyle={style} tag={RRNavLink}>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/stories" activeClassName="active" activeStyle={style} tag={RRNavLink}>Stories</NavLink></NavItem>
          <NavItem>
          <NavLink to="/designs" activeClassName="active" activeStyle={style} tag={RRNavLink} >Designs</NavLink>
          </NavItem>
        </Nav>
      </Collapse>     
    </Navbar>
  </div>
);

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 
 render() {    
    return (
      <div>
        <Links toggleNavbar={this.toggleNavbar} 
        collapsed={this.state.collapsed} />
        
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default NavBar;