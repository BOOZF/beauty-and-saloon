"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header1 from "@/components/headerTransparent";
import { products } from "./context";
import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ProductPage() {
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [selectedProducts, setSelectedProducts] = useState<
    Record<number, number>
  >({});
  const { language } = useLanguage();
  const t = translations[language];

  const handleImageError = (productId: number) => {
    setImageError((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  const handleProductQuantity = (
    productId: number,
    action: "add" | "remove"
  ) => {
    setSelectedProducts((prev) => {
      const currentCount = prev[productId] || 0;
      let newCount = currentCount;

      if (action === "add") {
        newCount = currentCount < 10 ? currentCount + 1 : 0;
      } else if (action === "remove") {
        newCount = currentCount > 0 ? currentCount - 1 : 0;
      }

      return {
        ...prev,
        [productId]: newCount,
      };
    });
  };

  const generateWhatsAppLink = () => {
    const selectedItems = Object.entries(selectedProducts)
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => {
        const product = products.find((p) => p.id === parseInt(id));
        if (!product) return "";
        return `${product.name} x ${count} (RM${(product.price * count).toFixed(
          2
        )})`;
      })
      .filter((item) => item !== "");

    if (selectedItems.length === 0) {
      return "https://wa.me/60143994349?text=I'm%20interested%20in%20your%20products";
    }

    const totalAmount = Object.entries(selectedProducts).reduce(
      (total, [id, count]) => {
        const product = products.find((p) => p.id === parseInt(id));
        return total + (product ? product.price * count : 0);
      },
      0
    );

    const text = `I would like to order the following products:\n\n${selectedItems.join(
      "\n"
    )}\n\nTotal Amount: RM${totalAmount.toFixed(2)}`;
    return `https://wa.me/60143994349?text=${encodeURIComponent(text)}`;
  };

  const renderQuantityControls = (productId: number) => {
    const count = selectedProducts[productId] || 0;

    return (
      <div className="flex mt-4 justify-end items-center">
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleProductQuantity(productId, "remove");
            }}
            className="w-6 h-6 rounded-full bg-white shadow-sm hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors"
          >
            -
          </button>
          <span className="w-5 text-center font-medium">{count}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleProductQuantity(productId, "add");
            }}
            className="w-6 h-6 rounded-full bg-white shadow-sm hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>
    );
  };

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
            {t.productsTitle}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center px-4">
            {t.productsSubtitle}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-none overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group ${
                selectedProducts[product.id] ? "border-2 border-amber-300" : ""
              }`}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={
                    imageError[product.id]
                      ? "/profile/no-image-svgrepo-com.svg"
                      : product.image
                  }
                  alt={product.name}
                  fill
                  className={`object-${
                    imageError[product.id] ? "contain p-8" : "cover"
                  } group-hover:scale-105 transition-transform duration-500`}
                  onError={() => handleImageError(product.id)}
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
                <div className="flex items-center justify-between">
                  <span className="text-lg font-light">
                    RM {product.price.toFixed(2)}
                  </span>
                  {renderQuantityControls(product.id)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Products Summary */}
        {Object.keys(selectedProducts).some(
          (key) => selectedProducts[Number(key)] > 0
        ) && (
          <div className="mt-10 bg-white p-6 border border-amber-200">
            <h3 className="text-lg font-light tracking-wider mb-3">
              {t.yourSelectedProducts}
            </h3>
            <ul className="list-disc pl-5">
              {Object.entries(selectedProducts)
                .filter(([_, count]) => count > 0)
                .map(([id, count]) => {
                  const product = products.find((p) => p.id === parseInt(id));
                  if (!product) return null;
                  return (
                    <li
                      key={id}
                      className="mb-1 flex justify-between items-center"
                    >
                      <span>
                        {product.name}{" "}
                        <span className="text-amber-600 font-medium">
                          x{count}
                        </span>
                      </span>
                      <span className="text-neutral-600">
                        RM {(product.price * count).toFixed(2)}
                      </span>
                    </li>
                  );
                })}
              <li className="mt-4 font-medium flex justify-between items-center border-t pt-4">
                <span>{t.total}</span>
                <span>
                  RM{" "}
                  {Object.entries(selectedProducts)
                    .reduce((total, [id, count]) => {
                      const product = products.find(
                        (p) => p.id === parseInt(id)
                      );
                      return total + (product ? product.price * count : 0);
                    }, 0)
                    .toFixed(2)}
                </span>
              </li>
            </ul>
            <div className="mt-6 text-center">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-none border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 px-8 py-6"
                >
                  {t.orderNow}
                </Button>
              </a>
            </div>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-[#e8dfd3] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light tracking-widest mb-6">
            {t.visitOurSalon}
          </h2>
          <p className="text-neutral-700 mb-8 max-w-2xl mx-auto">
            {t.visitOurSalonText}
          </p>
          <Link href="/location">
            <Button
              variant="outline"
              className="group relative w-48 bg-transparent border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-sm font-light tracking-widest">
                {t.findUs}
              </span>
              <div className="absolute inset-0 bg-neutral-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
