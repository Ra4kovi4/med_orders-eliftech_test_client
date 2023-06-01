import PropTypes from "prop-types";

import css from "./Shop.module.css";

export const Shop = ({ id, name, address, selectedShopId, handleClick }) => {
	const handleShopClick = () => {
		handleClick(id);
	};

	return (
		<li
			key={id}
			className={`${css.shopItem} ${id === selectedShopId ? css.selected : ""}`}
			onClick={handleShopClick}>
			<p className={css.shopTitle}>{name}</p>
			<p className={css.shopAddress}>{address}</p>
		</li>
	);
};

Shop.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	address: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
	selectedShopId: PropTypes.string,
};
