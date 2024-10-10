import { useContext } from 'react';
import star from './assets/icon-star.svg';
import Button from './Button';
import RatingButton from './RatingButton';
import { NumberContext } from './RatingComponent';

type SubmissionProps = {
    OnClick: () => void;
};

export default function Submission({ OnClick }: SubmissionProps) {
    const numbers: number[] = [1, 2, 3, 4, 5];

    const context = useContext(NumberContext);

    if (!context) {
        throw new Error('NumberContext must be used within a NumberProvider');
    }

    const { setNumber } = context;

    const handleSetNumber = (number: number) => {
        setNumber(number);
    };

    return (
        <div className='bg-dark-blue p-5 rounded-3xl max-w-[400px]'>
            <img src={star} className='bg-gray-700 p-2 rounded-full' alt="star icon" />
            <h2 className='text-gray-100 text-3xl my-6 font-overpass'>How did we do?</h2>
            <p className='font-overpass text-light-grey mb-10'>
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering.
            </p>

            <ul className='flex gap-3 mb-10 text-white justify-between items-center'>
                {numbers.map((number) => (
                    <li key={number}>
                        <RatingButton OnClick={() => handleSetNumber(number)}>
                            {number}
                        </RatingButton>
                    </li>
                ))}
            </ul>

            <Button OnClick={OnClick}>Submit</Button>
        </div>
    );
}
