const fs = require("fs");
const path = require("path");
const { gql } = require("apollo-server");
const autoload = require("auto-load");

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, "schema.graphql"), "UTF-8")
);

module.exports = {
  typeDefs,
  resolvers: autoload(`${__dirname}/resolvers`),
};
