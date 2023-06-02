import { toast } from "react-toastify";

export const isValidOrderForm = (data) => {
	let isValid = true;
	const errors = {};

	if (data.name.trim() === "") {
		isValid = false;
		errors.name = "Name is required";
		toast.warn(errors.name);
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(data.email)) {
		isValid = false;
		errors.email = "Invalid email address";
		toast.warn(errors.email);
	}

	if (data.address.trim() === "") {
		isValid = false;
		errors.address = "Address is required";
		toast.warn(errors.address);
	}

	const phoneRegex = /^380\d{9}$/;
	if (!phoneRegex.test(data.phone)) {
		isValid = false;
		errors.phone = "Invalid phone number";
		toast.warn(errors.phone);
	}

	return { isValid, errors };
};
