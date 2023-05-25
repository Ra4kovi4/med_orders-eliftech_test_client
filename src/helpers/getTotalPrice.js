export const getTotalPrice = (dishes) => {
	let totalPrice = 0;
	dishes.forEach((dish) => {
		totalPrice += dish.price * dish.quantity;
	});
	return totalPrice.toFixed(2);
};
