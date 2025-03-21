import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    interpolation: {},
    resources: {
      en: {
        translation: {
          homePage: {
            videoCount: `Total`,
            songs: `Songs`,
            members: `Members`,
            filters: `Filters`,
            sort: `Sort by`,
            additionalFilters1: `Add. filters 1`,
            additionalFilters2: `Add. filters 2`,
          },
          videoCard: {
            views: `views`,
            likes: `Likes`,
            song: `Song`,
            perfomance: `Perfomance`,
            siteTag0: `Idol's most viewed fancam`,
            siteTag1: `The most viewed video for the song`,
            siteTag2: `Idol's most viewed fancam for the song`,
            siteTag3: `The most viewed fancam on the same date`,
            tooltipStats1: `Compared to all of idol's fancams for the song`,
            tooltipStats2: `Compared to other members fancams for the same performance`,
            tooltipRestrictionJapan: `Unavailable in Japan`,
            tooltipRestrictionSK: `Unavailable in South Korea`,
            tooltipRestrictionRussia: `Unavailable in RF`,
            tooltipRestrictionPaywall: `Paywalled`,
          },
          videoModal: {
            publicationDate: `Publication date`,
            channel: `Channel`,
            viewsCount: `View count`,
            likesCount: `Like count`,
            commentCount: `Comment count`,
            viewsLikeRatio: `Views/Likes ratio`,
            averageIdolTooltip: `Relative to the average views across ALL official idol performances of ALL songs`,
            averageIdolSongTooltip: `Relative to the average views across all official idol performances on the song`,
            averagePerfomanceTooltip: `Relative to the average views across the performance, comparing to other members`,
            averageSongTooltip: `Relative to the average views across ALL official performances of ALL members on the song`,
            totalIdolTooltip: `Percentage of all cumulative views of official idol performances`,
            totalIdolSongTooltip: `Percentage of all cumulative views of official Idol performances of the song`,
            totalPerfomanceTooltip: `Percentage of all cumulative views of a specific performance`,
            totalSongTooltip: `Percentage of all cumulative views of the official performances of ALL idols in the group on a specific song`,
            updated: `Updated`,
          },
        },
      },
      ru: {
        translation: {
          homePage: {
            videoCount: `Всего`,
            songs: `Песни`,
            members: `Участницы`,
            filters: `Фильтры`,
            sort: `Сортировка:`,
            additionalFilters1: `Доп. фильтры 1`,
            additionalFilters2: `Доп. фильтры 2`,
          },
          videoCard: {
            views: `Просм.`,
            likes: `Лайки`,
            song: `Песня`,
            perfomance: `Выступление`,
            siteTag0: `Самый просматриваемый фанкам айдола`,
            siteTag1: `Самый просматриваемый фанкам на песню`,
            siteTag2: `Самый просматриваемый фанкам айдола на песню`,
            siteTag3: `Самый просматриваемый из группы фанкамов на одну дату`,
            tooltipStats1: `По сравнению со всеми фанкамами айдола на песню`,
            tooltipStats2: `По сравнению с другими фанкамами мемберов на этот же перфоманс`,
            tooltipRestrictionJapan: `Недоступно в Японии`,
            tooltipRestrictionSK: `Недоступно в Южной Корее`,
            tooltipRestrictionRussia: `Недоступно в РФ`,
            tooltipRestrictionPaywall: `За пейволлом`,
          },
          videoModal: {
            publicationDate: `Дата публикации`,
            channel: `Канал`,
            viewsCount: `Количество просмотров`,
            likesCount: `Количество лайков`,
            commentCount: `Количество комментариев`,
            viewsLikeRatio: `Просмотры/лайки`,
            averageIdolTooltip: `Относительно средних просмотров по ВСЕМ официальным перфомансам айдола на ВСЕ песни`,
            averageIdolSongTooltip: `Относительно средних просмотров по всем официальным перфомансам айдола на песню`,
            averagePerfomanceTooltip: `Относительно средних просмотров по перфомансу, в сравнении с другими участницами группы`,
            averageSongTooltip: `Относительно средних просмотров по ВСЕМ официальным перфомансам ВСЕХ участниц группы на песню`,
            totalIdolTooltip: `Процент от всех совокупных просмотров на официальных перфомансах айдола`,
            totalIdolSongTooltip: `Процент от всех совокупных просмотров на официальных перфомансах айдола на песню`,
            totalPerfomanceTooltip: `Процент от всех совокупных просмотров на конкретный перфоманс`,
            totalSongTooltip: `Процент от всех совокупных просмотров на официальных перфомансах ВСЕХ айдолов в группе на конкретную песню`,
            updated: `Обновлено`,
          },
        },
      },
    },
  });

export default i18n;
