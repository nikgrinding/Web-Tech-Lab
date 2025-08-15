function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <input type="checkbox" id="stock" />
            <label htmlFor="stock"> Only show products in stock</label>
        </div>
    );
}

export default SearchBar;