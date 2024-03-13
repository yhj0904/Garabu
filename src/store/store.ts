import { configureStore } from '@reduxjs/toolkit'
import insertReducer from './createSlice'


const store = configureStore({
    reducer:{
        insertData : insertReducer.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store