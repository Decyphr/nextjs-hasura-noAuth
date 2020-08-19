import gql from 'graphql-tag';

export const GET_IRA_VALUES = gql`
  query getIraValues {
    ira_values {
      id
      net_assets
      daily_gain
      gain_isPositive
      scrape_date
    }
  }
`;