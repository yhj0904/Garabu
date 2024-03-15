import { configureStore } from '@reduxjs/toolkit'
import transactionReducer  from './createSlice'


const store = configureStore({
    reducer:{
       
        transaction: transactionReducer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store