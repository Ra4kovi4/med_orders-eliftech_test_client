export const addPharmIdToMedicates = (medicates, pharmId) => {
	return medicates.map((medicate) => {
		return { ...medicate, pharmId };
	});
};
