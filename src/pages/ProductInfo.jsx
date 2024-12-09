import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withTheme } from "styled-components";
import { getPageData } from "./../store/productInfo/action";
import Chip from "../components/Chip/Chip";
import CtaButton from "../components/CtaButton/CtaButton";
import Thumbnails from "../components/Thumbnails/Thumbnails";
import "./ProductInfo.scss";

const ProductInfo = ({ pageId }) => {
  // Initialize state for Background and Foreground Image URLs
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [foregroundImage, setForegroundImage] = useState(null);

  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pagedata);

  // Effect to fetch metadata for current page based on pageId
  useEffect(() => {
    dispatch(getPageData(pageId));
  }, [dispatch, pageId]);

  // Setting default background and foreground after fetching pageData
  useEffect(() => {
    if (pageData?.articleImages?.length > 0) {
      const [image] = pageData.articleImages;
      setBackgroundImage(image["background-url"] || "");
      setForegroundImage(image["foreground-url"] || "");
    }
  }, [pageData]);

  // Defaulting background image, if the image load fails
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;

    img.onerror = () => {
      setBackgroundImage("/assets/1-background.png");
    };
  }, [backgroundImage]);

  // Destructuring pageData
  const { articleText, articleImages, isLoading, error } = pageData || {};

  // Defining props to pass in the CTA Button component
  const ctaButtonProps = {
    text: articleText.cta && articleText.cta.text,
    link: articleText.cta && articleText.cta.link,
    linkOut: articleText.cta && articleText.cta.linkOut,
  };

  // Callback to handle Thumbnail Click
  const handleThumbnailClick = (backgroundUrl, foregroundUrl) => {
    setBackgroundImage(backgroundUrl);
    setForegroundImage(foregroundUrl);
  };

  return (
    <div>
      {!error && !isLoading ? (
        <div className="product-container">
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
                <img
                  src={foregroundImage}
                  alt="Foreground"
                  onError={({ currentTarget }) => { // Fallback image if the image load fails
                    currentTarget.onerror = null;
                    currentTarget.src = "/assets/1-foreground-cutout.png";
                  }}
                />
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
      ) : (
        <div className="error-container">
          <div className="error">{error}</div>
          <button
            className="retry-button"
            onClick={() => dispatch(getPageData(pageId))}
          >
            Click to retry
          </button>
        </div>
      )}
    </div>
  );
};

export default withTheme(ProductInfo);
