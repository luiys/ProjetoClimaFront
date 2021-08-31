import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/reducers/authReducer';

const Home: React.FC = () => {

    const dispatch = useDispatch();
    const userLogOut = useCallback(() => dispatch(logOut()), [dispatch])

    return (
        <>
            <h1>Home</h1>
            <button onClick={userLogOut} >LogOut</button>
        </>
    );
}

export default Home;