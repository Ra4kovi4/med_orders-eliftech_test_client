import PropTypes from 'prop-types'

import css from './MedicateCard.module.css'
import { useCart } from '../../CartContext/CartContext'
import { useEffect, useState } from 'react'

export const MedicateCard = ({
    title,
    id,
    imageUrl,
    price,
    pharmId,
    selectedPharmId,
    isDisabled
}) => {
    const [isAdded, setIsAdded] = useState(false)
    const { setCartItemCount, shopLocation } = useCart()
    useEffect(() => {
        const storedMedicates =
            JSON.parse(localStorage.getItem('medicates')) || []
        const existingMedicateIndex = storedMedicates.findIndex((medicate) => {
            return medicate.id === id && medicate.pharmId === selectedPharmId
        })

        if (existingMedicateIndex !== -1) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [id, selectedPharmId])

    const handleButtonClick = () => {
        const storedMedicates =
            JSON.parse(localStorage.getItem('medicates')) || []
        const existingMedicateIndex = storedMedicates.findIndex(
            (medicate) =>
                medicate.id === id && medicate.pharmId === selectedPharmId
        )

        if (existingMedicateIndex !== -1) {
            storedMedicates.splice(existingMedicateIndex, 1)
            setIsAdded(false)
            setCartItemCount((prevCount) => prevCount - 1)
        } else {
            const newMedicate = {
                id,
                title,
                imageUrl,
                price,
                pharmId: selectedPharmId,
                isAdded: true,
                quantity: 1,
                location: { position: shopLocation }
            }
            storedMedicates.push(newMedicate)
            setIsAdded(true)
            setCartItemCount((prevCount) => prevCount + 1)
        }

        localStorage.setItem('medicates', JSON.stringify(storedMedicates))
    }

    return (
        <div key={id} className={css.card}>
            <div className={css.image_wrapper}>
                <img
                    className={css.image}
                    width={200}
                    height={80}
                    src={imageUrl}
                    alt="medicate"
                />
            </div>
            <div>
                <p className={css.title}>{title}</p>

                <p className={css.price}>Price: {price}$</p>
            </div>
            <button
                className={`${css.addButton} ${isDisabled ? css.disabled : ''}`}
                type="button"
                onClick={handleButtonClick}
                disabled={isDisabled || pharmId !== selectedPharmId}
            >
                {!isAdded ? 'Add' : 'Remove'}
            </button>
        </div>
    )
}

MedicateCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    pharmId: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    selectedPharmId: PropTypes.string,
    isDisabled: PropTypes.bool
}
