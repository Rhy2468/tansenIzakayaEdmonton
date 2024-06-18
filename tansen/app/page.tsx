import Image from "next/image";
import tansenLogo from './assets/tansenLogo.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="header">
        <Image src={tansenLogo} alt="Tansen Izakaya Logo" />
        <div className="navbar"></div>
      </div>
    </main>
  );
}
