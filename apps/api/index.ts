import { WebSocketServer } from "ws";
import http from "node:https";
import url from "node:url";
import { ENV } from "@ws-cursor/env/server";
import z from "zod";
import { handleCloseEvent } from "./events/close-event";

const paramsSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

const server = http.createServer();
const wss = new WebSocketServer({ server });

const PORT = ENV.PORT;

wss.on("connection", (connection, request) => {
  const parsedUrl = url.parse(request?.url ?? "", true).query;

  const query = paramsSchema.parse(parsedUrl.query);
  const { username } = query;

  console.log(`New WebSocket connection: ${username}`);
  const uuid = Bun.randomUUIDv7();

  console.log(uuid);

  //   connection.on("message", () => );
  connection.on("close", () => handleCloseEvent(uuid));
});

server.listen(PORT, () => {
  console.log(`WebSocket Server is running on port: ${PORT}`);
});
