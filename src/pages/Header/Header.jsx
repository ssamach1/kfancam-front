import { Link, Outlet, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionTitle,
  AccordionWrapper,
  FuckingPoloska,
  GroupName,
  HeaderLinkList,
  HeaderLinksGroup,
  Wrapper,
  // IdolAccordion,
  // IdolName,
} from "./styled";
import { useState } from "react";
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
import getGroupConsts from "../../helpers/getGroupConsts";

const Header = () => {
  const [firstLinksActive, setFirstLinksActive] = useState(false);
  const [secondLinksActive, setSecondLinksActive] = useState(false);
  const [thirdLinksActive, setThirdLinksActive] = useState(false);

  // const [aespaLinksActive, aespaSetLinksActive] = useState(false);
  // const [babymonsterLinksActive, babymonsterSetLinksActive] = useState(false);
  // const [fromis_9LinksActive, fromis_9SetLinksActive] = useState(false);
  // const [gidleLinksActive, gidleSetLinksActive] = useState(false);
  // const [illitLinksActive, illitSetLinksActive] = useState(false);
  // const [itzyLinksActive, itzySetLinksActive] = useState(false);
  // const [iveLinksActive, iveSetLinksActive] = useState(false);
  // const [kissoflifeLinksActive, kissoflifeSetLinksActive] = useState(false);
  // const [lesserafimLinksActive, lesserafimSetLinksActive] = useState(false);
  // const [newjeansLinksActive, newjeansSetLinksActive] = useState(false);
  // const [nmixxLinksActive, nmixxSetLinksActive] = useState(false);
  // const [staycLinksActive, staycSetLinksActive] = useState(false);

  const { groupName } = useParams();
  let gradient;
  if (groupName) [, , , gradient] = getGroupConsts(groupName);

  const hoverAndClickLinksActive = (string) => {
    setTimeout(() => {
      if (string === `first`) setFirstLinksActive(true);
      if (string === `second`) setSecondLinksActive(true);
      if (string === `third`) setThirdLinksActive(true);
      // if (string === `aespa`) aespaSetLinksActive(true);
      // if (string === `babymonster`) babymonsterSetLinksActive(true);
      // if (string === `fromis_9`) fromis_9SetLinksActive(true);
      // if (string === `gidle`) gidleSetLinksActive(true);
      // if (string === `illit`) illitSetLinksActive(true);
      // if (string === `itzy`) itzySetLinksActive(true);
      // if (string === `ive`) iveSetLinksActive(true);
      // if (string === `kissoflife`) kissoflifeSetLinksActive(true);
      // if (string === `lesserafim`) lesserafimSetLinksActive(true);
      // if (string === `newjeans`) newjeansSetLinksActive(true);
      // if (string === `nmixx`) nmixxSetLinksActive(true);
      // if (string === `stayc`) staycSetLinksActive(true);
    }, 200);
  };

  const hoverAndClickLinksInactive = (string) => {
    if (string === `first`) setFirstLinksActive(false);
    if (string === `second`) setSecondLinksActive(false);
    if (string === `third`) setThirdLinksActive(false);
    // if (string === `aespa`) aespaSetLinksActive(false);
    // if (string === `babymonster`) babymonsterSetLinksActive(false);
    // if (string === `fromis_9`) fromis_9SetLinksActive(false);
    // if (string === `gidle`) gidleSetLinksActive(false);
    // if (string === `illit`) illitSetLinksActive(false);
    // if (string === `itzy`) itzySetLinksActive(false);
    // if (string === `ive`) iveSetLinksActive(false);
    // if (string === `kissoflife`) kissoflifeSetLinksActive(false);
    // if (string === `lesserafim`) lesserafimSetLinksActive(false);
    // if (string === `newjeans`) newjeansSetLinksActive(false);
    // if (string === `nmixx`) nmixxSetLinksActive(false);
    // if (string === `stayc`) staycSetLinksActive(false);
  };

  const getGradientForPoloska = (gradient) => {
    if (gradient) {
      gradient = gradient.match(/,(.*)/)[1];
      return `linear-gradient(to right, ${gradient}`;
    } else return `linear-gradient(to right, black, black)`;
  };

  return (
    <>
      <FuckingPoloska $gradient={getGradientForPoloska(gradient)} />
      <Wrapper>
        <HeaderLinksGroup $marginLeft={`10px`}>
          <HeaderLinkList>
            <AccordionTitle>2018-2020</AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`first`)}
              onClick={() => hoverAndClickLinksActive(`first`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`first`)}
            >
              <AccordionWrapper
                className={firstLinksActive ? `linksActive child` : "child"}
              >
                <Link className={`link`} to={"group/fromis_9"}>
                  <GroupName
                    $backgroundImage={Supersonic}
                    $color={`white`}
                    $padding={`5px 15px`}
                    $fontWeight={550}
                    $textAlign={`start`}
                    $fontSize={`1.6rem`}
                    $brightness={`65%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    fromis_9
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/gidle"}>
                  <GroupName
                    $backgroundImage={GIDLE_I_Sway}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    (G)I-DLE
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/itzy"}>
                  <GroupName
                    $backgroundImage={ITZY_Gold}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.8rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    ITZY
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/stayc"}>
                  <GroupName
                    $backgroundImage={STAYC_L}
                    $color={`black`}
                    $fontWeight={600}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`100%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    STAYC
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/aespa"}>
                  <GroupName
                    $backgroundImage={Aespa_Whiplash}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`2rem`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    aespa
                  </GroupName>
                </Link>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
          <HeaderLinkList>
            <AccordionTitle>2021-2022</AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`second`)}
              onClick={() => hoverAndClickLinksActive(`second`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`second`)}
            >
              <AccordionWrapper
                className={secondLinksActive ? `linksActive child` : "child"}
              >
                <Link className={`link`} to={"group/ive"}>
                  <GroupName
                    $backgroundImage={IVE_Empathy}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={600}
                    $fontSize={`1.6rem`}
                    $brightness={`85%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    IVE
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/nmixx"}>
                  <GroupName
                    $backgroundImage={NMIXX_Fe3O4_Stick_Out}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={600}
                    $fontSize={`1.6rem`}
                    $brightness={`85%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    NMIXX
                  </GroupName>
                </Link>
                <Link className={`link le_sserafim`} to={"group/lesserafim"}>
                  <GroupName
                    $backgroundImage={LSF_CRAZY}
                    $color={`black`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={650}
                    $fontSize={`1.5rem`}
                    $brightness={`95%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    LE SSERAFIM
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/newjeans"}>
                  <GroupName
                    $backgroundImage={NewJeans_Supernatural}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={600}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`60%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    NewJeans
                  </GroupName>
                </Link>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
          <HeaderLinkList>
            <AccordionTitle>2023-2024</AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`third`)}
              onClick={() => hoverAndClickLinksActive(`third`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`third`)}
            >
              <AccordionWrapper
                className={
                  thirdLinksActive
                    ? `linksActive child lastAccordion`
                    : "child lastAccordion"
                }
              >
                <Link className={`link`} to={"group/illit"}>
                  <GroupName
                    $backgroundImage={Almond_Chocolate}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={550}
                    $fontSize={`1.8rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    ILLIT
                  </GroupName>
                </Link>
                <Link className={`link`} to={"group/kissoflife"}>
                  <GroupName
                    $backgroundImage={KISS_OF_LIFE_Lose_Yourself}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={550}
                    $fontSize={`1.7rem`}
                    $textAlign={`center`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    KISS OF LIFE
                  </GroupName>
                </Link>
                <Link className={`link lastLink`} to={"group/babymonster"}>
                  <GroupName
                    $backgroundImage={BABYMONSTER_DRIP}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={550}
                    $fontSize={`1.6rem`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                    className="test"
                  >
                    BABYMONSTER
                  </GroupName>
                </Link>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
        </HeaderLinksGroup>
        <HeaderLinksGroup $marginRight={`10px`}>
          <Link
            style={{ color: `black`, fontSize: `1.1rem` }}
            to={"/group/allgroups"}
          >
            All Groups
          </Link>
          <Link style={{ color: `black`, fontSize: `1.1rem` }} to={"info"}>
            Info
          </Link>
        </HeaderLinksGroup>
        {/* <HeaderLinksGroup className="idols" $marginRight={`10px`}>
          <HeaderLinkList>
            <AccordionTitle $color={`rgba(0, 0, 0, 0.1)`}>
              2018-2020
            </AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`first`)}
              onClick={() => hoverAndClickLinksActive(`first`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`first`)}
            >
              <AccordionWrapper
                className={firstLinksActive ? `linksActive child` : "child"}
              >
                <Link className={`link`} to={"group/fromis_9"}>
                  <GroupName
                    $backgroundImage={Supersonic}
                    $color={`white`}
                    $padding={`5px 15px`}
                    $fontWeight={550}
                    $textAlign={`start`}
                    $fontSize={`1.6rem`}
                    $brightness={`65%`}
                    $pointerEvents={`none`}
                  >
                    fromis_9
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`fromis_9`)}
                  onClick={() => hoverAndClickLinksActive(`fromis_9`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`fromis_9`)}
                  $top={`0rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      fromis_9LinksActive
                        ? `linksActive idolChild`
                        : "idolChild"
                    }
                    $top={`0rem`}
                    $left={`8.25rem`}
                  >
                    <Link className={`link`} to={"idol/saerom"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Saerom
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/hayoung"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Hayoung
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/jiwon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Jiwon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/jisun"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Jisun
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/seoyeon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Seoyeon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/chaeyoung"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Chaeyoung
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/nagyung"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Nagyung
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/jiheon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Jiheon
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/gidle"}>
                  <GroupName
                    $backgroundImage={GIDLE_I_Sway}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                  >
                    (G)I-DLE
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`gidle`)}
                  onClick={() => hoverAndClickLinksActive(`gidle`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`gidle`)}
                  $top={`2.6rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      gidleLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-2.5rem`}
                    $left={`8.25rem`}
                  >
                    <Link className={`link`} to={"idol/miyeon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Miyeon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/minnie"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Minnie
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/soyeon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Soyeon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/yuqi"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yuqi
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/shuhua"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Shuhua
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/itzy"}>
                  <GroupName
                    $backgroundImage={ITZY_Gold}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.8rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                  >
                    ITZY
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`itzy`)}
                  onClick={() => hoverAndClickLinksActive(`itzy`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`itzy`)}
                  $top={`5.2rem`}
                  $height={`2.8rem`}
                >
                  <AccordionWrapper
                    className={
                      itzyLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-5rem`}
                    $left={`8.25rem`}
                  >
                    <Link className={`link`} to={"idol/yeji"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yeji
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/lia"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Lia
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/ryujin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Ryujin
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/chaeryeong"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Chaeryeong
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/yuna"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yuna
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/stayc"}>
                  <GroupName
                    $backgroundImage={STAYC_L}
                    $color={`black`}
                    $fontWeight={600}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`100%`}
                    $pointerEvents={`none`}
                  >
                    STAYC
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`stayc`)}
                  onClick={() => hoverAndClickLinksActive(`stayc`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`stayc`)}
                  $top={`8rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      staycLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-8rem`}
                    $left={`8.25rem`}
                  >
                    <Link className={`link`} to={"idol/sumin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Sumin
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/sieun"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Sieun
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/isa"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Isa
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/seeun"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Seeun
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/yoon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yoon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/j"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        J
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/aespa"}>
                  <GroupName
                    $backgroundImage={Aespa_Whiplash}
                    $color={`white`}
                    $fontWeight={550}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontSize={`2rem`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                  >
                    aespa
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`aespa`)}
                  onClick={() => hoverAndClickLinksActive(`aespa`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`aespa`)}
                  $top={`10.6rem`}
                  $height={`3rem`}
                >
                  <AccordionWrapper
                    className={
                      aespaLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-5.5rem`}
                    $left={`8.25rem`}
                  >
                    <Link className={`link`} to={"idol/karina"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Karina
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/giselle"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Giselle
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/winter"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Winter
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/ningning"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Ningning
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
          <HeaderLinkList>
            <AccordionTitle $color={`rgba(0, 0, 0, 0.1)`}>
              2021-2022
            </AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`second`)}
              onClick={() => hoverAndClickLinksActive(`second`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`second`)}
            >
              <AccordionWrapper
                className={secondLinksActive ? `linksActive child` : "child"}
              >
                <Link className={`link`} to={"group/ive"}>
                  <GroupName
                    $backgroundImage={IVE_Empathy}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={600}
                    $fontSize={`1.6rem`}
                    $brightness={`85%`}
                    $pointerEvents={`none`}
                  >
                    IVE
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`ive`)}
                  onClick={() => hoverAndClickLinksActive(`ive`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`ive`)}
                  $top={`0rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      iveLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`0rem`}
                    $left={`-11rem`}
                  >
                    <Link className={`link`} to={"idol/gaeul"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Gaeul
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/anyujin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        An Yujin
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/rei"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Rei
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/wonyoung"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Wonyoung
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/liz"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Liz
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/leeseo"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Leeseo
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/nmixx"}>
                  <GroupName
                    $backgroundImage={NMIXX_Fe3O4_Stick_Out}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={600}
                    $fontSize={`1.6rem`}
                    $brightness={`85%`}
                    $pointerEvents={`none`}
                  >
                    NMIXX
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`nmixx`)}
                  onClick={() => hoverAndClickLinksActive(`nmixx`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`nmixx`)}
                  $top={`2.6rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      nmixxLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-2.5rem`}
                    $left={`-11rem`}
                  >
                    <Link className={`link`} to={"idol/Lily"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Lily
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/haewon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Haewon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/sullyoon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Sullyoon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/bae"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Bae
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/jiwoo"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Jiwoo
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/kyujin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Kyujin
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/lesserafim"}>
                  <GroupName
                    $backgroundImage={LSF_CRAZY}
                    $color={`black`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={650}
                    $fontSize={`1.5rem`}
                    $brightness={`95%`}
                    $pointerEvents={`none`}
                  >
                    LE SSERAFIM
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`lesserafim`)}
                  onClick={() => hoverAndClickLinksActive(`lesserafim`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`lesserafim`)}
                  $top={`5.2rem`}
                  $height={`2.5rem`}
                >
                  <AccordionWrapper
                    className={
                      lesserafimLinksActive
                        ? `linksActive idolChild`
                        : "idolChild"
                    }
                    $top={`-5rem`}
                    $left={`-11rem`}
                  >
                    <Link className={`link`} to={"idol/sakura"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Sakura
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/kimchaewon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Chaewon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/yunjin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yunjin
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/kazuha"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Kazuha
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/eunchae"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Eunchae
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/newjeans"}>
                  <GroupName
                    $backgroundImage={NewJeans_Supernatural}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={600}
                    $textAlign={`center`}
                    $fontSize={`1.6rem`}
                    $brightness={`60%`}
                    $pointerEvents={`none`}
                  >
                    NewJeans
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`newjeans`)}
                  onClick={() => hoverAndClickLinksActive(`newjeans`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`newjeans`)}
                  $top={`7.6rem`}
                  $height={`2.6rem`}
                >
                  <AccordionWrapper
                    className={
                      newjeansLinksActive
                        ? `linksActive idolChild`
                        : "idolChild"
                    }
                    $top={`-7rem`}
                    $left={`-11rem`}
                  >
                    <Link className={`link`} to={"idol/minji"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Minji
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/hanni"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Hanni
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/danielle"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Danielle
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/haerin"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Haerin
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/hyein"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Hyein
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
          <HeaderLinkList>
            <AccordionTitle $color={`rgba(0, 0, 0, 0.1)`}>
              2023-2024
            </AccordionTitle>
            <Accordion
              onMouseEnter={() => hoverAndClickLinksActive(`third`)}
              onClick={() => hoverAndClickLinksActive(`third`)}
              onMouseLeave={() => hoverAndClickLinksInactive(`third`)}
            >
              <AccordionWrapper
                className={
                  thirdLinksActive
                    ? `linksActive child lastIdolAccordion`
                    : "child lastIdolAccordion"
                }
              >
                <Link className={`link`} to={"group/illit"}>
                  <GroupName
                    $backgroundImage={Almond_Chocolate}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $textAlign={`center`}
                    $fontWeight={550}
                    $fontSize={`1.8rem`}
                    $brightness={`80%`}
                    $pointerEvents={`none`}
                  >
                    ILLIT
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`illit`)}
                  onClick={() => hoverAndClickLinksActive(`illit`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`illit`)}
                  $top={`0`}
                  $height={`2.9rem`}
                >
                  <AccordionWrapper
                    className={
                      illitLinksActive ? `linksActive idolChild` : "idolChild"
                    }
                    $top={`-0.5rem`}
                    $left={`-13.5rem`}
                  >
                    <Link className={`link`} to={"idol/yunah"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Yunah
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/minju"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Minju
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/moka"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Moka
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/wonhee"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Wonhee
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/iroha"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Iroha
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link`} to={"group/kissoflife"}>
                  <GroupName
                    $backgroundImage={KISS_OF_LIFE_Lose_Yourself}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={550}
                    $fontSize={`1.7rem`}
                    $textAlign={`center`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                  >
                    KISS OF LIFE
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`kissoflife`)}
                  onClick={() => hoverAndClickLinksActive(`kissoflife`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`kissoflife`)}
                  $top={`2.9rem`}
                  $height={`2.7rem`}
                >
                  <AccordionWrapper
                    className={
                      kissoflifeLinksActive
                        ? `linksActive idolChild`
                        : "idolChild"
                    }
                    $top={`-3rem`}
                    $left={`-13.5rem`}
                  >
                    <Link className={`link`} to={"idol/julie"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Julie
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/natty"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Natty
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/belle"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Belle
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/haneul"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Haneul
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
                <Link className={`link lastLink`} to={"group/babymonster"}>
                  <GroupName
                    $backgroundImage={BABYMONSTER_DRIP}
                    $color={`white`}
                    $padding={`5px 10px`}
                    $fontWeight={550}
                    $fontSize={`1.6rem`}
                    $brightness={`90%`}
                    $pointerEvents={`none`}
                  >
                    BABYMONSTER
                  </GroupName>
                </Link>
                <IdolAccordion
                  onMouseEnter={() => hoverAndClickLinksActive(`babymonster`)}
                  onClick={() => hoverAndClickLinksActive(`babymonster`)}
                  onMouseLeave={() => hoverAndClickLinksInactive(`babymonster`)}
                  $top={`5.6rem`}
                >
                  <AccordionWrapper
                    className={
                      babymonsterLinksActive
                        ? `linksActive idolChild`
                        : "idolChild"
                    }
                    $top={`-6rem`}
                    $left={`-13.5rem`}
                  >
                    <Link className={`link`} to={"idol/ruka"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Ruka
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/pharita"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Pharita
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/asa"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Asa
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/ahyeon"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Ahyeon
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/rami"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Rami
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/rora"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Rora
                      </IdolName>
                    </Link>
                    <Link className={`link`} to={"idol/chiquita"}>
                      <IdolName
                        $color={`black`}
                        $padding={`5px 10px`}
                        $textAlign={`center`}
                        $fontWeight={600}
                        $fontSize={`1.6rem`}
                        $brightness={`85%`}
                      >
                        Chiquita
                      </IdolName>
                    </Link>
                  </AccordionWrapper>
                </IdolAccordion>
              </AccordionWrapper>
            </Accordion>
          </HeaderLinkList>
        </HeaderLinksGroup> */}
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Header;
