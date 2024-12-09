import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
      <div
        className="background"
        style={{
          backgroundImage: `
            linear-gradient(to left, rgba(37, 45, 55, 0) 40%, #09101A 100%), 
            linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, #000000 100%),
            url(${backgroundImage})
          `,
        }}
      />
      {foregroundImage && (
        <div className="foreground">
          <img src={foregroundImage} alt="Tablet" />
        </div>
      )}
      <div className="product-content">
        <div className="product-header">{articleText.header}</div>
        <Chip text={articleText.banner} />
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

export default ProductInfo;
