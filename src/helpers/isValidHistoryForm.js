export const isValidHistoryForm = (type, value) => {
	if (type === "phone") {
		if (!value.match(/^380\d{9}$/)) {
			return false;
		}
	} else {
		if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
			return false;
		}
	}
	return true;
};
