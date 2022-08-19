import React, { useState, useCallback } from "react";
import styles from './index.module.css';

export const SaleText = ({toggleSaleStatus}) => {
    return (
    <div className={styles.saleTextWrapper}>
        <p className={styles.saleText}>!SALE!</p>
    </div>
    )
};