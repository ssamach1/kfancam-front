import {
  allgroups_gradient,
  ALLGROUPS_MEMBERS_LIST_FOR_FILTER,
  ALLGROUPS_NUMBER,
  ALLGROUPS_TITLES_LIST,
} from "../consts/allgroups";
import {
  aespa_gradient,
  AESPA_MEMBERS_LIST_FOR_FILTER,
  AESPA_NUMBER,
  AESPA_TITLES_LIST,
} from "../consts/aespa";
import {
  babymonster_gradient,
  BABYMONSTER_MEMBERS_LIST_FOR_FILTER,
  BABYMONSTER_NUMBER,
  BABYMONSTER_TITLES_LIST,
} from "../consts/babymonster";
import {
  fromis_9_gradient,
  FROMIS_9_MEMBERS_LIST_FOR_FILTER,
  FROMIS_9_NUMBER,
  FROMIS_9_TITLES_LIST,
} from "../consts/fromis_9";
import {
  gidle_gradient,
  GIDLE_MEMBERS_LIST_FOR_FILTER,
  GIDLE_NUMBER,
  GIDLE_TITLES_LIST,
} from "../consts/gidle";
import {
  illit_gradient,
  ILLIT_MEMBERS_LIST_FOR_FILTER,
  ILLIT_NUMBER,
  ILLIT_TITLES_LIST,
} from "../consts/illit";
import {
  itzy_gradient,
  ITZY_MEMBERS_LIST_FOR_FILTER,
  ITZY_NUMBER,
  ITZY_TITLES_LIST,
} from "../consts/itzy";
import {
  ive_gradient,
  IVE_MEMBERS_LIST_FOR_FILTER,
  IVE_NUMBER,
  IVE_TITLES_LIST,
} from "../consts/ive";
import {
  kepler_gradient,
  KEPLER_MEMBERS_LIST_FOR_FILTER,
  KEPLER_NUMBER,
  KEPLER_TITLES_LIST,
} from "../consts/kepler";
import {
  KISS_OF_LIFE_MEMBERS_LIST_FOR_FILTER,
  KISS_OF_LIFE_NUMBER,
  KISS_OF_LIFE_TITLES_LIST,
  kissoflife_gradient,
} from "../consts/kissoflife";
import {
  le_sserafim_gradient,
  LE_SSERAFIM_MEMBERS_LIST_FOR_FILTER,
  LE_SSERAFIM_NUMBER,
  LE_SSERAFIM_TITLES_LIST,
} from "../consts/lesserafim";
import {
  newjeans_gradient,
  NEWJEANS_MEMBERS_LIST_FOR_FILTER,
  NEWJEANS_NUMBER,
  NEWJEANS_TITLES_LIST,
} from "../consts/newjeans";
import {
  nmixx_gradient,
  NMIXX_MEMBERS_LIST_FOR_FILTER,
  NMIXX_NUMBER,
  NMIXX_TITLES_LIST,
} from "../consts/nmixx";
import {
  stayc_gradient,
  STAYC_MEMBERS_LIST_FOR_FILTER,
  STAYC_NUMBER,
  STAYC_TITLES_LIST,
} from "../consts/stayc";

function getGroupConsts(groupName) {
  if (groupName === `allgroups`)
    return [
      ALLGROUPS_TITLES_LIST,
      ALLGROUPS_MEMBERS_LIST_FOR_FILTER,
      ALLGROUPS_NUMBER,
      allgroups_gradient,
    ];
  if (groupName === `aespa`)
    return [
      AESPA_TITLES_LIST,
      AESPA_MEMBERS_LIST_FOR_FILTER,
      AESPA_NUMBER,
      aespa_gradient,
    ];
  if (groupName === `babymonster`)
    return [
      BABYMONSTER_TITLES_LIST,
      BABYMONSTER_MEMBERS_LIST_FOR_FILTER,
      BABYMONSTER_NUMBER,
      babymonster_gradient,
    ];
  if (groupName === `fromis_9`)
    return [
      FROMIS_9_TITLES_LIST,
      FROMIS_9_MEMBERS_LIST_FOR_FILTER,
      FROMIS_9_NUMBER,
      fromis_9_gradient,
    ];
  if (groupName === `gidle`)
    return [
      GIDLE_TITLES_LIST,
      GIDLE_MEMBERS_LIST_FOR_FILTER,
      GIDLE_NUMBER,
      gidle_gradient,
    ];
  if (groupName === `illit`)
    return [
      ILLIT_TITLES_LIST,
      ILLIT_MEMBERS_LIST_FOR_FILTER,
      ILLIT_NUMBER,
      illit_gradient,
    ];
  if (groupName === `itzy`)
    return [
      ITZY_TITLES_LIST,
      ITZY_MEMBERS_LIST_FOR_FILTER,
      ITZY_NUMBER,
      itzy_gradient,
    ];
  if (groupName === `ive`)
    return [
      IVE_TITLES_LIST,
      IVE_MEMBERS_LIST_FOR_FILTER,
      IVE_NUMBER,
      ive_gradient,
    ];
  if (groupName === `kepler`)
    return [
      KEPLER_TITLES_LIST,
      KEPLER_MEMBERS_LIST_FOR_FILTER,
      KEPLER_NUMBER,
      kepler_gradient,
    ];
  if (groupName === `kissoflife`)
    return [
      KISS_OF_LIFE_TITLES_LIST,
      KISS_OF_LIFE_MEMBERS_LIST_FOR_FILTER,
      KISS_OF_LIFE_NUMBER,
      kissoflife_gradient,
    ];
  if (groupName === `lesserafim`)
    return [
      LE_SSERAFIM_TITLES_LIST,
      LE_SSERAFIM_MEMBERS_LIST_FOR_FILTER,
      LE_SSERAFIM_NUMBER,
      le_sserafim_gradient,
    ];
  if (groupName === `newjeans`)
    return [
      NEWJEANS_TITLES_LIST,
      NEWJEANS_MEMBERS_LIST_FOR_FILTER,
      NEWJEANS_NUMBER,
      newjeans_gradient,
    ];
  if (groupName === `nmixx`)
    return [
      NMIXX_TITLES_LIST,
      NMIXX_MEMBERS_LIST_FOR_FILTER,
      NMIXX_NUMBER,
      nmixx_gradient,
    ];
  if (groupName === `stayc`)
    return [
      STAYC_TITLES_LIST,
      STAYC_MEMBERS_LIST_FOR_FILTER,
      STAYC_NUMBER,
      stayc_gradient,
    ];
}
export default getGroupConsts;
