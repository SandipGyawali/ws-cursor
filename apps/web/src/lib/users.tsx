export type UsersType = {
  [uuid: string]: any
}

export const renderUsersList = (users: UsersType) => {
  return (
    <ul>
      {Object.keys(users).map((uuid) => {
        return <li key={uuid}>{JSON.stringify(users[uuid])}</li>
      })}
    </ul>
  )
}
