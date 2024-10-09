import thankyou from './assets/illustration-thank-you.svg'

function ThankYou({ setSubmitted, chosenNumber }: { setSubmitted: (value: boolean) => void, chosenNumber: number }) {
    return (
      <div className='bg-dark-blue p-5 rounded-3xl max-w-[400px]'>
        <img src={thankyou} className='block mx-auto mb-10'></img>
  
        <div className='flex justify-center items-center'>
          <p className='bg-gray-700 text-sm px-4 pt-1 text-center rounded-full font-overpass text-orange'>You selected {chosenNumber} out of 5</p>
        </div>
  
        <h2 className='text-white text-3xl my-6 text-center'>Thank You!</h2>
  
        <p className='text-overpass text-light-grey mb-10'>
          We appreaciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
        </p>
  
        <div className='text-center'>
          <button onClick={() => setSubmitted(false)} className='bg-orange w-full font-overpass font-bold text-black uppercase tracking-wide pt-2 pb-2 rounded-full hover:bg-white transition'>
            Rate Again
          </button>
        </div>
      </div>
    )
  }

export default ThankYou
