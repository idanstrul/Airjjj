import { NavLink } from "react-router-dom";

export const CategoryChip = ({ category }: { category: string }) => {
  var categoryNameFixed = category;
  if (category === "OMG") categoryNameFixed += "!";
  if (category === "Ski-in out") categoryNameFixed = "Ski-in/out";

  return (
    <div className="category-chip">
      <NavLink to="#">
        <img
          src={require(`../assets/airbnb.categoryChips/${category}.jpg`)}
          width="24"
          height="24"
        />
        <div className="category-name text-xs">
          <span>{categoryNameFixed}</span>
        </div>
      </NavLink>
    </div>
  );
}
