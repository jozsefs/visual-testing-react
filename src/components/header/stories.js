import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './';

storiesOf('Header', module)
    .add('normal', () => <Header />)
    .add('logged in', () => <Header isLoggedIn={true} />);
