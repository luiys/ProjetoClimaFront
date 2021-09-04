import React, { useCallback, useRef } from 'react'
import { useDispatch } from 'react-redux'
import Icon from '@mdi/react'
import { mdiBrightness4, mdiBrightness5, mdiMagnify, mdiLogout } from '@mdi/js'
import { Tooltip } from '@material-ui/core'
import { Dots } from "react-activity"
import "react-activity/dist/Dots.css"

import './styles.scss'

import { useTheme, Theme } from "../../context/ThemeContext"

import getWheater from './scripts/getWheater'
import { useAppSelector } from '../../redux/hooks'
import { logOut } from '../../redux/reducers/authReducer'

import HomeHeader from './components/Header'
import Box from './components/Box'

const Home: React.FC = () => {

    const { apiData } = useAppSelector(state => state.home)
    const { data } = apiData
    const dispatch = useDispatch()
    const search = useRef<HTMLInputElement>(null);
    const userLogOut = useCallback(() => dispatch(logOut()), [dispatch])
    const searchFn = useCallback(() => { getWheater(search.current?.value!, dispatch) }, [dispatch])

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
                        <h2> LG & DG </h2>
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
                                    size = "36px" 
                                    onClick = {() => setTheme(theme === 'dark-mode' ? Theme.Light : Theme.Dark)}
                                />
                            </HomeHeader.Options.Item>
                            <HomeHeader.Options.Item>
                                <HomeHeader.Options.Icon
                                    tooltip = "Sair"
                                    icon = {mdiLogout}
                                    size = "36px"
                                    onClick = {userLogOut}
                                />
                            </HomeHeader.Options.Item>
                        </HomeHeader.Options.Group>
                    </HomeHeader.Content>
                </HomeHeader.Container>

                <ul id = "homeContainer">

                    <Box.Item> MAPA </Box.Item>

                    <Box.Item background>
                        {SHOW_LOADING && <Dots color = "grey" />}
                    
                        {SHOW_ERROR && <p> {search.current?.value!} não foi encontrada :/ </p>}

                        {SHOW_DATA && <Box.Clima current = {data!.main.temp} max = {data!.main.temp_max} min = {data!.main.temp_min} />}

                        {SHOW_NO_DATA && <p>Pesquise uma cidade e seu clima aparecerá aqui! </p>}
                    </Box.Item>

                    <Box.Item background> Histórico e opções </Box.Item>

                </ul>
            </div>

        )

    } catch (error) {
        console.log('erro na home')
        return <h1>Erro na home</h1>
    }

}

export default Home