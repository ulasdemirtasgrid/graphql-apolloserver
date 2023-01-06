const axios = require("axios");

const API_URLs = require("../config/api");
const Services = require("../models/Services.model");

const resolvers = {
  Query: {
    getPostById: async (_parent, args, _context, _info) => {
      const { ipAddress, isSaveInDb } = args;

      let url = API_URLs.GET_SERVICES_ON_IP_ADDRESS;
      url = url.replace("#IP#", ipAddress);
      url = url.replace("#API_KEY#", process.env.API_KEY);
      let { data = {} } = await axios.get(url);

      if (isSaveInDb) await Services.create(data);

      return data;
    },
  },
};

module.exports = resolvers;
