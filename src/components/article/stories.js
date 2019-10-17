import React from 'react';
import { storiesOf } from '@storybook/react';
import Article from './';

storiesOf('Article', module)
    .add('normal', () => <Article />)
    .add('highlighted', () => <Article isHighlighted={true} />);
