import { Features, Hero, LatestPosts, ProductsSection, Sale, Testimonials, SubscribeUs, Instagram, Footer, SubFooter } from "../components/index";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductsSection sectionTitle="Mobile Products" />
      <ProductsSection sectionTitle="Smart Watches" />
      <Sale />
      <LatestPosts sectionTitle="Latest Posts" />
      <Testimonials />
      <SubscribeUs />
      <Instagram />
      <Footer />
      <SubFooter />
    </>
  );
}
