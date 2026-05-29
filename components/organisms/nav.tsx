import { IconMenu2Filled } from "@tabler/icons-react";

export const Nav = () => {
  return (
    <nav>
      <div className="block md:hidden">
        <button className="pressable hover:text-brand-blue" title="Menu">
          <IconMenu2Filled size={40} />
        </button>
      </div>
      <div className="hidden md:block">
        <ul className="flex-cb gap-6">
          {["The Lab", "Our Experiments", "Solutions", "Contact"].map(
            (item, i) => (
              <li
                key={i}
                className="font-semibold text-sm text-black hover:text-brand-blue pressable"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};
