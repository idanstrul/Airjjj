import { ReactComponent as SearchGlassSVG } from "../assets/airbnb.icons/search-glass.svg";

export function StaysFilter() {
  return (
    <div className="stays-filter flex align-center">
      <button>Anywhere</button>
      <span></span>
      <button>Any week</button>
      <span></span>
      <button className="search-btn flex align-center">
        Add guests
        <div className="container">
          <SearchGlassSVG />
        </div>
      </button>
    </div>
  );
}
