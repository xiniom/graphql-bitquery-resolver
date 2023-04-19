import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from 'fs';
import { resolvers } from './resolvers.js';
const server = new ApolloServer({
    typeDefs: readFileSync("./schema.gql", "utf-8"),
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
    context: async () => {
        return { 
            dataSources: {
                // ...
            } 
        };
    }
});

console.log(`🚀  Server ready at: ${url}`);
