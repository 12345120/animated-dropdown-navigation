import "../index.css";
import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../icons/bolt.svg";

import { useState } from "react";

function Navbar({ children }) {
  return (
    <nav className="navbar">
      <ul className="navbar__nav">{children}</ul>
    </nav>
  );
}

export default Navbar;

export function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="navitem">
      <a
        href="#"
        className="navitem__iconButton"
        onClick={() => {
          setOpen(!open);
        }}
        style={{ backgroundColor: open ? "#3855d6" : "#484a4d" }}
      >
        {icon}
      </a>

      {open && children}
    </li>
  );
}
