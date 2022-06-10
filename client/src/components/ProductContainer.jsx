import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Product from "./Product";
import axios from "axios";

const ProductContainer = () => {
	const { searchString } = useContext(AppContext);
	const [offset, setOffset] = useState(0);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getData(searchString);
	}, [searchString, offset]);

	const getData = async (searchString) => {
		const response = await axios
			.get(`http://127.0.0.1:5000?offset=${offset}&query=${searchString}`)
			.catch((error) => console.log(error));
		if (response?.data) await setProducts(response.data.results);
	};

	console.log(offset);

	return (
		<>
			<section className="product-container">
				{products.map((product) => {
					return (
						<Product
							id={product.id}
							image={product.image}
							title={product.title}
							url={product.url}
							price={product.price}
						/>
					);
				})}
			</section>

			<div className="buttons">
				{offset !== 0 && (
					<button onClick={() => setOffset(offset - 25)}> Previous </button>
				)}
				{products.length !== 0 && (
					<button onClick={() => setOffset(offset + 25)}>Next</button>
				)}
			</div>
		</>
	);
};

export default ProductContainer;
