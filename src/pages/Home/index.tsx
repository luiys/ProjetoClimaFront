import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Icon from '@mdi/react'
import { mdiBrightness4, mdiBrightness5, mdiMagnify, mdiLogout } from '@mdi/js'
import { Tooltip } from '@material-ui/core'
import { Dots } from "react-activity"
import "react-activity/dist/Dots.css"

import './styles.scss'

import getWheater from './scripts/getWheater'

import { useTheme, Theme } from "../../context/ThemeContext"
import { useAppSelector } from '../../redux/hooks'
import { logOut } from '../../redux/reducers/authReducer'

import HomeHeader from './components/Header'
import Box from './components/Box'
import { Section } from '../../components/Section'
import GetRandomSadEmojis from '../../utils/Emojis/GetRandomEmoji'
import { sadEmojis } from '../../utils/Emojis'

const Home: React.FC = () => {

    const { apiData } = useAppSelector(state => state.home)
    const { data } = apiData
    const dispatch = useDispatch()
    const search = useRef<HTMLInputElement>(null)

    const userLogOut = useCallback(() => {
        dispatch(logOut())
    }, [dispatch])

    const searchFn = useCallback(() => { 
        getWheater(search.current?.value!, dispatch)
    }, [dispatch])

    const { theme, setTheme } = useTheme()

    try {

        const SHOW_LOADING = apiData.loading
        const SHOW_ERROR = apiData.error && !apiData.loading
        const SHOW_DATA = !!apiData.data && !apiData.loading
        const SHOW_NO_DATA = !apiData.data && !apiData.loading && !apiData.error

        return(

            <div id = "homeWrapper">

                <HomeHeader.Container theme = "blue">
                    <HomeHeader.Content name = "banner">
                        <h1> Weather Project </h1>
                    </HomeHeader.Content>
                    <HomeHeader.Content name = "search">
                        <div id = "homeHeaderSearchBox">
                            <input type = "text" ref = {search} placeholder = "Pesquise alguma cidade..." onChange = {searchFn} />
                            <Tooltip title = "Pesquisar" arrow>
                                <span className = "searchIcon" onClick = {searchFn}>
                                    <Icon path = {mdiMagnify} size = "24px" />
                                </span>
                            </Tooltip>
                        </div>
                    </HomeHeader.Content>
                    <HomeHeader.Content name = "options">
                        <HomeHeader.Options.Group>
                            <HomeHeader.Options.Item>
                                <HomeHeader.Options.Icon
                                    tooltip = {theme === 'dark-mode' ? 'Tema claro' : 'Tema escuro'}
                                    icon = {theme === 'dark-mode' ? mdiBrightness5 : mdiBrightness4} 
                                    size = "32px" 
                                    onClick = {() => setTheme(theme === 'dark-mode' ? Theme.Light : Theme.Dark)}
                                />
                            </HomeHeader.Options.Item>
                            <HomeHeader.Options.Item>
                                <HomeHeader.Options.Icon
                                    tooltip = "Sair"
                                    icon = {mdiLogout}
                                    size = "32px"
                                    onClick = {userLogOut}
                                />
                            </HomeHeader.Options.Item>
                        </HomeHeader.Options.Group>
                    </HomeHeader.Content>
                </HomeHeader.Container>

                <div id = "homeGrid">
                    <Section type = "default" name = "info">
                        <ul id = "homeInfoGrid">
                            <li className = "homeInfoGridContent">
                                <div className = "homeTitles">
                                    <h1> Wheater Project </h1>
                                    <h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae officia laborum unde enim porro error neque voluptatum </h2>
                                </div>
                                <div className = "homeInfos">
                                    {SHOW_LOADING && <div className = "homeLoadContainer"><Dots color = "grey" size = {64} /></div>}
                                    {SHOW_ERROR && (
                                        <div className = "homeMessageContainer">
                                            {search.current?.value! ? (
                                                <div className = "messageTexts">
                                                    <span> {GetRandomSadEmojis(sadEmojis)} </span>
                                                    <h3> {search.current?.value!} </h3>
                                                    <h4> Não está no mapa! </h4>
                                                </div>
                                            ) : <h3> Pesquise uma cidade e seu clima aparecerá aqui! </h3>}
                                        </div>
                                    )}
                                    {SHOW_DATA && <p> Mapa {search.current?.value!} </p>}
                                </div>
                            </li>
                            <li className = "homeInfoGridContent">
                                {SHOW_DATA && <Box.Clima current = {data!.main.temp} max = {data!.main.temp_max} min = {data!.main.temp_min} feels = {data!.main.feels_like} />}
                                {SHOW_ERROR && <Box.Error /> }
                                {SHOW_NO_DATA && <p> Pesquise uma cidade e seu clima aparecerá aqui! </p>}
                            </li>
                        </ul>
                    </Section>
                    <Section type = "default" name = "History" subTitle = "Histórico">
                        List Item
                    </Section>
                </div>
                
            </div>

        )

    } catch (error) {
        console.log('erro na home',error)
        return <h1>Erro na home</h1>
    }

}

export default Home