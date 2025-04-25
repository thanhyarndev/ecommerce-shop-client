import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { getProductById } from "@/app/product/data/sample-data";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductById(params.slug);

  if (!product) return <div className="text-center p-10">Product not found.</div>;

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <ProductGallery images={product.images} />
      <ProductInfo product={product} />
    </div>
  );
}
