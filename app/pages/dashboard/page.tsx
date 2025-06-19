import { getSession } from '@/app/lib/auth'
import { redirect } from 'next/navigation'
import { DashboardClient } from './DashboardClient'

export default async function Dashboard() {
  const session = await getSession()
  
  if (!session) {
    redirect('/pages/login')
  }

  return <DashboardClient user={session.user} />
}