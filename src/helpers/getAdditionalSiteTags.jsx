import { REGEX_BOUNDARIES } from "consts/general";
import officialCheck from "./officialCheck";

function getAdditionalSiteTags(videoTitle, channelId) {
  const title = videoTitle.toLowerCase();
  // eslint-disable-next-line
  const regexBoundaries = REGEX_BOUNDARIES;
  const years =
    "2027|2026|2025|2024|2023|2022|2021|2020|2019|2018|2017|2016|2015";
  const qualifiers = `4k|8k|\\.ver|ver`;

  const result = [];

  const faceCamTags = [
    `최애직캠`,
    `페이스캠`,
    `얼빡직캠`,
    `페이스캠4K`,
    `FaceCam`,
    `쇼챔 원픽캠`,
    `원픽캠`,
    `흰빽캠`,
    `입덕직캠`,
    `얼굴캠`,
    `Close-upCam`,
    `포커스캠`,
  ];

  const fullCamTags = [
    `FullCam`,
    `풀캠`,
    `안방1열 풀캠4K`,
    `풀캠4K`,
    `#예능연구소8K`,
  ];

  const choreographyTags = [
    `Stagegraphy`,
    `choreography video`,
    `choreography`,
    `선생님 안무`,
    `안무`,
    `Dance Practice`,
    `K-Choreo`,
  ];

  const universityTags = [
    `University`,
    `한양대학교`,
    `한양대학교 축제`,
    `한양대 학교`,
    `한양 대학교`,
    `한양대`,
    `Hanyang University`,
    `Hanyang`,
    `고려대학교`,
    `고려대학교 축제`,
    `고려 대학교`,
    `고려대 학교`,
    `고려대`,
    `Korea University`,
    `서강대학교`,
    `서강대학교 축제`,
    `서강대 학교`,
    `서강 대학교`,
    `서강대`,
    `Sogang University`,
    `Sogang`,
    `광운대학교`,
    `광운대학교 축제`,
    `광운대 학교`,
    `광운 대학교`,
    `광운대`,
    `Kwangwoon University`,
    `Kwangwoon`,
    `단국대학교`,
    `단국대학교 축제`,
    `단국대 학교`,
    `단국 대학교`,
    `단국대`,
    `Dankook University`,
    `Dankook`,
    `강남대학교`,
    `강남대학교 축제`,
    `강남대 학교`,
    `강남 대학교`,
    `강남대`,
    `Kangnam University`,
    `Kangnam`,
    `연세대학교`,
    `연세대학교 축제`,
    `연세대 학교`,
    `연세 대학교`,
    `연세대`,
    `Yonsei University`,
    `Yonsei University "Akaraka" Festival`,
    `Yonsei`,
    `YONSEI AKARAKA FESTIVAL`,
    `Yonsei`,
    `AKARAKA`,
    `아카라카`,
    `경희대학교`,
    `경희대학교 축제`,
    `경희대 학교`,
    `경희 대학교`,
    `경희대`,
    `국제캠퍼스`,
    `Kyung Hee University`,
    `Kyung Hee`,
    `광주대학교`,
    `광주대학교 축제`,
    `광주대 학교`,
    `광주 대학교`,
    `광주대`,
    `Gwangju National University`,
    `Gwangju University`,
    `Gwangju`,
    `구미대학교`,
    `구미대학교 축제`,
    `구미대 학교`,
    `구미 대학교`,
    `구미대`,
    `Gumi University`,
    `Gumi`,
    `숙명여자 대학교`,
    `숙명여자대학교 축제`,
    `숙명여대`,
    `숙명 여대`,
    `Sookmyung Women's University`,
    `Sookmyung Womens University`,
    `Sookmyung Women University`,
    `동명대학교`,
    `동명대학교 축제`,
    `동명대 학교`,
    `동명 대학교`,
    `동명대`,
    `Tongmyong University`,
    `Tongmyong`,
    `동원대학교`,
    `동원대학교 축제`,
    `동원대 학교`,
    `동원 대학교`,
    `동원대`,
    `Tongwon University`,
    `Tongwon`,
    `호서대학교`,
    `호서대학교 축제`,
    `호서대 학교`,
    `호서 대학교`,
    `호서대`,
    `Hoseo University`,
    `Hoseo`,
  ];

  const stageMixTags = [
    `StageMix`,
    `교차편집`,
    `직캠교차편집`,
    `직캠 교차편집`,
    `컨택 교차편집`,
    `직캠N컷`,
    `Fancam MIX`,
    `세로직캠교차편집`,
  ];

  const visualCamTags = [`VISUAL CAM`, `비주얼캠`];

  const WaterbombTags = [
    `Waterbomb`,
    `Waterbomb Festival`,
    `Waterbomb Music Festival`,
    `워터밤 뮤직 페스티벌`,
    `워터밤`,
  ];

  const encoreTags = [`앵콜 무대`, `앵콜캠`, `Encore`, `쇼챔 1위`];

  const StudioChoomTags = [
    `STUDIO CHOOM`,
    `UNFILTERED CAM`,
    `Full Focused`,
    `BE ORIGINAL`,
  ];

  const VoiceCam360Tags = [
    `VoiceCam360`,
    `VoiceFocusedFanCam`,
    `Soundbomb360`,
    `3d sound`,
    `공간 음향`,
    `공간음향`,
    `사운드 360`,
    `180VR`,
    `8D Bank`,
  ];

  const MBCGayoDaejejeonTags = [
    `MBC GayoDaejejeon`,
    `GayoDaejejeon`,
    `MBC Gayo Daejejeon`,
    `MBC Song Festival`,
    `MBC Music Festival`,
    `MBC 가요대제전`,
    `가요대제전`,
  ];

  const KBSGayoDaechukjeTags = [
    `KBS Gayo Daechukje`,
    `KBS Gayodaechukje`,
    `Gayodaechukje`,
    `KBS Song Festival`,
    `KBS 가요대축제`,
    `Music Bank Global Festival`,
    `가요대축제`,
  ];

  const SBSGayoDaejeonTags = [
    `SBS Gayo Daejeon`,
    `Gayo Daejeon`,
    `SBS GayoDaejeon`,
    `GayoDaejeon`,
    `SBS Song Festival`,
    `SBS 가요대전`,
    `가요대전`,
    `가요대전 썸머`,
    `SBS Gayo Daejeon Summer`,
  ];

  const HanteoMusicAwardsTags = [
    `HANTEO MUSIC AWARDS`,
    `Hanteo Awards`,
    `한터뮤직어워즈`,
    `Hanteo`,
    `HMAs`,
    `HMA`,
  ];

  const TheFactMusicAwardsTags = [
    `The Fact Music Awards`,
    `TMA`,
    `더팩트 뮤직 어워즈`,
    `더팩트뮤직어워즈`,
  ];

  const GenieMusicAwardsTags = [
    `Genie Music Awards`,
    `GMA`,
    `MGMA`,
    `지니뮤직어워드`,
    `지니뮤직 어워드`,
  ];

  const MTVVideoMusicAwardsTags = [
    `MTV Video Music Awards`,
    `VMAs`,
    `EMAs`,
    `VMA`,
    `EMA`,
  ];

  const BillboardTags = [`Billboard Music Awards`, `Billboard Women in Music`];

  function tagCheck(tags, siteTag) {
    tags.forEach((tag) => {
      if (tag.includes(" ")) {
        const underScoreTagRegex = new RegExp(
          `(?:${regexBoundaries}|^|${years}|${qualifiers})?\\s*(4k\\s*)?(\\.ver\\s*)?${tag
            .replaceAll(" ", "_")
            .toLowerCase()}\\s*(4k|8k|\\.ver|ver|${years})?(?:${regexBoundaries}|$)`,
          "gmi"
        );
        const withoutSpaceTagRegex = new RegExp(
          `(?:${regexBoundaries}|^|${years}|${qualifiers})?\\s*(4k\\s*)?(\\.ver\\s*)?${tag
            .replaceAll(" ", "")
            .toLowerCase()}\\s*(4k|8k|\\.ver|ver|${years})?(?:${regexBoundaries}|$)`,
          "gmi"
        );
        if (title.match(underScoreTagRegex)) {
          if (!result.includes(siteTag)) result.push(siteTag);
        }
        if (title.match(withoutSpaceTagRegex)) {
          if (!result.includes(siteTag)) result.push(siteTag);
        }
      }
      if (tag.includes("-")) {
        const spaceTagRegex = new RegExp(
          `(?:${regexBoundaries}|^|${years}|${qualifiers})?\\s*(4k\\s*)?(\\.ver\\s*)?${tag
            .replaceAll("-", " ")
            .toLowerCase()}\\s*(4k|8k|\\.ver|ver|${years})?(?:${regexBoundaries}|$)`,
          "gmi"
        );
        const withoutHyphenTagRegex = new RegExp(
          `(?:${regexBoundaries}|^|${years}|${qualifiers})?\\s*(4k\\s*)?(\\.ver\\s*)?${tag
            .replaceAll("-", "")
            .toLowerCase()}\\s*(4k|8k|\\.ver|ver|${years})?(?:${regexBoundaries}|$)`,
          "gmi"
        );
        if (title.match(spaceTagRegex)) {
          if (!result.includes(siteTag)) result.push(siteTag);
        }
        if (title.match(withoutHyphenTagRegex)) {
          if (!result.includes(siteTag)) result.push(siteTag);
        }
      }

      let tagRegex = new RegExp(
        `(?:${regexBoundaries}|^|${years}|${qualifiers})?\\s*(4k\\s*)?(\\.ver\\s*)?${tag.toLowerCase()}\\s*(4k|8k|\\.ver|ver|${years})?(?:${regexBoundaries}|$)`,
        "gmi"
      );
      if (title.match(tagRegex) != null) {
        if (!result.includes(siteTag)) result.push(siteTag);
      }
    });
  }

  tagCheck(faceCamTags, `facecam`);
  tagCheck(fullCamTags, `fullcam`);
  tagCheck(visualCamTags, `visualcam`);
  tagCheck(encoreTags, `encore`);
  tagCheck(choreographyTags, `choreography`);
  tagCheck(stageMixTags, `stagemix`);
  tagCheck(universityTags, `university`);
  tagCheck(WaterbombTags, `waterbomb`);
  tagCheck(StudioChoomTags, `studiochoom`);
  tagCheck(VoiceCam360Tags, `voicecam360`);
  tagCheck(MBCGayoDaejejeonTags, `mbcgayodaejejeon`);
  tagCheck(KBSGayoDaechukjeTags, `kbsgayodaechukje`);
  tagCheck(SBSGayoDaejeonTags, `sbsgayodaejeon`);
  tagCheck(HanteoMusicAwardsTags, `hanteomusicawards`);
  tagCheck(TheFactMusicAwardsTags, `thefactmusicawards`);
  tagCheck(GenieMusicAwardsTags, `geniemusicawards`);
  tagCheck(MTVVideoMusicAwardsTags, `mtvvideomusicawards`);
  tagCheck(BillboardTags, `billboard`);

  if (officialCheck(channelId)) {
    result.push(`official`);
  }

  return result;
}

export default getAdditionalSiteTags;
