const getFormattedUrl = (url, id) => {
  let formattedId;
  if (url) {
    const urlReg =
      /(?<=watch\?v=|\/videos\/|embed\/|youtu.be\/|\/v\/|watch\?v%3D|%2Fvideos%2F|embed%2F|youtu.be%2F|%2Fv%2F)[^#\&\?\n]*/gm; //eslint-disable-line
    formattedId = url.match(urlReg)[0].replaceAll(`"`, ``);
  }
  if (id) formattedId = id;
  const formattedUrl = `https://youtu.be/${formattedId}`;
  return formattedUrl;
};

export default getFormattedUrl;
