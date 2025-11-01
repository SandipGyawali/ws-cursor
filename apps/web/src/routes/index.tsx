import React from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useUserStore } from '@/store/users'

const HomePage = React.lazy(() => import('@/components/Home'))

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate({
    from: '/',
  })
  const users = useUserStore.getState()

  if (!users.username || users.username == '') {
    navigate({
      to: '/login',
    })
    return null
  }

  return <HomePage username={users.username} />
}
