import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getTotalPrice } from "../../helpers";
import { OrderForm } from "../../components/OrderForm";
import { OrderedDish } from "../../components/OrderedDish";
import { sendOrder } from "../../api";
import css from "./Cart.module.css";

const Cart = () => {
	// const [formData, setFormData] = useState({
	// 	name: "",
	// 	email: "",
	// 	address: "",
	// 	phone: "",
	// });
	const formData = new FormData();
	const orderData = JSON.parse(localStorage.getItem("dishes")) || [];
	// const handleFormChange = (data) => {
	// 	setFormData(data);
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		if (
			formData.get("name") === "" ||
			formData.get("address") === "" ||
			formData.get("email") === "" ||
			formData.get("phone") === "" ||
			orderData.length === 0
		) {
			toast.info("Please fill all fields and choose dishes");
			return;
		}
		try {
			const requestData = {
				name: formData.get("name"),
				email: formData.get("email"),
				address: formData.get("address"),
				phone: formData.get("phone"),
				dishes: orderData,
				totalPrice: getTotalPrice(orderData),
			};

			console.log(requestData);

			await sendOrder(requestData).then(() => {
				toast.info("Your order was success");
			});
		} catch (error) {
			toast("Oops! Something went wrong");
		}
		localStorage.removeItem("dishes");
	};
	return (
		<main className={css.page_container}>
			{/* {!isLoading && !shopData && <NotFound />} */}
			<h2 className={css.cartPage_title}>Your cart</h2>
			<div className={css.content_wrapper}>
				<OrderForm formData={formData} />
				<OrderedDish />
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</div>
			<ToastContainer autoClose={2000} />
		</main>
	);
};
export default Cart;
