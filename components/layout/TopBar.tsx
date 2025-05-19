import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-[#003366] text-white text-xs py-1">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>Call centar: +381 31 522 333</span>
          <span>Email: office@turboservis.rs</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/lista-zelja" className="hover:underline">Lista želja</Link>
          <span>|</span>
          <Link href="/projekte" className="hover:underline">Projekti</Link>
          <span>|</span>
          <Link href="/sabirini-korpa" className="hover:underline">Sabirini korpa</Link>
        </div>
      </div>
    </div>
  );
}