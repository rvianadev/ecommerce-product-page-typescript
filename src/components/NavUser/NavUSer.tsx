import cartIcon from '../../assets/images/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';

export function NavUser() {
  return (
    <nav className="flex items-center gap-12">
      <a href="#">
        <img src={cartIcon} alt="cart icon"></img>
      </a>
      <a href="#">
        <img src={avatar} alt="user avatar" className="size-12.5"></img>
      </a>
    </nav>
  );
}
