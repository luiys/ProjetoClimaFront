import React from 'react';
import { Redirect } from 'react-router-dom';

// import { Container } from './styles';

const NotFound: React.FC = () => {
    return <Redirect to="/" />;
}

export default NotFound;