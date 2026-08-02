import Image from "next/image";
import { navigationItems } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="ml-8 mt-8 h-[542px] w-[198px] rounded-2xl bg-[#FFFBEF] px-3 py-6">

      {/* Logo */}

      <div className="mb-8 px-3">
        <Image
          src="/icons/chai-reader-logo.png"
          alt="Chai Reader"
          width={165}
          height={36}
          priority
        />
      </div>

      {/* Navigation */}

      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            className={`flex h-12 w-full items-center gap-4 rounded-xl px-4 transition-all duration-200
              ${
                item.id === 1
                  ? "bg-white shadow-sm"
                  : "hover:bg-white/70"
              }`}
          >
            <Image
              src={item.icon}
              alt={item.title}
              width={20}
              height={20}
              className="shrink-0"
            />

            <span
              className={`text-[16px] leading-6 ${
                item.id === 1
                  ? "font-medium text-[#353535]"
                  : "font-normal text-[#666666]"
              }`}
            >
              {item.title}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  );
}