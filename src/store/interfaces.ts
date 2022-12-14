export type Nullable<T = undefined> = T | null;

export type ResponseError = {
  [key: string]: unknown;
};

export type Transaction = {
  id: number;
  amount: number | null;
  beneficiary: string | null;
  account: string | null;
  address: string | null;
  date?: Date;
  description: string | null;
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
