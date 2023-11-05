import { useState } from 'react';
import './Demo.css';

const Demo = () => {
  const [selectedImages, setSelectedImages] = useState(Array(11).fill(false)); // Initialize with 11 checkboxes

  const handleImageSelect = (imageIndex) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages[imageIndex] = !newSelectedImages[imageIndex];
    setSelectedImages(newSelectedImages);
  };

  const handleDeleteSelected = () => {
    // Filter out the selected images and update the state
    const updatedImages = selectedImages
      .map((isSelected, index) => (isSelected ? null : `/Image/image${index + 1}.png`))
      .filter((imagePath) => imagePath !== null);

    // You can update your component's state or perform any other action to delete the images.
    // For demonstration, we are just logging the new image URLs.
    console.log('Deleted Images:', updatedImages);

    // Clear the selected images after deletion
    setSelectedImages(Array(11).fill(false));
  };

  return (
    <div>
      <div className='container'>
        {Array.from({ length: 11 }, (_, index) => (
          <div
            key={index}
            className={`shadow-none p-1 mb-2 bg-light rounded ${
              selectedImages[index] ? 'hovered' : ''
            }`}
          >
            <input
              type='checkbox'
              className='checkbox'
              checked={selectedImages[index]}
              onChange={() => handleImageSelect(index)}
            />
            <img src={`/Image/image${index + 1}.png`} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button onClick={handleDeleteSelected}>Delete Selected Images</button>
    </div>
  );
};

export default Demo;
