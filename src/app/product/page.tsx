import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header1 from "@/components/headerTransparent";

// Sample product data - replace with your actual products
const products = [
  {
    id: 1,
    name: "Hydrating Shampoo",
    description: "Nourishing shampoo for all hair types",
    price: 29.99,
    image: "/products/shampoo.jpg",
    category: "Hair Care",
  },
  {
    id: 2,
    name: "Anti-Aging Serum",
    description: "Advanced formula to reduce fine lines",
    price: 49.99,
    image: "/products/serum.jpg",
    category: "Skincare",
  },
  {
    id: 3,
    name: "Body Lotion",
    description: "Rich moisturizing body lotion",
    price: 24.99,
    image: "/products/lotion.jpg",
    category: "Body Care",
  },
  {
    id: 4,
    name: "Hair Mask",
    description: "Deep conditioning treatment",
    price: 34.99,
    image: "/products/hair-mask.jpg",
    category: "Hair Care",
  },
  {
    id: 5,
    name: "Facial Cleanser",
    description: "Gentle daily cleanser",
    price: 22.99,
    image: "/products/cleanser.jpg",
    category: "Skincare",
  },
  {
    id: 6,
    name: "Hand Cream",
    description: "Intensive hand repair cream",
    price: 19.99,
    image: "/products/hand-cream.jpg",
    category: "Body Care",
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <Header1 />
      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-10" />
        <Image
          src="/profile/productBanner.jpg"
          alt="BB Beauty Products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white pt-32">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-4">
            OUR PRODUCTS
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
            Discover our premium selection of beauty and wellness products
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-sm font-light tracking-wider">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-light tracking-wider mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-600 mb-4 text-sm">
                  {product.description}
                </p>
                <div className="flex items-center justify-end">
                  <span className="text-lg font-light">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#e8dfd3] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-6">
            VISIT OUR SALON
          </h2>
          <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
            Experience our premium products in person and let our experts guide
            you to the perfect beauty routine.
          </p>
          <Link href="/location">
            <Button
              variant="outline"
              className="group relative w-48 bg-transparent border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-sm font-light tracking-widest">
                FIND US
              </span>
              <div className="absolute inset-0 bg-neutral-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
