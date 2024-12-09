import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import theme from './theme';

// Base page config to set up Routes dynamically
// Can be made dynamic by fetching from DB
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
              element={<ProductInfo pageId={page.pageId} />} // Passing pageId to route
            />
          );
        })}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
