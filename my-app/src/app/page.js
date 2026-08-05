import Link from "next/link";
import TrustBadgets from "./components/TrustBadgets";
import Products from "./products/page";
import ImageSlider from "./components/ImageSlider";


export default function Home() {
  return (
    <>
      <div className="text-white bg-black w-full rounded-2xl h-80 md:h-[500px] flex px-2 py-2 md:px-14 md:py-10 mb-6">
        <div className="left w-1/2 p-4 flex flex-col gap-3 md:gap-6">
          <h1 className="md:text-5xl text-3xl font-bold mt-2 md:mt-16 ">Elevate Your Shopping Experience</h1>
          <p className="md:text-lg text-sm">Shop premium products crafted for modern living and everyday comforts. Enjoy convenience, quality, and unbeatable value with MiniCart.</p>
          <div className="buttons flex gap-4">
            <Link href="/products" >
              <button className="bg-white text-black px-2 md:px-4 py-2 md:py-2 border border-white rounded-lg items-center justify-center">Shop Now</button>
            </Link>
            <Link href="/about" >
              <button className="bg-black text-white px-4 py-2 border border-white rounded-lg items-center justify-center">Learn More</button>
            </Link>
          </div>
        </div>
        <div className="right w-1/2">
          <ImageSlider />
        </div>
      </div>
      <Products title="Featured Products" description="" className="my-5" />
      <TrustBadgets />
    </>
  );
}
