type ButtonProps = {
  OnClick: () => void;
  children: React.ReactNode;
}

export default function Button({OnClick, children}: ButtonProps){
  return(
    <div className='text-center'>
        <button onClick={OnClick} className='bg-orange w-full font-overpass font-bold text-black uppercase tracking-wide pt-2 pb-2 rounded-full hover:bg-white transition duration-200'>
          {children}
        </button>
      </div>
  )
}