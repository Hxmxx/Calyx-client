'use client';

import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { THEME } from '@/styles/theme';

// 전역 스타일 프로바이더 컴포넌트
export function GlobalStylesProvider() {
  const { mode } = useTheme();

  useEffect(() => {
    // CSS 변수 설정
    const root = document.documentElement;
    
    // 라이트 모드 CSS 변수
    if (mode === 'light') {
      root.style.setProperty('--color-primary', THEME.colors.Calyx.Primary);
      root.style.setProperty('--color-primary-hover', THEME.colors.Calyx.PrimaryHover);
      root.style.setProperty('--color-secondary', THEME.colors.Calyx.Secondary);
      root.style.setProperty('--color-secondary-hover', THEME.colors.Calyx.SecondaryHover);
      root.style.setProperty('--color-background', THEME.colors.Calyx.Background);
      root.style.setProperty('--color-background-alt', THEME.colors.Calyx.BackgroundAlt);
      root.style.setProperty('--color-text-primary', THEME.colors.Calyx.Text.Primary);
      root.style.setProperty('--color-text-secondary', THEME.colors.Calyx.Text.Secondary);
      root.style.setProperty('--color-text-muted', THEME.colors.Calyx.Text.Muted);
      root.style.setProperty('--color-text-light', THEME.colors.Calyx.Text.Light);
      root.style.setProperty('--color-accent-green', THEME.colors.Calyx.Accent.Green);
      root.style.setProperty('--color-accent-peach', THEME.colors.Calyx.Accent.Peach);
      root.style.setProperty('--color-accent-purple', THEME.colors.Calyx.Accent.Purple);
      root.style.setProperty('--color-accent-blue', THEME.colors.Calyx.Accent.Blue);
      root.style.setProperty('--color-glass-background', THEME.colors.Calyx.Glass.Background);
      root.style.setProperty('--color-glass-surface', THEME.colors.Calyx.Glass.Surface);
      root.style.setProperty('--color-glass-border', THEME.colors.Calyx.Glass.Border);
      root.style.setProperty('--shadow-soft', THEME.shadows.calyx.soft);
      root.style.setProperty('--shadow-glow', THEME.shadows.calyx.glow);
      root.style.setProperty('--shadow-glass', THEME.shadows.calyx.glass);
    } else {
      // 다크 모드 CSS 변수 (다크 테마 색상으로 조정)
      root.style.setProperty('--color-primary', '#7C3AED');
      root.style.setProperty('--color-primary-hover', '#8B5CF6');
      root.style.setProperty('--color-secondary', '#06B6D4');
      root.style.setProperty('--color-secondary-hover', '#0891B2');
      root.style.setProperty('--color-background', '#0F172A');
      root.style.setProperty('--color-background-alt', '#1E293B');
      root.style.setProperty('--color-text-primary', '#F1F5F9');
      root.style.setProperty('--color-text-secondary', '#CBD5E1');
      root.style.setProperty('--color-text-muted', '#94A3B8');
      root.style.setProperty('--color-text-light', '#64748B');
      root.style.setProperty('--color-accent-green', '#065F46');
      root.style.setProperty('--color-accent-peach', '#92400E');
      root.style.setProperty('--color-accent-purple', '#5B21B6');
      root.style.setProperty('--color-accent-blue', '#1E40AF');
      root.style.setProperty('--color-glass-background', 'rgba(15, 23, 42, 0.8)');
      root.style.setProperty('--color-glass-surface', 'rgba(30, 41, 59, 0.6)');
      root.style.setProperty('--color-glass-border', 'rgba(148, 163, 184, 0.2)');
      root.style.setProperty('--shadow-soft', '0 4px 20px rgba(124, 58, 237, 0.3)');
      root.style.setProperty('--shadow-glow', '0 0 30px rgba(6, 182, 212, 0.4)');
      root.style.setProperty('--shadow-glass', '0 8px 32px rgba(0, 0, 0, 0.3)');
    }

    // 공통 CSS 변수
    root.style.setProperty('--font-family-sans', THEME.typography.fontFamily.sans.join(', '));
    root.style.setProperty('--font-family-serif', THEME.typography.fontFamily.serif.join(', '));
    root.style.setProperty('--font-family-mono', THEME.typography.fontFamily.mono.join(', '));
    root.style.setProperty('--font-family-display', THEME.typography.fontFamily.display.join(', '));
    root.style.setProperty('--font-family-body', THEME.typography.fontFamily.body.join(', '));
    
    // 스페이싱 변수
    Object.entries(THEME.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // 폰트 크기 변수
    Object.entries(THEME.typography.fontSize).forEach(([key, value]) => {
      root.style.setProperty(`--font-size-${key}`, value);
    });

    // 폰트 웨이트 변수
    Object.entries(THEME.typography.fontWeight).forEach(([key, value]) => {
      root.style.setProperty(`--font-weight-${key}`, value.toString());
    });

    // 라인 높이 변수
    Object.entries(THEME.typography.lineHeight).forEach(([key, value]) => {
      root.style.setProperty(`--line-height-${key}`, value.toString());
    });

    // 그림자 변수
    Object.entries(THEME.shadows).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--shadow-${key}`, value);
      }
    });

    // 테두리 반경 변수
    Object.entries(THEME.borderRadius).forEach(([key, value]) => {
      root.style.setProperty(`--border-radius-${key}`, value);
    });

    // 트랜지션 변수
    Object.entries(THEME.transitions).forEach(([key, value]) => {
      root.style.setProperty(`--transition-${key}`, value);
    });

  }, [mode]);

  // 전역 스타일을 위한 스타일 태그 추가
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      :root {
        /* 기본 스타일 리셋 */
        box-sizing: border-box;
      }
      
      *,
      *::before,
      *::after {
        box-sizing: inherit;
      }
      
      html {
        scroll-behavior: smooth;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      body {
        margin: 0;
        padding: 0;
        font-family: var(--font-family-body);
        font-size: var(--font-size-base);
        line-height: var(--line-height-normal);
        color: var(--color-text-primary);
        background-color: var(--color-background);
        transition: background-color var(--transition-base), color var(--transition-base);
      }
      
      /* 포커스 스타일 */
      :focus-visible {
        outline: 2px solid var(--color-primary);
        outline-offset: 2px;
      }
      
      /* 선택 텍스트 스타일 */
      ::selection {
        background-color: var(--color-primary);
        color: white;
      }
      
      /* 스크롤바 스타일 */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: var(--color-background-alt);
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--color-text-muted);
        border-radius: var(--border-radius-full);
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-text-secondary);
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
} 