import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

import "./App.css";

const PharmPage = lazy(() => import("./pages/pharms/Pharm"));
const CartPage = lazy(() => import("./pages/cart/Cart"));
const HistoryPage = lazy(() => import("./pages/history/History"));
const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<PharmPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/history' element={<HistoryPage />} />
					<Route path='*' element={<PharmPage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
