import { CategoryChip } from "./CategoryChip";

export const MobileSecondaryHeader = () => {
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

    return (
        <header className="mobile-secondary-header position-relative">
            <div className="category-controls flex">
                <div className="category-nav-bar position-relative">
                    <div className="category-list main-layout">
                        {categories.map((c) => (
                            <CategoryChip category={c} key={c} />
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
