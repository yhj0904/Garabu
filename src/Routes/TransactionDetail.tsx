import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store'; 
import axios from 'axios';
const TransactionDetail = () => {
    const transactions = useSelector((state: RootState) => state.transaction);
    const accessToken = localStorage.getItem('accessToken');
   
    /*useEffect(()=>{
        axios.get('http://localhost:8080//api/v2/ledger',{
            headers: {
              'access': accessToken
            }
          } ).then((res:any) => {
            console.log(res); 
        })
    },[])*/
    
    return (
        <div>
            <h2>Transaction Details</h2>
            {transactions.map((transaction, index) => (
                <div key={index}>
                    <h3>Transaction {index + 1}</h3>
                    <p>Date: {transaction.date}</p>
                    <p>Amount: {transaction.amount}</p>
                    <p>Creater: {transaction.creater}</p>
                    <p>Customer: {transaction.customer}</p>
                    <p>Category: {transaction.category}</p>
                    <p>Asset: {transaction.asset}</p>
                    <p>Contents: {transaction.contents}</p>
                    <p>Amount Type: {transaction.amounttype}</p>
                </div>
            ))}
        </div>
    );
};

export default TransactionDetail;
