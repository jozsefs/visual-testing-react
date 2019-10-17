import React from 'react';

import Header from './components/header';
import Article from './components/article';
import Footer from './components/footer';

import './styles.css';

const App = ({ isLoggedIn, isFirstArticleHighlighted }) => (
    <div className="app">
        <Header isLoggedIn={isLoggedIn}/>
        <main>
            <Article isHighlighted={isFirstArticleHighlighted}/>
            <Article />
            <Article />
        </main>
        <Footer isLoggedIn={isLoggedIn}/>
    </div>
);

export default App;