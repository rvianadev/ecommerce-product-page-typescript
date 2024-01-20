import { useCart } from 'hooks';

export function CartModal() {
  const { isOpen } = useCart();

  return (
    <div
      className="flex flex-col absolute -right-[5rem] top-[4.13rem] w-[22.5rem] h-64 shadow-2xl bg-white rounded-[0.625rem]"
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <header className="after:absolute after:content-[''] after:bg-header-line after:w-full after:h-[0.0625rem] after:inline-block">
        <span className="pt-6 pl-6 pb-[1.69rem] block text-black text-base font-bold">
          Cart
        </span>
      </header>
      <div className="flex justify-center items-center flex-1">
        <span className="text-base font-bold leading-[1.625rem] text-gray">
          Your cart is empty.
        </span>
      </div>
    </div>
  );
}
