import * as React from "react";
import { useStore } from "../../core/util";
import dayjs from "dayjs";
import { observer } from "mobx-react";
import { FilterPanel } from "./components/FilterPanel";
import { BookingsTable } from "./components/BookingsTable";

export const Bookings: React.FC = observer(() => {
  const { bookings: bookingsStore } = useStore();
  const { load, bookings } = bookingsStore;

  React.useEffect(() => {
    load(dayjs().format("YYYY-MM-DD"), "2020-04-30", 0);
  }, []);

  console.log(bookings);

  return (
    <>
      <FilterPanel />
      <BookingsTable />
    </>
  );
});
