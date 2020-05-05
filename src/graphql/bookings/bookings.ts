import { gql } from '@apollo/client';

export const BookingFragment = gql`
  fragment Booking on bookings {
    booking_id
    date_end
    date_start
    guest_id
    room_id
    guest {
      ...GuestsListFields
    }
    room {
      number
      room_id
    }
  }
`;

export const fetchBookings = gql`
  query fetchBookings($startDate: date!, $endDate: date!) {
    bookings(where: { _or: { date_start: { _gte: $startDate }, date_end: { _lte: $endDate } } }) {
      ...Booking
    }
    rooms {
      number
      room_id
    }
  }
`;
