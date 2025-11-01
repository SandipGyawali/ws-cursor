import { Cursor } from '../components/Cursor'
import type { UsersType } from './users'

export const renderCursors = (users: UsersType) => {
  return Object.keys(users).map((uuid) => {
    const user = users[uuid]
    return (
      <Cursor key={uuid} userId={uuid} point={[user.state.x, user.state.y]} />
    )
  })
}
