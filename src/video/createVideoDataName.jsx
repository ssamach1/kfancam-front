import { REGEX_BOUNDARIES } from "consts/general";
import getAdditionalSiteTags from "helpers/getAdditionalSiteTags";
import getIdolName from "helpers/getIdolName";
import getSongName from "helpers/getSongName";

export class NameError extends Error {
  constructor(message) {
    super(message);
    this.name = "NameError";
  }
}
const regexBoundaries = REGEX_BOUNDARIES;

const createVideoDataName = (
  video,
  type,
  groupName,
  songsList,
  membersList = [],
  songInput,
  memberInput = null,
  dateInput,
  youtubeUrl
) => {
  const title = video.snippet.title.toLowerCase();

  let foundSongs = [];
  songsList.forEach((currentSong) => {
    let song = currentSong.toLowerCase().trim();

    if (song.includes("&")) {
      const ampersand1SongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("&", "and")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (!foundSongs.includes(song) && title.match(ampersand1SongRegex)) {
        foundSongs.push(song);
      }
    }
    if (song.includes("＃")) {
      const hashtagSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("＃", "#")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (!foundSongs.includes(song) && title.match(hashtagSongRegex)) {
        foundSongs.push(song);
      }
    }
    if (song.includes("'")) {
      const apostrophe1WithSpaceSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("'", " ")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostrophe1DeletionSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("'", "")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostrophe1WithIsSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("'s", " is")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostrophe1WithAnotherApostropheSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("'", "’")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe1WithSpaceSongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe1DeletionSongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe1WithIsSongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe1WithAnotherApostropheSongRegex)
      ) {
        foundSongs.push(song);
      }
    }
    if (song.includes("’")) {
      const apostrophe2WithSpaceSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("’", " ")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostropheDeletion2SongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("’", "")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostrophe2WithIsSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("’s", " is")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const apostrophe2WithAnotherApostropheSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll("’", "'")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe2WithSpaceSongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostropheDeletion2SongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe2WithIsSongRegex)
      ) {
        foundSongs.push(song);
      }
      if (
        !foundSongs.includes(song) &&
        title.match(apostrophe2WithAnotherApostropheSongRegex)
      ) {
        foundSongs.push(song);
      }
    }
    if (song.includes(" ")) {
      const underScoreSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll(" ", "_")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const withoutSpaceSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll(" ", "")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      const dashSongRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${song
          .replaceAll(" ", "-")
          .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (!foundSongs.includes(song) && title.match(underScoreSongRegex)) {
        foundSongs.push(song);
      }
      if (!foundSongs.includes(song) && title.match(withoutSpaceSongRegex)) {
        foundSongs.push(song);
      }
      if (!foundSongs.includes(song) && title.match(dashSongRegex)) {
        foundSongs.push(song);
      }
    }
    let songListRegex = new RegExp(
      `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)${song.toLowerCase()}(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
      "gmi"
    );
    if (title.match(songListRegex) && !foundSongs.includes(song)) {
      foundSongs.push(title.match(songListRegex)[0]);
    }
  });

  if (
    title.match(
      new RegExp(`(?<=[ '"])i do(?=[ '"])`, "gmi") &&
        !foundSongs.includes(`I DO`) &&
        groupName === "gidle"
    )
  )
    foundSongs.push(`I DO`);

  if (
    foundSongs.length === 0 &&
    title.includes(`the show choice!`) &&
    video.snippet.tags.some((tag) => songsList.includes(tag))
  ) {
    foundSongs.push(
      video.snippet.tags.find((tag) => {
        return songsList.includes(tag);
      })
    );
  }

  if (songInput) {
    let inputSongs = songInput.split(",");
    inputSongs = inputSongs.map((song) => song.trim());
    inputSongs.forEach((song) => foundSongs.push(song));
  }

  if (foundSongs.length === 0 && groupName === `gidle` && title.includes(`한`))
    foundSongs.push(`한(一)`);

  if (foundSongs.length === 0 && !songInput)
    throw new NameError(
      `Название песни не найдено программно и не передано вручную. ${title} ${youtubeUrl}`
    );

  foundSongs = [...new Set(foundSongs)];
  foundSongs = foundSongs.map((foundSong) => getSongName(foundSong));
  foundSongs = [...new Set(foundSongs)];

  let foundMember = "";
  if (type === "fancam") {
    membersList.forEach((currentMember) => {
      let member = currentMember.toLowerCase().trim();
      if (member.includes(" ")) {
        const underScoreMemberRegex = new RegExp(
          `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)${member
            .replaceAll(" ", "_")
            .toLowerCase()}(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
          "gmi"
        );
        const withoutSpaceMemberRegex = new RegExp(
          `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)${member
            .replaceAll(" ", "")
            .toLowerCase()}(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
          "gmi"
        );
        if (title.match(underScoreMemberRegex)) {
          foundMember = member;
        }
        if (title.match(withoutSpaceMemberRegex)) {
          foundMember = member;
        }
      }
      if (member.includes("-")) {
        const withoutHyphenTagRegex = new RegExp(
          `(?<![a-zA-Z0-9])(?<=${REGEX_BOUNDARIES}|^)${member
            .replaceAll("-", "")
            .toLowerCase()}(?=${REGEX_BOUNDARIES}|$)(?![a-zA-Z0-9])`,
          "gmi"
        );
        if (title.match(withoutHyphenTagRegex)) {
          foundMember = member;
        }
      }
      const memberListRegex = new RegExp(
        `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)${member.toLowerCase()}(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
        "gmi"
      );
      if (title.match(memberListRegex)) {
        foundMember = title.match(memberListRegex)[0];
      }
    });

    if (!foundMember && !memberInput)
      throw new NameError(
        `Имя не найдено программно и не передано вручную ${title} ${youtubeUrl}.`
      );

    if (!foundMember && memberInput) foundMember = memberInput;

    foundMember = getIdolName(foundMember, groupName);
  }

  let date = "";
  if (title.match(/\d{8}/g)) {
    date = title.match(/\d{8}/g)[0];
  } else if (title.match(/\d{6}/g)) {
    date = title.match(/\d{6}/g)[0];
  } else if (title.match(/(\d{1,2})\.\d{1,2}\.\d{4}/g)) {
    date = title.match(/(\d{1,2})\.\d{1,2}\.\d{4}/g);
  } else if (title.match(/(\d{2}|\d{4})\.\d{1,2}\.\d{1,2}/g))
    date = title.match(/(\d{2}|\d{4})\.\d{1,2}\.\d{1,2}/g)[0];

  if (!date && dateInput) date = dateInput;
  if (typeof date == `object` && date !== null) {
    date = date[0];
  }

  const oldDate = date;
  if (date) {
    if (date.match(/\d{8}/g)) {
      const regex = /202[0-9]|201[0-9]/;
      const year = date.match(regex)[0];
      let dateWithoutYear = "";
      if (date.match(regex).index === 4)
        dateWithoutYear = date.slice(
          date.match(regex).index - 4,
          date.match(regex).index
        );
      else {
        dateWithoutYear = date.slice(
          date.match(regex).index + 4,
          date.match(regex).index + 8
        );
      }
      const month = dateWithoutYear.substring(0, 2);
      const day = dateWithoutYear.substring(2, 4);
      date = `${year}.${month}.${day}`;
    } else if (date.match(/\d{6}/g)) {
      const month = date.substring(2, 4);
      const day = date.substring(4, 6);
      const year = "20" + date.substring(0, 2);
      date = `${year}.${month}.${day}`;
    } else if (date.match(/(\d{4})\.\d{1,2}\.\d{1,2}/g)) {
      let day = date.match(/[^.]+$/g)[0];
      if (day.length === 1) day = `0${day}`;
      let month = date.match(/(?:\.\w{2})|(?:\.\w)/g)[0].substring(1);
      if (month.length === 1) month = `0${month}`;
      let year = date.substring(0, 4);
      date = `${year}.${month}.${day}`;
    } else if (date.match(/(\d{1,2})\.\d{1,2}\.\d{4}/g)) {
      let day = date.match(/^[^.]+/)[0];
      if (day.length === 1) day = `0${day}`;
      let month = date.match(/(?:\.\w{2})|(?:\.\w)/g)[0].substring(1);
      if (month.length === 1) month = `0${month}`;
      let year = date.match(/[^.]+$/g)[0];
      date = `${year}.${month}.${day}`;
    } else if (date.match(/(\d{2})\.\d{1,2}\.\d{1,2}/g)) {
      let day = date.match(/[^.]+$/g)[0];
      if (day.length === 1) day = `0${day}`;
      let month = date.match(/(?:\.\w{2})|(?:\.\w)/g)[0].substring(1);
      if (month.length === 1) month = `0${month}`;
      let year = "20" + date.substring(0, 2);
      date = `${year}.${month}.${day}`;
    }
  }

  if (!date || date === null) {
    date = video.snippet.publishedAt.match(/.*(?=T)/)[0];
    date = date.replaceAll(/-/gi, ".");
  }

  if (
    (date.match(/\d{6}/g) && new Date(date) > new Date()) ||
    new Date(date).toString() === `Invalid Date`
  ) {
    const day = oldDate.substring(0, 2);
    const month = oldDate.substring(2, 4);
    const year = "20" + oldDate.substring(4, 6);
    date = `${year}.${month}.${day}`;
  }

  if (
    (new Date(date) < new Date(`2018.01.01`) && !dateInput) ||
    (new Date(date) > new Date() && !dateInput) ||
    new Date(date).toString() === `Invalid Date`
  )
    throw new Error(`Невалидная дата \n ${youtubeUrl}`);

  let foundSongsString = "";
  foundSongs.forEach((foundSong) => {
    foundSongsString += foundSong + ".";
  });
  foundSongsString = foundSongsString.slice(0, -1);

  if (type === `fancam`) {
    if (getAdditionalSiteTags(title).includes(`facecam`)) {
      const result =
        foundSongsString + "-" + foundMember + "-" + date + "-facecam-";
      return [result, date, foundSongs.length];
    } else {
      const result = foundSongsString + "-" + foundMember + "-" + date + "-";
      return [result, date, foundSongs.length];
    }
  } else {
    if (getAdditionalSiteTags(title).includes(`fullcam`)) {
      const result = foundSongsString + "-" + date + "-fullcam-";
      return [result, date, foundSongs.length];
    } else {
      const result = foundSongsString + "-" + date + "-";
      return [result, date, foundSongs.length];
    }
  }
};

export default createVideoDataName;
