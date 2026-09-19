import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#17181c] text-gray-400">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-white">
                            Dev<span className="text-[#00d991]">Hub</span>
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-6">
                            A simple platform to explore products, discover
                            users, and connect with a growing community.
                        </p>

                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                            >
                                GH
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]"
                            >
                                in
                            </a>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="font-semibold text-white">Explore</h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/products"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/users"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Users
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="transition hover:text-[#00d991]"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold text-white">Support</h3>

                        <ul className="mt-4 space-y-3 text-sm">
                            <li>
                                <a
                                    href="/contact"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Terms & Conditions
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-[#00d991]"
                                >
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} DevHub. All rights
                        reserved.
                    </p>

                    <p>
                        Built with{' '}
                        <span className="font-medium text-[#00d991]">
                            Next.js
                        </span>{' '}
                        & TypeScript
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
