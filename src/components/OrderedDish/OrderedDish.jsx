import { useState } from "react";
import { OrderedCard } from "../OrderedCard/OrderedCard";
import { getTotalPrice } from "../../helpers";
import css from "./OrderedDish.module.css";

export const OrderedDish = () => {
	const [storedDishes, setStoredDishes] = useState(
		JSON.parse(localStorage.getItem("dishes")) || []
	);

	const handleButtonClick = (id) => {
		const updatedDishes = storedDishes.filter((dish) => dish.id !== id);
		setStoredDishes(updatedDishes);
		localStorage.setItem("dishes", JSON.stringify(updatedDishes));
	};

	const handleCountIncrement = (id) => {
		const updatedDishes = storedDishes.map((dish) => {
			if (dish.id === id) {
				return {
					...dish,
					quantity: dish.quantity + 1,
				};
			}
			return dish;
		});
		setStoredDishes(updatedDishes);
		localStorage.setItem("dishes", JSON.stringify(updatedDishes));
	};

	const handleCountDecrement = (id) => {
		const updatedDishes = storedDishes.map((dish) => {
			if (dish.id === id && dish.quantity > 1) {
				return {
					...dish,
					quantity: dish.quantity - 1,
				};
			}
			return dish;
		});
		setStoredDishes(updatedDishes);
		localStorage.setItem("dishes", JSON.stringify(updatedDishes));
	};

	return (
		<>
			<div className={css.wrapper}>
				<p className={css.total}>Total Price: {getTotalPrice(storedDishes)}$</p>
				{storedDishes.length > 0 ? (
					<ul className={css.order_list}>
						{storedDishes.map(({ id, imageUrl, title, price, quantity }) => (
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
					<p className={css.text}>
						You have not added any dishes to your cart yet
					</p>
				)}
			</div>
		</>
	);
};
