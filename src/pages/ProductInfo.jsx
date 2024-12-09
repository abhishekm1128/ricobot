import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "styled-components";
import { getPageData } from "./../store/productInfo/action";
import Chip from "../components/Chip/Chip";
import CtaButton from "../components/CtaButton/CtaButton";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import "./ProductInfo.scss";

const ProductInfo = ({ pageId }) => {
  console.log(pageId);

  const [backgroundImage, setBackgroundImage] = useState(null);
  const [foregroundImage, setForegroundImage] = useState(null);
  const dispatch = useDispatch();

  const pageData = useSelector((state) => state.pagedata);

  useEffect(() => {
    dispatch(getPageData());
  }, [dispatch]);

  useEffect(() => {
    if (pageData?.articleImages?.length > 0) {
      const [image] = pageData.articleImages;
      setBackgroundImage(image["background-url"] || "");
      setForegroundImage(image["foreground-url"] || "");
    }
  }, [pageData]);

  const { articleText, articleImages } = pageData || {};
  const ctaButtonProps = {
    text: articleText.cta && articleText.cta.text,
    link: articleText.cta && articleText.cta.link,
    linkOut: articleText.cta && articleText.cta.linkOut,
  };

  const handleThumbnailClick = (backgroundUrl, foregroundUrl) => {
    setBackgroundImage(backgroundUrl);
    setForegroundImage(foregroundUrl);
  };

  return (
    <div
      className="product-container"
      // style={{
      //   backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      <div className="image-container">
        <div
          className="background"
          style={{
            backgroundImage: `
            url(${backgroundImage})
          `,
          }}
        />
        {foregroundImage && (
          <div className="foreground">
            <img src={foregroundImage} alt="Tablet" />
          </div>
        )}

        <div className="gradient-overlay" />
      </div>

      <div className="product-content">
        <div className="product-header">{articleText.header}</div>
        {articleText.banner && <Chip text={articleText.banner} />}
        <div className="product-title">{articleText.title}</div>
        <div className="product-description">{articleText.description}</div>
        {articleText.cta && articleText.cta.text && (
          <CtaButton {...ctaButtonProps} />
        )}

        {articleImages && articleImages.length > 0 && (
          <Thumbnails
            images={articleImages}
            onThumbnailClick={handleThumbnailClick}
          />
        )}
      </div>
    </div>
  );
};

export default withTheme(ProductInfo);
