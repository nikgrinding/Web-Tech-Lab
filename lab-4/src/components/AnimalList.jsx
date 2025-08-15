import AnimalCard from "./AnimalCard";

function AnimalList (props) {
    return (
        <div className="animal-list">
            {props.animals.map((animal) =>
                <AnimalCard 
                    key = {animal.scientificName}
                    name = {animal.name} 
                    scientificName = {animal.scientificName}
                    weight = {animal.weight}
                    diet = {animal.diet}
                />
            )}
        </div>
    );
}

export default AnimalList;