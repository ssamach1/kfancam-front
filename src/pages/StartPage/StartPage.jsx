import "./style.css";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Aespa_Whiplash from "../StartPageAndHeaderImages/Aespa_Whiplash.webp";
import BABYMONSTER_DRIP from "../StartPageAndHeaderImages/BABYMONSTER_DRIP.webp";
import GIDLE_I_Sway from "../StartPageAndHeaderImages/GIDLE_I_Sway.webp";
import ITZY_Gold from "../StartPageAndHeaderImages/ITZY_Gold.webp";
import IVE_Empathy from "../StartPageAndHeaderImages/IVE_Empathy.webp";
import KISS_OF_LIFE_Lose_Yourself from "../StartPageAndHeaderImages/KISS_OF_LIFE_Lose_Yourself.webp";
import LSF_CRAZY from "../StartPageAndHeaderImages/LSF_CRAZY.webp";
import NewJeans_Supernatural from "../StartPageAndHeaderImages/NewJeans_Supernatural.webp";
import NMIXX_Fe3O4_Stick_Out from "../StartPageAndHeaderImages/NMIXX_Fe3O4_Stick_Out.webp";
import STAYC_L from "../StartPageAndHeaderImages/STAYC_L.webp";
import Supersonic from "../StartPageAndHeaderImages/Supersonic.webp";
import Almond_Chocolate from "../StartPageAndHeaderImages/ILLIT_Almond_Chocolate.webp";
import STAYC from "../StartPageAndHeaderImages/STAYC_COMEBACK.webp";
import NMIXX from "../StartPageAndHeaderImages/NMIXX_COMEBACK.jpg";
import LE_SSERAFIM from "../StartPageAndHeaderImages/LE_SSERAFIM_COMEBACK.webp";

import {
  Wrapper,
  HeaderLinkList,
  AccordionTitle,
  Accordion,
  AccordionWrapper,
  GroupName,
  StartPageGigaImage,
} from "./styled";

