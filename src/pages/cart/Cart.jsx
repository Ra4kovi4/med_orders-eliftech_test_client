import { ToastContainer, toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { getTotalPrice, isValidOrderForm } from '../../helpers'
import { OrderForm } from '../../components/OrderForm'
import { OrderedMedicate } from '../../components/OrderedMedicate'
import { useCart } from '../../CartContext/CartContext'
import { sendOrder } from '../../api'

import css from './Cart.module.css'

const Cart = () => {
    const formData = new FormData()
    const { setCartItemCount, resetCart } = useCart()
    const [orderData, setOrderData] = useState([])

    useEffect(() => {
        const storedMedicates =
            JSON.parse(localStorage.getItem('medicates')) || []

        setOrderData(storedMedicates)

        const handleStorageChange = (event) => {
            if (event.key === 'medicates') {
                const storedMedicates = JSON.parse(event.newValue) || []
                setOrderData(storedMedicates)
            }
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const handleButtonClick = (id) => {
        const updatedMedicate = orderData.filter(
            (medicate) => medicate.id !== id
        )
        setOrderData(updatedMedicate)
        localStorage.setItem('medicates', JSON.stringify(updatedMedicate))
        setCartItemCount((prevCount) => prevCount - 1)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (
            formData.get('name') === null ||
            formData.get('address') === null ||
            formData.get('email') === null ||
            formData.get('phone') === null
        ) {
            toast.info('Please fill all fields and choose medicates')
            return
        }
        if (orderData.length === 0) {
            toast.info('Please choose medicates')
            return
        }
        try {
            const requestData = {
                name: formData.get('name'),
                email: formData.get('email'),
                address: formData.get('address'),
                phone: formData.get('phone'),
                medicates: orderData,
                totalPrice: getTotalPrice(orderData)
            }

            const { isValid } = isValidOrderForm(requestData)

            if (!isValid) {
                return
            } else {
                await sendOrder(requestData).then(() => {
                    toast.info('Your order was successful')
                })
                localStorage.removeItem('medicates')
                setOrderData([])
            }
        } catch (error) {
            toast.warn('Oops! Something went wrong')
            console.log(error.message)
        }
        resetCart()
    }

    return (
        <main className={css.page_container}>
            <button
                className={css.submit_button}
                onClick={(e) => handleSubmit(e)}
            >
                Place an order
            </button>
            <div className={css.content_wrapper}>
                <OrderForm formData={formData} />
                <OrderedMedicate
                    orderedMedicate={orderData}
                    handleButtonClick={handleButtonClick}
                    setOrderedMedicate={setOrderData}
                />
            </div>

            <ToastContainer autoClose={2000} />
        </main>
    )
}
export default Cart
