import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/products/productsContext.jsx";
import { UserProvider } from "./context/user/userContext.jsx";
import CartProvider from "./context/cart/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<UserProvider>
		<CartProvider>
			<ProductProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ProductProvider>
		</CartProvider>
	</UserProvider>
);
