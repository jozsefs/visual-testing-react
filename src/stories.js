import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './app';

storiesOf('App', module)
    .add('normal', () => <App />)
    .add('one article highlighted', () => <App isFirstArticleHighlighted={true}/>)
    .add('logged in', () => <App isLoggedIn={true}/>)
    .add('logged in and one article highlighted', () => <App isLoggedIn={true} isFirstArticleHighlighted={true}/>);
