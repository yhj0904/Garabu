import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; // 경로는 실제 구조에 맞게 조정하세요.

const TransactionDetail = () => {
    const transaction = useSelector((state: RootState) => state.transaction);

    return (
        <div>
            <h2>Transaction Detail</h2>
            <p>Date: {transaction.date instanceof Date ? transaction.date.toISOString().substring(0, 10) : transaction.date}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Creater: {transaction.creater}</p>
            <p>Customer: {transaction.customer}</p>
            <p>Category: {transaction.category}</p>
            <p>Asset: {transaction.asset}</p>
            <p>Contents: {transaction.contents}</p>
            <p>Amount Type: {transaction.amounttype}</p>
        </div>
    );
};

export default TransactionDetail;
