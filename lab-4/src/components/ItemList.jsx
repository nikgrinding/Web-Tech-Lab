// ItemList component

import ItemCard from './ItemCard';

function ItemList(props) {
    return (
    <div className = "grocery-list">
        <h2 className = "grocery-title">{props.title}</h2>
        {props.items.map((item) => (
            <ItemCard key={item.id} item={item} />
        ))}
    </div>
    );
}

export default ItemList;