import { useState, useEffect} from 'react';
import Exultedlogo from '../assets/images/Exultedlogo.png';
import { hamburger, closeIcon } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = () => closeMenu();


  return (
    <>
    <header className='padding-x py-8 abosolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={Exultedlogo} alt="logo" width={80} height={29} />
            </a>

            <ul 
            className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                    </li>
                ))}
            </ul>
             
          {/* Hamburger Icon for smaller screens */}
          {!isMenuOpen && (
            <div className="hidden max-lg:block" onClick={toggleMenu}>
              <img
                src={hamburger}
                alt="menu toggle"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </div>
          )}

          {/* Slide-out Menu for smaller screens */}
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 w-3/4 h-full bg-white-400 bg-opacity-95 z-20 shadow-lg backdrop-blur-sm transition-shadow ease-in-out duration-30 p-6"
              onClick={closeMenu}
            >
              {/* Close icon positioned near links */}
              <div className="flex justify-between mt-4 w-full mb-6">
                <span className="text-xl px-4 text-coral-red font-semibold">Menu</span>
                <img
                  src={closeIcon}
                  alt="close menu"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  onClick={closeMenu}
                />
              </div>
              <ul className="flex flex-col px-4 items-start gap-6">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat text-lg text-slate-gray"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
    </header>
    </>
  );
};

export default Nav;