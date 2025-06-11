import Image from "next/image";

export default function ImproveGutSection() {
  return (
    <section className="bg-white py-16 sm:px-6 lg:px-8 px-10 md:px-12">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <Image
              src="/two-dogs.png"
              alt="Dogs eating food"
              width={570}
              height={480}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          <div>
            <h3 className="text-[#161723] text-3xl sm:text-4xl 2xl:text-[40px] font-semibold leading-snug sm:leading-tight mb-4">
              Improve overall
              <br />
              gastrointestinal health for
              <br />
              better nutrient absorption
            </h3>
            <p className="text-[#424153] mt-4 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
              Through rigorous scientific studies and consultations with
              veterinarians, we have created a breakthrough formula exclusively
              tailored to combat the health challenges prevalent in dogs. A
              staggering 91% of our customers have reported significant
              improvements in their dogs' health after incorporating our product
              into their diet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-[#161723] text-3xl sm:text-4xl 2xl:text-[40px] font-semibold leading-snug sm:leading-tight mb-4">
              Prebiotics nourish the
              <br />
              beneficial gut bacteria,
              <br />
              supporting digestive health
            </h3>
            <p className="text-[#424153] mt-4 text-[15px] sm:text-[16px] leading-relaxed max-w-xl">
              Our dog food formula contains carefully selected prebiotics that
              work in harmony with the gut microbiota, providing the necessary
              nutrients for the growth and maintenance of beneficial bacteria,
              ultimately supporting digestive health.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/dog-food.png"
              alt="Dog food kibble"
              width={570}
              height={480}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
