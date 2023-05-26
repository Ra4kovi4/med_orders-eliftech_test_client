import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
import { OrderedCard } from "../OrderedCard/OrderedCard";
import { getTotalPrice } from "../../helpers";
import css from "./OrderedDish.module.css";

export const OrderedDish = ({
	orderedDish,
	handleButtonClick,
	setOrderedDish,
}) => {
	const handleCountIncrement = (id) => {
		const updatedDishes = orderedDish.map((dish) => {
			if (dish.id === id) {
				return {
					...dish,
					quantity: dish.quantity + 1,
				};
			}
			return dish;
		});
		setOrderedDish(updatedDishes);
		localStorage.setItem("dishes", JSON.stringify(updatedDishes));
	};

	const handleCountDecrement = (id) => {
		const updatedDishes = orderedDish.map((dish) => {
			if (dish.id === id && dish.quantity > 1) {
				return {
					...dish,
					quantity: dish.quantity - 1,
				};
			}
			return dish;
		});
		setOrderedDish(updatedDishes);
		localStorage.setItem("dishes", JSON.stringify(updatedDishes));
	};

	return (
		<>
			<div className={css.wrapper}>
				<p className={css.total}>Total Price: {getTotalPrice(orderedDish)}$</p>
				{orderedDish.length > 0 ? (
					<ul className={css.order_list}>
						{orderedDish.map(({ id, imageUrl, title, price, quantity }) => (
							<li className={css.order_item} key={id}>
								<OrderedCard
									id={id}
									imageUrl={imageUrl}
									title={title}
									price={price}
									quantity={quantity}
									handleIncrement={() => handleCountIncrement(id)}
									handleDecrement={() => handleCountDecrement(id)}
									handleButtonClick={handleButtonClick}
								/>
							</li>
						))}
					</ul>
				) : (
					<img
						src='../../../src/images/cart.png'
						alt='cart is empty'
						width={600}
					/>
				)}
			</div>
		</>
	);
};
OrderedDish.propTypes = {
	orderedDish: PropTypes.array.isRequired,
	handleButtonClick: PropTypes.func,
	setOrderedDish: PropTypes.func,
};
