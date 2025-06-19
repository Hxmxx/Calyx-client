"use client"

import { User } from '@supabase/supabase-js'

interface DashboardClientProps {
  user: User
}

export function DashboardClient({ user }: DashboardClientProps) {
  return (
    <div>
      <h1>안녕하세요 {user.email}님!</h1>
      <p>대시보드에 오신 것을 환영합니다.</p>
    </div>
  )
} 