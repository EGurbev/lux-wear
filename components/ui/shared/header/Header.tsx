import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} Logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block text-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <HeaderMenu />
      </div>
    </header>
  );
}
