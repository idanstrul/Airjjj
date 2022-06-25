import { ReactComponent as FilterIconSvg } from "../assets/airbnb.icons/filter-icon.svg";

export function CategoryFilterBtn() {
  return (
    <div className="category-filter-btn">
      <div className="container">
        <button>
          <span className="text-xs">
            <FilterIconSvg />
            Filters
          </span>
        </button>
      </div>
    </div>
  );
}
