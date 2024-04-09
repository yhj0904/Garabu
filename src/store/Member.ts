import {PayloadAction, createSlice} from '@reduxjs/toolkit';


interface LoginMember {
    username : string;
    email : string;
    error:string;
  }

  type LoginMemberState = LoginMember[];

  const initialState: LoginMemberState = [{
    username: '',
    email: '',
    error:'',

  }];

  const MemberTransactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
      // 새로운 거래 정보를 배열에 추가하는 액션
      updateMemberTransaction: (state, action: PayloadAction<LoginMember>) => {
        state.push(action.payload);
      },
    },
  });

  export const { updateMemberTransaction } = MemberTransactionSlice.actions;

export default MemberTransactionSlice;
