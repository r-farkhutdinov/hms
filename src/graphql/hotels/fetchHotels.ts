import { gql } from '@apollo/client';

export const hotelsFragment = gql`
  fragment HotelFields on hotels {
    hotel_id
    location
    owner {
      first_name
      id
      last_name
    }
    owner_id
    title
  }
`;

export const fetchHotels = gql`
  query fetchHotels {
    hotels {
      ...HotelFields
    }
  }
`;

export const fetchHotelByPk = gql`
  query fetchHotelsByPk($id: Int!) {
    hotels_by_pk(hotel_id: $id) {
      ...HotelFields
    }
  }
`;

export const createHotel = gql`
  mutation createHotel($objects: [hotels_insert_input!]!) {
    insert_hotels(objects: $objects) {
      returning {
        ...HotelFields
      }
    }
  }
`;
