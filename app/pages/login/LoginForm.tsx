"use client"

import { supabase } from "@/app/lib/supabase"

export function LoginForm() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  return (
    <div>
      <h1>로그인</h1>
      <button onClick={login}>구글로 로그인</button>
    </div>
  )
} 