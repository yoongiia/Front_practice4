import React from 'react';
import "../style/footer.css"
const Footer = (props) => {
    const {title} = props
    return (
        <footer>
            <p>{title}</p>
            
        </footer>
    );
}

export default Footer;
