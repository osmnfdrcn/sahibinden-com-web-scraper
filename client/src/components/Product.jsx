const Product = ({ id, image, price, title, url }) => {
	return (
		<div key={id} className="product">
			<div className="product-image">
				<img className="image" src={image} alt="" />
			</div>
			<div className="product-info">
				<h1>{title}</h1>
				<span>{price}</span>
			</div>
		</div>
	);
};

export default Product;
