const { Buffer } = require("buffer");
const compression = require("@s4tk/compression");
const encoding = require("@s4tk/encoding");
const hashing = require("@s4tk/hashing");
hashing.formatting = require("@s4tk/hashing/formatting");
const images = require("@s4tk/images");
const models = require("@s4tk/models");
models.enums = require("@s4tk/models/enums");
models.simdata = require("@s4tk/models/simdata");
const tunables = require("@s4tk/tunables");
const xmlDom = require("@s4tk/xml-dom");

window.S4TK = {
  compression,
  encoding,
  images,
  hashing,
  models,
  tunables,
  xmlDom,
};

window.NodeJS = {
  Buffer,
};
