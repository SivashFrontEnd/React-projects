import Cards from "./cards";
import LabelSearch from "./label-search";
import "./screen2.css"

const Screen2 = ({displayName, data}) => {
    return (
       <div className="screen2 screen">
           <LabelSearch displayName={displayName}></LabelSearch>
           <Cards data={data}></Cards>
       </div>
    )
}

export default Screen2;