import VideoCard from "../../components/VideoCard/VideoCard";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import SortingSelect from "../../components/SortingSelect/SortingSelect";
import {
  SITE_TAGS_ARRAY_0,
  SITE_TAGS_ARRAY_FOR_INPUTS_0,
  SITE_TAGS_ARRAY_1,
  SITE_TAGS_ARRAY_FOR_INPUTS_1,
  SITE_TAGS_ARRAY_2,
  SITE_TAGS_ARRAY_FOR_INPUTS_2,
  SITE_TAGS_ARRAY_FOR_NAMES_0,
} from "../../consts/general";
import VideoModal from "../../components/Modal/VideoModal/VideoModal";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import getGroupConsts from "../../helpers/getGroupConsts";
import CardSkeleton from "../../components/VideoCard/CardSkeleton";
import { getCookie } from "../../helpers/getCookie";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import getSongName from "../../helpers/getSongName";
import {
  DropdownsWrapper,
  GridWrapper,
  InputWrapper,
  BodyWrapper,
  FlexWrapper,
  CountWrapper,
  AdditionalFiltersWrapper,
} from "./styled";
import DropdownCheckboxes from "../../components/CheckBoxes/DropdownCheckboxes/DropdownCheckboxes";
import { Search } from "../../components/Search/Search";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

function getSortingValues(language) {
  if (language === `en-US`)
    return [
      { value: "title", name: "By title" },
      { value: "-viewCount", name: "By views (more)" },
      { value: "viewCount", name: "By views (less)" },
      { value: "-publishedAt", name: "By date (newer)" },
      { value: "publishedAt", name: "By date (older)" },
    ];
  if (language === `ru`)
    return [
      { value: "title", name: "По названию" },
      { value: "-viewCount", name: "По просмотрам (больше)" },
      { value: "viewCount", name: "По просмотрам (меньше)" },
      { value: "-publishedAt", name: "По дате (новые)" },
      { value: "publishedAt", name: "По дате (старые)" },
    ];
}

function getMaxHeight(groupNumber) {
  if (groupNumber === 3 || groupNumber === 6) return `90px`;
  if (groupNumber === 4 || groupNumber === 7 || groupNumber === 8)
    return `120px`;
  if (groupNumber === 5 || groupNumber === 9 || groupNumber === 10)
    return `150px`;
  if (groupNumber === 11 || groupNumber === 12) return `180px`;
  else return Math.ceil(groupNumber / 3) * 30 + `px`;
}

function getMinWidth(groupNumber) {
  if (groupNumber <= 5) return `250px`;
  if (groupNumber <= 12) return `500px`;
  return `750px`;
}

function handleCookieCheck() {
  if (getCookie(`name`) && getCookie(`validToken`)) {
    return true;
  } else return false;
}

