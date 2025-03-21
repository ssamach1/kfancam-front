const getUTCDate = (date) => {
  const timestamp = new Date(date).toISOString();
  const result = timestamp.slice(0, 10) + " " + timestamp.slice(11, -8);
  return result;
};

export default getUTCDate;
