import * as React from 'react';
import dayjs from 'dayjs';
import { getDatesInRange } from '../../../../common/dates_utils/rangeDates';
import { DateRangeType } from '../../Bookings.component';
import style from './BookingsTable.less';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

type Props = {
  dates: DateRangeType;
};

export const BookingsTable: React.FC<Props> = ({ dates }) => {
  const distinctDays = getDatesInRange(dates.startDate.toDate(), dates.endDate.toDate());

  const roomsAmount = 10;

  const cellSize = 50;

  const containerStyle = {
    gridTemplateColumns: `150px repeat(${distinctDays.length}, minmax(${cellSize}px, 1fr)`,
    gridTemplateRows: `50px repeat(${roomsAmount},1fr)`,
  };

  const rooms = [1, 4, 5];

  const getBookingStyle = (start: string, end: string, room: number) => {
    const startDate = new Date(start),
      endDate = new Date(end);

    const startDateInArray = distinctDays.find(d => dayjs(d).isSame(startDate, 'date'));
    const endDateInArray = distinctDays.find(d => dayjs(d).isSame(endDate, 'date'));

    const roomPos = rooms.indexOf(room) + 2;
    return {
      gridRowStart: roomPos,
      gridRowEnd: roomPos,
      gridColumnStart: startDateInArray ? distinctDays.indexOf(startDateInArray) + 2 : -1,
      gridColumnEnd: endDateInArray ? distinctDays.indexOf(endDateInArray) + 2 : -1,
    };
  };

  const testBooking = {
    room: 4,
    start: '2020-04-30',
    end: '2020-05-10',
    name: 'Test booking',
  };

  console.log(getBookingStyle(testBooking.start, testBooking.end, testBooking.room));

  return (
    <>
      <div className={style.container} style={containerStyle}>
        <p>№ / date</p>
        {distinctDays.map((d, index) => (
          <div key={index} className={style.dateContainer}>
            <span className={style.weekday}>{dayjs(d).format('dd')}</span>
            <span className={style.date}>{dayjs(d).get('date')}</span>
          </div>
        ))}
        {rooms.map((r, index) => (
          <div key={index} style={{ gridRowStart: index + 2, gridRowEnd: index + 2 }}>
            {r}
          </div>
        ))}
        <div className={style.booking} style={getBookingStyle(testBooking.start, testBooking.end, testBooking.room)}>
          {testBooking.name}
        </div>
      </div>
    </>
  );
};
