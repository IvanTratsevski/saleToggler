import React, {useState} from "react";
import styles from "./index.module.css";



export const Flash = ({children, startSaleStatus}) => {
    const [alarmVisibleStatus,setAlarmVisibleStatus] = useState("hiden");
    const flashingEffect = () =>{
        const flasingInterval = setInterval(() => {
            const flashingShow = setTimeout(() => {
                setAlarmVisibleStatus("show");
            }, 5000);
            return () => {
              clearTimeout(flashingShow);
            };
          }, 10000);
    }
    flashingEffect();
    return (<div>
        { startSaleStatus ? 
            <div className={alarmVisibleStatus}>
                {children}
            </div> :
            {children}
        }
        </div>
    );
}