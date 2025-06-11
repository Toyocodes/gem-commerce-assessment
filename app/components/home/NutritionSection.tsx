import Image from "next/image";

export default function NutritionSection() {
  return (
    <section className="bg-[#F9F9F9] py-12 sm:py-16 px-10 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-7 items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl 2xl:text-[40px] font-semibold text-[#161723] leading-snug sm:leading-tight">
            Nutrition is the foundation for
             <br className="hidden lg:block"/>  longer, healthier lives in dogs.
          </h2>
          <p className="text-[#424153] mt-4 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
            Invest in your dog’s future with our scientifically formulated
            superfood-powered supplements. Give them the nutrition they deserve
            and watch them thrive with vitality, energy, and the joy of a
            longer, healthier life.
          </p>

          <div>
            <p className="text-[#161723] font-semibold text-[19px] mt-6 mb-2">
              Key points:
            </p>
            <div className="mt-2 space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <span className="text-[#EE6F4B] text-[22px] sm:text-[24px] font-semibold min-w-[48px]">
                  97%
                </span>
                <p className="text-[#424153] text-[15px] sm:text-[16px] leading-relaxed">
                  Dogs choose our dog food over leading brands because of its
                  real functional ingredients and delicious flavor.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <span className="text-[#EE6F4B] text-[22px] sm:text-[24px] font-semibold min-w-[48px]">
                  84%
                </span>
                <p className="text-[#424153] text-[15px] sm:text-[16px] leading-relaxed">
                  Our dog food provides superior nutrition and a patented
                  probiotic for optimal nutrient absorption.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <span className="text-[#EE6F4B] text-[22px] sm:text-[24px] font-semibold min-w-[48px]">
                  92%
                </span>
                <p className="text-[#424153] text-[15px] sm:text-[16px] leading-relaxed">
                  Our dog food’s high protein and fat digestibility contribute
                  to ideal stool quality.
                </p>
              </div>
            </div>

            <button className="mt-10 bg-[#EE6F4B] text-white text-[14px] flex md:justify-center sm:text-[16px] font-medium py-3 px-6 rounded-md hover:opacity-90 transition w-full sm:w-auto">
              Give your furry friend the gift of wholesome nutrition
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end md:w-1/2 w-full">
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow">
            <Image
              src="/dog.png"
              alt="Happy Dog Bites"
              width={570}
              height={570}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
