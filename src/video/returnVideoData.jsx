import axios from "axios";
import { AESPA_MEMBERS_LIST } from "consts/aespa";
import { BABYMONSTER_MEMBERS_LIST } from "consts/babymonster";
import { FROMIS_9_MEMBERS_LIST } from "consts/fromis_9";
import { GIDLE_MEMBERS_LIST } from "consts/gidle";
import { ILLIT_MEMBERS_LIST } from "consts/illit";
import { ITZY_MEMBERS_LIST } from "consts/itzy";
import { IVE_MEMBERS_LIST } from "consts/ive";
import { KEPLER_MEMBERS_LIST } from "consts/kepler";
import { KISS_OF_LIFE_MEMBERS_LIST } from "consts/kissoflife";
import { LE_SSERAFIM_MEMBERS_LIST } from "consts/lesserafim";
import { NEWJEANS_MEMBERS_LIST } from "consts/newjeans";
import { NMIXX_MEMBERS_LIST } from "consts/nmixx";
import { STAYC_MEMBERS_LIST } from "consts/stayc";
import fancamOrPerfomanceCheck from "helpers/fancamOrPerfomanceCheck";
import getGroup from "helpers/getGroupName";
import {
  FORBIDDEN_WORDS,
  KEY_FOR_BACK,
  KEY_FOR_FRONT,
  REGEX_BOUNDARIES,
} from "consts/general";
import createVideoData from "./createVideoData";
import { NameError } from "./createVideoDataName";

function forbiddenWordsCheck(videoTitle, channelId) {
  let forbiddenWords = [];
  FORBIDDEN_WORDS.forEach((word) => {
    if (word.includes(" ")) {
      const underScoreForbiddenWordRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${word
          .replaceAll(" ", "_")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const withoutSpaceForbiddenWordRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${word
          .replaceAll(" ", "")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (
        videoTitle.match(underScoreForbiddenWordRegex) &&
        !forbiddenWords.includes(word)
      ) {
        forbiddenWords.push(word);
      }
      if (
        videoTitle.match(withoutSpaceForbiddenWordRegex) &&
        !forbiddenWords.includes(word)
      ) {
        forbiddenWords.push(word);
      }
    }
    let forbiddenWordRegex = new RegExp(
      `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${word.toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
      "gmi"
    );
    if (
      videoTitle.match(forbiddenWordRegex) &&
      !forbiddenWords.includes(word)
    ) {
      forbiddenWords.push(videoTitle.match(forbiddenWordRegex)[0]);
    }
  });

  if (
    videoTitle.match(
      new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)mirror(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      )
    ) != null &&
    channelId === `UCE13ZKAgUTKgmYt7mebvTUA` &&
    !forbiddenWords.includes(`mirrored`)
  )
    forbiddenWords.push(`mirrored`);
  if (forbiddenWords.length > 0)
    console.log(`forbiddenWords:` + forbiddenWords);
  if (forbiddenWords.length > 0) return true;
  else return false;
}

const returnVideoData = async (
  url,
  songInput,
  nameInput,
  dateInput,
  ignoreForbiddenWordCheck,
  author
) => {
  const urlReg =
    /(?<=watch\?v=|\/videos\/|embed\/|youtu.be\/|\/v\/|watch\?v%3D|%2Fvideos%2F|embed%2F|youtu.be%2F|%2Fv%2F)[^#\&\?\n]*/gm; //eslint-disable-line
  const id = url.match(urlReg);

  const response = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/videos?id=${id}&part=snippet%2Cstatistics%2CcontentDetails&fields=items(snippet(publishedAt, channelId, title, thumbnails(high, standard, maxres), channelTitle, tags)statistics(viewCount, likeCount, commentCount)contentDetails(duration, regionRestriction))&key=${KEY_FOR_FRONT}`
  );

  if (response.data.items.length) {
    const video = response.data.items[0];
    const videoTitle = video.snippet.title;
    const groupName = getGroup(videoTitle);
    if (
      forbiddenWordsCheck(videoTitle, video.snippet.channelId) &&
      !ignoreForbiddenWordCheck
    )
      throw new Error(`Forbidden word - ${url}`);

    if (!groupName) throw new NameError(`Название группы не найдено - ${url}`);

    let fancamOrPerfomance = "";
    if (groupName === `aespa`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        AESPA_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `babymonster`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        BABYMONSTER_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `fromis_9`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        FROMIS_9_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `gidle`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        GIDLE_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `illit`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        ILLIT_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `itzy`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        ITZY_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `ive`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        IVE_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `kepler`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        KEPLER_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `kissoflife`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        KISS_OF_LIFE_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `lesserafim`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        LE_SSERAFIM_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `newjeans`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        NEWJEANS_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `nmixx`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        NMIXX_MEMBERS_LIST,
        groupName
      );
    }
    if (groupName === `stayc`) {
      fancamOrPerfomance = fancamOrPerfomanceCheck(
        videoTitle,
        STAYC_MEMBERS_LIST,
        groupName
      );
    }

    return createVideoData(
      video,
      fancamOrPerfomance,
      id,
      songInput,
      nameInput,
      dateInput,
      author
    );
  } else throw new Error(`Youtube API didn't return anything, ${url}`);
};

export default returnVideoData;
