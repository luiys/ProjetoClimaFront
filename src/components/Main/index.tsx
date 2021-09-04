import React from "react"

type MainProps = {
    name: String
}

const Main: React.FC <MainProps> = ({ name, children }) => (

    <main id = {`main${name}`}>
        <div id = "mainContainer"> {children} </div>
    </main>

)

export default Main