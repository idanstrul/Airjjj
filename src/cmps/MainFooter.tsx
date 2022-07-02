import { NavLink } from "react-router-dom";
import { ReactComponent as IntlGlobeSVG } from '../assets/airbnb.icons/intl-globe.svg'
import { ReactComponent as UpArrowSvg } from '../assets/airbnb.icons/up-arrow.svg'


export const MainFooter = () => (
    <footer className='main-footer main-layout text-s flex space-between align-center'>
        <ul className='clean-list meta-links flex wrap'>
            <span className='copyright'>
                © 2022 Airjjj, Inc.
            </span>
            <li><NavLink to="#">Privacy</NavLink></li>
            <li><NavLink to="#">Terms</NavLink></li>
            <li><NavLink to="#">Sitemap</NavLink></li>
            <li><button className='hover-underline'>Destinations</button></li>
        </ul>
        <div className='controls flex'>
            <button className='flex align-center'>
                <span>
                    <IntlGlobeSVG />
                </span>
                <span className='hover-underline'>English (US)</span>
            </button>

            <button className='flex align-center'>
                <span>
                    ₪
                </span>
                <span className='hover-underline'>
                    ILS
                </span>
            </button>

            <button className='flex align-flex-end hover-underline'>
                <span>
                    Support & resources
                </span>
                <span>
                    <UpArrowSvg />
                </span>
            </button>
        </div>
    </footer>
)

