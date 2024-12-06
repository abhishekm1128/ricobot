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

  const handleThumbnailClick = (backgroundUrl) => {
    setBackgroundImage(backgroundUrl);
  };

  return (
    <div
      className="product-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="product-content">
        <div>{articleText.header}</div>
        <Chip text={articleText.banner} />
        <div>{articleText.title}</div>
        <div>{articleText.description}</div>
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
