const graphql = require('graphql')

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = graphql

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            toto: {
                type: GraphQLString,
                resolve() {
                    return 'Hello GraphQL';
                }
            }
        }
    })
});

module.exports = schema;