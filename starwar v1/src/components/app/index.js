import { useState } from "react";
import { req } from "../../method/method";
import { Screen1 } from "../screen1";
import Screen2 from "../screen2";

export default function App () {
    const [screen2, setScreen2] = useState({status: false});
    const [reqData, setReqData] = useState([]);

    function clickMenu (e, d) {
        setScreen2({display : d, status : true});
        req(`https://swapi.dev/api/${d}`)
        .then((info)=>{
            setReqData(info)
        })
    }

    console.log(reqData);
    return (
        <>
        <Screen1 click={clickMenu}></Screen1>
        {
            screen2.status ?  <Screen2 displayName={screen2.display} data={reqData}></Screen2> : null
        }
        </>
    )
}