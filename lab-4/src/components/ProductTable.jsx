// ProductTable component

import ProductCategoryRow from './ProductCategoryRow';

function ProductTable(props) {
    const { products } = props;
    const fruits = products.filter(p => p.category === 'Fruits');
    const vegetables = products.filter(p => p.category === 'Vegetables');
    return (
        <div>
            <div className="table-header">
                <b>Name</b>
                <b>Price</b>
            </div>
                <ProductCategoryRow category="Fruits" products={fruits}/>
                <ProductCategoryRow category="Vegetables" products={vegetables}/>
        </div>
    );
}

export default ProductTable;