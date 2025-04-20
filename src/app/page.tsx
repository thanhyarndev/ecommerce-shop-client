// src/app/page.tsx
import HeroSection from "@/components/home/HeroSection";
import ProductCarousel from "@/components/product/ProductCarousel";
import ExploreProductsSection from "@/components/home/ExploreProductsSection";
import SubscribeSection from "@/components/home/SubscribeSection";



export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <HeroSection />
      <ProductCarousel title="Men's Latest" category="men" />
      <ProductCarousel title="Women's Latest" category="women" />
      <ProductCarousel title="Kids' Latest" category="kids" />
      <ExploreProductsSection />
      <SubscribeSection />
    </div>
  );
}
