import React, { useEffect, useState } from "react";
import "./Thumbnails.scss";

const Thumbnails = ({ images, onThumbnailClick }) => {
  const [selectedThumbnailId, setSelectedThumbnailId] = useState(null);
  // disabling the lint rule, as selectedThumbnailIndex might be needed in future
  // eslint-disable-next-line no-unused-vars
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  // Handle Thumbnail click
  const handleThumbnailClick = (id, backgroundUrl, foregroundUrl, index) => {
    setSelectedThumbnailId(id);
    setSelectedThumbnailIndex(index);
    onThumbnailClick(backgroundUrl, foregroundUrl || ""); // Update parent to set Background and Foreground
  };

  // Effect to set selected thumbnail
  useEffect(() => {
    if (images?.length > 0) {
      setSelectedThumbnailId(images[0].id);
    }
  }, [images]);

  // Effect to change slides every 3 seconds
  useEffect(() => {
    if (images?.length > 0) {
      const interval = setInterval(() => {
        setSelectedThumbnailIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          const nextImage = images[nextIndex];
          setSelectedThumbnailId(nextImage.id);
          onThumbnailClick(
            nextImage["background-url"],
            nextImage["foreground-url"] || ""
          );
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images, onThumbnailClick]);

  return (
    <div className="thumbnail-container">
      {images?.length > 0 &&
        images.map((image, index) => (
          <div
            key={image.id}
            className="thumbnail-wrapper"
            onClick={() =>
              handleThumbnailClick(
                image.id,
                image["background-url"],
                image["foreground-url"],
                index
              )
            }
          >
            <img
              src={image["thumbnail-url"]}
              alt={image["alt-text"]}
              className={`thumbnail ${
                selectedThumbnailId === image.id ? "selected-thumbnail" : ""
              }`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/assets/1-thumbnail.png";
              }}
            />
            <div
              className={`thumbnail-overlay ${
                selectedThumbnailId === image.id ? "selected-thumbnail" : ""
              }`}
            />
          </div>
        ))}
    </div>
  );
};

export default Thumbnails;
