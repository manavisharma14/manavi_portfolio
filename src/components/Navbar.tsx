import Image from 'next/image';
export default function Navbar() {
    return (
        <nav
  className="fixed top-0 left-0 w-full h-8 
             bg-white/20 dark:bg-black/30
             backdrop-blur-md backdrop-saturate-150
             border-b border-white/10
             flex items-center px-4 text-xs text-black-200 z-50 justify-between"
>
  <div className="flex items-center gap-4">
    <Image src="/appleicon.png" alt="Logo" width={16} height={16} />
    <span className="font-semibold">manaviOS</span>
  </div>


  <div className="flex items-center gap-3 text-black-200">
    <span>Wi-Fi</span>
    <span>🔋 95%</span>
    <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
  </div>
</nav>
    );
}