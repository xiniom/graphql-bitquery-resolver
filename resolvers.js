export const resolvers = {
    Query: {
        result: (_, __, {dataSources}) => {
            return dataSources.bitqueryAPI.getExampleData();
        }
    }
};