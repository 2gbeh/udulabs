"use client";

import { IconMenu2Filled, IconXFilled } from "@tabler/icons-react";
import { useAppStore } from "@/store/appStore";
import { NAV } from "@/constants/NAV";

export const Drawer = () => {
  const open = useAppStore((s) => s.drawerOpen);
  //
  return (
    <div className="block bg-white md:hidden">
      {open ? (
        <ul className="absolute z-3 w-full flex-col gap-6 bg-white shadow-2xl pb-2_">
          {NAV.map((item, i) => (
            <li
              key={i}
              className="pressable hover:bg-brand-blue/10 px-4 py-4 font-medium text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export const DrawerButton = () => {
  const open = useAppStore((s) => s.drawerOpen);
  const toggle = useAppStore((s) => s.toggleDrawer);
  //
  return (
    <div className="block md:hidden">
      <button
        onClick={toggle}
        className="pressable hover:text-brand-blue"
        title="Menu"
      >
        {open ? <IconXFilled size={40} /> : <IconMenu2Filled size={40} />}
      </button>
    </div>
  );
};
