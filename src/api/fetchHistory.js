import axios from "axios";

export const fetchHistory = async (credentials) => {
	try {
		const { data } = await axios.get(`/orders?query=${credentials}`);
		if (data.message === "Not Found") {
			return [];
		}
		return data.data.result;
	} catch (error) {
		console.log(error.message);
	}
};
