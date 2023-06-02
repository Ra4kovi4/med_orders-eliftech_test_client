import PropTypes from "prop-types";
import { OrderHistoryCard } from "../OrderHistoryCard";

import css from "./OrderHistoryList.module.css";
export const OrderHistoryList = ({ orders }) => {
	return (
		<ul className={css.history_list}>
			{orders.map(({ list, totalPrice, _id }) => (
				<li key={_id} className={css.history_item}>
					<OrderHistoryCard list={list} totalPrice={totalPrice} />
				</li>
			))}
		</ul>
	);
};

OrderHistoryList.propTypes = {
	orders: PropTypes.array.isRequired,
};
