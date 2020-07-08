const { ApolloServer, gql } = require("apollo-server");
const { typeDefs, resolvers } = require("./graphql");

const id = "graphql";

const init = (hsd) => {
  const logger = hsd.logger.context(id);
  const playground = hsd.config.bool("graphql-playground");
  const port = hsd.config.uint("graphql-port") || 4000;

  const open = () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground,
      context: () => ({ hsd, logger }),
    });

    server.listen(port).then(({ url }) => {
      logger.info(`🚀 GraphQL server ready at ${url}`);
    });
  };

  return {
    open,
    close: () => {},
  };
};

module.exports = {
  id,
  init,
};
