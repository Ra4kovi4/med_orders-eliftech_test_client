import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import "./App.css";

const ShopPage = lazy(() => import("./pages/shops/Shops"));
const CartPage = lazy(() => import("./pages/cart/Cart"));

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<ShopPage />} />
					<Route path='/cart' element={<CartPage />} />

					<Route path='*' element={<ShopPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
