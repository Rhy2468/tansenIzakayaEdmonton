//Library Imports
import Image from "next/image";
import Link from "next/link";

//Images
import tansenLogo from './assets/tansenLogo.png';
import mainDishes from './assets/mainDishes.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="header">
        <Link href="/">
          <Image src={tansenLogo} alt="Tansen Izakaya Logo"/>
        </Link>
        <div className="navbar"></div>
      </div>

      <div className="mainDishes">
        <Image src={mainDishes} alt="Picture of popular dishes"/>
      </div>
    </main>
  );
}
