export const addShopIdToDishes = (dishes, shopId) => {
	return dishes.map((dish) => {
		return { ...dish, shopId };
	});
};
