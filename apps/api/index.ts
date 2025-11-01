import { WebSocketServer } from "ws";
import http from "node:https";
import url from "node:url";
import { ENV } from "@ws-cursor/env/server";
import z from "zod";
import { handleCloseEvent } from "./events/close-event";
import { handleCursorState } from "./events/manage-state";
import { users } from "./config/users";
import { connections } from "./config/connections";

const paramsSchema = z.object({
  username: z.string().min(1, "Username is required"),
});

const server = http.createServer();
const wss = new WebSocketServer({ server });

const PORT = ENV.PORT;

wss.on("connection", (connection, request) => {
  const parsedUrl = url.parse(request?.url ?? "", true).query;

  const result = paramsSchema.safeParse(parsedUrl);
  if (!result.success) {
    connection.close(1008, "Invalid username"); // 1008 = Policy Violation
    return;
  }

  const { username } = result.data;
  console.log(`New WebSocket connection: ${username}`);

  const uuid = Bun.randomUUIDv7();
  connections[uuid] = connection;
  users[uuid] = { username, state: {} };

  connection.on("message", (message) => handleCursorState(message, uuid));
  connection.on("close", () => handleCloseEvent(uuid));
});

server.listen(PORT, () => {
  console.log(`WebSocket Server is running on port: ${PORT}`);
});
