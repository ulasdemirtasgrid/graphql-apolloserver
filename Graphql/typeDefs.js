const { gql } = require("apollo-server");

const typeDefs = gql`
  type optionsType {
    id: String
  }

  type shodanType {
    id: String
    options: optionsType
    ptr: Boolean
    module: String
    crawler: String
  }

  type locationType {
    city: String
    region_code: Int
    area_code: Int
    longitude: Float
    country_code3: Int
    country_name: String
    postal_code: Int
    dma_code: Int
    country_code: String
    latitude: Float
  }

  type dnsType {
    resolver_hostname: String
    recursive: Boolean
    resolver_id: Int
    software: String
  }

  type optsRef {
    raw: String
  }

  type Data {
    _shodan: shodanType
    hash: Int
    os: String
    opts: optsRef
    ip: Int
    isp: String
    port: Int
    hostnames: [String]
    location: locationType
    dns: dnsType
    timestamp: String
    domains: [String]
    org: String
    data: [Data]
    asn: String
    transport: String
    ip_str: String
  }

  type Post {
    region_code: Int
    ip: Int
    postal_code: Int
    country_code: String
    city: String
    dma_code: Int
    last_update: String
    latitude: Float
    tags: [String]
    area_code: Int
    country_name: String
    hostnames: [String]
    org: String
    data: [Data]
    asn: String
    isp: String
    longitude: Float
    country_code3: Int
    domains: [String]
    ip_str: String
    os: String
    ports: [Int]
  }

  type Query {
    getPostById(ipAddress: String, isSaveInDb: Boolean): Post
  }
`;

module.exports = typeDefs;
