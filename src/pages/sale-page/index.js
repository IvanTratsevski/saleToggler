import React, { useState} from "react";
import { SaleText } from "../../components/sale-text";
import { SaleButtons } from "../../components/sale-buttons";
import { Flash } from "../../compound/flash";
import { useFlash } from "../../hooks/useFlash";
import styles from './index.module.css';

export const SalePage = () => {
    const [toggleSaleStatus,setToggleSaleStatus] = useState(true);
    const {shouldShowBorder,handleShouldFlash} = useFlash(1000);
    const onToggleSale = () => {
        setToggleSaleStatus((prev) => !prev);
    }
    return (
        <div>
            {toggleSaleStatus && 
                <Flash startSaleStatus = {shouldShowBorder}>
                    <SaleText/>
                </Flash>

            }
            <SaleButtons onToggleSale = {onToggleSale} onStartSale = {handleShouldFlash}/>
        </div>
    )
};