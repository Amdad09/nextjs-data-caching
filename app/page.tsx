import ProductCard from '@/components/ProductCard';
import { getProducts } from './products/page';
import { getUsers } from './users/page';
import UserCard from '@/components/UserCard';
import Link from 'next/link';
// npx json-server db.json --port 5000
export default async function Home() {
    const [users, products] = await Promise.all([getUsers(), getProducts()]);
  return (
      <div className="min-h-screen bg-[#17181c] px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
              {/* Hero */}
              <section className="mb-16 text-center">
                  <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
                      Explore Everything
                  </span>

                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                      Discover
                      <span className="text-[#00d991]"> Products & Users</span>
                  </h1>

                  <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                      Explore our latest products and discover amazing users
                      from our platform.
                  </p>
              </section>

              {/* Products Section */}
              <section className="mb-20">
                  <div className="mb-8 flex items-end justify-between">
                      <div>
                          <p className="mb-1 text-sm font-medium uppercase tracking-wider text-[#00d991]">
                              Featured
                          </p>

                          <h2 className="text-3xl font-bold">
                              Latest Products
                          </h2>

                          <p className="mt-2 text-sm text-gray-400">
                              Check out some of our latest products.
                          </p>
                      </div>

                      <Link
                          href="/products"
                          className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991] sm:block"
                      >
                          View All →
                      </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {products.slice(0, 4).map((product) => (
                          <ProductCard key={product.id} {...product} />
                      ))}
                  </div>
              </section>

              {/* Users Section */}
              <section>
                  <div className="mb-8 flex items-end justify-between">
                      <div>
                          <p className="mb-1 text-sm font-medium uppercase tracking-wider text-[#00d991]">
                              Community
                          </p>

                          <h2 className="text-3xl font-bold">Featured Users</h2>

                          <p className="mt-2 text-sm text-gray-400">
                              Meet some of the people in our community.
                          </p>
                      </div>

                      <Link
                          href="/users"
                          className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991] sm:block"
                      >
                          View All →
                      </Link>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {users.slice(0, 4).map((user) => (
                          <UserCard key={user.id} user={user} />
                      ))}
                  </div>
              </section>
          </div>
      </div>
  );
}
