import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get('/v2/list');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={getImages}
      >
        Fetch Images
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map(image => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            className="w-50% h- rou50%nded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;