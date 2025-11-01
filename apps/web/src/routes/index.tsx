import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useUserStore } from '@/store/users'
import Home from '@/components/Home'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate({
    from: '/',
  })

  const users = useUserStore()

  if (!users.username || users.username == '') {
    navigate({
      to: '/login',
    })
    return null
  }

  return <Home username={users.username} />
}
