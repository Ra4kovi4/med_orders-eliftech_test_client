import { fetchShops, fetchShopById } from "../../api";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../../components/Loader";
import { NotFound } from "../../components/NotFound";
import { ShopList } from "../../components/shopList";
import { DishList } from "../../components/DishList";
import { addShopIdToDishes } from "../../helpers";
import css from "./Shops.module.css";

export const ShopPage = React.memo(() => {
	const [shopData, setShopData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [dishes, setDishes] = useState(null);
	const [selectedShopId, setSelectedShopId] = useState(null);
	const [isDisabled, setIsDisabled] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const getShops = async () => {
			try {
				const { data } = await fetchShops();
				setShopData(data);

				if (data && data.result.length > 0) {
					const firstShopId = data.result[0]._id;
					setSelectedShopId(firstShopId);
					await getShopsById(firstShopId);
				}
			} catch (error) {
				toast.error("Oops, something went wrong! Please try again later", {
					position: "top-right",
					autoClose: 2000,
				});
			} finally {
				setIsLoading(false);
			}
		};
		getShops();
	}, []);

	useEffect(() => {
		if (selectedShopId) {
			getShopsById(selectedShopId);
		}
	}, [selectedShopId]);

	const getShopsById = async (id) => {
		try {
			const result = await fetchShopById(id);

			setDishes(addShopIdToDishes(result.dishes, id));

			const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];
			const otherShopProducts = storedDishes.some((dish) => dish.shopId !== id);

			setIsDisabled(otherShopProducts);
		} catch (error) {
			console.log(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleClick = (id) => {
		setSelectedShopId(id);
	};

	return (
		<main className={css.page_container}>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{!isLoading && !shopData && <NotFound />}
					{shopData && (
						<h2 className={css.shopPage_title}>Choose what you want to eat </h2>
					)}
					<div className={css.content_wrapper}>
						{shopData && (
							<ShopList
								shops={shopData.result}
								handleClick={handleClick}
								selectedShopId={selectedShopId}
								isDisabled={isDisabled}
							/>
						)}
						{shopData && dishes && (
							<DishList
								dishes={dishes}
								selectedShopId={selectedShopId}
								isDisabled={isDisabled}
							/>
						)}
					</div>
				</>
			)}

			<ToastContainer />
		</main>
	);
});

ShopPage.displayName = "ShopPage";
export default ShopPage;
