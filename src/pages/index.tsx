import Image from "next/image";
import { Navigation, Hero, ButtonOne, Footer } from "@/components";
import Search from "@/components/Search";

export default function Index() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navigation />
      <main className="overflow-hidden">
        <div className="relative flex flex-col xl:flex-row gap-5 z-0 max-w-[1440px] mx-auto">
          <Hero
            title="Find, book, rent a car—quick and super easy!"
            subTitle="Streamline your car rental experience with our effortless booking process."
          >
            <ButtonOne
              title="Explore Cars"
              containerStyles="bg-primary-blue text-white rounded-full mt-10"
              handleClick={handleScroll}
            />
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
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6" id="discover">
          <h1 className="text-4xl font-bold mb-3">Car Catalogue</h1>
          <p className="mb-2">Explore out cars you might like</p>
          <Search />
        </div>
      </main>

      <Footer bgColor="bg-gray-50" />
    </>
  );
}
