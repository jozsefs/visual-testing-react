import React from 'react';

import './styles.css';

const Footer = ({ isLoggedIn }) => (
    <footer>
        <span>&copy; Copyright 2019</span>
        {isLoggedIn && <button>Log out</button>}
    </footer>
)

export default Footer;