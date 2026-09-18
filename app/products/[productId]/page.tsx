import Image from "next/image";

interface ProductDetailsPageProps{
    params: Promise<{productId: string}>
}
const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const { productId } = await params;
    const productPromise = await fetch(`http://localhost:5000/products/${productId}`);
    const product = await productPromise.json();
    if (!product) return <div>Product not found</div>;
    // const {category, brand, name }: ProductProps = product;
  return (
      <main className="min-h-screen bg-[#0f1115] px-4 py-12 text-white">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
              {/* Image */}
              <div className="flex min-h-125 items-center justify-center rounded-3xl bg-[#181b21] p-8">
                  <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="max-h-112.5 w-full object-contain"
                  />
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center">
                  {/* Category */}
                  <span className="mb-4 w-fit rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                      {product.category}
                  </span>

                  {/* Brand */}
                  <p className="mb-2 text-sm uppercase tracking-widest text-gray-500">
                      {product.brand}
                  </p>

                  {/* Name */}
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                      {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="mt-5 flex items-center gap-3">
                      <span className="text-yellow-400">★★★★★</span>

                      <span className="text-gray-400">
                          {product.rating} / 5
                      </span>
                  </div>

                  {/* Description */}
                  <p className="mt-7 text-lg leading-8 text-gray-400">
                      {product.description}
                  </p>

                  {/* Price */}
                  <div className="mt-8">
                      <p className="text-sm text-gray-500">Price</p>

                      <p className="text-4xl font-bold text-white">
                          ${product.price}
                      </p>
                  </div>

                  {/* Stock */}
                  <div className="mt-5">
                      {product.stock > 0 ? (
                          <span className="text-green-400">
                              ● In Stock — {product.stock} available
                          </span>
                      ) : (
                          <span className="text-red-400">● Out of Stock</span>
                      )}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex gap-4">
                      <button
                          disabled={product.stock === 0}
                          className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                          Add to Cart
                      </button>

                      <button className="rounded-xl border border-gray-700 px-7 py-3 font-semibold transition hover:bg-white/5">
                          Buy Now
                      </button>
                  </div>
              </div>
          </div>
      </main>
  );
};

export default ProductDetailsPage;