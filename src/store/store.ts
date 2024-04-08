import { configureStore } from '@reduxjs/toolkit'
import transactionReducer  from './createSlice'
import membertransactionReducer from './Member'


const store = configureStore({
    reducer : {
       
        transaction: transactionReducer.reducer,
        LoginMember : membertransactionReducer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store