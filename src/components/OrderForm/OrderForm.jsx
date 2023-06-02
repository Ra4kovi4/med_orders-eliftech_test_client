import PropTypes from "prop-types";

import css from "./OrderForm.module.css";

export const OrderForm = ({ formData }) => {
	const handleChange = (event) => {
		const { name, value } = event.target;

		formData.set(name, value);
	};

	return (
		<div className={css.form_wrapper}>
			<form className={css.form}>
				<label className={css.label}>
					<span className={css.input_part}>Name</span>
					<input
						className={css.input}
						type='text'
						name='name'
						onChange={handleChange}
						placeholder='John'
					/>
				</label>
				<label className={css.label}>
					<span className={css.input_part}>Email</span>
					<input
						className={css.input}
						type='email'
						name='email'
						onChange={handleChange}
						placeholder='example@mail.com'
					/>
				</label>
				<label className={css.label}>
					<span className={css.input_part}>Address</span>
					<input
						className={css.input}
						type='text'
						name='address'
						onChange={handleChange}
						placeholder='Antonovycha str.75'
					/>
				</label>
				<label className={css.label}>
					<span className={css.input_part}>Phone</span>
					<input
						className={css.input}
						type='text'
						name='phone'
						onChange={handleChange}
						placeholder='380501111111'
					/>
				</label>
			</form>
		</div>
	);
};
OrderForm.propTypes = {
	formData: PropTypes.object.isRequired,
};
