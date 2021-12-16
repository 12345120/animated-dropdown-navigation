import "./App.css";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import Navbar, { NavItem } from "./components/Navbar";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<PlusIcon />}></NavItem>
        <NavItem icon={<BellIcon />}></NavItem>
        <NavItem icon={<MessengerIcon />}></NavItem>

        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
