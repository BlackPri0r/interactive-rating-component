interface buttonProp{
    children: React.ReactNode;
    OnClick: () => void;
}

function Button({ OnClick, children }: buttonProp) {
    return (
      <button onClick={OnClick} className="bg-gray-700 h-14 w-14 rounded-full pt-1 text-light-grey font-overpass font-bold focus:bg-white focus:text-black select-none hover:bg-orange hover:text-black transition duration-200">
        {children}
      </button>
    );
  }
export default Button;