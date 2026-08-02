import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="mt-8">
      <div className="relative h-[237px] w-[997px] overflow-hidden rounded-xl border border-[#E9E9E9] bg-white">

        {/* ================= LEFT CONTENT ================= */}

        <div className="absolute left-8 top-8 z-50">

          <h1 className="w-[620px] text-[42px] font-semibold leading-none text-[#2E294E]">
            The Echo of our Silent Pages
          </h1>

          <p className="mt-5 w-[576px] text-[16px] font-normal leading-[160%] text-[#404040]">
            A global publishing technology pavilion designed to run alongside
            major international book fairs
          </p>

          <button className="mt-6 flex items-center gap-3 text-[16px] font-medium text-[#353535] hover:gap-4 transition-all">
            Explore More

            <Image
              src="/icons/hero/arrow-right.png"
              alt="Arrow"
              width={38}
              height={11}
            />
          </button>
        </div>

        {/* ================= RIGHT HERO ILLUSTRATION ================= */}

        <div className="absolute right-0 top-0 h-full w-[360px]">

          {/* Bubble Pattern */}

          <Image
            src="/images/hero/hero-pattern.png"
            alt=""
            width={124}
            height={158}
            className="
              absolute
              left-[18px]
              top-[120px]
              w-[124px]
              h-auto
              opacity-40
              z-10
              pointer-events-none
              select-none
            "
          />

          {/* Outline Shape */}

          <Image
            src="/images/hero/hero-outline-circle.png"
            alt=""
            width={305}
            height={234}
            className="
              absolute
              right-[5px]
              top-[36px]
              w-[235px]
              h-auto
              rotate-[115deg]
              z-20
              pointer-events-none
              select-none
            "
          />

          {/* Beige Shape */}

          <Image
            src="/images/hero/hero-beige-circle.png"
            alt=""
            width={245}
            height={188}
            className="
              absolute
              right-[38px]
              top-[78px]
              w-[180px]
              h-auto
              rotate-[115deg]
              z-30
              pointer-events-none
              select-none
            "
          />

          {/* Book */}

          <Image
            src="/images/hero/hero-book.png"
            alt="Life Of The Wild"
            width={565}
            height={637}
            priority
            className="
              absolute
              right-[10px]
              top-[-18px]
              w-[255px]
              h-auto
              z-40
              pointer-events-none
              select-none
            "
          />

        </div>

      </div>
    </section>
  );
}