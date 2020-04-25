import { gql } from "@apollo/client";

export const guestsListFragment = gql`
  fragment GuestsListFields on guests {
    id
    firstName: first_name
    lastName: last_name
    country {
      id
      name
    }
  }
`;

export const fetchGuests = gql`
  query fetchGuests {
    guests {
      ...GuestsListFields
    }
  }
`;
