import "../App.css";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../icons/arrow.svg";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

function DropdownMenu({ }) {
  function DropdownItem({ leftIcon, rightIcon, children, goToMenu }) {
    return (
      <a href="#" className="DropdownItem" onClick={() => goToMenu && setActiveMenu(goToMenu)}>
        {leftIcon && <span className="DropdownItem_leftIcon">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="DropdownItem_rightIcon">{rightIcon}</span>}
      </a>
    );
  }
  
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  
  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }
  
  useEffect(() => {
    let el = document.getElementsByClassName("menu")[0];
    calcHeight(el);
  }, []); 

  return (
    <div className="DropdownMenu " style={{height: menuHeight}}>
      
      <CSSTransition 
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}>
          
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}
          goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}
          goToMenu="animals">
            Animals
          </DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
        </div>
      </CSSTransition>
      
      <CSSTransition 
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}>
          
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}
          goToMenu="main">
            Back
          </DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem>My Profile</DropdownItem>
        </div>
      </CSSTransition>
      
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Butterfly</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
      
    </div>
  );
}

export default DropdownMenu;
