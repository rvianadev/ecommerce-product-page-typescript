export function CartModal() {
  return (
    <div className="absolute -right-[5rem] top-[4.13rem] w-[22.5rem] h-64 shadow-2xl bg-white rounded-[0.625rem]">
      <header>
        <span>Cart</span>
      </header>
      <div>
        <span>Your cart is empty.</span>
      </div>
    </div>
  );
}
