import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { mdiBrightness4, mdiBrightness5, mdiMagnify, mdiLogout, mdiPalette } from '@mdi/js'
import Icon from '@mdi/react'

import { HeaderBarProps } from '../types'

import GetColorTheme from '../../../../../utils/GetColorTheme'

import { useTheme, Theme } from "../../../../../context/ThemeContext"

import HomeHeader from '..'

const HeaderBar: React.FC <HeaderBarProps> = ({searchRef, searchFunction, userLogout}) => {

    const [pageTheme, setPageTheme] = useState(GetColorTheme(undefined))

    const { theme, setTheme } = useTheme()

    return(

        <HomeHeader.Container theme = {pageTheme}>
             <HomeHeader.Content name = "banner">
                <h1> Weather Project </h1>
            </HomeHeader.Content>
            <HomeHeader.Content name = "search">
                <div id = "homeHeaderSearchBox">
                    <input type = "text" ref = {searchRef} placeholder = "Pesquise alguma cidade..." onChange = {() => searchFunction()} />
                    <Tooltip title = "Pesquisar" arrow>
                        <span className = "searchIcon" onClick = {() => searchFunction}>
                            <Icon path = {mdiMagnify} size = "24px" />
                        </span>
                    </Tooltip>
                </div>
            </HomeHeader.Content>
            <HomeHeader.Content name = "options">
                <HomeHeader.Options.Group>
                    <HomeHeader.Options.Item>
                        <HomeHeader.Options.Icon
                            tooltip = 'Mudar cor'
                            icon = {mdiPalette} 
                            size = "32px" 
                            onClick = {() => setPageTheme(GetColorTheme(undefined))}
                        />
                    </HomeHeader.Options.Item>
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
                            onClick = {userLogout}
                        />
                    </HomeHeader.Options.Item>
                </HomeHeader.Options.Group>
            </HomeHeader.Content>
        </HomeHeader.Container>

    )

}

export default HeaderBar