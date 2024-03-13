import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

import { useCart } from '../../CartContext/CartContext'

import css from './Navigation.module.css'

export const Navigation = () => {
    const { cartItemCount } = useCart()

    return (
        <nav>
            <ul className={css.nav_list}>
                <li className={css.nav_item}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? css.active : css.link
                        }
                    >
                        Pharmacy
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? css.active : css.link
                        }
                        to="/cart"
                    >
                        <div className={css.cart_link}>
                            <FaShoppingCart className={css.cart_icon} />
                            <span className={css.cart_count}>
                                {cartItemCount}
                            </span>
                        </div>
                    </NavLink>
                </li>
                <li className={css.nav_item}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? css.active : css.link
                        }
                        to="/history"
                    >
                        Order history
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
