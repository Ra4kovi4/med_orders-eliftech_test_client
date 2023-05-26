import PropTypes from "prop-types";

import css from "./DishCard.module.css";
import { useEffect, useState } from "react";

export const DishCard = ({ title, id, imageUrl, price }) => {
	const [isAdded, setIsAdded] = useState(false);

	useEffect(() => {
		const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];

		const existingDishIndex = storedDishes.map((item) => item.id);

		if (existingDishIndex.includes(id)) {
			setIsAdded(true);
		} else {
			setIsAdded(false);
		}
	}, [id]);

	const handleButtonClick = () => {
		const storedDishes = JSON.parse(localStorage.getItem("dishes")) || [];
		const existingDishIndex = storedDishes.findIndex((dish) => dish.id === id);

		if (existingDishIndex !== -1) {
			storedDishes.splice(existingDishIndex, 1);
			setIsAdded(false);
		} else {
			const newDish = {
				id,
				title,
				imageUrl,
				price,
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
				className={css.addButton}
				type='button'
				onClick={handleButtonClick}>
				{!isAdded ? "Add" : "Remove"}
			</button>
		</div>
	);
};

DishCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,

	price: PropTypes.number.isRequired,
};
