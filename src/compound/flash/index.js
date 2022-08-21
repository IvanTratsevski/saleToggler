import React, {useEffect, useState} from "react";
import styles from "./index.module.css";



export const Flash = ({children, startSaleStatus}) => {
    const [alarmVisibleStatus,setAlarmVisibleStatus] = useState(styles.hiden);
        useEffect(() => {
            const flashingInterval = setInterval(() => {
                setAlarmVisibleStatus(styles.show)
                const flashingIntervalHide = setTimeout(() => {
                    setAlarmVisibleStatus(styles.hide);
                },500)
            }, 1000);
            return() => {
                clearInterval(flashingInterval);
            }
        }
        )
    return (<div className={startSaleStatus && alarmVisibleStatus}>
            {children}
        </div>
    );
}
