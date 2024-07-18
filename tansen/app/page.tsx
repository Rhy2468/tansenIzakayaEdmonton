"use client";
//Library Imports
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';


//Images
import tansenLogo from './assets/tansenLogo.png';
import brushStroke from './assets/brush-stroke.svg';
import slide1 from './assets/slide1.jpg'; 
import slide2 from './assets/slide2.jpg';
import slide3 from './assets/slide3.jpg';
import slide4 from './assets/slide4.jpg';
import slide5 from './assets/slide5.jpg';

import chickenSkewers from './assets/landingImage/TansenIzakaya_ChickenThighSkewers.png';
import goma from './assets/landingImage/TansenIzakaya_Goma.png';
import lobsterRolls from './assets/landingImage/TansenIzakaya_LobsterRolls.png';
import redRamen from './assets/landingImage/TansenIzakaya_RedRamen.png';
import smokeDockOshiSushi from './assets/landingImage/TansenIzakaya_SmokeDockOshiSushi.png';
import tigerRolls from './assets/landingImage/TansenIzakaya_TigerRolls.png';
import uniPastaWithShrimps from './assets/landingImage/TansenIzakaya_UniPastaWithShrimps.png';
import shrimpSkewers from './assets/landingImage/TansenIzakaya_ShrimpSkewers.png';
import aburiRolls from './assets/landingImage/TansenIzakaya_AburiSalmonRolls.png';

const images = [
  { src: lobsterRolls, alt: 'Lobster Rolls' },
  { src: redRamen, alt: 'Red Ramen' },
  { src: smokeDockOshiSushi, alt: 'Smoke Dock Oshi Sushi' },
  { src: tigerRolls, alt: 'Tiger Rolls' },
  { src: uniPastaWithShrimps, alt: 'Uni Pasta with Shrimps' },
  { src: goma, alt: 'Goma' },
  { src: chickenSkewers, alt: 'Chicken Skewers' },
  { src: shrimpSkewers, alt: 'Shrimp Skewers' },
  { src: aburiRolls, alt: 'Aburi Rolls' },
];


//API imports
import GoogleMap from "./components/googleMapsAPI";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="header">
        <Link className="logo" href="/">
          <Image src={tansenLogo} alt="Tansen Izakaya Logo"/>
        </Link>
        <div className="flex-container">
          <div className="tab"> 
            <Link href="#about-us"> ABOUT US</Link>
          </div>
          <div className="tab"> MENU</div>
          <div className="tab"> 
            <Link href="#contact-us"> CONTACT US</Link>
          </div>
        </div>
      </div>
      <div className="mainDishes">
        <div className="scroll-belt">
          {images.concat(images).map((image, index) => (
            <Image key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      <div className="about-us">
        <div className="title-container">
          <h1 id="about-us" className="about-us-title">ABOUT US</h1>
          <Image src={brushStroke} alt="brush stroke" className="brush-stroke"/>
        </div>
        <div className="about-us-container">
          <p className="about-us-paragraph">As the best izakaya in Edmonton, we pride ourselves on offering 
            an authentic Japanese dining experience that combines traditional 
            flavors with a modern twist. At Tansen Izakaya, our menu features 
            a variety of delectable dishes, from expertly crafted sushi and 
            sashimi to flavorful yakitori and tempura, all made with the 
            freshest ingredients. Our warm and inviting atmosphere, 
            complemented by exceptional service, ensures that every visit is 
            memorable. Whether you're enjoying a casual meal with friends or 
            celebrating a special occasion, Tansen Izakaya is dedicated to 
            providing a culinary journey that delights all your senses. 
          </p>
          <div className="map-container">
            <GoogleMap></GoogleMap>
          </div>
        </div>
      </div>

      <div className="cells-container">
        <div className="left-cell">
          <div className="slideshow">
            {slides.map((slide, index) => (
              <Image
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className="right-cell">

        </div>
      </div>
      
      <div className="divider100"></div>
      <div className="footer-container">
        <div className="first-card">
          <Link className="logo" href="/">
            <Image src={tansenLogo} alt="Tansen Izakaya Logo"/>
          </Link>
        </div>
        <div className="contact-card">
          <p className="contact-info">Phone: 403 - 444 - 4444</p>
          <p className="contact-info">Email: tensenIzakaya@gmail.com</p>
        </div>
        <div className="links-card">
          <Link className="link" href="#about-us"> About Us</Link>
          <Link className="link" href="#about-us"> Menu</Link>
          <Link className="link" href="#contact-us"> Contact Us</Link>
        </div>
      </div>
    </main>
  );
}
