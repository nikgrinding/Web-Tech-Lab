// ItemCard component

function ItemCard(props) {
	return (
		<p>
			{props.item.name}: <b>{props.item.value}</b>
		</p>
	);
}

export default ItemCard;
