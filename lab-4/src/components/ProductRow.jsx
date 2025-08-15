function ProductRow(props) {
    const { product } = props;
    const name = product.stocked ? product.name : <span className="red">{product.name}</span>;

    return (
        <div className="product-row">
            <span>{name}</span>
            <span>{product.price}</span>
        </div>
    );
}

export default ProductRow;