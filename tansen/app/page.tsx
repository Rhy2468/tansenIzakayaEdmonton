//Library Imports
import Image from "next/image";
import Link from "next/link";

//Images
import tansenLogo from './assets/tansenLogo.png';
import mainDishes from './assets/mainDishes.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="header">
        <Link className="logo" href="/">
          <Image src={tansenLogo} alt="Tansen Izakaya Logo"/>
        </Link>
        <div className="flex-container">
          <div className="tab"> ABOUT US</div>
          <div className="tab"> MENU</div>
          <div className="tab"> CONTACT US</div>
        </div>
      </div>
      <div className="divider75"></div>

      <div className="mainDishes">
        <Image src={mainDishes} alt="Picture of popular dishes"/>
      </div>

      <div className="about-us-title">
        <h1>ABOUT US</h1>
      </div>
      <div className="about-us">
        <div className="about-us-container">
          <div className="left-cell">
            <h2>Title</h2>
            <h3>As the best izakaya in Edmonton, we pride ourselves on offering 
              an authentic Japanese dining experience that combines traditional 
              flavors with a modern twist. At Tansen Izakaya, our menu features 
              a variety of delectable dishes, from expertly crafted sushi and 
              sashimi to flavorful yakitori and tempura, all made with the 
              freshest ingredients. Our warm and inviting atmosphere, 
              complemented by exceptional service, ensures that every visit is 
              memorable. Whether you're enjoying a casual meal with friends or 
              celebrating a special occasion, Tansen Izakaya is dedicated to 
              providing a culinary journey that delights all your senses. </h3>
          </div>

          <div className="right-cell">
            <h2>Google Maps </h2>
          </div>
        </div>
      </div>


    </main>
  );
}
