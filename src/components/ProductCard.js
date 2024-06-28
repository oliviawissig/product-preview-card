import React from "react";
import '../ProductCard.css';

function ProductCard( {imageDesktop, imageMobile, category, product, desc, newPrice, oldPrice} ) {
	return (
		<div className="card">
			<div className="card-img">
				<img
					className="product-img no-mobile"
					src={imageDesktop}
					alt="Gabrielle Essense Eau De Parfum bottle with foliage"
					width="600"
					height="900"
				/>
				<img
					className="product-img no-desktop"
					src={imageMobile}
					alt="Gabrielle Essense Eau De Parfum bottle with foliage"
					width="686"
					height="480"
				/>
			</div>
			<div className="card-content">
				<div className="category">{category}</div>
				<div className="product">{product}</div>
				<div className="desc">{desc}</div>
				<div className="price-container">
					<div className="new-price">${newPrice}</div>
					<div className="old-price">${oldPrice}</div>
				</div>
				<button
					className="submit-btn"
					onClick={() => console.log("click!")}>
					<svg
						width="15"
						height="16"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
							fill="#FFF"
						/>
					</svg>
					&nbsp; Add to Cart
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
