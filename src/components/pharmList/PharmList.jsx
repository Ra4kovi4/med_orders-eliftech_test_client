import PropTypes from 'prop-types'

import { Pharm } from '../Pharm'
import css from './PharmList.module.css'

export const PharmList = ({ pharms, handleClick, selectedPharmId }) => {
    return (
        <>
            <ul className={css.shopList}>
                {pharms.map(({ _id, name, address, position }) => (
                    <Pharm
                        key={_id}
                        id={_id}
                        name={name}
                        address={address}
                        selectedPharmId={selectedPharmId}
                        handleClick={handleClick}
                        location={position}
                    />
                ))}
            </ul>
        </>
    )
}

PharmList.propTypes = {
    pharms: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            medicate: PropTypes.array.isRequired
        })
    ).isRequired,
    handleClick: PropTypes.func.isRequired,
    selectedPharmId: PropTypes.string,
    isDisabled: PropTypes.bool
}
