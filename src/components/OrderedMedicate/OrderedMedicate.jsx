import PropTypes from 'prop-types'

import { OrderedCard } from '../OrderedCard/OrderedCard'
import { getTotalPrice } from '../../helpers'

import css from './OrderedMedicate.module.css'

export const OrderedMedicate = ({
    orderedMedicate,
    handleButtonClick,
    setOrderedMedicate
}) => {
    const handleCountIncrement = (id) => {
        const updatedMedicates = orderedMedicate.map((medicate) => {
            if (medicate.id === id) {
                return {
                    ...medicate,
                    quantity: medicate.quantity + 1
                }
            }
            return medicate
        })
        setOrderedMedicate(updatedMedicates)
        localStorage.setItem('medicates', JSON.stringify(updatedMedicates))
    }

    const handleCountDecrement = (id) => {
        const updatedMedicates = orderedMedicate.map((medicate) => {
            if (medicate.id === id && medicate.quantity > 1) {
                return {
                    ...medicate,
                    quantity: medicate.quantity - 1
                }
            }
            return medicate
        })
        setOrderedMedicate(updatedMedicates)
        localStorage.setItem('medicates', JSON.stringify(updatedMedicates))
    }

    return (
        <>
            <div className={css.wrapper}>
                <p className={css.total}>
                    Total Price: {getTotalPrice(orderedMedicate)}$
                </p>

                {orderedMedicate.length > 0 ? (
                    <ul className={css.order_list}>
                        {orderedMedicate.map(
                            ({ id, imageUrl, title, price, quantity }) => (
                                <li className={css.order_item} key={id}>
                                    <OrderedCard
                                        id={id}
                                        imageUrl={imageUrl}
                                        title={title}
                                        price={price}
                                        quantity={quantity}
                                        handleIncrement={() =>
                                            handleCountIncrement(id)
                                        }
                                        handleDecrement={() =>
                                            handleCountDecrement(id)
                                        }
                                        handleButtonClick={handleButtonClick}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                ) : (
                    <img
                        src="https://i.postimg.cc/c4fSdRz9/25518797c3883faa8c2b68d427367eba.png"
                        alt="cart is empty"
                        width={600}
                    />
                )}
            </div>
        </>
    )
}
OrderedMedicate.propTypes = {
    orderedMedicate: PropTypes.array.isRequired,
    handleButtonClick: PropTypes.func,
    setOrderedMedicate: PropTypes.func
}
