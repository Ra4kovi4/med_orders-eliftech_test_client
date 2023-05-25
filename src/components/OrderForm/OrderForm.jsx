import PropTypes from "prop-types";
// import { useState } from "react";
import css from "./OrderForm.module.css";

export const OrderForm = ({ formData }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;
		formData.set(name, value);
	};

	return (
		<form className={css.form}>
			<label className={css.label}>
				<span className={css.input_part}>Name</span>
				<input
					className={css.input}
					type='text'
					name='name'
					onChange={handleChange}
				/>
			</label>
			<label className={css.label}>
				<span className={css.input_part}>Email</span>
				<input
					className={css.input}
					type='email'
					name='email'
					onChange={handleChange}
				/>
			</label>
			<label className={css.label}>
				<span className={css.input_part}>Address</span>
				<input
					className={css.input}
					type='text'
					name='address'
					onChange={handleChange}
				/>
			</label>
			<label className={css.label}>
				<span className={css.input_part}>Phone</span>
				<input
					className={css.input}
					type='text'
					name='phone'
					onChange={handleChange}
				/>
			</label>
		</form>
	);
};
OrderForm.propTypes = {
	formData: PropTypes.object.isRequired,
};
