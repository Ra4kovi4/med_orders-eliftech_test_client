import PropTypes from "prop-types";

import { Shop } from "../Shop";
import css from "./ShopList.module.css";

export const ShopList = ({ shops, handleClick, selectedShopId }) => {
	return (
		<>
			<ul className={css.shopList}>
				{shops.map(({ _id, name, address }) => (
					<Shop
						key={_id}
						id={_id}
						name={name}
						address={address}
						selectedShopId={selectedShopId}
						handleClick={handleClick}
					/>
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
	selectedShopId: PropTypes.string,
	isDisabled: PropTypes.bool,
};
