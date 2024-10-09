import React, { useState } from 'react';

const ImageUpload = ({ images, setImages }) => {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleImageChange}
        className="mb-4"
      />
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(image)}
              alt={`Item ${index + 1}`}
              className="w-32 h-32 object-cover"
            />
            <button
              type="button"
              className="absolute top-0 right-0 bg-red-500 text-white p-1"
              onClick={() => removeImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
