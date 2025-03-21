import { ResetButton } from "./ResetButton";
import "./style.css";

function getClassNameForSearch(groupName) {
  if (groupName === `allgroups`) return `form allgroups fromis_9`;
  if (groupName === `aespa`) return `form aespa`;
  if (groupName === `babymonster`) return `form babymonster`;
  if (groupName === `fromis_9`) return `form fromis_9`;
  if (groupName === `gidle`) return `form gidle`;
  if (groupName === `illit`) return `form illit`;
  if (groupName === `itzy`) return `form itzy`;
  if (groupName === `ive`) return `form ive`;
  if (groupName === `kepler`) return `form kepler`;
  if (groupName === `kissoflife`) return `form kissoflife`;
  if (groupName === `lesserafim`) return `form lesserafim`;
  if (groupName === `newjeans`) return `form newjeans`;
  if (groupName === `nmixx`) return `form nmixx`;
  if (groupName === `stayc`) return `form stayc`;
  else return `form`;
}

export const Search = ({
  groupName,
  searchInput,
  handleSeachQuery,
  setSearchQuery,
  setSearchInput,
  setPage,
}) => {
  return (
    <form className={getClassNameForSearch(groupName)}>
      <ResetButton />
      <input
        className="input"
        value={searchInput}
        onChange={(event) => handleSeachQuery(event.target.value)}
        required=""
        type="text"
      />
      <button
        className="reset"
        onClick={() => {
          setSearchQuery("");
          setSearchInput("");
          setPage(0);
        }}
        type="reset"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </form>
  );
};
