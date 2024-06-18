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
          <div> ABOUT US</div>
          <div> MENU</div>
          <div> CONTACT US</div>
        </div>
      </div>

      <div className="mainDishes">
        <Image src={mainDishes} alt="Picture of popular dishes"/>
      </div>
    </main>
  );
}
