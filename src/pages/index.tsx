import Image from "next/image";
import { Navigation, Hero, ButtonOne } from "@/components";
export default function Index() {
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <div className="relative flex flex-col xl:flex-row gap-5 z-0 max-w-[1440px] mx-auto">
          <Hero
            title="Find, book, rent a car—quick and super easy!"
            subTitle="Streamline your car rental experience with our effortless booking process."
          >
            <ButtonOne title="Explore Cars" containerStyles="bg-primary-blue text-white rounded-full mt-10"/>
          </Hero>
          <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
            <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
              <Image
                src="/hero.png"
                alt="hero"
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
          </div>
        </div>
      </main>
    </>
  );
}
