import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPageData } from "./../store/productInfo/action";
import Chip from "../components/Chip/Chip";
import CtaButton from "../components/CtaButton/CtaButton";
import Thumbnails from "../components/Thumbnails/Thumbnails";

const ProductInfo = ({ pageId }) => {
  console.log(pageId);

  const [backgroundImage, setBackgroundImage] = useState(null);
  const dispatch = useDispatch();

  const pageData = useSelector((state) => state.pagedata);

  console.log(pageData);
  useEffect(() => {
    dispatch(getPageData());
  }, [dispatch]);

  const { articleText, articleImages } = pageData || {};
  const ctaButtonProps = {
    text: articleText.cta && articleText.cta.text,
    link: articleText.cta && articleText.cta.link,
    linkOut: articleText.cta && articleText.cta.linkOut
  }
  console.log(pageData)
  console.log(articleText)

  const handleThumbnailClick = (backgroundUrl) => {
    setBackgroundImage(backgroundUrl);
  };

  return (
    <div
    style={{
      width: '100%',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginBottom: '20px',
    }}>
      <h1>{articleText.header}</h1>
      <h1>{articleText.banner}</h1>
      <Chip text={articleText.banner} />
      <h1>{articleText.title}</h1>
      <div>{articleText.description}</div>
      <CtaButton {...ctaButtonProps} />
      <Thumbnails images={articleImages} onThumbnailClick={handleThumbnailClick} />
      <div style={{ display: "flex", gap: "10px" }}></div>
    </div>
  );
};

export default ProductInfo;
