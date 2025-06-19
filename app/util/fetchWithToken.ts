import { supabase } from "@/app/lib/supabase"

export const fetchWithToken = async (url: string) => {
    const { data } = await supabase.auth.getSession()
    const token = data.session?.access_token
  
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }