import { ReactComponent as NavArrowLeftSVG } from "../assets/airbnb.icons/nav-arrow-left.svg";
import { ReactComponent as NavArrowRightSVG } from "../assets/airbnb.icons/nav-arrow-right.svg";

export function ArrowNavBtn({ dir }: { dir: "left" | "right" }) {
  return (
    <button className="arrow-nav-btn">
      <span>{dir === "left" ? <NavArrowLeftSVG /> : <NavArrowRightSVG />}</span>
    </button>
  );
}
