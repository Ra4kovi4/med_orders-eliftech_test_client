import { Navigation } from '../Navigation'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from '../../CartContext/CartContext'
import css from './NavBar.module.css'

export const NavBar = () => {
    const { setCartItemCount } = useCart()

    useEffect(() => {
        const storedMedicates =
            JSON.parse(localStorage.getItem('medicates')) || []
        const itemCount = storedMedicates.length
        setCartItemCount(itemCount)
    }, [setCartItemCount])

    return (
        <header className={css.header}>
            <NavLink to="/">
                <img
                    src="https://i.postimg.cc/3rz9rhXp/logo.png"
                    alt="logo"
                    width={50}
                />
            </NavLink>

            <Navigation />
        </header>
    )
}
