import { users } from "../config/users";
import { broadcast } from "../config/broadcast";

export const handleCursorState = (bytes: any, uuid: string) => {
  const message = JSON.parse(bytes.toString());
  const user = users[uuid];
  if (!user) return;
  user.state = message;
  broadcast();

  console.log(
    `${user.username} updated their updated state: ${JSON.stringify(user.state)}`
  );
};
