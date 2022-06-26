import { ReactComponent as NavArrowLeftSVG } from "../assets/airbnb.icons/nav-arrow-left.svg";
import { ReactComponent as NavArrowRightSVG } from "../assets/airbnb.icons/nav-arrow-right.svg";

type Dir = 'left' | 'right'

export function ArrowNavBtn({ dir, clickFunc }: { dir: Dir; clickFunc?: (dir: Dir) => void; }) {
  return (
    <button className="arrow-nav-btn" onClick={() => (clickFunc) ? clickFunc(dir) : null}>
      <span>{dir === "left" ? <NavArrowLeftSVG /> : <NavArrowRightSVG />}</span>
    </button>
  );
}
