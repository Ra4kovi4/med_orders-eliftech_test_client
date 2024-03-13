import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'

import css from './OrderedCard.module.css'

export const OrderedCard = ({
    id,
    imageUrl,
    title,
    price,
    quantity,
    handleButtonClick,
    handleDecrement,
    handleIncrement
}) => {
    return (
        <div className={css.card}>
            <div className={css.image_wrapper}>
                <img
                    className={css.image}
                    width={200}
                    height={80}
                    src={imageUrl}
                    alt="meal"
                />
            </div>
            <div>
                <p className={css.title}>{title}</p>

                <p className={css.price}>Price: {price}$</p>
            </div>
            <div className={css.button_wrapper}>
                <button
                    className={css.button_decrement}
                    onClick={handleDecrement}
                >
                    <FaMinus size={15} />
                </button>
                <span className={css.count}>{quantity}</span>
                <button
                    className={css.button_increment}
                    onClick={handleIncrement}
                >
                    <FaPlus size={15} />
                </button>
            </div>
            <button
                className={css.addButton}
                type="button"
                onClick={() => handleButtonClick(id)}
            >
                Remove
            </button>
        </div>
    )
}

OrderedCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    handleButtonClick: PropTypes.func.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired
}
