import * as React from 'react';
import { useStore } from '../../core/util';
import { observer } from 'mobx-react';
import { FilterPanel } from './components/FilterPanel';
import { BookingsTable } from './components/BookingsTable';
import { Moment } from 'moment';
import * as moment from 'moment';

export type DateRangeType = {
  startDate: Moment;
  endDate: Moment;
};

export const Bookings: React.FC = observer(() => {
  const [dates, setDates] = React.useState<DateRangeType>({ startDate: moment(), endDate: moment().add(20, 'd') });

  const { bookings: bookingsStore } = useStore();
  const { load, bookings } = bookingsStore;

  React.useEffect(() => {
    load(moment().format('YYYY-MM-DD'), '2020-04-30', 0);
  }, []);

  console.log(bookings);

  return (
    <>
      <FilterPanel dates={dates} setDates={setDates} />
      <BookingsTable dates={dates} />
    </>
  );
});
