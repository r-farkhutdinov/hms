import dayjs from 'dayjs';

export const getBookingStyle = (start: string, end: string, room: number, rooms: number[], distinctDays: Date[]) => {
  const startDate = new Date(start),
    endDate = new Date(end);

  const startDateInArray = distinctDays.find(d => dayjs(d).isSame(startDate, 'date'));
  const endDateInArray = distinctDays.find(d => dayjs(d).isSame(endDate, 'date'));

  const roomPos = rooms.indexOf(room) + 1;

  if (!startDateInArray && !endDateInArray) {
    return {
      display: 'none',
    };
  }

  return {
    gridRowStart: roomPos,
    gridRowEnd: roomPos,
    gridColumnStart: startDateInArray ? distinctDays.indexOf(startDateInArray) + 1 : -1,
    gridColumnEnd: endDateInArray ? distinctDays.indexOf(endDateInArray) + 1 : -1,
  };
};
