const assert = require("bsert");
const getBlock = require("./block");

module.exports = async (_, { offset, limit, ...params }, ctx) => {
  assert(offset >= 0, "Offset can't be less than zero");

  const currentHeight = ctx.hsd.chain.height;
  const next = offset + limit < currentHeight ? offset + limit : null;
  const previous = offset > 0 ? Math.max(offset - limit, 0) : null;

  const pageInfo = {
    hasNext: next !== null,
    hasPrevious: previous !== null,
    next,
    previous,
    total: currentHeight,
  };

  const nodes = [];
  const end = Math.min(offset + limit, currentHeight + 1);

  for (let height = offset; height < end; height++) {
    nodes.push(getBlock(_, { height }, ctx));
  }

  return { pageInfo, nodes };
};
