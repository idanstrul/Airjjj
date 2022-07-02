import { useState } from 'react';
import { ReactComponent as MapIconSvg } from '../assets/airbnb.icons/map-icon.svg'
import { useWindowScrollPositions } from '../hooks/useWindowScrollPositions';
import { MainFooter } from './MainFooter';
import { MobileMainFooter } from './MobileMainFooter';

export const MainFooterContainer = ({ isDesktop }: { isDesktop: boolean }) => {
  const windowSclollPosition = useWindowScrollPositions()
  console.log('====================================');
  console.log(windowSclollPosition);
  console.log('====================================');

  const isMapBtnHidden = windowSclollPosition.scrollY < 82

  return (<section className="main-footer-container">
    <div className="map-btn-container">
      <button className={`map-btn ${isMapBtnHidden ? 'hide' : ''}`}>
        <div className="container">
          <span>
            {(isDesktop) ? 'Show map' : 'Map'}
          </span>
          <MapIconSvg />
        </div>
      </button>
    </div>
    {(isDesktop) ? <MainFooter /> : <MobileMainFooter />}

  </section>)
}

