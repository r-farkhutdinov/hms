import { gql } from "@apollo/client";

export const guestsListFragment = gql`
  fragment GuestsListFields on guests {
    country_id
    document_id
    first_name
    id
    last_name
    visa_id
  }
`;

export const fetchGuests = gql`
  query fetchGuests {
    guests {
      ...GuestsListFields
    }
  }
`;
