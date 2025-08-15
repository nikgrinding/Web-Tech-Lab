import { productsData } from './data/productsData.js';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ItemList from './components/ItemList';
import { fruitsData, vegetablesData } from './data/groceriesData.js';
import animalData from "./data/animalData.js";
import AnimalList from "./components/AnimalList";
import './App.css';

function App() {
	return (
		<div>
			<div className="app-1">
				<SearchBar />
				<ProductTable products={productsData} />
			</div>
			<div className="app-2">
				<h1>Render lists</h1>
				<div className="grocery-container">
					<ItemList title="Fruits" items={fruitsData}/>
					<ItemList title="Vegetables" items={vegetablesData} />
				</div>
			</div>
			<div className="app-3">
				<h1>Animals</h1>
				<AnimalList animals = {animalData}/>
			</div>
		</div>
	);
}

export default App;