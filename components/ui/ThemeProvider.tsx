'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEME } from '@/styles/theme';

// 테마 타입 정의
type ThemeMode = 'light' | 'dark';

// 테마 컨텍스트 타입
interface ThemeContextType {
  theme: typeof THEME;
  mode: ThemeMode;
  toggleTheme: () => void;
  setThemeMode: (mode: ThemeMode) => void;
}

// 테마 컨텍스트 생성
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 테마 프로바이더 컴포넌트
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  // 로컬 스토리지에서 테마 모드 복원
  useEffect(() => {
    const savedMode = localStorage.getItem('calyx-theme-mode') as ThemeMode;
    if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
      setMode(savedMode);
    } else {
      // 시스템 테마 감지
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // 테마 모드 변경 시 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('calyx-theme-mode', mode);
    // HTML 요소에 테마 클래스 적용
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // 테마 토글 함수
  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  // 테마 모드 설정 함수
  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode);
  };

  const value: ThemeContextType = {
    theme: THEME,
    mode,
    toggleTheme,
    setThemeMode,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 테마 훅
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 