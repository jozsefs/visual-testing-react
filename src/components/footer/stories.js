import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './';

storiesOf('Footer', module)
    .add('normal', () => <Footer />)
    .add('logged in', () => <Footer isLoggedIn={true} />);
