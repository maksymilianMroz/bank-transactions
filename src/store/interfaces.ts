export type Nullable<T = undefined> = T | null;

export type ResponseError = {
  [key: string]: unknown;
};

export type Transaction = {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date?: Date;
  description: string;
};

export enum RequestStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export type TransactionsState = {
  transactions: Transaction[];
  status: RequestStatus;
  error?: unknown;
};
