import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-[#003366] text-white text-xs py-1">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>Call centar: +381 31 522 333</span>
          <span>|</span>
          <span>Email: office@turboservis.rs</span>
          <span className="block sm:hidden mr-2">|</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/lista-zelja" className="hover:underline">Lista želja</Link>
          <span>|</span>
          <Link href="/prijavi-se" className="hover:underline">Prijavi se</Link>
          <span>|</span>
          <Link href="/izaberi-jezik" className="hover:underline">Izaberi jezik</Link>
        </div>
      </div>
    </div>
  );
}