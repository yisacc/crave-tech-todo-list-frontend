import { gql } from "@apollo/client";

export const GET_EXCHANGE_RATES = gql`
  query GetRates {
    rates(currency: "USD") {
      currency
    }
  }
`;
