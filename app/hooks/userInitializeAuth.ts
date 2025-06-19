"use client"

import { useEffect, useState } from "react";
import { useAuthStore } from "@/app/stores/userAuthStore";
import { supabase } from "@/app/lib/supabase";

export const useInitializeAuth = () => {
    const setAuth = useAuthStore((state) => state.setAuth);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            try {
                const {data} = await supabase.auth.getSession()
                setAuth(data.session?.user ?? null, data.session ?? null)
            } catch (error) {
                console.error('Session initialization error:', error)
                setAuth(null, null)
            } finally {
                setIsInitialized(true)
            }
        }

        getSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setAuth(session?.user ?? null, session ?? null)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [setAuth])

    return isInitialized;
}