const StartPage = () => {
  const [firstLinksActive, setFirstLinksActive] = useState(false);
  const [secondLinksActive, setSecondLinksActive] = useState(false);
  const [thirdLinksActive, setThirdLinksActive] = useState(false);

  const hoverAndClickLinksActive = (string) => {
    setTimeout(() => {
      if (string === `first`) setFirstLinksActive(true);
      if (string === `second`) setSecondLinksActive(true);
      if (string === `third`) setThirdLinksActive(true);
    }, 300);
  };

  const hoverAndClickLinksInactive = (string) => {
    if (string === `first`) setFirstLinksActive(false);
    if (string === `second`) setSecondLinksActive(false);
    if (string === `third`) setThirdLinksActive(false);
  };

  const options = [
    {
      img: STAYC,
      color: "white",
      brightness: `60%`,
      backgroundPosition: `top`,
      blur: `0.75px`,
      borderBottom: `2px solid white`,
    },
    {
      img: NMIXX,
      color: "white",
      brightness: `60%`,
      backgroundPosition: `bottom`,
      blur: `0.5px`,
      borderBottom: `2px solid white`,
    },
    {
      img: LE_SSERAFIM,
      color: "white",
      brightness: `60%`,
      backgroundPosition: `bottom`,
      blur: `0px`,
      borderBottom: `2px solid white`,
    },
  ];

  const { img, color, brightness, backgroundPosition, blur, borderBottom } =
    useMemo(() => options[Math.floor(Math.random() * options.length)], []);

  return (
    <>
      <Wrapper>
        <HeaderLinkList $color={color} $borderBottom={borderBottom}>
          <AccordionTitle>2018-2020</AccordionTitle>
          <Accordion
            onMouseEnter={() => hoverAndClickLinksActive(`first`)}
            onClick={() => {
              hoverAndClickLinksActive(`first`);
            }}
            onMouseLeave={() => hoverAndClickLinksInactive(`first`)}
            $top={`20%`}
            $left={`0%`}
          >
            <AccordionWrapper
              className={
                firstLinksActive
                  ? `linksActive child firstAccordion`
                  : "child firstAccordion"
              }
            >
              <Link className={`link`} to={"group/fromis_9"}>
                <GroupName
                  $backgroundImage={Supersonic}
                  $color={`white`}
                  $fontWeight={600}
                  $textAlign={`start`}
                  $fontSize={`2rem`}
                  $brightness={`65%`}
                  $pointerEvents={`none`}
                >
                  fromis_9
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/gidle"}>
                <GroupName
                  $backgroundImage={GIDLE_I_Sway}
                  $color={`white`}
                  $fontWeight={600}
                  $textAlign={`center`}
                  $fontSize={`1.8rem`}
                  $brightness={`80%`}
                  $pointerEvents={`none`}
                >
                  (G)I-DLE
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/itzy"}>
                <GroupName
                  $backgroundImage={ITZY_Gold}
                  $color={`white`}
                  $fontWeight={600}
                  $textAlign={`start`}
                  $fontSize={`2.2rem`}
                  $brightness={`80%`}
                  $pointerEvents={`none`}
                >
                  ITZY
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/stayc"}>
                <GroupName
                  $backgroundImage={STAYC_L}
                  $color={`black`}
                  $fontWeight={650}
                  $textAlign={`center`}
                  $fontSize={`2rem`}
                  $brightness={`100%`}
                  $pointerEvents={`none`}
                >
                  STAYC
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/aespa"}>
                <GroupName
                  $backgroundImage={Aespa_Whiplash}
                  $color={`white`}
                  $fontWeight={600}
                  $textAlign={`center`}
                  $fontSize={`2.5rem`}
                  $brightness={`90%`}
                  $pointerEvents={`none`}
                >
                  aespa
                </GroupName>
              </Link>
            </AccordionWrapper>
          </Accordion>
        </HeaderLinkList>
        <HeaderLinkList $color={color} $borderBottom={borderBottom}>
          <AccordionTitle>2021-2022</AccordionTitle>
          <Accordion
            onMouseEnter={() => hoverAndClickLinksActive(`second`)}
            onClick={() => {
              hoverAndClickLinksActive(`second`);
            }}
            onMouseLeave={() => hoverAndClickLinksInactive(`second`)}
          >
            <AccordionWrapper
              className={
                secondLinksActive
                  ? `linksActive secondAccordion child`
                  : "secondAccordion child"
              }
            >
              <Link className={`link`} to={"group/ive"}>
                <GroupName
                  $backgroundImage={IVE_Empathy}
                  $color={`white`}
                  $textAlign={`center`}
                  $fontWeight={700}
                  $fontSize={`1.8rem`}
                  $brightness={`85%`}
                >
                  IVE
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/nmixx"}>
                <GroupName
                  $backgroundImage={NMIXX_Fe3O4_Stick_Out}
                  $color={`white`}
                  $textAlign={`center`}
                  $fontWeight={700}
                  $fontSize={`1.8rem`}
                  $brightness={`85%`}
                >
                  NMIXX
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/lesserafim"}>
                <GroupName
                  $backgroundImage={LSF_CRAZY}
                  $color={`black`}
                  $textAlign={`center`}
                  $fontWeight={700}
                  $fontSize={`1.8rem`}
                >
                  LE SSERAFIM
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/newjeans"}>
                <GroupName
                  $backgroundImage={NewJeans_Supernatural}
                  $color={`white`}
                  $fontWeight={700}
                  $textAlign={`center`}
                  $fontSize={`2rem`}
                  $brightness={`60%`}
                >
                  NewJeans
                </GroupName>
              </Link>
            </AccordionWrapper>
          </Accordion>
        </HeaderLinkList>
        <HeaderLinkList $color={color} $borderBottom={borderBottom}>
          <AccordionTitle>2023-2024</AccordionTitle>
          <Accordion
            onMouseEnter={() => hoverAndClickLinksActive(`third`)}
            onClick={() => {
              hoverAndClickLinksActive(`third`);
            }}
            onMouseLeave={() => hoverAndClickLinksInactive(`third`)}
          >
            <AccordionWrapper
              className={
                thirdLinksActive
                  ? `linksActive thirdAccordion child`
                  : "thirdAccordion child"
              }
            >
              <Link className={`link`} to={"group/illit"}>
                <GroupName
                  $backgroundImage={Almond_Chocolate}
                  $color={`white`}
                  $textAlign={`center`}
                  $fontWeight={600}
                  $fontSize={`2rem`}
                  $brightness={`80%`}
                >
                  ILLIT
                </GroupName>
              </Link>
              <Link className={`link`} to={"group/kissoflife"}>
                <GroupName
                  $backgroundImage={KISS_OF_LIFE_Lose_Yourself}
                  $color={`white`}
                  $fontWeight={600}
                  $textAlign={`center`}
                  $brightness={`90%`}
                >
                  KISS OF LIFE
                </GroupName>
              </Link>
              <Link className={`link lastLink`} to={"group/babymonster"}>
                <GroupName
                  $backgroundImage={BABYMONSTER_DRIP}
                  $color={`white`}
                  $fontWeight={600}
                  $brightness={`90%`}
                >
                  BABYMONSTER
                </GroupName>
              </Link>
            </AccordionWrapper>
          </Accordion>
        </HeaderLinkList>
      </Wrapper>
      <StartPageGigaImage
        $backgroundImage={img}
        $brightness={brightness}
        $backgroundPosition={backgroundPosition}
        $blur={blur}
      />
    </>
  );
};

export default StartPage;
