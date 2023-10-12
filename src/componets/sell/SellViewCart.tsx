import { FaShoppingCart } from "react-icons/fa";

const totalPrice = 20000;
const currency = "PKR";

type PropsType = {
  handleClick: () => void;
};

export default function SellViewCart(props: PropsType) {
  const { handleClick } = props;

  return (
    <button
      onClick={handleClick}
      className="absolute bottom-0 left-0 z-10 transition-all w-full duration-300 bg-secondary hover:bg-jungle flex items-center font-bold text-pure px-4 py-2 max-sm:py-1 max-sm:px-2"
    >
      <span className="text-2xl flex-1">
        <FaShoppingCart />
      </span>
      <span className="cart-heading flex-1">View Cart</span>
      <span className="value flex-1 text-right">
        {currency + " " + totalPrice}
      </span>
    </button>
  );
}
