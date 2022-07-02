import { NavLink } from "react-router-dom";
import { ReactComponent as SearchGlassSVG } from '../assets/airbnb.icons/search-glass-light.svg'
import { ReactComponent as HeartIconSVG } from '../assets/airbnb.icons/heart-icon.svg'
import { ReactComponent as UserIconSVG } from '../assets/airbnb.icons/user-icon.svg'

export const MobileMainFooter = () => (
    <nav className="mobile-main-footer flex align-center justify-center">
        <div className="container flex justify-center">

            <NavLink to="#" className="explore-nav-btn flex column align-center">
                <div className="svg-container">
                    <SearchGlassSVG />
                </div>
                <div className="text-xxs">
                    Explore
                </div>

            </NavLink>
            <NavLink to="#" className="whishlists-nav-btn flex column align-center">
                <div className="svg-container">
                    <HeartIconSVG />
                </div>
                <div className="text-xxs">
                    Wishlists
                </div>

            </NavLink>
            <NavLink to="#" className="login-nav-btn flex column align-center">
                <div className="svg-container">
                    <UserIconSVG />
                </div>
                <div className="text-xxs">
                    Log in
                </div>

            </NavLink>
        </div>

    </nav>
)

