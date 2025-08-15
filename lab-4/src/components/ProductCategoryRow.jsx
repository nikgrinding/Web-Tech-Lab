import ProductRow from './ProductRow';

function ProductCategoryRow(props) {
    const { category, products } = props;

    return (
        <div>
            <h3 className="category-title">{category}</h3>
            {products.map(product => (
                <ProductRow product={product} key={product.id}/>
            ))}
        </div>
    );
}

export default ProductCategoryRow;