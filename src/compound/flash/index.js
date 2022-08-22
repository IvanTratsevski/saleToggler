import React, {useEffect, useState} from "react";
import styles from "./index.module.css";



export const Flash = ({children, startSaleStatus}) => {
    const [alarmVisibleStatus,setAlarmVisibleStatus] = useState(false);
        useEffect(() => {
            let flashingInterval;
            if(alarmVisibleStatus){
                flashingInterval = setInterval(() => {
                    setAlarmVisibleStatus((alarmVisibleStatus) => !alarmVisibleStatus);
                }, 500);
            }
            return() => {
                clearInterval(flashingInterval);
            }
        },[alarmVisibleStatus]);
    return (
        <>
            <div className={startSaleStatus && styles.show}>
                {children}
            </div>
        </>
        
    );
}
