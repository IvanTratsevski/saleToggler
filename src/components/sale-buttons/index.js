import React, { useState, useCallback } from "react";
import styles from './index.module.css';

export const SaleButtons = ({onToggleSale,onStartSale}) => {
    
    return (
    <div className={styles.buttonsWrapper}>
        <button 
            className={styles.saleBtn} 
            onClick={onToggleSale}
        >TOGGLE SALE</button>
        <button 
            className={styles.saleBtn}
            onClick={onStartSale}
        >START SALE</button>
    </div>
    )
};