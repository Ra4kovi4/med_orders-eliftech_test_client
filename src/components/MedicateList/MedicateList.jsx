import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { MedicateCard } from '../MedicateCard'
import css from './MedicateList.module.css'

export const MedicateList = ({ medicates, selectedPharmId, isDisabled }) => {
    const [sortedMedicates, setSortedMedicates] = useState([])

    useEffect(() => {
        setSortedMedicates([...medicates])
    }, [medicates])

    const sortByHightPrice = () => {
        const sorted = [...sortedMedicates].sort((a, b) => a.price - b.price)
        setSortedMedicates(sorted)
    }

    const sortByLowPrice = () => {
        const sorted = [...sortedMedicates].sort((a, b) => b.price - a.price)
        setSortedMedicates(sorted)
    }

    return (
        <div className={css.container}>
            <div className={css.sort_container}>
                <button className={css.sort_button} onClick={sortByHightPrice}>
                    Low price
                </button>
                <button className={css.sort_button} onClick={sortByLowPrice}>
                    High price
                </button>
            </div>
            <ul className={css.dishes_list}>
                {sortedMedicates.map(
                    ({ title, _id, id, imageUrl, price, pharmId }) => (
                        <li className={css.dishes_item} key={_id}>
                            <MedicateCard
                                title={title}
                                id={id}
                                imageUrl={imageUrl}
                                price={price}
                                pharmId={pharmId}
                                selectedPharmId={selectedPharmId}
                                isDisabled={isDisabled}
                            />
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

MedicateList.propTypes = {
    medicates: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired
        })
    ).isRequired,
    selectedPharmId: PropTypes.string,
    isDisabled: PropTypes.bool
}
