import PropTypes from "prop-types";
import { DishCard } from "../DishCard";
import css from "./DishList.module.css";

export const DishList = ({ dishes }) => {
	return (
		<ul className={css.dishes_list}>
			{dishes.map(({ title, _id, imageUrl, price, id: dishId }) => (
				<li className={css.dishes_item} key={_id}>
					<DishCard
						title={title}
						id={dishId}
						imageUrl={imageUrl}
						price={price}
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
};
