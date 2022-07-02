import { ReactComponent as SearchGlassSVG } from "../assets/airbnb.icons/search-glass.svg";

export const StaysFilter = () => (
  <div className="stays-filter flex align-center min-width-0">
    <button className="min-width-0 text-overflow-with-dots">
      Anywhere
    </button>
    <span className="line-mark"></span>
    <button className="min-width-0 text-overflow-with-dots">
      Any week
    </button>
    <span className="line-mark"></span>
    <button className="search-btn flex align-center min-width-0">
      <span className="text-overflow-with-dots">
        Add guests
      </span>
      <div className="container">
        <SearchGlassSVG />
      </div>
    </button>
  </div>
);
