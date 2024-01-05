import { NavMenu, NavUser } from 'components';

export function Header() {
  return (
    <header className="w-full flex justify-between mb-32 after:content-[''] after:w-full after:bg-header-line after:absolute after:h-0.25 after:top-20.5">
      <NavMenu />
      <NavUser />
    </header>
  );
}
