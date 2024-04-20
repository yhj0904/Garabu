import { combineReducers, configureStore } from '@reduxjs/toolkit';
import transactionReducer from './createSlice';
import membertransactionReducer from './Member';
import LoggedInMemberInfoReducer from './LoggedInUserInfo';
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from "redux-persist/lib/storage/session"; // sessionStorage를 사용할 경우
import authReducer from './Auth';

// Create a root reducer object
const rootReducer = combineReducers({
    transaction: transactionReducer.reducer,
    LoginMember: membertransactionReducer.reducer,
    LoggedInMember: LoggedInMemberInfoReducer.reducer,
    auth: authReducer,
});

// Configuration for redux-persist
const persistConfig = {
    key: 'root', // The key for the persist
    storage: storageSession, // The storage to use
    whitelist: ['LoggedInMember'] // Optional: specific reducers you want to store
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer
});

// Create a persistor linked to the store
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
