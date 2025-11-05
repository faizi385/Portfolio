import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ProjectImageSlider = ({ images, image }) => {

  const imageList = Array.isArray(images) ? images : image ? [image] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleWheel = (e) => {

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      
      if (e.deltaY > 5) {
        goToNext();
      } else if (e.deltaY < -5) {
        goToPrevious();
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="relative w-full h-full">
      <div 
        {...handlers}
        className="w-full h-full flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {imageList.map((img, index) => (
          <div 
          key={index} 
          className="w-full h-full flex-shrink-0 select-none"
          onWheel={handleWheel}
        >
          <img 
            src={img} 
            alt={`Project screenshot ${index + 1}`}
            className="w-full h-full object-cover pointer-events-none"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
            }}
            draggable="false"
          />
        </div>
        ))}
      </div>

      {imageList.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-indigo-500/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm hover:scale-110 hover:bg-indigo-600 text-xs" style={{ transform: 'translateY(-50%) scale(0.8)' }}
            aria-label="Previous image"
          >
            <FaChevronLeft className="w-2.5 h-2.5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-indigo-500/90 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-sm hover:scale-110 hover:bg-indigo-600 text-xs" style={{ transform: 'translateY(-50%) scale(0.8)' }}
            aria-label="Next image"
          >
            <FaChevronRight className="w-2.5 h-2.5" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
            {imageList.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${currentIndex === index ? 'bg-primary-600 w-4 shadow-sm' : 'bg-primary-300/60'}`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectImageSlider;
