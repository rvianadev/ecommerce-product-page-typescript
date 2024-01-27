import logo from '../../assets/images/logo.svg';
import menu from '../../assets/images/icon-menu.svg';

export function NavMenu() {
  return (
    <nav className="flex items-center">
      <img src={menu} alt="mobile menu" className="lg:hidden pr-4 sm:pr-8" />
      <img src={logo} alt="sneakers logo" className="h-5 pr-14" />
      <ul className="hidden lg:flex gap-8">
        <li className="relative">
          <a
            href="/"
            className="text-gray hover:text-black hover:font-normal after:block after:absolute after:content-[''] after:bg-primary after:h-1 hover:after:w-full hover:after:mt-[2.625rem]"
          >
            Collections
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-gray hover:text-black hover:font-normal after:block after:absolute after:content-[''] after:bg-primary after:h-1 hover:after:w-full hover:after:mt-[2.625rem]"
          >
            Men
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-gray hover:text-black hover:font-normal after:block after:absolute after:content-[''] after:bg-primary after:h-1 hover:after:w-full hover:after:mt-[2.625rem]"
          >
            Women
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-gray hover:text-black hover:font-normal after:block after:absolute after:content-[''] after:bg-primary after:h-1 hover:after:w-full hover:after:mt-[2.625rem]"
          >
            About
          </a>
        </li>
        <li className="relative">
          <a
            href="#"
            className="text-gray hover:text-black hover:font-normal after:block after:absolute after:content-[''] after:bg-primary after:h-1 hover:after:w-full hover:after:mt-[2.625rem]"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
