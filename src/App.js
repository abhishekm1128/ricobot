import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductInfo from "./pages/ProductInfo";
import "./global.scss";

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
    <Routes>
      {basePages.map((page) => {
        console.log(page.routeLink)
        return (
        <Route
        key={page.pageId}
          path={page.routeLink}
          element={<ProductInfo pageId={page.pageId} />}
        />
        )
      })}
    </Routes>
  );
};

export default App;
