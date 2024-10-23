import {PayloadAction,createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from '../api/axios';

interface LoginMember {
    username : string;
    email : string;
    error:string;
  }

  type LoginMemberState = LoginMember;

  const initialState: LoginMemberState = {
    username: '',
    email: '',
    error:'',

  };


  // Async thunk for fetching user data
export const fetchMemberTransaction = createAsyncThunk(
  'transaction/fetchMemberTransaction',
  async () => {
    const response = await api.get('/api/v2/members');
    return response.data;
  }
);

  const MemberTransactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      // 새로운 거래 정보를 배열에 추가하는 액션
      updateMemberTransaction: (state, action: PayloadAction<LoginMember>) => {
      state.username = action.payload.username;
      console.log(action.payload.username)
      console.log("이름저장")
      
      state.email = action.payload.email;
      state.error = action.payload.error;
      },
    },
  });

  export const { updateMemberTransaction } = MemberTransactionSlice.actions;

export default MemberTransactionSlice;
