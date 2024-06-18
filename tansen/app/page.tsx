import Image from "next/image";
import tansenLogo from './assets/tansenLogo.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="header">
        <Image src={tansenLogo} alt="Tansen Izakaya Logo" />
      </div>
      <div className="flex-container">
          <div> ABOUT US</div>
          <div> MENU</div>
          <div> CONTACT US</div>
        </div>
    </main>
  );
}
