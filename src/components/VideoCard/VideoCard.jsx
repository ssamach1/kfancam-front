import {
  CardDescInfo,
  CardDescStat,
  CardDescFlex,
  CardMain,
  CardTitle,
  NotOverlappingDiv,
  Source,
  Thumbnail,
  Tooltip,
  TooltipContent,
  Wrapper,
  Tag,
  TagWrapper,
  SourceChannel,
  CookieDeletionButton,
  CardDescInfoWrapper,
  RegionRestrictionWrapper,
} from "./styled";
import { Link } from "react-router-dom";
import axios from "axios";
import { SITE_TAGS_ARRAY_0 } from "../../consts/general";
import {
  IdolSongTagSvg,
  IdolTagSvg,
  PerfomanceTagSvg,
  SongTagSvg,
} from "../../icons/SiteTags";
import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { getFormattedToPercent } from "../../helpers/getFormattedToPercent";
import { getEmojiByNameAndGroup } from "../../helpers/getEmojiByNameAndGroup";
import i18next, { t } from "i18next";
import {
  DollarCoin,
  JapaneseFlag,
  RussianFlag,
  SouthKoreanFlag,
} from "../../icons/RegionRestrictions";
import {
  countWords,
  deleteVideo,
  formatNumberEN,
  formatNumberRU,
  formatVideoUploadDateEN,
  formatVideoUploadDateRU,
  getFormattedChannelTitle,
  officialSimpleFancamCheck,
  perfomanceAndSongStatPainter,
  viewLikeRatioPainter,
} from "./VideoCardFunctions";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const VideoCard = ({ ...props }) => {
  const observedTumbnail = useRef();
  const observer = useRef();
  const [observed, setObserved] = useState(false);
  let channelTitle = getFormattedChannelTitle(
    props.channelTitle,
    props.siteTags
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if (entries[0].isIntersecting && observer) {
        setObserved(true);
        observer.current.disconnect();
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(observedTumbnail.current);
  }, []);

  return (
    <Wrapper
      $idolEmoji={getEmojiByNameAndGroup(props.name, props.siteTags)}
      onClick={async () => {
        const response = await axios.get(
          `${BACKEND_URL}/videos/getVideo?url=${props.youtubeUrl}`
        );
        props.setModal(response.data);
        props.setModalActive(true);
        props.setYoutubePlayerLoading(
          props.youtubePlayerFistTimeLoading ? false : true
        );
      }}
    >
      <Link ref={observedTumbnail} to={props.youtubeUrl}>
        {observed ? (
          <Thumbnail $thumbnail={props.thumbnail} />
        ) : (
          <Skeleton width={354} height={200} />
        )}
      </Link>
      <CardMain>
        {props.siteTags.includes("perfomance") ? (
          <>
            <Source>
              <Link to={`https://www.youtube.com/channel/${props.channelId}`}>
                {channelTitle.length >= 9 && countWords(channelTitle) > 1 ? (
                  <SourceChannel $width={`80px`}>{channelTitle}</SourceChannel>
                ) : (
                  <SourceChannel>{channelTitle}</SourceChannel>
                )}
              </Link>
            </Source>
            {channelTitle.length >= 9 && countWords(channelTitle) > 1 ? (
              <NotOverlappingDiv $paddingLeft={`80px`} $paddingBottom={`30px`}>
                &nbsp;
              </NotOverlappingDiv>
            ) : (
              <NotOverlappingDiv>&nbsp;</NotOverlappingDiv>
            )}
          </>
        ) : (props.siteTags.includes(`mostViewedIdol`) ||
            props.siteTags.includes(`mostViewedSong`) ||
            props.siteTags.includes(`mostViewedIdolSong`) ||
            props.siteTags.includes(`mostViewedPerfomance`)) &&
          (props.songsCount === 1 || props.songsCount === undefined) ? (
          <>
            <TagWrapper>
              {props.siteTags.includes(SITE_TAGS_ARRAY_0[0]) ? (
                <Tooltip>
                  <TooltipContent
                    $width={`auto`}
                    $marginLeft={`-96.5px`}
                    className="tooltip"
                    $left={`62%`}
                  >
                    {t("videoCard.siteTag0")}
                  </TooltipContent>
                  <Tag>
                    <IdolTagSvg />
                  </Tag>
                </Tooltip>
              ) : (
                ``
              )}
              {props.siteTags.includes(SITE_TAGS_ARRAY_0[1]) ? (
                <Tooltip>
                  <TooltipContent
                    $width={`auto`}
                    $marginLeft={`-96.5px`}
                    className="tooltip"
                    $left={`62%`}
                  >
                    {t("videoCard.siteTag1")}
                  </TooltipContent>
                  <Tag>
                    <SongTagSvg />
                  </Tag>
                </Tooltip>
              ) : (
                ``
              )}
              {props.siteTags.includes(SITE_TAGS_ARRAY_0[2]) ? (
                <Tooltip>
                  <TooltipContent
                    $width={`auto`}
                    $marginLeft={`-96.5px`}
                    className="tooltip"
                    $left={`62%`}
                  >
                    {t("videoCard.siteTag2")}
                  </TooltipContent>
                  <Tag>
                    <IdolSongTagSvg />
                  </Tag>
                </Tooltip>
              ) : (
                ``
              )}
              {props.siteTags.includes(SITE_TAGS_ARRAY_0[3]) ? (
                <Tooltip>
                  <TooltipContent
                    $width={`auto`}
                    $marginLeft={`-110px`}
                    className="tooltip"
                    $left={`70%`}
                  >
                    {t("videoCard.siteTag3")}
                  </TooltipContent>
                  <Tag>
                    <PerfomanceTagSvg />
                  </Tag>
                </Tooltip>
              ) : (
                ``
              )}
            </TagWrapper>
            {channelTitle.length <= 8 ? (
              <NotOverlappingDiv> &nbsp; </NotOverlappingDiv>
            ) : (
              <NotOverlappingDiv $paddingLeft={`80px`} $paddingBottom={`30px`}>
                &nbsp;
              </NotOverlappingDiv>
            )}
          </>
        ) : (
          ""
        )}

        <CardTitle $fancamCheck={officialSimpleFancamCheck(props.siteTags)}>
          {props.title}
        </CardTitle>

        <CardDescFlex>
          <CardDescInfoWrapper>
            <CardDescInfo>
              {i18next.language === `en-US` ? (
                <>
                  {formatNumberEN(props.viewCount)}
                  <br />
                </>
              ) : (
                formatNumberRU(props.viewCount)
              )}
              {t("videoCard.views")}
            </CardDescInfo>
            <CardDescInfo
              style={{
                color: viewLikeRatioPainter(
                  props.viewLikeRatio,
                  props.siteTags,
                  props.songsCount || props.songsCount === undefined
                ),
              }}
            >
              {t("videoCard.likes")}: <br></br> {props.likeCount}
            </CardDescInfo>
            <CardDescInfo>
              {i18next.language === `en-US`
                ? formatVideoUploadDateEN(props.publishedAt)
                : formatVideoUploadDateRU(props.publishedAt)}
            </CardDescInfo>
          </CardDescInfoWrapper>
        </CardDescFlex>
        <CardDescStat>
          {props.averageIdolSongRatio > 1 &&
          officialSimpleFancamCheck(props.siteTags) &&
          (props.songsCount === 1 || props.songsCount === undefined) ? (
            <Tooltip>
              <TooltipContent
                $padding={`10px`}
                $marginLeft={`-75px`}
                className="tooltip"
              >
                {t("videoCard.tooltipStats1")}
              </TooltipContent>
              <div
                style={{
                  textAlign: `center`,
                  color: perfomanceAndSongStatPainter(
                    getFormattedToPercent(props.averageIdolSongRatio, true)
                  ),
                }}
              >
                {t("videoCard.song")} <br></br>+
                {getFormattedToPercent(props.averageIdolSongRatio, true)}%
              </div>
            </Tooltip>
          ) : officialSimpleFancamCheck(props.siteTags) &&
            (props.songsCount === 1 || props.songsCount === undefined) ? (
            <Tooltip>
              <TooltipContent
                $padding={`10px`}
                $marginLeft={`-75px`}
                className="tooltip"
              >
                {t("videoCard.tooltipStats1")}
              </TooltipContent>
              <div
                style={{
                  textAlign: `center`,
                  color: perfomanceAndSongStatPainter(
                    getFormattedToPercent(props.averageIdolSongRatio, true)
                  ),
                }}
              >
                {t("videoCard.song")} <br></br>
                {getFormattedToPercent(props.averageIdolSongRatio, true)}%
              </div>
            </Tooltip>
          ) : (
            ""
          )}
          {props.averagePerfomanceRatio > 1 &&
          officialSimpleFancamCheck(props.siteTags) &&
          (props.songsCount === 1 || props.songsCount === undefined) ? (
            <Tooltip>
              <TooltipContent
                $padding={`10px`}
                $marginLeft={`-30px`}
                className="tooltip"
              >
                {t("videoCard.tooltipStats2")}
              </TooltipContent>
              <div
                style={{
                  textAlign: `center`,
                  color: perfomanceAndSongStatPainter(
                    getFormattedToPercent(props.averagePerfomanceRatio, true)
                  ),
                }}
              >
                {t("videoCard.perfomance")} <br></br>+
                {getFormattedToPercent(props.averagePerfomanceRatio, true)}%
              </div>
            </Tooltip>
          ) : officialSimpleFancamCheck(props.siteTags) &&
            (props.songsCount === 1 || props.songsCount === undefined) ? (
            <Tooltip>
              <TooltipContent
                $padding={`10px`}
                $marginLeft={`-30px`}
                className="tooltip"
              >
                {t("videoCard.tooltipStats2")}
              </TooltipContent>
              <div
                style={{
                  textAlign: `center`,
                  color: perfomanceAndSongStatPainter(
                    getFormattedToPercent(props.averagePerfomanceRatio, true)
                  ),
                }}
              >
                {t("videoCard.perfomance")} <br></br>
                {getFormattedToPercent(props.averagePerfomanceRatio, true)}%
              </div>
            </Tooltip>
          ) : (
            ""
          )}
        </CardDescStat>
      </CardMain>
      {props.cookieCheck ? (
        <CookieDeletionButton onClick={(e) => deleteVideo(e, props.youtubeUrl)}>
          X
        </CookieDeletionButton>
      ) : (
        ""
      )}
      <RegionRestrictionWrapper>
        {props.regionRestriction?.blocked?.includes(`JP`) ||
        (props.regionRestriction?.allowed &&
          !props.regionRestriction?.allowed?.includes(`JP`)) ? (
          <Tooltip>
            <TooltipContent
              $width={`auto`}
              $marginLeft={`-100px`}
              className="tooltip"
              $left={`62%`}
            >
              {t("videoCard.tooltipRestrictionJapan")}
            </TooltipContent>
            <Tag>
              <JapaneseFlag />
            </Tag>
          </Tooltip>
        ) : (
          ""
        )}
        {props.regionRestriction?.blocked?.includes(`KR`) ||
        (props.regionRestriction?.allowed &&
          !props.regionRestriction?.allowed?.includes(`KR`)) ? (
          <Tooltip>
            <TooltipContent
              $width={`auto`}
              $marginLeft={`-100px`}
              className="tooltip"
              $left={`62%`}
            >
              {t("videoCard.tooltipRestrictionSK")}
            </TooltipContent>
            <Tag>
              <SouthKoreanFlag />
            </Tag>
          </Tooltip>
        ) : (
          ``
        )}
        {props.regionRestriction?.blocked?.includes(`RU`) ||
        (props.regionRestriction?.allowed &&
          !props.regionRestriction?.allowed?.includes(`RU`)) ? (
          <Tooltip>
            <TooltipContent
              $width={`auto`}
              $marginLeft={`-100px`}
              className="tooltip"
              $left={`62%`}
            >
              {t("videoCard.tooltipRestrictionRussia")}
            </TooltipContent>
            <Tag>
              <RussianFlag />
            </Tag>
          </Tooltip>
        ) : (
          ``
        )}
        {props.viewCount === 1 && props.viewLikeRatio === 1 ? (
          <Tooltip>
            <TooltipContent
              $width={`auto`}
              $marginLeft={`-100px`}
              className="tooltip"
              $left={`62%`}
            >
              {t("videoCard.tooltipRestrictionPaywall")}
            </TooltipContent>
            <Tag>
              <DollarCoin />
            </Tag>
          </Tooltip>
        ) : (
          ``
        )}
      </RegionRestrictionWrapper>
    </Wrapper>
  );
};

export default VideoCard;
