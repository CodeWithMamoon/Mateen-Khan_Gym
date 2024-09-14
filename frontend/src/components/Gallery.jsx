import React from "react";

const Gallery = () => {
  const gallery = [
    "/pic1.jpeg",
    "/pic2.jpeg",
    "/pic3.jpeg",
    "/pic4.jpeg",
    "/pic5.jpeg",
    "/pic6.jpeg",
    "/pic7.jpeg",
    "/pic8.jpeg",
    "/pic9.jpeg",
    "/pic10.jpeg",
    "/pic11.jpeg",
    "/pic12.jpeg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
