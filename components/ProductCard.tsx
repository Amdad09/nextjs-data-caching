import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    rating: number;
    stock: number;
    image: string;
}

const ProductCard = ({
    id,
    name,
    description,
    price,
    category,
    brand,
    rating,
    stock,
    image,
}: ProductCardProps) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/10 bg-[#17181c] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/30">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden bg-[#202126]">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs font-medium text-gray-200 backdrop-blur-md">
                    {category}
                </span>

                {/* Stock */}
                <span
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md ${
                        stock > 0
                            ? 'bg-emerald-500/15 text-emerald-400'
                            : 'bg-red-500/15 text-red-400'
                    }`}
                >
                    {stock > 0 ? `${stock} in stock` : 'Out of stock'}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Brand */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
                    {brand}
                </p>

                {/* Name */}
                <h2 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {name}
                </h2>

                {/* Description */}
                <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-400">
                    {description}
                </p>

                <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            <span className="text-yellow-400">★</span>
                            <span className="font-semibold text-white">
                                {rating}
                            </span>
                        </div>

                        <span className="text-sm text-gray-500">/ 5.0</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Price</p>

                        <p className="text-2xl font-bold text-white">
                            ${price.toFixed(2)}
                        </p>
                    </div>
                </div>
                {/* Rating */}

                {/* Price + Button */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                    <Link href={`/products/${id}`}
                        className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-500"
                    >
                        View Details
                    </Link>
                    <button
                        disabled={stock === 0}
                        className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-gray-500"
                    >
                        {stock > 0 ? 'Add to Cart' : 'Unavailable'}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
