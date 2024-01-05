import logo from '../../assets/images/logo.svg';

export function NavMenu() {
  return (
    <nav className="flex items-center">
      <img src={logo} alt="sneakers logo" className="h-5 pr-14" />
      <ul className="flex gap-8">
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
