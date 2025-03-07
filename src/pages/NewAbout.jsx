import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "IMG_4910.JPG",
    caption: "Slide 1",
  },
  {
    url: "IMG_4937.JPG",
    caption: "Slide 2",
  },
  {
    url: "IMG_4942.JPG",
    caption: "Slide 3",
  },
  {
    url: "IMG_4963.JPG",
    caption: "Slide 4",
  },
  {
    url: "IMG_4966.JPG",
    caption: "Slide 5",
  },
  {
    url: "IMG_5071.JPG",
    caption: "Slide 6",
  },
];

const slideImages2 = [
  {
    url: "/IMG_4670.JPG",
    caption: "Slide 1",
  },
  {
    url: "IMG_4894.JPG",
    caption: "Slide 2",
  },
  {
    url: "IMG_4937.JPG",
    caption: "Slide 3",
  },
];

const NewAbout = () => {
  return (
    <div className="w-[80%] xl:left-36  h-[160vh] md:h-[140vh] xl:h-[120vh]  ">
      {/* About Electrophoenix */}
      <div className="relative top-32 text-center xl:text-left px-6 xl:px-32">
        <div className="text-xl font-light">/About Us</div>
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold mt-5">
          About Electrophoenix
        </h1>
        <p className="text-md font-semibold mt-6 max-w-5xl mx-auto">ElectroPhoenix is the flagship technical symposium organized by the Department of Electronics and Communication Engineering (ECE), Adithya Institute of Technology. This electrifying event brings together innovators, tech enthusiasts, and problem-solvers to showcase their skills, creativity, and technical expertise.
With a perfect blend of cutting-edge competitions, insightful presentations, and hands-on experiences, ElectroPhoenix aims to ignite innovation and empower the next generation of engineers.
</p>

        {/* Image Slider */}
        <div className="mt-8">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div key={index}>
                <div
                  className="flex justify-center items-center bg-cover bg-center h-[300px] xl:h-[400px] opacity-95 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                />
              </div>
            ))}
          </Slide>
        </div>

       
      </div>

      
    </div>
  );
};

export default NewAbout;
