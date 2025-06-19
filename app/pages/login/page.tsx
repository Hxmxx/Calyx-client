import { getSession } from '@/app/lib/auth'
import { redirect } from 'next/navigation'
import { LoginForm } from './LoginForm'

export default async function Login() {
  const session = await getSession()
  
  if (session) {
    redirect('/pages/dashboard')
  }

  return <LoginForm />
}