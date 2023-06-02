import PropTypes from "prop-types";
import css from "./OrderHistoryCart.module.css";
export const OrderHistoryCard = ({ list, totalPrice }) => {
	list.map((item) => console.log(item));

	return (
		<>
			<ul className={css.card}>
				{list.map(({ title, price, imageUrl, quantity, _id }) => (
					<li key={_id} className={css.card_item}>
						<div className={css.image_wrapper}>
							<img src={imageUrl} width={60} className={css.image} />
						</div>
						<p className={css.title}>{title}</p>
						<p className={css.quantity}>count:{quantity}</p>
						<p className={css.price}>price:{price}$</p>
					</li>
				))}
			</ul>
			<div className={css.totalPrice_wrapper}>
				<p className={css.total}>Total Price: {totalPrice}$</p>
			</div>
		</>
	);
};

OrderHistoryCard.propTypes = {
	list: PropTypes.array.isRequired,
	totalPrice: PropTypes.string.isRequired,
};
