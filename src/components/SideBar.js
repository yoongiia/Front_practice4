import React from 'react';
import "../style/sideBar.css"
const SideBar = (props) => {
    const {title} = props
    return (
        <aside>
           <p>{title}</p> 
        </aside>
    );
}

export default SideBar;
