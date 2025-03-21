import { REGEX_BOUNDARIES } from "consts/general";
import getIdolName from "./getIdolName";

function fancamOrPerfomanceCheck(title, membersList, groupName) {
  const videoTitle = title.toLowerCase();

  const regexBoundaries = REGEX_BOUNDARIES;
  let foundMembers = [];
  membersList.forEach((member) => {
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
      if (videoTitle.match(underScoreMemberRegex)) {
        foundMembers.push(member);
      }
      if (videoTitle.match(withoutSpaceMemberRegex)) {
        foundMembers.push(member);
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
        foundMembers.push(member);
      }
    }
    const memberListRegex = new RegExp(
      `(?<![a-zA-Z0-9])(?<=${regexBoundaries}|^)${member.toLowerCase()}(?=${regexBoundaries}|$)(?![a-zA-Z0-9])`,
      "gmi"
    );
    if (videoTitle.match(memberListRegex)) {
      foundMembers.push(videoTitle.match(memberListRegex)[0]);
    }
  });
  foundMembers = foundMembers.map((member) => getIdolName(member, groupName));
  foundMembers = [...new Set(foundMembers)];

  if (foundMembers.length === 1) {
    return `fancam`;
  } else return `perfomance`;
}

export default fancamOrPerfomanceCheck;
