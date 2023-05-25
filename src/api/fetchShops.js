import axios from "axios";

axios.defaults.baseURL = "https://delivery-service-rclm.onrender.com/api";

export const fetchShops = async () => {
	try {
		const { data } = await axios.get("/shop");

		return data;
	} catch (error) {
		console.log(error);
	}
};
