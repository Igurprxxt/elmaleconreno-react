import React, { useLayoutEffect, useRef } from "react";
import { ButtonCommon } from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import { borderAnimation, imageZoomInOut } from "../../helper/main";
const about_content = {
  title: "Sinaloa Flavor",
  textWhite: "The Taste of Mariscos & Fusion Sushi",
  imgOne: "/assets/img/main11.jpeg",
  subtext:
    "Located in Reno, Nevada, El Malecon delivers a bold and exciting fusion of traditional Mexican Mariscos and innovative Sinaloa-style Sushi. Every dish is crafted to celebrate the vibrant coastal flavors of Mexico with a modern twist.",
  details:
    "At El Malecon, we bring the spirit of Sinaloa to your table. From towering ceviches and fiery aguachiles to whole fried Mojarra Frita and regional Mexican-style sushi, our menu blends classic seafood traditions with creative Japanese techniques for an unforgettable dining experience.",
};

const { title, textWhite, imgOne, subtext, details } = about_content;

export default function AboutContent() {
  const imageContainer = useRef(null);
  const imageZoomIn = useRef(null);
  const borderAbout = useRef(null);

  useLayoutEffect(() => {
    imageZoomInOut(imageContainer.current, imageZoomIn.current);
    borderAnimation(borderAbout.current, 2, 13);
  }, []);

  return (
    <section className="ak-about-bg-color" ref={imageContainer}>
      <div className="ak-height-150 ak-height-lg-60"></div>
      <div className="ak-about ak-style-1">
        <div className="ak-about-bg-img ak-bg">
          <img src={imgOne} alt="..." ref={imageZoomIn} />
        </div>
        <div className="ak-about-hr" ref={borderAbout}></div>
        <div className="container">
          <div className="about-section ak-about-1">
            <div className="about-text-section">
              <SectionTitle title={title} textWhite={textWhite} />

              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{details}</p>
              <div className="ak-height-30 ak-height-lg-30"></div>
              <p className="about-subtext">{subtext}</p>
              <div className="ak-height-50 ak-height-lg-30"></div>
              <ButtonCommon to={"/about"}>About El Malecon</ButtonCommon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
