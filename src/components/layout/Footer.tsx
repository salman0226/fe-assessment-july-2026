import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#F5F9FF]">
      {/* Main Footer */}
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 lg:px-10 xl:px-0">
        <div
          className="
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-2
            lg:grid-cols-[2fr_1fr_1fr_1fr]
            lg:gap-10
          "
        >
          {/* Left */}
          <div>
            <Image
              src="/icons/chai-reader-logo.png"
              alt="Chai Reader"
              width={245}
              height={49}
              priority
              className="h-auto w-[180px] sm:w-[220px] lg:w-[245px]"
            />

            <p
              className="
                mt-6
                max-w-[520px]
                text-[15px]
                leading-7
                text-[#666666]
                lg:text-[16px]
                lg:leading-8
              "
            >
              Chai Reader is an AI-powered book commerce platform designed to
              transform how people discover and experience books—through
              reading, chatting with books, and more. It is owned and operated
              by Ailaysa Technologies Pvt Ltd.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-[20px] font-semibold text-[#121212] lg:text-[24px]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-[15px] text-[#555]">
              <Link href="#" className="hover:text-black">
                About
              </Link>
              <Link href="#" className="hover:text-black">
                Contact
              </Link>
              <Link href="#" className="hover:text-black">
                Home
              </Link>
              <Link href="#" className="hover:text-black">
                FAQ
              </Link>
              <Link href="#" className="hover:text-black">
                Support / Help Center
              </Link>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-5 text-[20px] font-semibold text-[#121212] lg:text-[24px]">
              For Partners
            </h3>

            <div className="flex flex-col gap-3 text-[15px] text-[#555]">
              <Link href="#" className="hover:text-black">
                For Authors
              </Link>
              <Link href="#" className="hover:text-black">
                For Publishers
              </Link>
              <Link href="#" className="hover:text-black">
                Become a Partner
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-[20px] font-semibold text-[#121212] lg:text-[24px]">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-[15px] text-[#555]">
              <Link href="#" className="hover:text-black">
                Terms & Conditions
              </Link>
              <Link href="#" className="hover:text-black">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-black">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Waves */}
      <div className="relative h-[70px] sm:h-[90px] md:h-[110px] lg:h-[148px] overflow-hidden">
        <Image
          src="/images/Rectangle-97.png"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-bottom"
        />

        <Image
          src="/images/Rectangle-96.png"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-bottom"
        />

        <Image
          src="/images/Rectangle-95.png"
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-bottom"
        />
      </div>
    </footer>
  );
}