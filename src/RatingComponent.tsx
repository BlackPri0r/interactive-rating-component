import Submission from './Submission';
import ThankYou from './ThankYou';
import { createContext, useState } from 'react';

type NumberContextType = {
    number: number;
    setNumber: (num: number) => void;
}

export const NumberContext = createContext<NumberContextType | undefined>(undefined);

export default function RatingComponent() {
    const [isSubmitted, setSubmitted] = useState(false);
    const [chosenNumber, setNumber] = useState(1);

    const handleSetSubmitted = () => {
        setSubmitted(!isSubmitted);
    };

    return (
        <NumberContext.Provider value={{ number: chosenNumber, setNumber }}>
            {!isSubmitted ? (
                <Submission OnClick={handleSetSubmitted} />
            ) : (
                <ThankYou OnClick={handleSetSubmitted} chosenNumber={chosenNumber} />
            )}
        </NumberContext.Provider>
    );
}
