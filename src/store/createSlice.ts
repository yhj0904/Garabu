import { createSlice } from '@reduxjs/toolkit'

interface TransactionState{
    date : string; //YYYY-MM-DD형식
    amount : number; // 금액
    recipient : string; // 분류(객체)
    asset : string;
    description : string; //거래설명
}

const initialState : TransactionState={
    date : '', amount : 0, recipient :'', asset :'', description:''
}

const Transaction = createSlice({
    name : 'transaction',
    initialState,
    reducers:{
        insertFirstData : (state) =>{
            
        }
    }
})

export const {insertFirstData} = Transaction.actions

export default Transaction