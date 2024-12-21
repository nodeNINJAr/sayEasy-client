import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const {name} = useContext(AuthContext)
    console.log(name);
    return (
        <div>
            <h1 >hello from home</h1>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;