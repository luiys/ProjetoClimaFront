import React, { useState, useEffect } from 'react'

const PageScrollIndicator: React.FC = () => {

    const [scrollWidth, setScrollWidth] = useState<number>(0)

    const getScroll = () => {

        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100
        setScrollWidth(scrolled)
        
    }

    useEffect(() => {
        window.onscroll = function(){getScroll()}
    }, [])
  
    return(

        <div id = "scrollIndicatorContainer">
            <div id = "srollIndicatorBar" style = {{width: `${scrollWidth.toFixed(0)}%`}}></div>
        </div>

    )

}

export default PageScrollIndicator