import { Server } from "./server";
import { config as configuration } from "dotenv";
configuration();

const server = Server.init(Number(process.env.PORT));
server.start(() => {
  console.log("Server on fire " + process.env.PORT);
});
