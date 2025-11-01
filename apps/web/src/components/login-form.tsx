import { cn } from '@ws-cursor/utils/client'
import { Button } from '@ws-cursor/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@ws-cursor/ui/card'
import { Field, FieldGroup } from '@ws-cursor/ui/field'
import { Input } from '@ws-cursor/ui/input'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ws-cursor/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, useNavigate } from '@tanstack/react-router'
import { loginSchema } from '../schema'
import type { ZLoginSchema } from '../schema'
import { useUserStore } from '@/store/users'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const navigate = useNavigate({
    from: '/login',
  })

  const { setUsername } = useUserStore()
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
    },
  })

  function submit(values: ZLoginSchema) {
    setUsername(values.username)
    navigate({
      to: '/',
    })
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your username to join the real-time cursor session and see
            live cursors of other users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <FieldGroup>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Field>
                  <Button type="submit">Login</Button>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
