import Image from "next/image";
import { Nav } from "./nav";

export const Header = () => {
  return (
    <header className="flex-cb container  h-[100px]  px-4 border_">
      <Image
        className=""
        src="/logo.png"
        alt=""
        width={100}
        height={20}
        priority
      />
      <Nav />
    </header>
  );
};
