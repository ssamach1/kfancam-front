import { AESPA_EMOJI_LIST, AESPA_MEMBERS_LIST_FOR_FILTER } from "consts/aespa";
import { GIDLE_EMOJI_LIST, GIDLE_MEMBERS_LIST_FOR_FILTER } from "consts/gidle";
import {
  KISS_OF_LIFE_EMOJI_LIST,
  KISS_OF_LIFE_MEMBERS_LIST_FOR_FILTER,
} from "consts/kissoflife";
import { STAYC_EMOJI_LIST, STAYC_MEMBERS_LIST_FOR_FILTER } from "consts/stayc";
import {
  NEWJEANS_EMOJI_LIST,
  NEWJEANS_MEMBERS_LIST_FOR_FILTER,
} from "consts/newjeans";
import {
  LE_SSERAFIM_EMOJI_LIST,
  LE_SSERAFIM_MEMBERS_LIST_FOR_FILTER,
} from "consts/lesserafim";
import {
  KEPLER_EMOJI_LIST,
  KEPLER_MEMBERS_LIST_FOR_FILTER,
} from "consts/kepler";
import { IVE_EMOJI_LIST, IVE_MEMBERS_LIST_FOR_FILTER } from "consts/ive";
import { ITZY_EMOJI_LIST, ITZY_MEMBERS_LIST_FOR_FILTER } from "consts/itzy";
import { ILLIT_EMOJI_LIST, ILLIT_MEMBERS_LIST_FOR_FILTER } from "consts/illit";
import {
  FROMIS_9_EMOJI_LIST,
  FROMIS_9_MEMBERS_LIST_FOR_FILTER,
} from "consts/fromis_9";
import {
  BABYMONSTER_EMOJI_LIST,
  BABYMONSTER_MEMBERS_LIST_FOR_FILTER,
} from "consts/babymonster";
import { NMIXX_EMOJI_LIST, NMIXX_MEMBERS_LIST_FOR_FILTER } from "consts/nmixx";

function returnEmoji(groupEmojiList, groupsMemberList, idolName) {
  return (
    groupEmojiList[
      groupsMemberList.findIndex(
        (memberName) =>
          memberName.toLowerCase().replaceAll(" ", "") === idolName
      )
    ] || `🎵`
  );
}

export function getEmojiByNameAndGroup(name, siteTags) {
  if (!name) return "🎵";
  const idolName = name
    .match(/-(.*?)-/gi)[0]
    .slice(0, -1)
    .substring(1);

  return siteTags.includes("aespa")
    ? returnEmoji(AESPA_EMOJI_LIST, AESPA_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("babymonster")
    ? returnEmoji(
        BABYMONSTER_EMOJI_LIST,
        BABYMONSTER_MEMBERS_LIST_FOR_FILTER,
        idolName
      )
    : siteTags.includes("fromis_9")
    ? returnEmoji(
        FROMIS_9_EMOJI_LIST,
        FROMIS_9_MEMBERS_LIST_FOR_FILTER,
        idolName
      )
    : siteTags.includes("gidle")
    ? returnEmoji(GIDLE_EMOJI_LIST, GIDLE_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("illit")
    ? returnEmoji(ILLIT_EMOJI_LIST, ILLIT_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("itzy")
    ? returnEmoji(ITZY_EMOJI_LIST, ITZY_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("ive")
    ? returnEmoji(IVE_EMOJI_LIST, IVE_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("kepler")
    ? returnEmoji(KEPLER_EMOJI_LIST, KEPLER_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("kissoflife")
    ? returnEmoji(
        KISS_OF_LIFE_EMOJI_LIST,
        KISS_OF_LIFE_MEMBERS_LIST_FOR_FILTER,
        idolName
      )
    : siteTags.includes("lesserafim")
    ? returnEmoji(
        LE_SSERAFIM_EMOJI_LIST,
        LE_SSERAFIM_MEMBERS_LIST_FOR_FILTER,
        idolName
      )
    : siteTags.includes("newjeans")
    ? returnEmoji(
        NEWJEANS_EMOJI_LIST,
        NEWJEANS_MEMBERS_LIST_FOR_FILTER,
        idolName
      )
    : siteTags.includes("nmixx")
    ? returnEmoji(NMIXX_EMOJI_LIST, NMIXX_MEMBERS_LIST_FOR_FILTER, idolName)
    : siteTags.includes("stayc")
    ? returnEmoji(STAYC_EMOJI_LIST, STAYC_MEMBERS_LIST_FOR_FILTER, idolName)
    : "🎵";
}
