import logo from '../../assets/images/logo.svg';

export function NavMenu() {
  return (
    <nav className="flex items-center">
      <img src={logo} alt="sneakers logo" className="h-5 pr-14" />
      <ul className="flex gap-8">
        <li>
          <a href="/" className="text-gray">
            Collections
          </a>
        </li>
        <li>
          <a href="#" className="text-gray">
            Men
          </a>
        </li>
        <li>
          <a href="#" className="text-gray">
            Women
          </a>
        </li>
        <li>
          <a href="#" className="text-gray">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
