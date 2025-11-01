import { connections } from "./connections";
import { users } from "./users";

export const broadcast = () => {
  Object.keys(connections).forEach((uuid) => {
    const connection = connections[uuid];
    const message = JSON.stringify(users);
    if (!connection) return;
    connection.send(message);
  });
};
