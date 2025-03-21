import Header from "../Header/Header";
import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const HomePage = lazy(() => import("../HomePage/HomePage.jsx"));
const StartPage = lazy(() => import("../StartPage/StartPage.jsx"));
const CreatePage = lazy(() => import("../CreatePage/CreatePage.jsx"));
const IdolPage = lazy(() => import("../IdolPage/IdolPage.jsx"));
const InfoPage = lazy(() => import("../InfoPage/InfoPage.jsx"));

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<StartPage />} />
      <Route path="/" element={<Header />}>
        <Route path="group/:groupName" element={<HomePage />} />
        <Route path="idol/:idolName" element={<IdolPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
