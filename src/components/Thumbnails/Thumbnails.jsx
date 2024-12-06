import React, { useState } from 'react';
import './Thumbnails.scss';  // Assuming your SCSS is compiled to this CSS file

const Thumbnails = ({ images, onThumbnailClick }) => {
  const [selectedThumbnailId, setSelectedThumbnailId] = useState(null);

  const handleThumbnailClick = (id, backgroundUrl) => {
    setSelectedThumbnailId(id);
    onThumbnailClick(backgroundUrl);  // This triggers the parent to update the background
  };

  return (
    <div className="thumbnail-container">
      {images && images.length > 0 && images.map((image) => (
        <div
          key={image.id}
          className="thumbnail-wrapper"
          onClick={() => handleThumbnailClick(image.id, image['background-url'])}
        >
          <img
            src={image['thumbnail-url']}
            alt={image['alt-text']}
            className={`thumbnail ${selectedThumbnailId === image.id ? 'selected-thumbnail' : ''}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;