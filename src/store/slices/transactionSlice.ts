import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RequestStatus, TransactionsState } from "../interfaces";
import type { RootState } from "../store";

const initialState: TransactionsState = {
  transactions: [],
  error: null,
  status: RequestStatus.IDLE,
};

export const getTransactions = createAsyncThunk("transactions", async () => {
  const response = await axios.get("http://localhost:8000/transactions");

  return response.data;
});

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, { payload }) => {
      state.transactions = [
        ...state.transactions,
        {
          id: state.transactions.length++,
          amount: 1323,
          beneficiary: payload.beneficiary,
          account: payload.account,
          address: payload.address,
          description: payload.description,
          date: payload.date,
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, (state) => {
        state.status = RequestStatus.LOADING;
      })
      .addCase(getTransactions.fulfilled, (state, { payload }) => {
        state.status = RequestStatus.SUCCEEDED;
        state.transactions = payload;
        state.error = null;
      })
      .addCase(getTransactions.rejected, (state, { payload }) => {
        state.status = RequestStatus.FAILED;
        state.error = payload;
      });
  },
});

export const { addTransaction } = transactionsSlice.actions;

export const selectTransactions = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
