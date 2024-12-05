import React, { useEffect, useState } from "react";

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/images")
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error("Error fetching images:", error));
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map(image => (
          <img
            key={image.id}
            src={image.url}
            alt={image.alt}
            style={{ width: "150px", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
