import Navigation from "./navigation"
import "./screen1.css"

function Screen1 ({click}) {
    return (
        <>
        <div className="screen screen1"> 
        <Navigation click={click}></Navigation>
        </div>
        </>
    )
}

export {Screen1}