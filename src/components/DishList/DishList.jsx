import PropTypes from "prop-types";
import { DishCard } from "../DishCard";
import css from "./DishList.module.css";

export const DishList = ({ dishes, selectedShopId, isDisabled }) => {
	return (
		<ul className={css.dishes_list}>
			{dishes.map(({ title, _id, imageUrl, price, id: dishId, shopId }) => (
				<li className={css.dishes_item} key={_id}>
					<DishCard
						title={title}
						id={dishId}
						imageUrl={imageUrl}
						price={price}
						shopId={shopId}
						selectedShopId={selectedShopId}
						isDisabled={isDisabled}
					/>
				</li>
			))}
		</ul>
	);
};

DishList.propTypes = {
	dishes: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			imageUrl: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		})
	).isRequired,
	selectedShopId: PropTypes.string,
	isDisabled: PropTypes.bool,
};
