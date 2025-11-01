import * as React from 'react'
import useWebSocket from 'react-use-websocket'
import { CLIENT_ENV } from '@ws-cursor/env/client'
import throttle from 'lodash.throttle'
import { renderUsersList } from '@/lib/users'
import { renderCursors } from '@/lib/cursors'

function Home({ username }: { username: string }) {
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(
    `${CLIENT_ENV.VITE_WS_URL}:8000`,
    {
      share: true,
      queryParams: { username },
    },
  )

  const THROTTLE = 50
  const sendJsonMessageThrottled = React.useRef(
    throttle(sendJsonMessage, THROTTLE),
  )

  React.useEffect(() => {
    sendJsonMessage({
      x: 0,
      y: 0,
    })
    window.addEventListener('mousemove', (e) => {
      console.log(sendJsonMessageThrottled.current)
      sendJsonMessageThrottled.current({
        x: e.clientX,
        y: e.clientY,
      })
    })
  }, [])

  if (lastJsonMessage) {
    return (
      <>
        {renderUsersList(lastJsonMessage)}
        {/* ideally batch updates */}
        {renderCursors(lastJsonMessage)}
      </>
    )
  }
}

export default Home
