import { ReactComponent as SearchGlassSVG } from '../assets/airbnb.icons/search-glass-light.svg'
import { ReactComponent as FilterIconSVG } from '../assets/airbnb.icons/filter-icon.svg'

export function MobileStaysFilter() {
    return (
        <div className="mobile-stays-filter flex">
            <button className="search-btn clean-btn flex align-center flex-grow">
                <div className='search-glass-svg-container'>
                    <SearchGlassSVG />
                </div>
                <div className='text-xs'>
                    <div className='text-s text-overflow-with-dots'>Where to?</div>
                    <div className='flex'>
                        <span className='text-overflow-with-dots'>
                            Anywhere
                        </span>
                        <span className="dot-mark">
                            •
                        </span>
                        <span className='text-overflow-with-dots'>
                            Any week
                        </span>
                        <span className="dot-mark">
                            •
                        </span>
                        <span className='text-overflow-with-dots'>
                            Add guests
                        </span>
                    </div>
                </div>
            </button>
            <button className="filter-btn clean-btn">
                <div className='circle-btn'>
                    <FilterIconSVG />
                </div>
            </button>
        </div>
    )
}
