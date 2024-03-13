import PropTypes from 'prop-types'
import { useCart } from '../../CartContext/CartContext'
import css from './Pharm.module.css'

export const Pharm = ({
    id,
    name,
    address,
    location,
    selectedPharmId,
    handleClick
}) => {
    const { setShopLocation } = useCart()
    const handlePharmClick = () => {
        handleClick(id)
        setShopLocation(location)
    }

    return (
        <li
            key={id}
            className={`${css.shopItem} ${
                id === selectedPharmId ? css.selected : ''
            }`}
            onClick={handlePharmClick}
        >
            <p className={css.shopTitle}>{name}</p>
            <p className={css.shopAddress}>{address}</p>
        </li>
    )
}

Pharm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    location: PropTypes.object,
    handleClick: PropTypes.func.isRequired,
    selectedPharmId: PropTypes.string
}
