import React from 'react'
import { Tooltip } from '@material-ui/core'

import { BoxImgProps } from './../types'

const Banner: React.FC <BoxImgProps> = ({ imgUrl }) => (

    <Tooltip title = "Visualizar imagem" arrow>
        <a className = "boxImgContainer" href = {imgUrl} target = "_blank" rel = "noreferrer" >
            <img className = "boxImg" src = {imgUrl} alt = "foto" />
        </a>
    </Tooltip>

)

export default Banner