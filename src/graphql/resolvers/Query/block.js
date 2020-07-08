const Validator = require("bval");

module.exports = async (_, params, { hsd }) => {
  const valid = new Validator(params);
  const hash = valid.uintbhash("height");
  const { chain } = hsd;
  const block = await chain.getBlock(hash);

  if (!block) {
    return null;
  }

  const view = await chain.getBlockView(block);
  const height = await chain.getHeight(hash);
  const depth = chain.height - height + 1;

  return block.getJSON(hsd.network, view, height, depth);
};
