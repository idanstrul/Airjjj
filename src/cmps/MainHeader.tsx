import { NavLink } from "react-router-dom";
import { StaysFilter } from "./StaysFilter";
import { BrandLogo } from "./BrandLogo";
import { ReactComponent as IntlGlobeSVG } from "../assets/airbnb.icons/intl-globe.svg";
import { ReactComponent as BurgerMenuSVG } from "../assets/airbnb.icons/burger-menu.svg";
import { ReactComponent as UserAvatarDefaultSVG } from "../assets/airbnb.icons/user-avatar-default.svg";

export const MainHeader = () => (
  <header className="main-header main-layout flex align-center text-s">
    <BrandLogo />

    <StaysFilter />

    <div className="controls flex justify-flex-end white-space-no-wrap">
      <NavLink to="#">
        <div className="container"> Become a Host</div>
      </NavLink>

      <button className="intl-btn">
        <div className="container">
          <IntlGlobeSVG />
        </div>
      </button>

      <button className="burger-menu-btn">
        <BurgerMenuSVG />
        <div className="container">
          <UserAvatarDefaultSVG />
        </div>
      </button>

      {/* <nav className="main-nav">
          <ul className="clean-list">
            <li>
              <NavLink end to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink end to="/stay">
                Stays
              </NavLink>
            </li>
            <li>
              <NavLink to="/stay/123">Stay Details</NavLink>
            </li>
            <li>
              <NavLink to="/stay/edit/123">Stay Edit</NavLink>
            </li>
          </ul>
        </nav> */}
    </div>
  </header>
);

