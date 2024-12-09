import React, { useEffect, useState } from "react";
import "./Thumbnails.scss";

const Thumbnails = ({ images, onThumbnailClick }) => {
  const [selectedThumbnailId, setSelectedThumbnailId] = useState(null);

  // Handle Thumbnail click
  const handleThumbnailClick = (id, backgroundUrl, foregroundUrl) => {
    setSelectedThumbnailId(id);
    onThumbnailClick(backgroundUrl, foregroundUrl || ""); // Update parent to set Background and Foreground
  };

  // Effect to set selected thumbnail
  useEffect(() => {
    if (images?.length > 0) {
      setSelectedThumbnailId(images[0].id);
    }
  }, [images]);

  return (
    <div className="thumbnail-container">
      {images &&
        images.length > 0 &&
        images.sort((a, b) => a.order - b.order).map((image) => (
          <div
            key={image.id}
            className="thumbnail-wrapper"
            onClick={() =>
              handleThumbnailClick(
                image.id,
                image["background-url"],
                image["foreground-url"]
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
                currentTarget.src="/assets/1-thumbnail.png";
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Thumbnails;
