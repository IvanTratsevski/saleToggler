import React, { useState, useCallback } from "react";
import { SaleText } from "../../components/sale-text";
import { SaleButtons } from "../../components/sale-buttons";
import { Flash } from "../../compound/flash";
import styles from './index.module.css';

export const SalePage = () => {
    const [toggleSaleStatus,setToggleSaleStatus] = useState(true);
    const [startSaleStatus,setStartSaleStatus] = useState(true);
    const onToggleSale = () => {
        setToggleSaleStatus((prev) => !prev);
    }
    const onStartSale = () => {
        setStartSaleStatus((prev) => !prev);
    }
    return (
        <div>
            {toggleSaleStatus && 
                <Flash startSaleStatus = {startSaleStatus}>
                    <SaleText/>
                </Flash>

            }
            <SaleButtons onToggleSale = {onToggleSale} onStartSale = {onStartSale}/>
        </div>
    )
};