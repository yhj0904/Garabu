import { configureStore } from '@reduxjs/toolkit'
import transactionReducer  from './createSlice'
import membertransactionReducer from './Member'
import LoggedInMemberInfoReducer from './LoggedInUserInfo'

const store = configureStore({
    reducer : {
        transaction: transactionReducer.reducer,
        LoginMember : membertransactionReducer.reducer,
        LoggedInMember : LoggedInMemberInfoReducer.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store