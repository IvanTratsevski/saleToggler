import {useState, useEffect} from 'react';

function toggler (val) {return !val}

export const useFlash = (interavlOfFlash) => {
    const [startSaleStatus,setStartSaleStatus] = useState(true);
    const [shouldShowBorder, setShouldShowBorder] = useState(false);
    const handleShouldFlash = () => {
        setStartSaleStatus(toggler);
    };

    useEffect(() => {
        let intervalId;

        if (startSaleStatus) {
            intervalId = setInterval(() => {
                setShouldShowBorder(toggler(shouldShowBorder));
            }, interavlOfFlash);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [startSaleStatus]);

    return {
        shouldShowBorder,
        handleShouldFlash
    };
}