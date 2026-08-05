"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { navigationItems } from "@/constants/navigation";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-[260px]
          bg-[#FFFBEF]
          px-4
          py-6
          transition-transform
          duration-300
          lg:left-8
          lg:top-8
          lg:h-[542px]
          lg:w-[198px]
          lg:rounded-2xl
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Mobile Close */}
        <div className="mb-6 flex items-center justify-between lg:block">
          <Image
            src="/icons/chai-reader-logo.png"
            alt="Chai Reader"
            width={165}
            height={36}
            priority
          />

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSidebarOpen(false)}
              className={`
                flex
                h-12
                w-full
                items-center
                gap-4
                rounded-xl
                px-4
                transition-all
                duration-200
                ${
                  item.id === 1
                    ? "bg-white shadow-sm"
                    : "hover:bg-white"
                }
              `}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
              />

              <span
                className={
                  item.id === 1
                    ? "font-medium text-[#353535]"
                    : "text-[#666666]"
                }
              >
                {item.title}
              </span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}