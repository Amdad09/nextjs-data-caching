import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";
import Loading from "./loading";

export interface ProductProps{
    "id": string;
    "name": string;
    "description": string;
    "price": number;
    "category": string;
    "brand": string;
    "rating": number;
    "stock": number;
    "image": string;
}
export const getProducts = async (): Promise<ProductProps[]> => {
    const res = await fetch('http://localhost:5000/products', {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error('failed to fetch products!')
    }
    return res.json();
};

const ProductsPage = async () => {
    const products: ProductProps[] = await getProducts();
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          <Suspense fallback={<Loading />}>
              {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
              ))}
          </Suspense>
      </div>
  );
};

export default ProductsPage;