import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductInfo from "./pages/ProductInfo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from './theme';

const basePages = [
  {
    pageId: "ricobot",
    routeLink: "/ricobot",
  },
  {
    pageId: "second-page-test",
    routeLink: "/secondpage",
  },
];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        {basePages.map((page) => {
          return (
            <Route
              key={page.pageId}
              path={page.routeLink}
              element={<ProductInfo pageId={page.pageId} />}
            />
          );
        })}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
