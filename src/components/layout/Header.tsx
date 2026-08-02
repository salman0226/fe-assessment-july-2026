import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-[33px] px-8">
      {/* Search Bar */}
      <div className="flex h-[47px] w-[718px] items-center rounded-full border border-[#E8E8E8] bg-white px-[22px]">
        <Image
          src="/icons/navbar/search.png"
          alt="Search"
          width={22}
          height={22}
        />

        <input
          type="text"
          placeholder="Search book title or author..."
          className="ml-4 w-full bg-transparent text-[14px] font-normal text-[#3A3A3A] placeholder:text-[#7C7C7C] outline-none"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-[22px]">
        <button className="transition-transform duration-200 hover:scale-110">
          <Image
            src="/icons/navbar/heart.png"
            alt="Wishlist"
            width={18}
            height={16}
          />
        </button>

        <button className="transition-transform duration-200 hover:scale-110">
          <Image
            src="/icons/navbar/cart.png"
            alt="Cart"
            width={19}
            height={19}
          />
        </button>

        <button className="flex h-[37px] w-[95px] items-center justify-center rounded-full border border-[#B6B6B6] bg-white text-[14px] font-normal text-[#3A3A3A] transition-all duration-200 hover:bg-gray-50">
          Login
        </button>
      </div>
    </header>
  );
}