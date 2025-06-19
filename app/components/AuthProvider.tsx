"use client"

import { useInitializeAuth } from "@/app/hooks/userInitializeAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const isInitialized = useInitializeAuth();
  
  // 인증 상태가 초기화될 때까지 로딩 표시
  if (!isInitialized) {
    return <div>인증 상태를 확인하는 중...</div>;
  }
  
  return <>{children}</>;
}; 