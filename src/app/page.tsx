"use client";

import Header from "@/components/Header/page";
import Banner from "@/components/Banner/page";
import Product from "@/components/Product/Product";
import Cards from "@/components/Cards/Cards";
import Experts from "@/components/Experts/Experts";
import InfiniteLogoSlider from "@/components/InfiniteLogoSlider/InfiniteLogoSlider";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-black h-screen">
      <Header />
      <Banner />
      <Product />
      <Cards />
      <Experts />
      <InfiniteLogoSlider />
      <Footer />
    </main>
  );
}
