import "./App.css";
import imageDesktop from "./assets/image-product-desktop.jpg";
import imageMobile from "./assets/image-product-mobile.jpg";
import ProductCard from "./components/ProductCard";

function App() {
	return (
		<div className="App">
			<ProductCard
				imageDesktop={imageDesktop}
				imageMobile={imageMobile}
				category="Perfume"
				product="Gabrielle Essense Eau De Parfum"
				desc="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
				newPrice="149.99"
				oldPrice="169.99"
			/>
		</div>
	);
}

export default App;
