"use client";

import Header2 from "@/components/headerStatic";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { services } from "./context";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const [selectedServices, setSelectedServices] = useState<
    Record<number, number>
  >({});
  const { language } = useLanguage();
  const t = translations[language];

  const handleServiceClick = (serviceId: number, action: "add" | "remove") => {
    setSelectedServices((prev) => {
      const currentCount = prev[serviceId] || 0;
      let newCount = currentCount;

      if (action === "add") {
        newCount = currentCount < 10 ? currentCount + 1 : 0;
      } else if (action === "remove") {
        newCount = currentCount > 0 ? currentCount - 1 : 0;
      }

      return {
        ...prev,
        [serviceId]: newCount,
      };
    });
  };

  const generateWhatsAppLink = () => {
    const selectedItems = Object.entries(selectedServices)
      .filter(([_, count]) => count > 0)
      .map(([id, count]) => {
        const service = services.find((s) => s.id === parseInt(id));
        if (!service) return "";
        return `${service.name} x ${count}`;
      })
      .filter((item) => item !== "");

    if (selectedItems.length === 0) {
      return "https://wa.me/60143994349?text=I'm%20interested%20in%20your%20services";
    }

    const text = `I'm interested in booking the following services:\n${selectedItems.join(
      "\n"
    )}`;
    return `https://wa.me/60143994349?text=${encodeURIComponent(text)}`;
  };

  // Function to render count indicators
  const renderCountIndicators = (serviceId: number) => {
    const count = selectedServices[serviceId] || 0;

    return (
      <div className="flex mt-4 justify-end items-center">
        <div className="bg-gray-100 rounded-full px-3 py-1.5 flex items-center gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleServiceClick(serviceId, "remove");
            }}
            className="w-6 h-6 rounded-full bg-white shadow-sm hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors"
          >
            -
          </button>
          <span className="w-5 text-center font-medium">{count}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleServiceClick(serviceId, "add");
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
      <Header2 />
      <main className="pt-32 px-4 md:px-8 max-w-7xl mx-auto pb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-8 text-center">
          {t.servicesTitle}
        </h1>
        <p className="text-center text-neutral-600 mb-10">
          {t.servicesSubtitle}
        </p>

        {/* Face Services Section */}
        <h2 className="text-2xl font-light tracking-wider mb-6 mt-12 text-center">
          {t.faceServices}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 15).map((service) => (
            <div
              key={service.id}
              className={`bg-white p-6 border cursor-pointer transition-all ${
                selectedServices[service.id]
                  ? "border-amber-300 shadow-md"
                  : "border-neutral-100 hover:border-neutral-200"
              }`}
              onClick={() => handleServiceClick(service.id, "add")}
            >
              <h3 className="text-lg font-light tracking-wider mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{service.duration}</span>
                <span className="font-medium">{service.price}</span>
              </div>
              {renderCountIndicators(service.id)}
            </div>
          ))}
        </div>

        {/* Embroidery Section */}
        <h2 className="text-2xl font-light tracking-wider mb-6 mt-12 text-center">
          {t.embroidery}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(15, 19).map((service) => (
            <div
              key={service.id}
              className={`bg-white p-6 border cursor-pointer transition-all ${
                selectedServices[service.id]
                  ? "border-amber-300 shadow-md"
                  : "border-neutral-100 hover:border-neutral-200"
              }`}
              onClick={() => handleServiceClick(service.id, "add")}
            >
              <h3 className="text-lg font-light tracking-wider mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{service.duration}</span>
                <span className="font-medium">{service.price}</span>
              </div>
              {renderCountIndicators(service.id)}
            </div>
          ))}
        </div>

        {/* Other Services Section */}
        <h2 className="text-2xl font-light tracking-wider mb-6 mt-12 text-center">
          {t.otherServices}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(19).map((service) => (
            <div
              key={service.id}
              className={`bg-white p-6 border cursor-pointer transition-all ${
                selectedServices[service.id]
                  ? "border-amber-300 shadow-md"
                  : "border-neutral-100 hover:border-neutral-200"
              }`}
              onClick={() => handleServiceClick(service.id, "add")}
            >
              <h3 className="text-lg font-light tracking-wider mb-3">
                {service.name}
              </h3>
              <p className="text-neutral-600 mb-4 text-sm">
                {service.description}
              </p>
              <div className="flex items-center justify-between text-sm text-neutral-500">
                <span>{service.duration}</span>
                <span className="font-medium">{service.price}</span>
              </div>
              {renderCountIndicators(service.id)}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-none border-neutral-700 hover:bg-neutral-700 hover:text-white transition-all duration-300 px-8 py-6"
            >
              {t.bookAnAppointment}
            </Button>
          </a>
        </div>

        {/* Selected services summary */}
        {Object.keys(selectedServices).some(
          (key) => selectedServices[Number(key)] > 0
        ) && (
          <div className="mt-10 bg-white p-6 border border-amber-200">
            <h3 className="text-lg font-light tracking-wider mb-3">
              {t.yourSelectedServices}
            </h3>
            <ul className="list-disc pl-5">
              {Object.entries(selectedServices)
                .filter(([_, count]) => count > 0)
                .map(([id, count]) => {
                  const service = services.find((s) => s.id === parseInt(id));
                  if (!service) return null;
                  return (
                    <li key={id} className="mb-1">
                      {service.name}{" "}
                      <span className="text-amber-600 font-medium">
                        x{count}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
