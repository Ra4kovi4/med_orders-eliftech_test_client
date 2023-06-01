import PropTypes from "prop-types";

import css from "./DishCard.module.css";

import { useEffect, useState } from "react";

export const DishCard = ({
	title,
	id,
	imageUrl,
	price,
	shopId,
	selectedShopId,
	isDisabled,
}) => {
	const [isAdded, setIsAdded] = useState(false);

	useEffect(() => {
		const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];

		const existingDishIndex = storedDishes.findIndex(
			(dish) => dish.id === id && dish.shopId === selectedShopId
		);

		if (existingDishIndex !== -1) {
			setIsAdded(true);
		} else {
			setIsAdded(false);
		}
	}, [id, selectedShopId]);

	const handleButtonClick = () => {
		const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];
		const existingDishIndex = storedDishes.findIndex(
			(dish) => dish.id === id && dish.shopId === selectedShopId
		);

		if (existingDishIndex !== -1) {
			storedDishes.splice(existingDishIndex, 1);

			setIsAdded(false);
		} else {
			const newDish = {
				id,
				title,
				imageUrl,
				price,
				shopId: selectedShopId,
				isAdded: true,
				quantity: 1,
			};
			storedDishes.push(newDish);

			setIsAdded(true);
		}

		localStorage.setItem("dishes", JSON.stringify(storedDishes));
	};

	return (
		<div key={id} className={css.card}>
			<div className={css.image_wrapper}>
				<img
					className={css.image}
					width={200}
					height={80}
					src={imageUrl}
					alt='meal'
				/>
			</div>
			<div>
				<p className={css.title}>{title}</p>

				<p className={css.price}>Price: {price}$</p>
			</div>
			<button
				className={`${css.addButton} ${isDisabled ? css.disabled : ""}`}
				type='button'
				onClick={handleButtonClick}
				disabled={isDisabled || shopId !== selectedShopId}>
				{!isAdded ? "Add" : "Remove"}
			</button>
		</div>
	);
};

DishCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	shopId: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	selectedShopId: PropTypes.string,
	isDisabled: PropTypes.bool,
};
