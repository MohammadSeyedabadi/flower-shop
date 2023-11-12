import Image from "next/image";
import { Navigation, Hero, ButtonOne, Footer } from "@/components";
import Search from "@/components/Search";

export default function Index() {
  return (
    <div className="uiGradient--one">
      <Navigation />
      <main className="overflow-hidden">
        <div className="relative flex flex-col xl:flex-row gap-5 z-0 max-w-[1440px] mx-auto">
          <Hero
            title="We Deliver Amazing Bouquets!"
            subTitle="Lorem ipsum dolor sit amet summ dolore, eu omnes mnesarchum
            eosatsimuscum primis."
          >
            <ButtonOne
              title="Explore Flowers"
              containerStyles="bg-primary-blue text-white rounded-full mt-10 w-48"
              link="allFlowers"
            />
          </Hero>
          <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src="/HeroPictureOne.PNG"
                alt="hero"
                width={450}
                height={450}
                className="HeroPicture"
              />
            </div>

            {/* <div className="HeroBgPicture" /> */}
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto sm:px-16 px-6" id="discover">
          <h1 className="text-4xl font-bold mb-3">Write your flower name</h1>
          <p className="mb-2">Explore out flowers you might like</p>
          <Search />
        </div>
      </main>

      <Footer />
    </div>
  );
}
