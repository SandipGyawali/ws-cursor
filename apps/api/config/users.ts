interface UsersInterface {
  username: string;
  state: Object;
}

export const users: { [uuid: string]: UsersInterface } = {};
