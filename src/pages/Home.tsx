import { SecondaryHeader } from "../cmps/SecondaryHeader";
import { MainFooterContainer } from "../cmps/MainFooterContainer";
import { useEffect, useState } from "react";
import { MainHeader } from "../cmps/MainHeader";
import { MobileMainHeader } from "../cmps/MobileMainHeader";
import { MobileSecondaryHeader } from "../cmps/MobileSecondaryHeader";


export const Home = () => {
  const desktopMinWidth = 744
  const [isDesktop, setDesktop] = useState(window.innerWidth >= desktopMinWidth)

  const updateMedia = () => {
    setDesktop(window.innerWidth > desktopMinWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });



  return (
    <>
      {(isDesktop) ? <MainHeader /> : <MobileMainHeader />}
      {(isDesktop) ? <SecondaryHeader /> : <MobileSecondaryHeader />}
      <main className="home-page">
      </main>
      <MainFooterContainer isDesktop={isDesktop} />
    </>
  );
}
