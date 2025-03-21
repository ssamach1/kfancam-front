import { REGEX_BOUNDARIES } from "consts/general";

const getGroup = (title) => {
  // eslint-disable-next-line
  const regexBoundaries = REGEX_BOUNDARIES;

  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)aespa|æspa|에스파(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "aespa";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)BabyMonster|베이비몬스터|베이비 몬스터(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "babymonster";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)FROMIS9|FROMIS_9|FROMIS 9|프로미스나인(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "fromis_9";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)((\\(G\\))?I-dle|(\\(여자\\))?아이들|GI-dle|여자아이들|Gidle|(여자)아이들)(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "gidle";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)Illit|아일릿(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "illit";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)Itzy|있지(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "itzy";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)Ive|아이브(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "ive";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)Kep1er|Kepler|케플러(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "kepler";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)Kiss of Life|KissOfLife|KIOL|KIOF|키스 오브 라이프|키스오브라이프(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "kissoflife";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)LESSERAFIM|LE SSERAFIM|LE_SSERAFIM|르세라핌|르 세라핌(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "lesserafim";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)NEWJEANS|뉴진스|뉴 진스(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "newjeans";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)NMIXX|엔믹스(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "nmixx";
  if (
    title.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)STAYC|스테이씨(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null
  )
    return "stayc";

  // if (
  //   title.toLowerCase().includes(`LEE CHAE YEON`.toLowerCase()) ||
  //   title.toLowerCase().includes(`Lee Chae-yeon`.toLowerCase()) ||
  //   title.toLowerCase().includes(`イ・チェヨン`.toLowerCase()) ||
  //   title.toLowerCase().includes(`이채연`.toLowerCase()) ||
  //   title.toLowerCase().includes(`LEE CHAEYEON`.toLowerCase())
  // )
  //   return `lee_chaeyeon`;
  // if (
  //   title.toLowerCase().includes(`YooA`.toLowerCase()) ||
  //   title.toLowerCase().includes(`ユア`.toLowerCase()) ||
  //   title.toLowerCase().includes(`유아`.toLowerCase())
  // )
  //   return `yooa`;
  // if (
  //   title.toLowerCase().includes(`Nayeon`.toLowerCase()) ||
  //   title.toLowerCase().includes(`나연`.toLowerCase()) ||
  //   title.toLowerCase().includes(`임나연`.toLowerCase()) ||
  //   title.toLowerCase().includes(`ナヨン`.toLowerCase())
  // )
  //   return `nayeon`;
  // if (
  //   title.toLowerCase().includes(`Chuu`.toLowerCase()) ||
  //   title.toLowerCase().includes(`츄`.toLowerCase())
  // )
  //   return `chuu`;
  // if (
  //   title.toLowerCase().includes(`Kwon Eun-bi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`Kwon Eun bi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`Kwon Eunbi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`KwonEunbi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`권은비`.toLowerCase()) ||
  //   title.toLowerCase().includes(`クォン・ウンビ`.toLowerCase())
  // )
  //   return `kwon_eunbi`;
  // if (
  //   title.toLowerCase().includes(`Soojin`.toLowerCase()) ||
  //   title.toLowerCase().includes(`수진`.toLowerCase()) ||
  //   title.toLowerCase().includes(`서수진`.toLowerCase())
  // )
  //   return `soojin`;
  // if (
  //   title.toLowerCase().includes(`IU`.toLowerCase()) ||
  //   title.toLowerCase().includes(`아이유`.toLowerCase())
  // )
  //   return `iu`;
  // if (
  //   title.toLowerCase().includes(`Solar`.toLowerCase()) ||
  //   title.toLowerCase().includes(`솔라`.toLowerCase()) ||
  //   title.toLowerCase().includes(`ソラ`.toLowerCase())
  // )
  //   return `solar`;
  // if (
  //   title.toLowerCase().includes(`Choi Ye-na`.toLowerCase()) ||
  //   title.toLowerCase().includes(`Choi Yena`.toLowerCase()) ||
  //   title.toLowerCase().includes(`ChoiYena`.toLowerCase()) ||
  //   title.toLowerCase().includes(`YENA`.toLowerCase()) ||
  //   title.toLowerCase().includes(`최예나`.toLowerCase()) ||
  //   title.toLowerCase().includes(`チェ・イェナ`.toLowerCase())
  // )
  //   return `yena`;
  // if (
  //   title.toLowerCase().includes(`Jeon So-mi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`JeonSomi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`Somi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`So-mi`.toLowerCase()) ||
  //   title.toLowerCase().includes(`전소미`.toLowerCase()) ||
  //   title.toLowerCase().includes(`소미`.toLowerCase())
  // )
  //   return `somi`;
};

export default getGroup;
