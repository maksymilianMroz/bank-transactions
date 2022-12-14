import dayjs from "dayjs";
import { Nullable } from "../store/interfaces";

export type DateString = Nullable<Date>;

export const DATE_FORMAT = "DD/MM/YYYY";

export const formatDate = (date?: DateString | null, format = DATE_FORMAT) => {
  if (!date) return "-";

  return dayjs(date).format(format);
};
