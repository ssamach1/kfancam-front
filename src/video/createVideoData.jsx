import getGroup from "helpers/getGroupName";
import getUTCDate from "helpers/getUTCDate";
import getAdditionalSiteTags from "helpers/getAdditionalSiteTags";
import getNameAndYoutubeDate from "./getNameAndYoutubeDate";
import getFormattedUrl from "helpers/getFormattedUrl";

const createVideoData = async (
  video,
  type,
  id,
  songInput,
  nameInput,
  dateInput,
  author
) => {
  const groupName = getGroup(video.snippet.title);
  let youtubeUrl = getFormattedUrl(undefined, id);

  let [name, youtubeDate, foundSongsCount] = getNameAndYoutubeDate(
    video,
    type,
    groupName,
    songInput,
    nameInput,
    dateInput,
    youtubeUrl
  );
  name += `${video.snippet.channelTitle
    .replaceAll(/\s+/g, "")
    .replaceAll(/-/gi, "")}`;

  let futureThumbnail = "";
  if (video.snippet.thumbnails.maxres) {
    futureThumbnail = video.snippet.thumbnails.maxres.url;
  } else if (video.snippet.thumbnails.standard) {
    futureThumbnail = video.snippet.thumbnails.standard.url;
  } else if (video.snippet.thumbnails.high) {
    futureThumbnail = video.snippet.thumbnails.high.url;
  }

  let foundSongs = name.split("-")[0].match(/([^.]+)(?=\.|$)/g);

  let foundMember = "";
  if (type === "fancam") {
    foundMember = name.match(/-(.*?)-/)[0];
    if (foundMember.includes("-")) {
      foundMember = foundMember.replaceAll("-", "");
    }
  }

  const data = {
    name: name.toLowerCase(),
    youtubeUrl: `https://youtu.be/${id}`,
    thumbnail: futureThumbnail,
    updated: getUTCDate(new Date()),
    siteTags: [
      getGroup(video.snippet.title),
      type,
      ...foundSongs,
      ...(type === "fancam" ? [foundMember] : []),
      ...getAdditionalSiteTags(video.snippet.title, video.snippet.channelId),
    ],
    duration:
      video.contentDetails.duration.match(/PT(.*)/) != null
        ? video.contentDetails.duration.match(/PT(.*)/)[1]
        : "",
    ...video.snippet,
    viewCount: video.statistics.viewCount ? video.statistics.viewCount : 1,
    likeCount: video.statistics.likeCount ? video.statistics.likeCount : 1,
    commentCount: video.statistics.commentCount
      ? video.statistics.commentCount
      : 0,
    chunks: type === "fancam" ? [] : undefined,
    regionRestriction: video.contentDetails.regionRestriction,
    youtubeDate: youtubeDate,
    channelTitle: video.snippet.channelTitle,
    viewLikeRatio:
      video.statistics.likeCount && video.statistics.viewCount
        ? Math.round(
            (video.statistics.viewCount * 10) / video.statistics.likeCount
          ) / 10
        : 1,
    addedBy: author ? author : `anonymous`,
    addedDate: getUTCDate(new Date()),
    songsCount: foundSongsCount,
  };
  delete data.thumbnails;
  delete data.tags;
  return data;
};

export default createVideoData;
