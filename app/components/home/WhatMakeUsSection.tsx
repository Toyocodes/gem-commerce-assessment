import Image from "next/image";
import { RealFoodIcon } from "../icons/real-food-icon";
import { PremiumIcon } from "../icons/premium-icon";
import { MadeFreshIcon } from "../icons/made-fresh-icon";
import { VetIcon } from "../icons/vet-icon";

export default function WhatMakeUsSection() {
  return (
    <section className="bg-white py-16 px-10 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl 2xl:text-[40px] font-semibold text-[#161723] leading-tight">
          What makes us different<br className="hidden sm:block" />
          makes them stronger
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-7 items-center">
          {/* Left Section */}
          <div className="space-y-10 max-w-md mx-auto lg:mx-0">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 mr-6">
                <RealFoodIcon />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-[#161723]">Real Food</h3>
                <p className="text-base text-[#424153]">
                  Wholesome recipes for dogs with real meat and veggies.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 mr-6">
                <PremiumIcon />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-[#161723]">Premium Ingredient</h3>
                <p className="text-base text-[#424153]">
                  Elevating pet care with unmatched safety and quality.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="relative w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
              <Image
                src={"/first-img.png"}
                alt="Real food vs dry food"
                width={370}
                height={370}
                objectFit="cover"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-10 max-w-md mx-auto lg:mx-0">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 mr-6">
                <MadeFreshIcon />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-[#161723]">Made Fresh</h3>
                <p className="text-base text-[#424153]">
                  We prioritize maintaining the integrity of whole foods and nutrition.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 flex-shrink-0 mr-6">
                <VetIcon />
              </div>
              <div className="text-left">
                <h3 className="text-base font-semibold text-[#161723]">Vet Developed</h3>
                <p className="text-base text-[#424153]">
                  We raise the bar for dog nutrition, surpassing industry expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
