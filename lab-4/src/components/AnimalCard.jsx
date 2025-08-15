// AnimalCard component

function AnimalCard (props) {
    return (
        <div className="animal-card">
            <h2>{props.name}</h2>
            <h4>{props.scientificName}</h4>
            <h4>{props.weight}</h4>
            <p>{props.diet}</p>
        </div>
    );
}

export default AnimalCard;