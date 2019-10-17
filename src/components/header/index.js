import React from 'react';

import './styles.css';

const Header = ({ isLoggedIn }) => (
    <header>
        <button>MenuItem 1</button>
        <button>MenuItem 2</button>
        <button>MenuItem 3</button>
        {isLoggedIn && <button>Log out</button>}
    </header>
)

export default Header;