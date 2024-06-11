"use client";

import dayjs from "dayjs";

export const format = (date: string | Date, formatDate = "h:mmA M/D/YYYY") => {
  const localDate = dayjs(date);
  return localDate.format(formatDate);
};
