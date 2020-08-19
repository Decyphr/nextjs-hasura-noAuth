import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import { withApollo } from '../libs/apollo';
import { GET_IRA_VALUES } from '../graphql/iraValues';

const Home = () => {
  const { loading, error, data } = useQuery(GET_IRA_VALUES);

  if (error) {
    console.log(error);
    return <h1>Error</h1>;
  }
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      <div>
        {data.ira_values.map((data) => (
          <ul key={data.id}>
            <li>{data.gain_isPositive ? "Gain" : "Loss"}: {data.daily_gain}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default withApollo({ ssr: true })(Home);
