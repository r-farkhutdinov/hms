import * as React from 'react';
import { observer } from 'mobx-react';
import { FilterPanel } from './components/FilterPanel';
import { BookingsTable } from './components/BookingsTable';
import { Moment } from 'moment';
import * as moment from 'moment';
import { useFetchBookingsQuery } from '../../__generated__/graphql';

export type DateRangeType = {
  startDate: Moment;
  endDate: Moment;
};

export const Bookings: React.FC = observer(() => {
  const [dates, setDates] = React.useState<DateRangeType>({ startDate: moment(), endDate: moment().add(20, 'd') });
  const [zoom, setZoom] = React.useState<number>(5);

  const { data, loading } = useFetchBookingsQuery({
    variables: { startDate: dates.startDate, endDate: dates.endDate },
  });

  return (
    <>
      <FilterPanel zoom={zoom} setZoom={setZoom} dates={dates} setDates={setDates} />
      <BookingsTable data={data} zoom={zoom} dates={dates} />
    </>
  );
});
