import PropTypes from "prop-types";
import { useState } from "react";

import css from "./ShopList.module.css";
export const ShopList = ({ shops, handleClick }) => {
	const [selectedShopId, setSelectedShopId] = useState(null);

	const handleShopClick = (id) => {
		setSelectedShopId(id);
		handleClick(id);
	};

	return (
		<>
			<ul className={css.shopList}>
				{shops.map(({ _id, name, address }) => (
					<li
						key={_id}
						// className={css.shopItem}
						className={`${css.shopItem} ${
							_id === selectedShopId ? css.selected : ""
						}`}
						disabled={selectedShopId && _id !== selectedShopId}
						onClick={() => handleShopClick(_id)}>
						<p className={css.shopTitle}>{name}</p>
						<p className={css.shopAddress}>{address}</p>
					</li>
				))}
			</ul>
		</>
	);
};

ShopList.propTypes = {
	shops: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			address: PropTypes.string.isRequired,
			dishes: PropTypes.array.isRequired,
		})
	).isRequired,
	handleClick: PropTypes.func.isRequired,
};
