import thankyou from './assets/illustration-thank-you.svg'
import Button from './Button';

type ThankYouProps = {
  OnClick: () => void;
  chosenNumber: number;

}

function ThankYou({ OnClick, chosenNumber }: ThankYouProps) {
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
  
        <Button OnClick={OnClick} label={"Rate Again"}></Button>
      </div>
    )
  }

export default ThankYou
