import { gql } from "@apollo/client";

export const insertGuest = gql`
  mutation insertGuest($objects: [guests_insert_input!]!) {
    insert_guests(objects: $objects) {
      returning {
        ...GuestsListFields
      }
    }
  }
`;
