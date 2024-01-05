import logo from '../../assets/images/logo.svg';

export function NavMenu() {
  return (
    <nav className="flex">
      <img src={logo} alt="sneakers logo" />
      <ul className="flex">
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
