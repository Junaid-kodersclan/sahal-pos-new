import image from "../../../public/assets/img/auth-image.png";
import logo from "../../../public/assets/img/poslogo.png";
import { routes } from "@/helper/routes";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Link href={routes.signin} className="absolute top-4 left-4">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="w-14 h-14 rounded-full"
        />
      </Link>
      <div className="basis-1/2 bg-primary max-lg:hidden flex items-center justify-center">
        <Image src={image} alt="Auth image" width={700} height={700} />
      </div>
      <div className="basis-1/2 bg-pure max-lg:basis-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
