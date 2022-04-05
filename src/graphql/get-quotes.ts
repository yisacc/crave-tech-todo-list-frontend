import { gql } from "@apollo/client";

export const GET_QUOTES = gql`{
   quotes {
   quote
    author
  }
  }
`;
