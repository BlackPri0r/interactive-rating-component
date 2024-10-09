
interface buttonProp{
    number: number;
    setNumber: (value: number) => void;
}

function Button({ number, setNumber }: buttonProp) {
    return (
      <button onClick={() => setNumber(number)} className="bg-gray-700 h-14 w-14 rounded-full pt-1 text-light-grey font-overpass font-bold focus:bg-white focus:text-black select-none">
        {number}
      </button>
    );
  }
export default Button;