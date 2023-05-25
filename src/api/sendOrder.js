import axios from "axios";

axios.defaults.baseURL = "https://delivery-service-rclm.onrender.com/api";

export const sendOrder = async (credentials) => {
	try {
		const response = await axios.post("/orders", credentials);
		return response;
	} catch (error) {
		console.log(error);
	}
};
