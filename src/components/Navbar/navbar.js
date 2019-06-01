import React from 'react';
import { useSpring, animated} from 'react-spring';
import './navbar.scss';
import DrawerToggle from '../SideDrawer/drawerToggle';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    const fade = useSpring({opacity:1, from : { opacity: 0}})
    return(
        <animated.nav className="navbar " style={ fade }>
            <div className="toggle-button"><DrawerToggle click={props.drawerClick}/></div> 
            <a href="/"><h1>Michael Anggriawan</h1></a>
            <div className="spacer" /> 
            <div className="nav-items">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About me</NavLink></li>
                <li><NavLink to='/resume'>Resume</NavLink></li>
            </ul>
            </div>
        </animated.nav>
    )
}

export default Navbar;