import * as React from 'react';
import dayjs from 'dayjs';
import { getDatesInRange } from '../../../../common/dates_utils/rangeDates';
import { DateRangeType } from '../../Bookings.component';
import style from './BookingsTable.less';
import weekday from 'dayjs/plugin/weekday';
import { getBookingStyle } from './util';

dayjs.extend(weekday);

type Props = {
  dates: DateRangeType;
  zoom: number;
};

const getTransparentGrid = (rows: number, columns: number) => {
  let result: Array<JSX.Element> = [];

  for (let i = 1; i < rows + 1; i++) {
    for (let j = 1; j < columns + 1; j++) {
      result.push(
        <div
          key={i}
          className={style.transparentCell}
          style={{ gridRowStart: i, gridRowEnd: i, gridColumnStart: j, gridColumnEnd: j }}
        />,
      );
    }
  }

  return result;
};

export const BookingsTable: React.FC<Props> = ({ dates, zoom }) => {
  const distinctDays = getDatesInRange(dates.startDate.toDate(), dates.endDate.toDate());

  const roomsAmount = 3;

  const cellSize = 50;

  const datesContainerStyle = {
    gridTemplateColumns: `repeat(${distinctDays.length}, minmax(${cellSize + 5 * zoom}px, 1fr))`,
  };

  const roomsContainerStyle = {
    gridTemplateRows: `repeat(${roomsAmount}, 50px)`,
  };

  const bookingsContainerStyle = {
    gridTemplateRows: `repeat(${roomsAmount}, 50px)`,
    gridTemplateColumns: `repeat(${distinctDays.length}, minmax(${cellSize + 5 * zoom}px, 1fr)`,
  };

  const rooms = [1, 4, 5];

  const testBooking = {
    room: 4,
    start: '2020-04-30',
    end: '2020-05-10',
    name: 'Test booking',
  };

  console.log(zoom);

  return (
    <>
      <div className={style.container}>
        <div className={style.corner}>№ \ date</div>
        <div className={style.datesGridContainer} style={datesContainerStyle}>
          {distinctDays.map((d, index) => (
            <div key={index} className={style.dateContainer}>
              <span className={style.weekday}>{dayjs(d).format('dd')}</span>
              <span className={style.date}>{dayjs(d).get('date')}</span>
            </div>
          ))}
        </div>
        <div className={style.roomsGridContainer} style={roomsContainerStyle}>
          {rooms.map((r, index) => (
            <div key={index} style={{ gridRowStart: index + 1, gridRowEnd: index + 1 }} className={style.room}>
              {r}
            </div>
          ))}
        </div>
        <div className={style.bookingsGridContainer} style={bookingsContainerStyle}>
          <div
            className={style.booking}
            style={getBookingStyle(testBooking.start, testBooking.end, testBooking.room, rooms, distinctDays)}
          >
            {testBooking.name}
          </div>

          {getTransparentGrid(rooms.length, distinctDays.length)}
        </div>
      </div>
    </>
  );
};
