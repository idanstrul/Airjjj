import { CategoryChip } from "./CategoryChip";

export function SecondaryHeader() {
  const categories = [
    "Islands",
    "Beach",
    "Amazing pools",
    "OMG",
    "National parks",
    "Cabins",
    "Design",
    "Camping",
    "Tiny homes",
    "Lakefront",
    "Arctic",
    "Amazing views",
    "Desert",
    "Surfing",
    "Shared homes",
    "Caves",
    "Tropical",
    "Bed & breakfasts",
    "Earth homes",
    "Iconic cities",
    "Countryside",
    "Luxe",
    "A-frames",
    "Castels",
    "Farms",
    "Historical homes",
    "Mansions",
    "Skiing",
    "Cycladic homes",
    "Yurts",
    "Chef's kitchens",
    "Domes",
    "Campers",
    "Casas particulares",
    "Beachfront",
    "Vineyards",
    "Minsus",
    "Windmills",
    "Kezhans",
    "Boats",
    "Ryokans",
    "Ski-in out",
    "Shepherd's huts",
    "Off-the-grid",
    "Treehouses",
    "Barns",
    "Towers",
    "Houseboats",
    "Containers",
    "Grand pianos",
    "Creative spaces",
    "Trulli",
    "Riads",
    "Dammusos",
    "Lake",
  ];

  return (
    <header className="secondary-header main-layout">
      <div className="category-list">
        {categories.map((c) => (
          <CategoryChip category={c} key={c} />
        ))}
      </div>
    </header>
  );
}
