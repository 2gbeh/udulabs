import Image from "next/image";
import { Header } from "@/components/organisms/header";
import { Ribbon } from "@/components/organisms/ribbon";
import { APP } from "@/constants/APP";

export default function HomePage() {
  return (
    <>
      <Ribbon />
      <Header />
      <main className="flex-cx flex-1 px-4 relative container">
        <div className="flex-1 flex-col-xc z-1 md:pl-10 md:pr-0 pl-4 pr-4">
          <h1 className="md:text-[140px] font-extrabold md:leading-[120px] md:tracking-wider font-nunito text-black max-w-[600px] leading-[60px] text-[60px] ">
            We <span className="text-brand-blue">Cook</span> Different!
          </h1>
          <p className="text-2xl mt-4 text-muted-text">
            We develop <b>bold</b> ideas and turn them into work that lands.
          </p>
          <div className="flex mt-6">
            <a
              className="pressable flex-cc h-12 gap-2 rounded-full bg-brand-blue px-8 text-background transition-colors hover:bg-brand-blue/90 font-medium"
              href={APP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Meeting
            </a>
          </div>
        </div>
        <Image
          src="/flask.png"
          alt=""
          fill
          className="object-contain object-right"
        />
      </main>
    </>
  );
}
