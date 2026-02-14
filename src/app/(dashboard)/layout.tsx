import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-1/6 md:w-1/12 lg:w-2/12 xl:w-1/6 p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Anna School</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-5/6 md:w-11/12 lg:w-10/12 xl:w-5/6 bg-gray-100">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
