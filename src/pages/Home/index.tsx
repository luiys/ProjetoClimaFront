import React, { useCallback, useRef } from 'react'
import { Dots } from "react-activity"
import "react-activity/dist/Dots.css"
import { useDispatch } from 'react-redux'
import Map from '../../components/Map'
import { Section } from '../../components/Section'
import { useAppSelector } from '../../redux/hooks'
import { logOut } from '../../redux/reducers/authReducer'
import { sadEmojis } from '../../utils/emojis'
import GetRandomEmoji from '../../utils/emojis/GetRandomEmoji'
import { Box as HomeBox } from './components/Box'
import HomeHeader from './components/Header'
import History, { HistoryProps } from './components/History'
import addToHistory from './scripts/addToHistory'
import ConditionalRender from './scripts/conditionalRender'
import getWheater from './scripts/getWheater'
import './styles.scss'

let HistoryData: HistoryProps[] = []

const Home: React.FC = () => {

    const searchRef = useRef<HTMLInputElement>(null)
    const { apiData } = useAppSelector(state => state.home)
    const { data } = apiData
    const R = ConditionalRender(apiData)
    const dispatch = useDispatch()

    const userLogOut = useCallback(() => {
        dispatch(logOut())
    }, [dispatch])

    const searchFn = useCallback(() => {
        getWheater(searchRef.current?.value!, dispatch)
    }, [dispatch])

    try{

        R.SHOW_DATA && !R.SHOW_ERROR && addToHistory(HistoryData, data?.name!, data!.main.temp, data!.main.temp_max, data!.main.temp_min)

        return (

            <div id="homeWrapper">

                <HomeHeader.HeaderBar
                    searchRef={searchRef}
                    searchFunction={searchFn}
                    userLogout={userLogOut}
                />

                <div id="homeGrid">

                    {/* <Section
                        type="default"
                        name="Titles"
                        title="Weather Project"
                        subTitle="Criado por LG & DG"
                    /> */}

                    <Section type="default" name="Info" title="Weather Project" subTitle="Criado por LG & DG">
                        <ul id="homeInfoGrid">
                            <li className="homeInfoGridContent">
                                <div className="homeInfos">

                                    {R.SHOW_LOADING && <div className="homeLoadContainer"><Dots color="grey" size={64} /></div>}

                                    {(R.SHOW_ERROR && searchRef.current?.value!) && (
                                        <div className="homeNoReturnContainer">
                                            <span> {GetRandomEmoji(sadEmojis)} </span>
                                            <h3> {searchRef.current?.value!} </h3>
                                            <h4> Não está no mapa! </h4>
                                        </div>
                                    )}

                                    {R.SHOW_DATA &&
                                        <div className="homeCityContainer">
                                            <h4 className="cityTitle"> {data?.name} </h4>
                                            <Map position={[data?.coord.lat!, data?.coord.lon!]} />
                                        </div>
                                    }

                                    {(R.SHOW_NO_DATA || !searchRef.current?.value!) && (
                                        <div className="homeNoSearchContainer">
                                            <h3> Pesquise alguma cidade, e seu clima aparecerá aqui! </h3>
                                        </div>
                                    )}

                                </div>
                            </li>

                            <li className="homeInfoGridContent">

                                {R.SHOW_DATA && <HomeBox.Clima current={data!.main.temp} max={data!.main.temp_max} min={data!.main.temp_min} feels={data!.main.feels_like} />}
                                {R.SHOW_ERROR && <HomeBox.Error />}
                                {R.SHOW_NO_DATA && <HomeBox.Error />}

                            </li>
                        </ul>
                    </Section>

                    <Section type="default" name="History" subTitle="Histórico">
                        <ul id="homeHistoryGroup">
                            {HistoryData.map((history, index) => (
                                <History
                                    key={index}
                                    city={history.city}
                                    current={history.current}
                                    max={history.max}
                                    min={history.min}
                                />
                            ))}
                        </ul>
                    </Section>

                </div>
            </div>

        )

    }catch(error){
        console.log('erro na home', error)
        return <h1>Erro na home</h1>
    }

}

export default Home