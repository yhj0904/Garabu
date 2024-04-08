import {PayloadAction, createSlice} from '@reduxjs/toolkit';


interface Transaction {
    username: string;

  }

  type TransactionState = Transaction[];

  const initialState: TransactionState = [{
    username: ,
    email: ,

  }];

  const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      // 새로운 거래 정보를 배열에 추가하는 액션
      updateTransaction: (state, action: PayloadAction<Transaction>) => {
        state.push(action.payload);
      },
    },
  });

  export const { updateTransaction } = transactionSlice.actions;

export default transactionSlice
