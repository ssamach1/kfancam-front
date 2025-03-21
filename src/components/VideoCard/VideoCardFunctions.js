import axios from "axios";
import { getCookie } from "helpers/getCookie";
import getUTCDate from "helpers/getUTCDate";

export function countWords(str) {
  return str.split(" ").length;
}

export function getFormattedChannelTitle(channelTitle, siteTags) {
  let futureChannelTitle = "";

  if (channelTitle.length >= 12) {
    futureChannelTitle = channelTitle.match(/^[^ ]*/gi)[0];
    if (siteTags.includes("fancam") && futureChannelTitle.length >= 12) {
      futureChannelTitle = channelTitle.match(/^.{9}/gi)[0] + `...`;
    }
  } else {
    futureChannelTitle = channelTitle;
  }

  if (channelTitle === `STUDIO CHOOM [스튜디오 춤]`) {
    futureChannelTitle = `STUDIO CHOOM`;
  }
  if (channelTitle === `ALL THE K-POP`) {
    futureChannelTitle = `ALL THE K-POP`;
  }

  return futureChannelTitle;
}

export function officialSimpleFancamCheck(siteTags) {
  let tagCheck = true;
  if (!siteTags.includes("fancam") || !siteTags.includes("official"))
    tagCheck = false;
  if (tagCheck === false) return tagCheck;

  const tagsToCheck = [
    `facecam`,
    "fullcam",
    "choreography",
    "university",
    "stagemix",
    "visualcam",
    "waterbomb",
    "encore",
  ];
  if (tagsToCheck.some((tag) => siteTags.includes(tag))) {
    tagCheck = false;
  }
  return tagCheck;
}

export function perfomanceAndSongStatPainter(stat) {
  if (stat > 80) {
    return "#fa5252";
  }
  if (stat > 40) {
    return "#ff922b";
  }
  if (stat > 20) {
    return "#f783ac";
  }
  if (stat < -10) {
    return "rgba(0, 0, 0, 0.4)";
  }
  return "black";
}

export function viewLikeRatioPainter(viewLikeRatio, siteTags, songsCount) {
  if (
    !siteTags.includes(`official`) ||
    !siteTags.includes(`fancam`) ||
    siteTags.includes("facecam") ||
    songsCount > 1
  )
    return `black`;
  if (viewLikeRatio > 35) {
    return "#fa5252";
  }
  if (viewLikeRatio > 25) {
    return "#f783ac";
  }
  if (viewLikeRatio === 1) {
    return "rgba(0, 0, 0, 0.15)";
  }
  return "black";
}

export const formatNumberEN = (num) => {
  if (num < 1000) {
    return num + ` `;
  }
  if (num < 1000000) {
    return Math.floor(num / 1000) + `K `;
  }
  if (num >= 10000000) {
    return Math.floor(num / 1000000) + `M `;
  }
  return (num / 1000000).toFixed(1).replace(".", ",") + `M `;
};

export const formatNumberRU = (num) => {
  if (num < 1000) {
    return num + ` `;
  }
  if (num < 1000000) {
    return Math.floor(num / 1000) + ` тыс. `;
  }
  if (num >= 10000000) {
    return Math.floor(num / 1000000) + ` млн. `;
  }
  return (num / 1000000).toFixed(1).replace(".", ",") + ` млн. `;
};

