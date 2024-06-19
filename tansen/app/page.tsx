//Library Imports
import Image from "next/image";
import Link from "next/link";


//Images
import tansenLogo from './assets/tansenLogo.png';
import mainDishes from './assets/mainDishes.png';
import brushStroke from './assets/brush-stroke.svg'


//API imports
import GoogleMap from "./components/googleMapsAPI";

export default function Home() {
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
      <div className="divider75"></div>

      <div className="mainDishes">
        <Image src={mainDishes} alt="Picture of popular dishes"/>
      </div>



      <div className="about-us">
        <div className="title-container">
          <h1 id="about-us" className="about-us-title">ABOUT US</h1>
          <Image src={brushStroke} alt="brush stroke" className="brush-stroke"/>
        </div>
        <div className="about-us-container">
          <p>As the best izakaya in Edmonton, we pride ourselves on offering 
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
            <p className="hours-title"> OPENING HOURS</p>
            <p className="hours"> Sun - Thur 11:30AM - 10:00PM </p>
            <p className="hours"> Fri - Sat 11:30AM - 12:00AM </p>
          </div>
        </div>
      </div>

      <div className="contact-us-title">
        <h1 id="contact-us">CONTACT US</h1>
      </div>

      <div className="contact-us">
          <p className="contact-info">PHONE: 403 - 444 - 4444 </p>
          <p className="contact-info">EMAIL: tensenIzakaya@gmail.com </p>
      </div>
    </main>
  );
}
