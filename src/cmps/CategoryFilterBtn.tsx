import { ReactComponent as FilterIconSvg } from "../assets/airbnb.icons/filter-icon.svg";

export const CategoryFilterBtn = () => (
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
)
