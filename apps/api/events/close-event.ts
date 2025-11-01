import { connections } from "../config/connections";
import { users } from "../config/users";

/**
 * Note:
 * Close Event Callback Method that runs removing the users info and
 * it's appropriate connection.
 * @param uuid
 * @returns void
 */
export const handleCloseEvent = (uuid: string) => {
  console.log(`Username: ${users[uuid]?.username} disconnected`);
  delete connections[uuid];
  delete users[uuid];
};
