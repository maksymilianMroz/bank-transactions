import { useAppDispatch } from "../../store/hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { Transaction } from "../../store/interfaces";
import { addTransaction } from "../../store/slices/transactionSlice";
import {
  ControlsWrapper,
  CustomForm,
  FormButton,
  FormWrapper,
  Input,
  TextField,
} from "./AddTransactionForm.styles";

const schema = yup
  .object({
    amount: yup.number().positive(),
    beneficiary: yup.string(),
    account: yup.number().required(),
    address: yup.string(),
    description: yup.string(),
  })
  .required();

export const AddTransactionForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Transaction>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((formData: Transaction) => {
    dispatch(
      addTransaction({
        ...formData,
        date: JSON.parse(JSON.stringify(new Date())),
      })
    );
  });

  return (
    <CustomForm onSubmit={onSubmit}>
      <FormWrapper>
        <TextField>
          <label htmlFor="amount">Amount:</label>
          <Input id="amount" {...register("amount")} />
          {errors.amount && "You should use positive number here"}
        </TextField>
        <TextField>
          <label htmlFor="beneficiary">Beneficiary:</label>
          <Input id="beneficiary" {...register("beneficiary")} />
        </TextField>
        <TextField>
          <label htmlFor="account">Account number:</label>
          <Input id="account" {...register("account")} />
          {errors.account && "You should type your account number here"}
        </TextField>
        <TextField>
          <label htmlFor="address">Address:</label>
          <Input id="address" {...register("address")} />
        </TextField>
        <TextField>
          <label htmlFor="description">Description:</label>
          <Input id="description" {...register("description")} />
        </TextField>
      </FormWrapper>
      <ControlsWrapper>
        <FormButton type="submit">Add Transaction</FormButton>
      </ControlsWrapper>
    </CustomForm>
  );
};
