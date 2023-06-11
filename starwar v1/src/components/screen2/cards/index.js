import Card from "./card"

function Cards ({data}) {
    return (
        <div className="cards">
        {
            Array.isArray(data) ? <Card name={null} img={null}></Card>: data.results.map((e,i)=>{
                return <Card key={ i * 10+ Math.random() } name={e.name} img={null}></Card>
            })
        }
        </div>
    )
}

export default Cards