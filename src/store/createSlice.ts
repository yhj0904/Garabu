import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TransactionState {
    id : Object,
    date: Date, //YYYY-MM-DD형식
    amount: number, // 금액
    creater: string, //작성자
    customer: string,
    category: string, // 분류(객체)
    asset: string,         // 자산내용
    contents: string, //내용
    amounttype: string // 수입지출

}

const initialState: TransactionState = {
    id:'', date: new Date('2000-01-01'), amount: 0, creater: '', customer: '', category: '', asset: '', contents: '', amounttype: ''
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        // 사용자 입력을 처리하는 액션
        updateTransaction: (state, action: PayloadAction<TransactionState>) => {
            // 상태를 업데이트하는 로직
            Object.assign(state, action.payload);
            console.log(action.payload)
        },
    },
});

export const { updateTransaction } = transactionSlice.actions

export default transactionSlice