function Card ({name, img}) {
return (
    <div className="card">
        <p>{name}</p>
        <img src={img}></img>
    </div>
)
}

export default Card