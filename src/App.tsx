import { Suspense } from "react";
import MyRoutes from "./pages/routes/MyRoutes";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const AppStyles = createGlobalStyle`

  html {    
    overflow-x: hidden;
    width: 100%;
  }

  body {
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    // font-family: 'Montserrat', sans-serif;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    color: black;
    min-width: 320px;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color:inherit;
    text-decoration: inherit;
  }

  ul, li {
    list-style: none;
  }

  tr,
  td, 
  th,
  p,
  button,
  ul,
  li,
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0
  }
`;

const App = () => {
  return (
    <>
      <AppStyles />
      <BrowserRouter>
        <Suspense fallback="Loading...">
          <MyRoutes />
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
