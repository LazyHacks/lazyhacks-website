import { useState, useEffect } from 'react';


const ImageCycle = () => {
  const images = ['./images/home/3.PNG', './images/home/2.PNG', './images/home/1.PNG']; // Replace with the correct paths to your images
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change the image every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
    //   <img
    //     src={images[currentIndex]}
    //     alt="Cycling Image"
    //     className="w-64 h-64 object-cover rounded-md"
    //   />
    // </div>
    // <div className="flex">
    //   <a href="#"><img
    //     className="h-[100px] w-[80px] lg:w-[100px] object-contain"
    //     src={images[currentIndex]}
    //   ></img></a>
    // </div>
    <img className="w-[40rem] h-[400px] object-cover my-5" src={images[currentIndex]} alt="LazyHacks logo" />
  );
};

export default ImageCycle;
