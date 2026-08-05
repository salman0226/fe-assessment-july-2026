import Image from "next/image";
import { Menu } from "lucide-react";

interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({
  setSidebarOpen,
}: HeaderProps) {
  return (
    <header
      className="
        flex
        flex-col
        gap-5
        py-6
        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:py-8
      "
    >
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-lg
            border
            border-[#E8E8E8]
            bg-white
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

        {/* Search Bar */}
        <div
          className="
            flex
            h-[52px]
            w-full
            items-center
            rounded-full
            border
            border-[#E8E8E8]
            bg-white
            px-5
            lg:w-[760px]
            xl:w-[790px]
          "
        >
          <Image
            src="/icons/navbar/search.png"
            alt="Search"
            width={22}
            height={22}
          />

          <input
            type="text"
            placeholder="Search book title or author..."
            className="
              ml-4
              w-full
              bg-transparent
              text-[14px]
              text-[#3A3A3A]
              placeholder:text-[#7C7C7C]
              outline-none
            "
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-end gap-5">
        <button className="transition hover:scale-110">
          <Image
            src="/icons/navbar/heart.png"
            alt="Wishlist"
            width={20}
            height={20}
          />
        </button>

        <button className="transition hover:scale-110">
          <Image
            src="/icons/navbar/cart.png"
            alt="Cart"
            width={20}
            height={20}
          />
        </button>

        <button
          className="
            flex
            h-[42px]
            w-[105px]
            items-center
            justify-center
            rounded-full
            border
            border-[#B6B6B6]
            bg-white
            text-[14px]
            text-[#3A3A3A]
            transition
            hover:bg-gray-50
          "
        >
          Login
        </button>
      </div>
    </header>
  );
}