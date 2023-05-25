import axios from "axios";

export const fetchShopById = async (id) => {
	try {
		const { data } = await axios.get(`/shop/${id}`);
		const shop = data.data.shop;
		return shop;
	} catch (error) {
		console.log(error);
	}
};
