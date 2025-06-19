import {useState, useEffect} from "react"
import { supabase } from "@/app/lib/supabase"
import { User } from "@supabase/supabase-js"

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)
  
    useEffect(() => {
      supabase.auth.getUser().then(({ data }) => setUser(data.user))
    }, [])
  
    return user
  }