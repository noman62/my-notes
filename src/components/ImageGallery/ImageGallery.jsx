import { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = () => {
  const initialImages = [
    { id: 1, url: '/Image/image1.png', alt: 'Image 1' },
    { id: 2, url: '/Image/image2.png', alt: 'Image 2' },
    { id: 3, url: '/Image/image3.png', alt: 'Image 3' },
    { id: 4, url: '/Image/image4.png', alt: 'Image 4' }
  ];

  const [images, setImages] = useState(initialImages);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (image) => {
    const updatedSelectedImages = selectedImages.includes(image)
      ? selectedImages.filter((selectedImage) => selectedImage !== image)
      : [...selectedImages, image];

    setSelectedImages(updatedSelectedImages);
  };

  const handleDeleteSelected = () => {
    const updatedImages = images.filter((image) => !selectedImages.includes(image));

    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <div>
      <button onClick={handleDeleteSelected}>Delete Selected</button>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-md-3">
            <div
              style={{ width: '12rem' }}
              className={`card image-container ${selectedImages.includes(image) ? 'selected' : ''}`}
            >
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedImages.includes(image)}
                  onChange={() => handleImageClick(image)}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
                <img
                  src={image.url}
                  alt={image.alt}
                  className="card-img-top"
                  onClick={() => handleImageClick(image)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