export function formatVideoUploadDateRU(publishedAt) {
  if (typeof publishedAt !== `string`) publishedAt = publishedAt.toString();

  function getHourWithSuffix(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) return "час";
    if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100))
      return "часа";
    else return "часов";
  }

  function getDayWithSuffix(days) {
    if (days % 10 === 1 && days % 100 !== 11) return "день";
    if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100))
      return "дня";
    else return "дней";
  }

  function getWeekWithSuffix(weeks) {
    if (weeks % 10 === 1 && weeks % 100 !== 11) return "неделя";
    else return "недели";
  }

  function getMonthWithSuffix(months) {
    if (months % 10 === 1 && months % 100 !== 11) return "месяц";
    if ([2, 3, 4].includes(months % 10) && ![12, 13, 14].includes(months % 100))
      return "месяца";
    else return "месяцев";
  }

  function getYearWithSuffix(years) {
    if (years % 10 === 1 && years % 100 !== 11) return "год";
    if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100))
      return "года";
    else return "лет";
  }

  const now = new Date(getUTCDate(new Date()));
  publishedAt = new Date(getUTCDate(publishedAt));

  // на всякий случай
  // const publishedAtDate = new Date(publishedAt);
  // const diffInMsPublishedAt = publishedAtDate - new Date();
  // const diffInDaysPublishedAt = Math.floor(
  //   diffInMsPublishedAt / (1000 * 60 * 60 * 24)
  // );
  // if (diffInDaysPublishedAt <= 0) {
  //   upload = new Date(getUTCDate(publishedAt));
  // }

  const diffInMs = now - publishedAt;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInMinutes < 1) {
    return "Только что";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} минут назад`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${getHourWithSuffix(diffInHours)} назад`;
  } else if (diffInDays < 14) {
    return `${diffInDays} ${getDayWithSuffix(diffInDays)} назад`;
  } else if (diffInWeeks < 4) {
    return `${diffInWeeks} ${getWeekWithSuffix(diffInWeeks)} назад`;
  } else if (diffInMonths < 11) {
    return `${diffInMonths} ${getMonthWithSuffix(diffInMonths)} назад`;
  } else {
    return `${diffInYears} ${getYearWithSuffix(diffInYears)} назад`;
  }
}

export function formatVideoUploadDateEN(publishedAt) {
  if (typeof publishedAt !== `string`) publishedAt = publishedAt.toString();

  function getHourWithSuffix(hours) {
    if (hours % 10 === 1 && hours % 100 !== 11) return "hour";
    else return "hours";
  }

  function getDayWithSuffix(days) {
    if (days % 10 === 1 && days % 100 !== 11) return "day";
    else return "days";
  }

  function getWeekWithSuffix(weeks) {
    if (weeks % 10 === 1 && weeks % 100 !== 11) return "week";
    else return "weeks";
  }

  function getMonthWithSuffix(months) {
    if (months % 10 === 1 && months % 100 !== 11) return "month";
    else return "months";
  }

  function getYearWithSuffix(years) {
    if (years % 10 === 1 && years % 100 !== 11) return "year";
    else return "years";
  }

  const now = new Date(getUTCDate(new Date()));
  publishedAt = new Date(getUTCDate(publishedAt));

  const diffInMs = now - publishedAt;
  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInWeeks = Math.floor(diffInDays / 7);
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInMonths / 12);

  if (diffInMinutes < 1) {
    return "Right now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours} ${getHourWithSuffix(diffInHours)} ago`;
  } else if (diffInDays < 14) {
    return `${diffInDays} ${getDayWithSuffix(diffInDays)} ago`;
  } else if (diffInWeeks <= 4) {
    return `${diffInWeeks} ${getWeekWithSuffix(diffInWeeks)} ago`;
  } else if (diffInMonths <= 11) {
    return `${diffInMonths} ${getMonthWithSuffix(diffInMonths)} ago`;
  } else {
    return `${diffInYears} ${getYearWithSuffix(diffInYears)} ago`;
  }
}

export async function deleteVideo(e, youtubeUrl) {
  e.stopPropagation();

  const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:5000";
  const isConfirmed = window.confirm(`Delete ${youtubeUrl}?`);
  if (isConfirmed) {
    try {
      await axios.delete(
        `${BACKEND_URL}/videos/deleteVideo?url=${youtubeUrl}`,
        getCookie("name")
      );
      alert("Deleted");
    } catch (e) {
      console.log(e);
    }
  }
}
