import { CategoryChip } from "./CategoryChip";
import { CategoryFilterBtn } from "./CategoryFilterBtn";
import { ArrowNavBtn } from "./ArrowNavBtn";
import { useState } from "react";

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
    "Riads",
    "Trulli",
    "Dammusos",
    "Lake",
  ];

  const [isPrevBtnVisible, setIsPrevBtnVisible] = useState(false);
  const [isNextBtnVisible, setIsNextBtnVisible] = useState(true);

  const handleScroll = (el: HTMLElement) => {
    // console.log(el.scrollLeft);
    if (el.scrollLeft >= 9) {
      setIsPrevBtnVisible(true);
    } else {
      setIsPrevBtnVisible(false);
    }
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 12) {
      setIsNextBtnVisible(false);
    } else {
      setIsNextBtnVisible(true);
    }
  };

  return (
    <header className="secondary-header main-layout">
      <div className="category-controls flex">
        <div className="category-nav-bar position-relative">
          <div
            className="category-nav-btn"
            style={{ opacity: isPrevBtnVisible ? 1 : 0 }}
          >
            <ArrowNavBtn dir="left" />
          </div>
          <div
            className="category-list"
            onScroll={(ev) => handleScroll(ev.target as HTMLElement)}
          >
            {categories.map((c) => (
              <CategoryChip category={c} key={c} />
            ))}
          </div>
          <div
            className="category-nav-btn"
            style={{ opacity: isNextBtnVisible ? 1 : 0 }}
          >
            <ArrowNavBtn dir="right" />
          </div>
        </div>

        <CategoryFilterBtn />
      </div>
    </header>
  );
}
