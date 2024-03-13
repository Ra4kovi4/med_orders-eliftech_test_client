import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const defaultLocation = {
    lat: 50.43667410398294,
    lng: 30.51793479516315
}
export const CartProvider = ({ children }) => {
    const [cartItemCount, setCartItemCount] = useState(0)
    const [shopLocation, setShopLocation] = useState(defaultLocation)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const resetCart = () => {
        setCartItemCount(0)
        setShopLocation(defaultLocation)
        setSelectedProduct(null)
    }

    return (
        <CartContext.Provider
            value={{
                cartItemCount,
                setCartItemCount,
                shopLocation,
                setShopLocation,
                selectedProduct,
                setSelectedProduct,
                resetCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node
}
