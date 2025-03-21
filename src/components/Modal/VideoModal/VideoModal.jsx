import { Link } from "react-router-dom";

import { ModalStatChild } from "../ModalStatChild/ModalStatChild";
import YouTube from "react-youtube";
import LoadingModal from "../LoadingModal/LoadingModal";
import { Z_INDEX_1 } from "consts/general";
import React, { useEffect, useState } from "react";
import { Tooltip, TooltipContent } from "components/VideoCard/styled";
import { getFormattedToPercent } from "helpers/getFormattedToPercent";
import { getEmojiByNameAndGroup } from "helpers/getEmojiByNameAndGroup";
import { t } from "i18next";
import {
  ModalBody,
  ModalContent,
  ModalDescBlock,
  ModalDescElement,
  ModalDescGridWrapper,
  ModalHeadBlock,
  ModalLinkWrapper,
  ModalRatioFlexWrapper,
  ModalRatioWrapper,
  ModalStatsAccordion,
  ModalStatsAccordionWrapper,
  ModalTitle,
  StyledModal,
  YoutubeWrapper,
  ModalDesc,
  ModalTagsWrapper,
} from "./styled";

const VideoModal = React.memo(({ children, ...props }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <StyledModal
      $modalActive={props.active}
      onClick={() => {
        props.setActive(false);
      }}
    >
      <LoadingModal
        active={false}
        setActive={props.setYoutubePlayerLoading}
        minHeight={`450px`}
        zIndex={Z_INDEX_1}
      >
        {children}
      </LoadingModal>
      <ModalContent
        $width={width}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalBody>
          {props.modal.youtubeUrl ? (
            <YoutubeWrapper $youtubePlayerLoading={props.youtubePlayerLoading}>
              {/* <YouTube
                onReady={() => {
                  props.setYoutubePlayerFistTimeLoading(true);
                  props.setYoutubePlayerLoading(false);
                }}
                videoId={props.modal.youtubeUrl.match(/[^\/]*$/gi)[0]} //eslint-disable-line
                opts={
                  width > 1400
                    ? { height: 360, width: 640 }
                    : width < 870
                    ? { height: (width * 0.75 * 9) / 16, width: width * 0.75 }
                    : { height: 360, width: 640 }
                }
              /> */}
            </YoutubeWrapper>
          ) : (
            ""
          )}
          <ModalDesc
            $idolEmoji={getEmojiByNameAndGroup(
              props.modal.name,
              props.modal.siteTags
            )}
          >
            <ModalDescBlock>
              <ModalHeadBlock>
                <ModalTitle>
                  <ModalLinkWrapper>
                    <Link to={props.modal.youtubeUrl}>{props.modal.title}</Link>
                  </ModalLinkWrapper>
                </ModalTitle>
                <ModalDescGridWrapper>
                  {props.modal.publishedAt ? (
                    <ModalDescElement>
                      {t("videoModal.publicationDate")}:{" "}
                      <time dateTime={props.modal.publishedAt}>
                        {props.modal.publishedAt.match(/^[^T]*/gi)[0]}
                      </time>
                    </ModalDescElement>
                  ) : (
                    ""
                  )}
                  <ModalDescElement style={{ display: `flex` }}>
                    {t("videoModal.channel")}:
                    <Link
                      style={{ padding: `5px`, margin: `-5px` }}
                      to={`https://www.youtube.com/channel/${props.modal.channelId}`}
                    >
                      <ModalLinkWrapper style={{ marginLeft: `5px` }}>
                        {props.modal.channelTitle}
                      </ModalLinkWrapper>
                    </Link>
                  </ModalDescElement>
                </ModalDescGridWrapper>
              </ModalHeadBlock>
            </ModalDescBlock>
            <ModalDescBlock>
              <ModalRatioFlexWrapper>
                <ModalRatioWrapper>
                  <ModalDescElement>
                    {t("videoModal.viewsCount")}: {props.modal.viewCount}
                  </ModalDescElement>
                  <ModalDescElement>
                    {t("videoModal.likesCount")}: {props.modal.likeCount}
                  </ModalDescElement>
                </ModalRatioWrapper>
                <ModalRatioWrapper>
                  <ModalDescElement>
                    {t("videoModal.commentCount")}: {props.modal.commentCount}
                  </ModalDescElement>
                  <ModalDescElement>
                    {t("videoModal.viewsLikeRatio")}:{" "}
                    {props.modal.viewLikeRatio}
                  </ModalDescElement>
                </ModalRatioWrapper>
              </ModalRatioFlexWrapper>
            </ModalDescBlock>
            <ModalDescBlock>
              {props.modal.averageIdolRatio ? (
                <ModalRatioFlexWrapper>
                  <ModalRatioWrapper>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-50px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.averageIdolTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Average idol:{" "}
                        {getFormattedToPercent(
                          props.modal.averageIdolRatio,
                          true
                        )}
                        %
                      </ModalDescElement>
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-20px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.averageIdolSongTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Average idol+song:{" "}
                        {getFormattedToPercent(
                          props.modal.averageIdolSongRatio,
                          true
                        )}
                        %
                      </ModalDescElement>
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-20px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.averagePerfomanceTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Average perfomance:{" "}
                        {getFormattedToPercent(
                          props.modal.averagePerfomanceRatio,
                          true
                        )}
                        %
                      </ModalDescElement>
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-40px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.averageSongTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Average song:{" "}
                        {getFormattedToPercent(
                          props.modal.averageSongRatio,
                          true
                        )}
                        %
                      </ModalDescElement>
                    </Tooltip>
                  </ModalRatioWrapper>
                  <ModalRatioWrapper>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-60px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.totalIdolTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Total idol:{" "}
                        {getFormattedToPercent(
                          props.modal.totalIdolRatio,
                          false
                        )}
                        %
                      </ModalDescElement>{" "}
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-50px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.totalIdolSongTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Total idol+song:{" "}
                        {getFormattedToPercent(
                          props.modal.totalIdolSongRatio,
                          false
                        )}
                        %
                      </ModalDescElement>{" "}
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-30px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.totalPerfomanceTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Total perfomance:{" "}
                        {getFormattedToPercent(
                          props.modal.totalPerfomanceRatio,
                          false
                        )}
                        %
                      </ModalDescElement>{" "}
                    </Tooltip>
                    <Tooltip>
                      <TooltipContent
                        $padding={`10px`}
                        $width={`300px`}
                        $marginLeft={`-40px`}
                        $marginBottom={`0`}
                        className="tooltip"
                      >
                        {t("videoModal.totalSongTooltip")}
                      </TooltipContent>
                      <ModalDescElement>
                        Total song:{" "}
                        {getFormattedToPercent(
                          props.modal.totalSongRatio,
                          false
                        )}
                        %
                      </ModalDescElement>{" "}
                    </Tooltip>
                  </ModalRatioWrapper>
                </ModalRatioFlexWrapper>
              ) : (
                ""
              )}
            </ModalDescBlock>
            <ModalDescElement>
              {t("videoModal.updated")}: {props.modal.updated}
            </ModalDescElement>
            <div style={{ margin: `5px 0px` }}></div>
            <ModalTagsWrapper>
              {props.modal.siteTags && props.cookieCheck
                ? props.modal.siteTags.map((tag, index) => {
                    return <div key={index}>{tag}</div>;
                  })
                : ""}
            </ModalTagsWrapper>
          </ModalDesc>
        </ModalBody>
        <ModalStatsAccordionWrapper>
          <ModalStatsAccordion className="child">
            {props.modal.statsByDate
              ? props.modal.statsByDate.map((date) => (
                  <ModalStatChild date={date} />
                ))
              : ""}
          </ModalStatsAccordion>
        </ModalStatsAccordionWrapper>
      </ModalContent>
    </StyledModal>
  );
});

export default VideoModal;