const HomePage = () => {
  const { groupName } = useParams();
  const cookieCheck = handleCookieCheck();

  const [groupTitles, groupMembers] = getGroupConsts(groupName);

  const [modalActive, setModalActive] = useState(false);
  const [modal, setModal] = useState("");

  const [youtubePlayerLoading, setYoutubePlayerLoading] = useState(false);
  const [youtubePlayerFistTimeLoading, setYoutubePlayerFistTimeLoading] =
    useState(false);

  // Получение видиков
  const [videos, setVideos] = useState([]);
  // Подсчёт видиков
  const [videoCount, setVideoCount] = useState(0);
  const [sort, setSort] = useState("-publishedAt");

  // Фильтры
  const [memberFilter, setMemberFilter] = useState([]);
  const [releaseFilter, setReleaseFilter] = useState([]);
  const [siteTagFilter, setSiteTagFilter] = useState([]);

  const [searchInput, setSearchInput] = useState(""); // для отображения
  const [searchQuery, setSearchQuery] = useState(""); // для запроса

  // Бесконечная лента
  const [page, setPage] = useState(0);
  // Скелетоны
  const [isLoading, setIsLoading] = useState(true);
  // Чтобы поиск нормально работал с дебаунсом
  const [pageSearchRestriction, setPageSearchRestriction] = useState(false);

  const limit = 25;
  const getAndSetVideos = useCallback(
    debounce(
      async () => {
        setVideos([]);
        if (
          siteTagFilter.length !== 0 ||
          (groupName === `allgroups` &&
            siteTagFilter.length === 0 &&
            videoCount !== 0)
        ) {
          setIsLoading(true);
          async function getVideos() {
            const response = await axios.get(
              `${BACKEND_URL}/videos/portion?memberFilter=${memberFilter}&releaseFilter=${releaseFilter}&siteTags=${siteTagFilter}&limit=${limit}&skip=${
                page * limit
              }&sort=${sort}&searchQuery=${searchQuery}`
            );
            setVideos(response.data);
            setIsLoading(false);
          }

          getVideos();
        }
      },
      750,
      { leading: true, trailing: false }
    ),
    [sort, memberFilter, releaseFilter, siteTagFilter, searchQuery]
  );
  useEffect(() => {
    getAndSetVideos();
  }, [getAndSetVideos]);

  const getAndSetVideoCount = useCallback(
    debounce(
      async () => {
        if (
          siteTagFilter.length !== 0 ||
          (groupName === `allgroups` &&
            siteTagFilter.length === 0 &&
            videoCount !== 0)
        ) {
          const count = await axios.get(
            `${BACKEND_URL}/videos/count?memberFilter=${memberFilter}&releaseFilter=${releaseFilter}&siteTags=${siteTagFilter}&searchQuery=${searchQuery}`
          );
          setVideoCount(count.data);
        }
      },
      500,
      { leading: true, trailing: false }
    ),
    [memberFilter, releaseFilter, siteTagFilter, searchQuery]
  );
  useEffect(() => {
    getAndSetVideoCount();
  }, [getAndSetVideoCount]);

  // Сортировка
  const sortPosts = useCallback((sort) => {
    setSort(sort);
    setPage(0);
    setVideos([]);
    switch (sort) {
      case "title":
        setVideos([...videos].sort((a, b) => a[sort].localeCompare(b[sort])));
        break;
      case "-publishedAt":
        setVideos(
          [...videos].sort(
            (a, b) =>
              new Date(b[sort.substring(0, sort.length - 1)]) -
              new Date(a[sort.substring(0, sort.length - 1)])
          )
        );
        break;
      case "publishedAt":
        setVideos(
          [...videos].sort(
            (a, b) =>
              new Date(a[sort.substring(0, sort.length - 1)]) -
              new Date(b[sort.substring(0, sort.length - 1)])
          )
        );
        break;
      case "-viewCount":
        setVideos(
          [...videos].sort(
            (a, b) =>
              b[sort.substring(0, sort.length - 1)] -
              a[sort.substring(0, sort.length - 1)]
          )
        );
        break;
      case "viewCount":
        setVideos(
          [...videos].sort(
            (a, b) =>
              a[sort.substring(0, sort.length - 1)] -
              b[sort.substring(0, sort.length - 1)]
          )
        );
        break;
      case "-likeCount":
        setVideos(
          [...videos].sort(
            (a, b) =>
              b[sort.substring(0, sort.length - 1)] -
              a[sort.substring(0, sort.length - 1)]
          )
        );
        break;
      case "likeCount":
        setVideos(
          [...videos].sort(
            (a, b) =>
              a[sort.substring(0, sort.length - 1)] -
              b[sort.substring(0, sort.length - 1)]
          )
        );
        break;
      default:
        break;
    }
  }, []);

  // ОБСЁРвер для бесконечной ленты
  const fetchingElement = useRef();
  const observer = useRef();
  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    const callback = (entries) => {
      if (
        entries[0].isIntersecting &&
        videos.length !== 0 &&
        !pageSearchRestriction
      ) {
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(fetchingElement.current);
  }, [videos]);
  // Подгрузка видео при достижении наблюдаемого элемента
  useEffect(() => {
    if (videoCount > page * limit)
      if (
        siteTagFilter.length !== 0 ||
        (groupName === `allgroups` &&
          siteTagFilter.length === 0 &&
          videos.length !== 0)
      ) {
        async function getVideos() {
          const response = await axios.get(
            `${BACKEND_URL}/videos/portion?memberFilter=${memberFilter}&releaseFilter=${releaseFilter}&siteTags=${siteTagFilter}&limit=${limit}&skip=${
              page * limit
            }&sort=${sort}&searchQuery=${searchQuery}`
          );
          setVideos([...videos, ...response.data]);
        }

        getVideos();
      }
  }, [page]);

  useEffect(() => {
    console.log(videos);
  }, [videos]);

  // Коллбэки для изменения состояния фильтров
  const titlesFilters = useCallback(
    (receivedFilter, checked) => {
      setPage(0);
      setVideos([]);
      if (checked) {
        setReleaseFilter([...releaseFilter, getSongName(receivedFilter)]);
      } else {
        const index = releaseFilter.indexOf(getSongName(receivedFilter));
        const newFilter = releaseFilter.filter(
          (item) => item !== releaseFilter[index]
        );
        setReleaseFilter(newFilter);
      }
    },
    [releaseFilter]
  );
  const memberFilters = useCallback(
    (receivedFilter, checked) => {
      setPage(0);
      setVideos([]);
      if (checked) {
        setMemberFilter([...memberFilter, receivedFilter.toLowerCase()]);
      } else {
        const index = memberFilter.indexOf(receivedFilter.toLowerCase());
        const newFilter = memberFilter.filter(
          (item) => item !== memberFilter[index]
        );
        setMemberFilter(newFilter);
      }
    },
    [memberFilter]
  );
  const siteTagFilters = useCallback(
    (receivedFilter, checked) => {
      setVideos([]);
      if (checked) {
        if (
          receivedFilter === `fancam` &&
          siteTagFilter.includes(`perfomance`)
        ) {
          let newSiteTagFilter = siteTagFilter.filter(
            (siteTag) => siteTag !== `perfomance`
          );
          setSiteTagFilter([...newSiteTagFilter, receivedFilter]);
        } else if (
          receivedFilter === `perfomance` &&
          siteTagFilter.includes(`fancam`)
        ) {
          let newSiteTagFilter = siteTagFilter.filter(
            (siteTag) => siteTag !== `fancam`
          );
          setSiteTagFilter([...newSiteTagFilter, receivedFilter]);
        } else setSiteTagFilter([...siteTagFilter, receivedFilter]);
      } else {
        const index = siteTagFilter.indexOf(receivedFilter);
        let newFilter = siteTagFilter.filter(
          (item) => item !== siteTagFilter[index]
        );
        setSiteTagFilter(newFilter);
      }
    },
    [siteTagFilter]
  );

  // Обновление видео и бесконечной ленты при смене фильтров
  useEffect(() => {
    setPage(0);
    setVideos([]);
  }, [memberFilter, releaseFilter, siteTagFilter, searchInput]);

  // Поиск и отложенный поиск
  const debouncedSearchQueryUpdate = useCallback(
    debounce((value) => {
      setPage(0);
      setSearchQuery(value);
      setPageSearchRestriction(false);
    }, 500),
    []
  );
  const handleSeachQuery = (value) => {
    setSearchInput(value);
    setPageSearchRestriction(true);
    debouncedSearchQueryUpdate(value);
  };

  // Локализация
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const language = navigator.language;
    i18n.changeLanguage(language);
  }, []);

  // Обновление всего при смене группы
  useEffect(() => {
    setReleaseFilter([]);
    setMemberFilter([]);
    setSearchInput("");
    setSearchQuery("");
    groupName !== `allgroups`
      ? setSiteTagFilter([`official`, `fancam`, groupName])
      : setSiteTagFilter([`official`, `fancam`]);
    setSort(`-publishedAt`);
    setPage(0);
    setVideos([]);
    setIsLoading(true);
  }, [groupName]);

  return (
    <>
      <Helmet>
        <title>Kfanc</title>
      </Helmet>
      <BodyWrapper $groupGradient={getGroupConsts(groupName)[3]}>
        <FlexWrapper>
          <CountWrapper>
            <div>
              {t("homePage.videoCount")} : {videoCount}{" "}
            </div>
          </CountWrapper>
          <Search
            groupName={groupName}
            searchInput={searchInput}
            handleSeachQuery={handleSeachQuery}
            setSearchQuery={setSearchQuery}
            setSearchInput={setSearchInput}
            setPage={setPage}
          />
        </FlexWrapper>
        <InputWrapper>
          {groupTitles.length !== 0 ? (
            <DropdownCheckboxes
              title={t("homePage.songs")}
              callback={titlesFilters}
              value={groupTitles}
              maxHeight={getMaxHeight(groupTitles.length)}
              className={`ui-checkbox`}
              siteTagFilter={releaseFilter}
              activatedByDefault={window.innerWidth >= 679}
            />
          ) : (
            ""
          )}
          {groupMembers.length !== 0 ? (
            <DropdownCheckboxes
              title={t("homePage.members")}
              callback={memberFilters}
              value={groupMembers}
              maxHeight={getMaxHeight(groupMembers.length)}
              className={`ui-checkbox`}
              siteTagFilter={memberFilter}
              activatedByDefault={window.innerWidth >= 679}
            />
          ) : (
            ""
          )}
          <DropdownCheckboxes
            title={t("homePage.filters")}
            callback={siteTagFilters}
            siteTagFilter={siteTagFilter}
            groupName={groupName}
            minWidth={getMinWidth(SITE_TAGS_ARRAY_0.length)}
            receivedFilters={SITE_TAGS_ARRAY_0}
            value={SITE_TAGS_ARRAY_FOR_INPUTS_0}
            forNames={SITE_TAGS_ARRAY_FOR_NAMES_0}
            maxHeight={`65px`}
            className={`ui-checkbox`}
            activatedByDefault={window.innerWidth >= 679}
          />
        </InputWrapper>
        <DropdownsWrapper>
          <AdditionalFiltersWrapper>
            <SortingSelect
              value={sort}
              onChange={sortPosts}
              name={t("homePage.sort")}
              options={getSortingValues(i18next.language)}
            />
            <DropdownCheckboxes
              name={t("homePage.additionalFilters1")}
              callback={siteTagFilters}
              siteTagFilter={siteTagFilter}
              groupName={groupName}
              receivedFilters={SITE_TAGS_ARRAY_1}
              value={SITE_TAGS_ARRAY_FOR_INPUTS_1}
              maxHeight={getMaxHeight(SITE_TAGS_ARRAY_FOR_INPUTS_1.length)}
              className={`ui-checkbox`}
              activatedByDefault={false}
            />
            <DropdownCheckboxes
              name={t("homePage.additionalFilters2")}
              callback={siteTagFilters}
              siteTagFilter={siteTagFilter}
              groupName={groupName}
              receivedFilters={SITE_TAGS_ARRAY_2}
              value={SITE_TAGS_ARRAY_FOR_INPUTS_2}
              maxHeight={getMaxHeight(SITE_TAGS_ARRAY_FOR_INPUTS_2.length)}
              className={`ui-checkbox`}
              activatedByDefault={false}
            />
          </AdditionalFiltersWrapper>
        </DropdownsWrapper>
        <GridWrapper>
          {isLoading ? (
            <CardSkeleton videos={videos} />
          ) : (
            videos.map((video) => (
              <VideoCard
                key={video._id}
                setModal={setModal}
                cookieCheck={cookieCheck}
                setModalActive={setModalActive}
                youtubePlayerFistTimeLoading={youtubePlayerFistTimeLoading}
                setYoutubePlayerLoading={setYoutubePlayerLoading}
                {...video}
              />
            ))
          )}
        </GridWrapper>
        <div ref={fetchingElement} style={{ height: 20 }}></div>
        <VideoModal
          modal={modal}
          active={modalActive}
          setActive={setModalActive}
          youtubePlayerLoading={youtubePlayerLoading}
          youtubePlayerFistTimeLoading={youtubePlayerFistTimeLoading}
          setYoutubePlayerLoading={setYoutubePlayerLoading}
          setYoutubePlayerFistTimeLoading={setYoutubePlayerFistTimeLoading}
          cookieCheck={cookieCheck}
        ></VideoModal>
      </BodyWrapper>
    </>
  );
};

export default HomePage;
