import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavDropdown,DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { AboutUsPage, ContactUsPage, DrawingsPage, HomePage } from '../layout';

import logo from '../images/logo_name.png';

const routes = [
  { 
    path: '/',
    component: HomePage,
    exact: true
  }
  ,{ path: '/aboutus',
     component: AboutUsPage
  }
  ,{ path: '/contactus',
     component: ContactUsPage
  },
 {
   path: '/drawings',
   component: DrawingsPage,
 }
]

const style={fontWeight: 'bold'}

const Links = ({ toggle, collapsed }) => (
  <div className="nav-outter">
    <Navbar fixed="top" color="faded" light toggleable >      
        <NavbarBrand tag={RRNavLink} to="/" activeClassName="active">        
       <img id="logo-nav" className="img-responsive" src={logo} alt="Drygon Logo" />
       </NavbarBrand>                   
      <NavbarToggler right onClick={toggle} />
      <Collapse className="navbar-toggleable-md" isOpen={collapsed} navbar>
        <Nav className="ml-auto mb-4" navbar pills fill>
          <NavDropdown isOpen={collapsed} toggle={toggle}>
          <DropdownToggle nav caret>
            About Us
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem to="/aboutus" 
            activeClassName="active" 
            activeStyle={style} 
            tag={RRNavLink} >Drygon Consulting Inc.
            </DropdownItem>
            <DropdownItem to="/contactus" 
            activeClassName="active" 
            activeStyle={style} 
            tag={RRNavLink}>Contact Us
            </DropdownItem>
          </DropdownMenu> 
          </NavDropdown>
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
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapsed: true
    }
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
 
 render() {    
    return (
      <div>
        <Links toggle={this.toggle}
        collapsed={this.state.collapsed} />
        
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default NavBar;