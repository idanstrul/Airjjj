import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as MapIconSvg } from '../assets/airbnb.icons/map-icon.svg'
import { ReactComponent as IntlGlobeSVG } from '../assets/airbnb.icons/intl-globe.svg'

export function MainFooterContainer() {
  return <section className="main-footer-container">
    <div className="map-btn-container">
      <button className="map-btn">
        <div className="container">
          <span>
            Show map
          </span>
          <MapIconSvg />
        </div>
      </button>
    </div>
    <footer className='main-footer main-layout text-s flex space-between'>
      <div className='meta-links flex'>
        <span className='copyright'>
          © 2022 Airjjj, Inc.
        </span>
        <ul className='clean-list flex'>
          <li><NavLink to="#">Privacy</NavLink></li>
          <li><NavLink to="#">Terms</NavLink></li>
          <li><NavLink to="#">Sitemap</NavLink></li>
          <li><NavLink to="#">Destinations</NavLink></li>
        </ul>
      </div>
      <div className='controls flex'>
        <button>
          <IntlGlobeSVG />
          <span>English(US)</span>
        </button>

        <Link to="#">₪ ILS</Link>
        <Link to="#">Support & resurces</Link>
      </div>
    </footer>
  </section>;
}
