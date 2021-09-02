import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { logOut } from '../../redux/reducers/authReducer';
import getWheater from './scripts/getWheater';

const Home: React.FC = () => {

    const { apiData } = useAppSelector(state => state.home);
    const { data } = apiData;
    const dispatch = useDispatch();
    const search = useRef<HTMLInputElement>(null);
    const userLogOut = useCallback(() => dispatch(logOut()), [dispatch])
    const searchFn = useCallback(() => { getWheater(search.current?.value!, dispatch) }, [dispatch])

    try {

        const SHOW_LOADING = apiData.loading;
        const SHOW_ERROR = apiData.error && !apiData.loading;
        const SHOW_DATA = !!apiData.data && !apiData.loading;
        const SHOW_NO_DATA = !apiData.data && !apiData.loading && !apiData.error;

        return (
            <>
                <h1>Home</h1>

                <input type="text" ref={search} />
                <button onClick={searchFn}>Search</button>

                {SHOW_LOADING && <p>Loading...</p>}
                
                {SHOW_ERROR && <p>Error</p>}

                {SHOW_DATA &&
                    <>
                        <p>{data!.main.temp}</p>
                        <p>{data!.main.temp_max}</p>
                    </>
                }

                {SHOW_NO_DATA && <p>Pesquise alguma cidade, aqui irá aparecer seu clima atual</p>}

                <button onClick={userLogOut}> LogOut </button>
            </>
        );
    } catch (error) {
        console.log('erro na home');
        return <h1>Erro na home</h1>
    }

}

export default Home;