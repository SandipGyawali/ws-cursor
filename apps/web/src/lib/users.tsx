interface UsersInfo {
  username: string
  state: {
    x: number
    y: number
  }
}

export type UsersType = { [uuid: string]: UsersInfo }

export const renderUsersList = (users: UsersType) => {
  return (
    <ul>
      {Object.keys(users).map((uuid) => {
        return (
          <li key={uuid}>
            <h3 style={{ margin: '0 0 6px 0' }}>
              Username= {users[uuid].username}, Position: x ={' '}
              {JSON.stringify(users[uuid].state)}
            </h3>
          </li>
        )
      })}
    </ul>
  )
}
