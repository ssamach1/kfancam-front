import {
  NEWJEANS_ALL_SONGS_LIST,
  NEWJEANS_MEMBERS_LIST,
} from "../consts/newjeans";
import { STAYC_ALL_SONGS_LIST, STAYC_MEMBERS_LIST } from "../consts/stayc";
import {
  LE_SSERAFIM_ALL_SONGS_LIST,
  LE_SSERAFIM_MEMBERS_LIST,
} from "../consts/lesserafim";
import { KEPLER_ALL_SONGS_LIST, KEPLER_MEMBERS_LIST } from "../consts/kepler";
import { IVE_ALL_SONGS_LIST, IVE_MEMBERS_LIST } from "../consts/ive";
import { ITZY_ALL_SONGS_LIST, ITZY_MEMBERS_LIST } from "../consts/itzy";
import { ILLIT_ALL_SONGS_LIST, ILLIT_MEMBERS_LIST } from "../consts/illit";
import { GIDLE_ALL_SONGS_LIST, GIDLE_MEMBERS_LIST } from "../consts/gidle";
import {
  FROMIS_9_ALL_SONGS_LIST,
  FROMIS_9_MEMBERS_LIST,
} from "../consts/fromis_9";
import {
  BABYMONSTER_ALL_SONGS_LIST,
  BABYMONSTER_MEMBERS_LIST,
} from "../consts/babymonster";
import { AESPA_ALL_SONGS_LIST, AESPA_MEMBERS_LIST } from "../consts/aespa";
import { NMIXX_ALL_SONGS_LIST, NMIXX_MEMBERS_LIST } from "../consts/nmixx";
import {
  KISS_OF_LIFE_ALL_SONGS_LIST,
  KISS_OF_LIFE_MEMBERS_LIST,
} from "../consts/kissoflife";
import createVideoDataName from "./createVideoDataName";

const getNameAndYoutubeDate = (
  video,
  type,
  groupName,
  songInput,
  nameInput,
  dateInput,
  youtubeUrl
) => {
  let name = "";
  let youtubeDate = "";
  let foundSongsCount = 0;

  if (groupName === `aespa`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      AESPA_ALL_SONGS_LIST,
      AESPA_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `babymonster`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      BABYMONSTER_ALL_SONGS_LIST,
      BABYMONSTER_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `fromis_9`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      FROMIS_9_ALL_SONGS_LIST,
      FROMIS_9_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `gidle`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      GIDLE_ALL_SONGS_LIST,
      GIDLE_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `illit`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      ILLIT_ALL_SONGS_LIST,
      ILLIT_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `itzy`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      ITZY_ALL_SONGS_LIST,
      ITZY_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `ive`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      IVE_ALL_SONGS_LIST,
      IVE_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `kepler`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      KEPLER_ALL_SONGS_LIST,
      KEPLER_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `kissoflife`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      KISS_OF_LIFE_ALL_SONGS_LIST,
      KISS_OF_LIFE_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `lesserafim`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      LE_SSERAFIM_ALL_SONGS_LIST,
      LE_SSERAFIM_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `newjeans`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      NEWJEANS_ALL_SONGS_LIST,
      NEWJEANS_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `nmixx`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      NMIXX_ALL_SONGS_LIST,
      NMIXX_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  if (groupName === `stayc`) {
    [name, youtubeDate, foundSongsCount] = createVideoDataName(
      video,
      type,
      groupName,
      STAYC_ALL_SONGS_LIST,
      STAYC_MEMBERS_LIST,
      songInput,
      nameInput,
      dateInput,
      youtubeUrl
    );
  }
  return [name, youtubeDate, foundSongsCount];
};

export default getNameAndYoutubeDate;
