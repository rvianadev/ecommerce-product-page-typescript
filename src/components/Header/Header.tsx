import { NavMenu, NavUser } from 'components';

export function Header() {
  return (
    <header className="w-full flex justify-between">
      <NavMenu />
      <NavUser />
    </header>
  );
}
