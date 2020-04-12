import * as React from "react";
import duration from "dayjs/plugin/duration";
import dayjs from "dayjs";

dayjs.extend(duration);

export const BookingsTable: React.FC = () => {
  console.log(dayjs.duration().asDays());

  return <></>;
};
