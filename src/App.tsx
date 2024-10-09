import star from './assets/icon-star.svg'
import Button from './Button'
import ThankYou from './ThankYou';


import { useState } from 'react'

function App() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [chosenNumber, setNumber] = useState(1);
  const numbers: number[] = [1, 2, 3, 4, 5];

  return (
    <>
      <div className='flex justify-center items-center h-dvh'>
        {!isSubmitted &&
          <div className='bg-dark-blue p-5 rounded-3xl max-w-[400px]'>
          <img src={star} className='bg-gray-700 p-2 rounded-full'></img>
          <h2 className='text-gray-100 text-3xl my-6 font-overpass'>How did we do?</h2>
          <p className='font-overpass text-light-grey mb-10'>Please let us know how we did with your support request. All feedback is appreaciated to help us improve our offering</p>
          
          <ul className='flex gap-3 mb-10 text-white justify-between items-center'>
            {numbers.map((number) =>
              <li><Button setNumber={setNumber} number={number}/></li>
            )}
          </ul>
          <div className='text-center'>
            <button onClick={() => setSubmitted(true)} className='bg-orange w-full font-overpass font-bold text-black uppercase tracking-wide pt-2 pb-2 rounded-full hover:bg-white transition'>
              Submit
            </button>
          </div>
        </div>
        }

        {isSubmitted && <ThankYou chosenNumber={chosenNumber} setSubmitted={setSubmitted}/>}
      </div>
    </>
  )
}

export default App
