import React from 'react';
import './sideDrawer.scss';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if( props.show) {
         drawerClasses = 'side-drawer open'
    }
    return(
        <nav className={ drawerClasses }>
            <ul>
                <li ><a href='/'>Home</a></li>
                <li><a href='/about'>About me</a></li>
                <li><a href="/resume">Resume</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;