import PropTypes from 'prop-types'
import { Map } from '../Maps'

import { useJsApiLoader } from '@react-google-maps/api'
import css from './OrderForm.module.css'

const API_KEY = import.meta.env.VITE_API_KEY
const librares = ['places']
const defaultCenter = {
    lat: 50.418226,
    lng: 30.505225
}
export const OrderForm = ({ formData }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
        librares
    })
    const handleChange = (event) => {
        const { name, value } = event.target

        formData.set(name, value)
    }

    return (
        <>
            <div className={css.order_wrapper}>
                <div className={css.form_wrapper}>
                    {isLoaded ? (
                        <Map center={defaultCenter} />
                    ) : (
                        <h2>Loader</h2>
                    )}

                    <form className={css.form}>
                        <label className={css.label}>
                            <span className={css.input_part}>Name</span>
                            <input
                                className={css.input}
                                type="text"
                                name="name"
                                onChange={handleChange}
                                placeholder="John"
                            />
                        </label>
                        <label className={css.label}>
                            <span className={css.input_part}>Email</span>
                            <input
                                className={css.input}
                                type="email"
                                name="email"
                                onChange={handleChange}
                                placeholder="example@mail.com"
                            />
                        </label>
                        <label className={css.label}>
                            <span className={css.input_part}>Address</span>
                            <input
                                className={css.input}
                                type="text"
                                name="address"
                                onChange={handleChange}
                                placeholder="Antonovycha 75"
                            />
                        </label>
                        <label className={css.label}>
                            <span className={css.input_part}>Phone</span>
                            <input
                                className={css.input}
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                placeholder="380501111111"
                            />
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}
OrderForm.propTypes = {
    formData: PropTypes.object.isRequired
}
