const mongoose = require("mongoose");

const ServicesSchema = new mongoose.Schema({
  region_code: {
    type: String,
  },

  ip: {
    type: Number,
  },

  postal_code: {
    type: String,
  },

  country_code: {
    type: String,
  },

  city: {
    type: String,
  },

  dma_code: {
    type: String,
  },

  last_update: {
    type: String,
  },

  latitude: {
    type: Number,
  },

  tags: {
    type: Array,
  },

  area_code: {
    type: String,
  },

  country_name: {
    type: String,
  },

  hostnames: {
    type: Array,
  },

  org: {
    type: String,
  },

  data: {
    type: Array,
  },

  asn: {
    type: String,
  },

  isp: {
    type: String,
  },

  longitude: {
    type: Number,
  },

  country_code3: {
    type: String,
  },

  domains: {
    type: Array,
  },

  ip_str: {
    type: Array,
  },

  os: {
    type: String,
  },

  ports: {
    type: Array,
  },
});

const Post = mongoose.model("services", ServicesSchema);

module.exports = Post;
