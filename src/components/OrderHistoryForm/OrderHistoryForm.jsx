import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { isValidHistoryForm } from "../../helpers";
import css from "./OrderHistoryForm.module.css";
import { toast } from "react-toastify";

export const OrderHistoryForm = ({ onSubmit }) => {
	const [contactType, setContactType] = useState("phone");
	const inputRef = useRef(null);

	const handleContactTypeChange = (event) => {
		setContactType(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const contactValue = inputRef.current.value;

		const isValid = isValidHistoryForm(contactType, contactValue);

		if (!isValid) {
			toast.warn("Check that the data entered is correct");
			return;
		}
		if (isValid) {
			if (contactValue === "") {
				toast.info("Please enter info for searching");
				return;
			}
			onSubmit(contactValue);
		}
	};

	return (
		<div className={css.form_wrapper}>
			<form className={css.form}>
				<label className={css.label} htmlFor='contact-type'>
					<span className={css.input_part}>Select a search method</span>
				</label>
				<select
					className={css.select}
					id='contact-type'
					value={contactType}
					onChange={handleContactTypeChange}>
					<option value='phone'>Phone</option>
					<option value='email'>Email</option>
				</select>

				<label className={css.label} htmlFor='contact-input'>
					<span className={css.input_part}>Enter contact information</span>
				</label>
				<input
					className={css.input}
					type={contactType === "phone" ? "tel" : "email"}
					id='contact-input'
					ref={inputRef}
					placeholder={
						contactType === "phone" ? "380501111111" : "example@mail.com"
					}
				/>

				<button
					className={css.submit_button}
					type='submit'
					onClick={(e) => handleSubmit(e)}>
					Order history
				</button>
			</form>
		</div>
	);
};

OrderHistoryForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};
