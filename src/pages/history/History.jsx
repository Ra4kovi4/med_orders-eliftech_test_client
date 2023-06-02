import { OrderHistoryForm } from "../../components/OrderHistoryForm";
import { fetchHistory } from "../../api";
import { OrderHistoryList } from "../../components/OrderHistotyList";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import "react-toastify/dist/ReactToastify.css";
import css from "./History.module.css";

const HistoryPage = () => {
	const [orderHistory, setOrderHistory] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const getHistory = async (data) => {
		try {
			setIsLoading(true);
			const result = await fetchHistory(data);
			if (!result) {
				setOrderHistory([]);
			} else {
				setOrderHistory(result.cart);
			}
		} catch (error) {
			toast.error("Oops, something went wrong! Please try again");
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = (data) => {
		getHistory(data);
	};

	return (
		<>
			<main className={css.page_container}>
				<>
					<div className={css.content_wrapper}>
						<OrderHistoryForm onSubmit={handleSubmit} />
						<div className={css.order_wrapper}>
							{isLoading ? (
								<Loader />
							) : (
								<>
									{orderHistory === null ? (
										<p className={css.title}>
											To view your order history, enter your data
										</p>
									) : orderHistory.length === 0 ? (
										<p className={css.title}>No order history found.</p>
									) : (
										<OrderHistoryList orders={orderHistory} />
									)}
								</>
							)}
						</div>
					</div>
				</>

				<ToastContainer autoClose={2000} />
			</main>
		</>
	);
};

HistoryPage.displayName = "HistoryPage";
export default HistoryPage;
