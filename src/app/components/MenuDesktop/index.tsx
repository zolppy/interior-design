import { MenuList } from "@/app/components/MenuList";

export function MenuDesktop() {
  return (
    <nav className="h-screen hidden bg-[#f44336] fixed top-0 left-0 z-30 p-8 flex-col gap-y-16 overflow-x-hidden w-[320px] font-bold lg:flex">
      <h1 className="mt-[69px] text-white text-2xl">
        Company <br /> Name
      </h1>
      <MenuList />
    </nav>
  );
}

MenuDesktop.displayName = "MenuDesktop";
