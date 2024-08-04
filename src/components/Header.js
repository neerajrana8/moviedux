import React from 'react';
import '../styles.css';

function Header(){
    return(
        <div className="header">
            <img src="logo.png" alt="moviedux" className="logo"/>
            <h2 className="app-subtitle">
                It is time for popcorn now.
            </h2>
        </div>
    )
}
export default Header;