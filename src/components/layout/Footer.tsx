import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#F5F9FF]">
      <div className="mx-auto max-w-[1366px] px-6 py-16 lg:px-12">
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
            xl:grid-cols-[2fr_1fr_1fr_1fr]
          "
        >
          {/* Logo */}
          <div>
            <Image
              src="/icons/chai-reader-logo.png"
              alt="Chai Reader"
              width={220}
              height={45}
            />

            <p className="mt-6 max-w-[500px] text-[15px] leading-8 text-[#666666]">
              Chai Reader is an AI-powered book commerce platform designed
              to transform how people discover and experience books through
              reading, chatting with books and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3 text-[#666]">
              <Link href="#">Home</Link>
              <br />
              <Link href="#">About</Link>
              <br />
              <Link href="#">Contact</Link>
              <br />
              <Link href="#">FAQ</Link>
              <br />
              <Link href="#">Support</Link>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              For Partners
            </h3>

            <div className="space-y-3 text-[#666]">
              <Link href="#">Authors</Link>
              <br />
              <Link href="#">Publishers</Link>
              <br />
              <Link href="#">Become Partner</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Legal
            </h3>

            <div className="space-y-3 text-[#666]">
              <Link href="#">Privacy Policy</Link>
              <br />
              <Link href="#">Terms & Conditions</Link>
              <br />
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Waves */}
      <div className="relative h-[90px] md:h-[120px] lg:h-[150px]">
        <Image
          src="/images/Rectangle-97.png"
          alt=""
          fill
          className="object-cover"
        />

        <Image
          src="/images/Rectangle-96.png"
          alt=""
          fill
          className="object-cover"
        />

        <Image
          src="/images/Rectangle-95.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </footer>
  );
}