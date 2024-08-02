// Local
// const protocol = "http";
// const host = "192.168.29.48:8080/sayaexim/v1";

// Live
// const protocol = "http";
// const host = "192.168.29.112:8080/sayaexim/v1";
// const host = "192.168.1.15:5555/sayaexim/v1";

// Production
// const protocol = "https";
// const host = "api.aaziko.com/sayaexim/v1";

// Dev
const protocol = "https";
const host = "api.aaziko.com/sayaexim/v1";

const protocolForAI = "https";
const hostForAI = "ai-api.aaziko.com/v1";


const port = "";
const trailUrl = "";

const hostUrl = `${protocol}://${host}${port ? ":" + port : ""}/`;
const endpoint = `${protocol}://${host}${port ? ":" + port : ""}${trailUrl}`;
const aiUrl = `${protocolForAI}://${hostForAI}${port ? ":" + port : ""}`;

export default {
  protocol: protocol,
  host: host,
  port: port,
  apiUrl: trailUrl,
  endpoint: endpoint,
  hostUrl: hostUrl,
  aiUrl:aiUrl

};
