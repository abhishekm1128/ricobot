import React, { useEffect, useState } from "react";
import "./Thumbnails.scss";

const Thumbnails = ({ images, onThumbnailClick }) => {
  const [selectedThumbnailId, setSelectedThumbnailId] = useState(null);

  const handleThumbnailClick = (id, backgroundUrl, foregroundUrl) => {
    setSelectedThumbnailId(id);
    onThumbnailClick(backgroundUrl, foregroundUrl || ""); // This triggers the parent to update the background
  };

  useEffect(() => {
    if (images?.length > 0) {
      setSelectedThumbnailId(images[0].id);
    }
  }, [images]);

  return (
    <div className="thumbnail-container">
      {images &&
        images.length > 0 &&
        images.map((image) => (
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
            />
          </div>
        ))}
    </div>
  );
};

export default Thumbnails;
