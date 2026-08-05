import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mt-8 w-full">
      <div className="relative overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white">
        <div className="flex flex-col-reverse items-center justify-between gap-8 p-6 md:p-8 lg:h-[260px] lg:flex-row lg:px-10">
          {/* Left Content */}
          <div className="z-20 w-full max-w-[620px]">
            <h1 className="text-[32px] font-semibold leading-tight text-[#2E294E] md:text-[42px] lg:text-[54px] lg:leading-[60px]">
              The Echo of our Silent Pages
            </h1>

            <p className="mt-5 max-w-[560px] text-[15px] leading-[170%] text-[#404040] md:text-[16px] lg:text-[18px]">
              A global publishing technology pavilion designed to run alongside
              major international book fairs.
            </p>

            <button className="mt-6 flex items-center gap-3 text-[16px] font-medium text-[#353535] transition-all hover:gap-4 lg:text-[18px]">
              Explore More

              <Image
                src="/icons/hero/arrow-right.png"
                alt="Arrow"
                width={40}
                height={12}
              />
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative flex h-[260px] w-full max-w-[360px] items-center justify-center md:h-[320px] md:max-w-[420px] lg:h-full lg:w-[400px]">
            {/* Pattern */}
            <Image
              src="/images/hero/hero-pattern.png"
              alt=""
              width={130}
              height={160}
              className="absolute left-2 bottom-6 opacity-40"
            />

            {/* Outline */}
            <Image
              src="/images/hero/hero-outline-circle.png"
              alt=""
              width={305}
              height={234}
              className="absolute right-4 top-10 w-[220px] rotate-[115deg] md:w-[250px]"
            />

            {/* Beige Shape */}
            <Image
              src="/images/hero/hero-beige-circle.png"
              alt=""
              width={245}
              height={188}
              className="absolute right-10 top-20 w-[170px] rotate-[115deg] md:w-[190px]"
            />

            {/* Book */}
            <Image
              src="/images/hero/hero-book.png"
              alt="Hero Book"
              width={565}
              height={637}
              priority
              className="absolute right-2 top-0 w-[220px] md:w-[250px] lg:w-[270px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}