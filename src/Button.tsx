type ButtonProps = {
  OnClick: () => void;
  label: string;
}

export default function Button({OnClick, label}: ButtonProps){
  return(
    <div className='text-center'>
        <button onClick={OnClick} className='bg-orange w-full font-overpass font-bold text-black uppercase tracking-wide pt-2 pb-2 rounded-full hover:bg-white transition'>
          {label}
        </button>
      </div>
  )
}