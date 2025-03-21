import "./style.css";
import axios from "axios";
import { Tooltip, TooltipContent } from "components/VideoCard/styled";
import LoadingModal from "components/Modal/LoadingModal/LoadingModal";
import returnVideoData from "video/returnVideoData";
import { useEffect, useRef, useState } from "react";
import { getCookie } from "helpers/getCookie";

import {
  LogInWrapper,
  LogInFormWrapper,
  SignInButton,
  CreatePageFlexWrapper,
  AdditionalFormsWrapper,
  CreatePageName,
  InputForm,
  CreateInputWrapper,
  LinkFlexWrapper,
} from "./styled";
import CheckBox from "../../components/CheckBoxes/BasicCheckBoxes/CheckBox/CheckBox";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

const CreatePage = () => {
  const [signIn, setSignIn] = useState(() => {
    if (document.cookie.includes(`validToken=yes`)) return true;
    else return false;
  });

  const [login, setLogin] = useState("ssamachi");
  const [password, setPassword] = useState("testik");
  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const [urlInput, setUrlInput] = useState("");
  const [deletionInput, setDeletionInput] = useState("");

  const [songInput, setSongInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [ignoreForbiddenWordCheck, setIgnoreForbiddenWordCheck] =
    useState(false);

  const inputUrlRef = useRef(null);
  const inputDeletionRef = useRef(null);

  const songRef = useRef(null);
  const nameRef = useRef(null);
  const dateRef = useRef(null);

  const [loadingModalDisplay, setLoadingModalDisplay] = useState(false);

  const [errorModalDisplay, setErrorModalDisplay] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");

  const handleVideo = async () => {
    setLoadingModalDisplay(true);
    const reg =
      /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim;
    const urls = inputUrlRef.current.value.match(reg);

    if (urls === null) {
      // eslint-disable-next-line
      throw {
        response: {
          data: { message: "Не найдено ссылки" },
          status: 400,
        },
      };
    }

    try {
      await Promise.all(
        urls.map(async (url, index) => {
          console.log(`songs ${index}`);
          try {
            const data = await returnVideoData(
              url,
              songInput,
              nameInput,
              dateInput,
              ignoreForbiddenWordCheck,
              getCookie(`name`)
            );
            await axios.post(
              `${BACKEND_URL}/videos/createVideoFromDTO?author=${getCookie(
                `name`
              )}`,
              data
            );
            console.log("video done");
          } catch (error) {
            console.log(error);
            setErrorModalDisplay(true);
            setErrorModalMessage((prevMessage) => ({
              ...prevMessage,
              message: `${prevMessage.message ? prevMessage.message : ""}
          ${error?.response?.data?.message || error.message}`,
            }));
          }
        })
      );
    } catch (error) {
      console.log(error);
      setErrorModalDisplay(true);
      setErrorModalMessage((prevMessage) => ({
        ...prevMessage,
        message: `${prevMessage.message ? prevMessage.message : ""}${
          error?.response?.data?.message || error.message
        }`,
      }));
    } finally {
      setUrlInput("");
      setLoadingModalDisplay(false);
      setSongInput("");
      setNameInput("");
      setDateInput("");
      console.log("all videos done");
    }

    for (const url of urls) {
      console.log(`chunk`);
      try {
        await axios.post(
          `${BACKEND_URL}/chunks/createChunksAndPutFcamInto?url=${url}`
        );
        console.log("addition to chunks done");
      } catch (error) {
        console.log(error);
        setErrorModalDisplay(true);
        setErrorModalMessage((prevMessage) => ({
          ...prevMessage,
          message: `${prevMessage.message ? prevMessage.message : ""}${
            error?.response?.data?.message || error.message
          }`,
        }));
      }
    }
    console.log(`handleVideo done`);
  };

  const handleLogin = async () => {
    try {
      const body = { login: login, password: password };
      const response = await axios.post(`${BACKEND_URL}/auth/login`, body, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setSignIn(true);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      setErrorModalDisplay(true);
      setErrorModalMessage((prevMessage) => ({
        ...prevMessage,
        message: `${prevMessage.message ? prevMessage.message : ""}${
          error?.response?.data?.message || error.message
        }`,
      }));
    }
  };

  const handleDeletion = async () => {
    setLoadingModalDisplay(true);
    // eslint-disable-next-line
    try {
      const reg =
        /(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gim;
      const urls = inputDeletionRef.current.value.match(reg);

      if (urls === null) {
        // eslint-disable-next-line
        throw {
          response: {
            data: { message: "Не найдено ссылки" },
            status: 400,
          },
        };
      }

      for (const url of urls) {
        try {
          await axios.delete(`${BACKEND_URL}/videos/deleteVideo?url=${url}`, {
            data: { author: getCookie("name") },
          });
        } catch (error) {
          console.log(error);
          setErrorModalDisplay(true);
          setErrorModalMessage((prevMessage) => ({
            ...prevMessage,
            message: `${prevMessage.message ? prevMessage.message : ""}${
              error?.response?.data?.message || error.message
            }`,
          }));
        }
      }
    } catch (error) {
      console.log(error);
      setErrorModalDisplay(true);
      setErrorModalMessage((prevMessage) => ({
        ...prevMessage,
        message: `${prevMessage.message ? prevMessage.message : ""}${
          error?.response?.data?.message || error.message
        }`,
      }));
    } finally {
      setDeletionInput("");
      setLoadingModalDisplay(false);
    }
  };

  return (
    <>
      {signIn ? (
        <>
          <CreatePageName>{getCookie(`name`)}</CreatePageName>
          <CreateInputWrapper>
            <LinkFlexWrapper>
              <InputForm>
                <div className="form__group field link">
                  <input
                    size={120}
                    type="input"
                    ref={inputUrlRef}
                    value={urlInput}
                    onChange={(event) => setUrlInput(event.target.value)}
                    className="form__field"
                    placeholder="Url(s)"
                    required
                  ></input>
                  <label htmlFor="name" className="form__label">
                    Url(s)
                  </label>
                </div>
              </InputForm>
              <button className="styledButton" onClick={handleVideo}>
                Отправить
              </button>
            </LinkFlexWrapper>
            <CreatePageFlexWrapper>
              <AdditionalFormsWrapper>
                <Tooltip>
                  <TooltipContent
                    $padding={`10px`}
                    $width={`500px`}
                    $marginLeft={`-9vh`}
                    $marginBottom={`-3vh`}
                    $left={`45%`}
                    className="tooltip first"
                  >
                    Если название песни в заголовке видео написано с опечаткой,
                    не написано вообще или найдено сайтом неправильно, заполните
                    это поле. (предпочтительно название песни на латинице, если
                    оно есть)
                  </TooltipContent>
                  <InputForm>
                    <div className="form__group field">
                      <input
                        type="input"
                        ref={songRef}
                        value={songInput}
                        onChange={(event) => setSongInput(event.target.value)}
                        className="form__field"
                        placeholder="Song"
                        required=""
                      ></input>
                      <label htmlFor="name" className="form__label">
                        Song
                      </label>
                    </div>
                  </InputForm>
                </Tooltip>
                <Tooltip>
                  <TooltipContent
                    $padding={`10px`}
                    $width={`300px`}
                    $marginLeft={`-18vh`}
                    $marginBottom={`-3.5vh`}
                    className="tooltip small"
                  >
                    Если песен несколько, то через запятую.
                  </TooltipContent>
                  <svg
                    className="svgHelper"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 12 7 A 1 1 0 0 0 12 9 A 1 1 0 0 0 12 7 z M 11.984375 10.986328 A 1.0001 1.0001 0 0 0 11 12 L 11 17 A 1.0001 1.0001 0 1 0 13 17 L 13 12 A 1.0001 1.0001 0 0 0 11.984375 10.986328 z"></path>
                  </svg>
                </Tooltip>
              </AdditionalFormsWrapper>
              <AdditionalFormsWrapper>
                <Tooltip>
                  <TooltipContent
                    $padding={`10px`}
                    $width={`500px`}
                    $marginLeft={`-13vh`}
                    $marginBottom={`-3vh`}
                    $left={`50%`}
                    className="tooltip second"
                  >
                    Если имя айдола в заголовке видео написано с опечаткой, не
                    написано, хотя должно быть там или найдено сайтом
                    неправильно, заполните это поле. (предпочтительно на
                    латинице)
                  </TooltipContent>
                  <InputForm>
                    <div className="form__group field">
                      <input
                        type="input"
                        ref={nameRef}
                        value={nameInput}
                        onChange={(event) => setNameInput(event.target.value)}
                        className="form__field"
                        placeholder="Name"
                        required=""
                      ></input>
                      <label htmlFor="name" className="form__label">
                        Name
                      </label>
                    </div>
                  </InputForm>
                </Tooltip>
                <Tooltip>
                  <TooltipContent
                    $padding={`10px`}
                    $width={`300px`}
                    $marginLeft={`-18vh`}
                    $marginBottom={`-3.5vh`}
                    className="tooltip small"
                  >
                    Если в видео нет фокуса на конкретном айдоле, то указывать
                    имя не нужно.
                  </TooltipContent>
                  <svg
                    className="svgHelper"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 12 7 A 1 1 0 0 0 12 9 A 1 1 0 0 0 12 7 z M 11.984375 10.986328 A 1.0001 1.0001 0 0 0 11 12 L 11 17 A 1.0001 1.0001 0 1 0 13 17 L 13 12 A 1.0001 1.0001 0 0 0 11.984375 10.986328 z"></path>
                  </svg>
                </Tooltip>
              </AdditionalFormsWrapper>
              <AdditionalFormsWrapper>
                <Tooltip>
                  <TooltipContent
                    $padding={`10px`}
                    $width={`400px`}
                    $marginLeft={`-12vh`}
                    $marginBottom={`-3vh`}
                    $left={`60%`}
                    className="tooltip third"
                  >
                    Если в названии видео не указана дата, то датой станет день
                    загрузки видео на Ютуб, если в этом поле не указано иное в
                    формате "год.месяц.день". (пример - 2024.05.27)
                  </TooltipContent>
                  <InputForm>
                    <div className="form__group field last">
                      <input
                        type="input"
                        ref={dateRef}
                        size={23}
                        value={dateInput}
                        onChange={(event) => setDateInput(event.target.value)}
                        className="form__field"
                        placeholder="Name"
                        required=""
                      ></input>
                      <label htmlFor="name" className="form__label">
                        Date
                      </label>
                    </div>
                  </InputForm>
                </Tooltip>
              </AdditionalFormsWrapper>
            </CreatePageFlexWrapper>
            <CheckBox
              name={`Ignore forbidden word check`}
              type={`checkbox`}
              className={`ui-checkbox`}
              callback={(checked) => {
                setIgnoreForbiddenWordCheck(checked);
              }}
              maxWidth={`300px`}
            ></CheckBox>
          </CreateInputWrapper>
          <CreateInputWrapper>
            <LinkFlexWrapper>
              <InputForm>
                <div className="form__group field link">
                  <input
                    size={120}
                    type="input"
                    ref={inputDeletionRef}
                    value={deletionInput}
                    onChange={(event) => setDeletionInput(event.target.value)}
                    className="form__field"
                    placeholder="Url(s) deletion"
                    required
                  ></input>
                  <label htmlFor="name" className="form__label">
                    Url(s) deletion
                  </label>
                </div>
              </InputForm>
              <button className="styledButton" onClick={handleDeletion}>
                Отправить
              </button>
            </LinkFlexWrapper>
          </CreateInputWrapper>
        </>
      ) : (
        <LogInWrapper>
          <LogInFormWrapper>
            <div className="form__group field link">
              <input
                size={15}
                type="input"
                ref={loginRef}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="form__field"
                placeholder="Login"
                required
              ></input>
              <label htmlFor="name" className="form__label">
                Login
              </label>
            </div>

            <div className="form__group field link">
              <input
                size={15}
                type="input"
                ref={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form__field"
                placeholder="Password"
                required
              ></input>
              <label htmlFor="name" className="form__label">
                Password
              </label>
            </div>
            <SignInButton onClick={() => handleLogin()}>Sign in </SignInButton>
          </LogInFormWrapper>
        </LogInWrapper>
      )}

      <LoadingModal
        active={loadingModalDisplay}
        setActive={setLoadingModalDisplay}
        width={"auto"}
        minHeight={`auto`}
      >
        Ожидание появления попы у Ерохи
      </LoadingModal>

      <LoadingModal
        active={errorModalDisplay}
        setActive={setErrorModalDisplay}
        setErrorModalMessage={setErrorModalMessage}
        width={"auto"}
        error={true}
        minHeight={`auto`}
      >
        {errorModalMessage.message}
      </LoadingModal>
    </>
  );
};
export default CreatePage;
