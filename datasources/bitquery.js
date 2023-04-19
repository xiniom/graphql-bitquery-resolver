import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core/core.cjs";
import { HttpLink } from "@apollo/client/link/http/http.cjs";
import dotenv from 'dotenv';
dotenv.config();

const query = gql`
    query ExampleQuery{
        ethereum(network: ethereum) {
            dexTrades(date: {after: "2023-04-01"}) {
                count
                date {
                    date(format: "%y-%m-%d")
                }
            }
        }
    }
`;

export default class BitqueryAPI {
    async getExampleData() {
        console.log('getExampleData');
        const client = new ApolloClient({
            cache: new InMemoryCache(),
            link: new HttpLink({
                uri: process.env.BITQUERY_URL,
                headers: {
                    'X-API-KEY': process.env.BITQUERY_API_KEY
                }
            }),
        });
        const data = await client.query({ query });
        console.log('data:', JSON.stringify(data, null, 2));
        return JSON.stringify(data, null, 2);
    }
}