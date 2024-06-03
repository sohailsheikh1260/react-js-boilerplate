/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { useAppDispatch } from "redux/store";

export interface IUserState {
  token: string;
  isLoggedIn: boolean;
  companyId: number;
  signalRConnectionId: string;
  getCommunicationAccess: any;
  profilePic?: string;
}

const initialState: IUserState = {
  token: "",
  isLoggedIn: false,
  companyId: 0,
  signalRConnectionId: "",
  getCommunicationAccess: {} as any,
  profilePic: "",
};

interface IPayload {
  isLoggedIn?: boolean;
  token?: string;
  companyId?: number;
  signalRConnectionId?: string;
  getCommunicationAccess?: any;
  profilePic?: string;
}

interface IAction {
  payload: IPayload;
  type: string;
}
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserCredential: (state, action: IAction) => {
      state.isLoggedIn = action.payload.isLoggedIn || false;
      state.token = action.payload.token || "";
      state.companyId = action.payload.companyId || 0;
      state.signalRConnectionId = action.payload.signalRConnectionId || "";
    },
  },
});

export const { setUserCredential } = authSlice.actions;

export const useAuthActions = () => {
  const dispatch = useAppDispatch();
  return {
    setUserCredential: (payload: IPayload) =>
      dispatch(setUserCredential(payload)),
  };
};
const { reducer } = authSlice;
export default reducer;
