// Calyx Utility Functions
// 컨텐츠 크리에이터 플랫폼을 위한 유틸리티 함수들

import { CONTENT_PLATFORMS, DEFAULTS } from './constants';

// Date & Time Utilities
export const dateUtils = {
    /**
     * 날짜를 YYYY-MM-DD 형식으로 포맷팅
     */
    formatDate: (date: Date): string => {
        return date.toISOString().split('T')[0];
    },

    /**
     * 날짜를 한국어 형식으로 포맷팅 (예: 2024년 1월 15일)
     */
    formatKoreanDate: (date: Date): string => {
        return new Intl.DateTimeFormat('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    },

    /**
     * 날짜를 상대적 시간으로 표시 (예: 3일 전, 1시간 전)
     */
    formatRelativeTime: (date: Date): string => {
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInMinutes < 1) return '방금 전';
        if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
        if (diffInHours < 24) return `${diffInHours}시간 전`;
        if (diffInDays < 7) return `${diffInDays}일 전`;
        
        return dateUtils.formatKoreanDate(date);
    },

    /**
     * 주의 시작일과 끝일 계산
     */
    getWeekRange: (date: Date): { start: Date; end: Date } => {
        const start = new Date(date);
        start.setDate(date.getDate() - date.getDay());
        start.setHours(0, 0, 0, 0);

        const end = new Date(start);
        end.setDate(start.getDate() + 6);
        end.setHours(23, 59, 59, 999);

        return { start, end };
    },

    /**
     * 두 날짜 사이의 일수 계산
     */
    getDaysBetween: (startDate: Date, endDate: Date): number => {
        const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    },
};

// Hashtag Utilities
export const hashtagUtils = {
    /**
     * 텍스트에서 해시태그 추출
     */
    extractHashtags: (text: string): string[] => {
        const hashtagRegex = /#[\w가-힣]+/g;
        return text.match(hashtagRegex) || [];
    },

    /**
     * 해시태그 정규화 (# 제거, 소문자 변환)
     */
    normalizeHashtag: (hashtag: string): string => {
        return hashtag.replace('#', '').toLowerCase();
    },

    /**
     * 해시태그 유효성 검사
     */
    validateHashtag: (hashtag: string): boolean => {
        const normalized = hashtagUtils.normalizeHashtag(hashtag);
        const minLength = DEFAULTS.HASHTAG.MIN_LENGTH;
        const maxLength = DEFAULTS.HASHTAG.MAX_LENGTH;
        
        return normalized.length >= minLength && 
               normalized.length <= maxLength &&
               /^[a-zA-Z0-9가-힣_]+$/.test(normalized);
    },

    /**
     * 플랫폼별 해시태그 제한 확인
     */
    checkPlatformLimit: (platform: keyof typeof CONTENT_PLATFORMS, hashtags: string[]): boolean => {
        const limit = CONTENT_PLATFORMS[platform].hashtagLimit;
        return hashtags.length <= limit;
    },

    /**
     * 해시태그 중복 제거
     */
    removeDuplicates: (hashtags: string[]): string[] => {
        const normalized = hashtags.map(h => hashtagUtils.normalizeHashtag(h));
        const unique = [...new Set(normalized)];
        return unique.map(h => `#${h}`);
    },
};

// Title Analysis Utilities
export const titleUtils = {
    /**
     * 제목 길이 분석
     */
    analyzeLength: (title: string): {
        length: number;
        isOptimal: boolean;
        isTooShort: boolean;
        isTooLong: boolean;
    } => {
        const length = title.length;
        const { MIN_LENGTH, MAX_LENGTH, OPTIMAL_LENGTH } = DEFAULTS.TITLE;
        
        return {
            length,
            isOptimal: length >= OPTIMAL_LENGTH - 5 && length <= OPTIMAL_LENGTH + 5,
            isTooShort: length < MIN_LENGTH,
            isTooLong: length > MAX_LENGTH,
        };
    },

    /**
     * 제목에 감정적 키워드 포함 여부 확인
     */
    hasEmotionalKeywords: (title: string): boolean => {
        const emotionalKeywords = [
            '놀라운', '충격', '완벽한', '최고의', '최악의', '실패', '성공',
            'amazing', 'shocking', 'perfect', 'best', 'worst', 'fail', 'success'
        ];
        
        return emotionalKeywords.some(keyword => 
            title.toLowerCase().includes(keyword.toLowerCase())
        );
    },

    /**
     * 제목에 숫자 포함 여부 확인
     */
    hasNumbers: (title: string): boolean => {
        return /\d/.test(title);
    },

    /**
     * 제목 점수 계산 (0-100)
     */
    calculateScore: (title: string): number => {
        const lengthAnalysis = titleUtils.analyzeLength(title);
        let score = 0;

        // 길이 점수 (40점)
        if (lengthAnalysis.isOptimal) score += 40;
        else if (!lengthAnalysis.isTooShort && !lengthAnalysis.isTooLong) score += 30;
        else if (lengthAnalysis.isTooShort) score += 10;
        else score += 5;

        // 감정적 키워드 점수 (30점)
        if (titleUtils.hasEmotionalKeywords(title)) score += 30;

        // 숫자 포함 점수 (20점)
        if (titleUtils.hasNumbers(title)) score += 20;

        // 해시태그 포함 점수 (10점)
        if (hashtagUtils.extractHashtags(title).length > 0) score += 10;

        return Math.min(score, 100);
    },
};

// Validation Utilities
export const validationUtils = {
    /**
     * 이메일 유효성 검사
     */
    isValidEmail: (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    /**
     * 비밀번호 강도 검사
     */
    validatePassword: (password: string): {
        isValid: boolean;
        strength: 'weak' | 'medium' | 'strong';
        issues: string[];
    } => {
        const issues: string[] = [];
        let strength: 'weak' | 'medium' | 'strong' = 'weak';

        if (password.length < 8) issues.push('최소 8자 이상이어야 합니다.');
        if (!/[A-Z]/.test(password)) issues.push('대문자를 포함해야 합니다.');
        if (!/[a-z]/.test(password)) issues.push('소문자를 포함해야 합니다.');
        if (!/\d/.test(password)) issues.push('숫자를 포함해야 합니다.');
        if (!/[!@#$%^&*]/.test(password)) issues.push('특수문자를 포함해야 합니다.');

        if (issues.length === 0) strength = 'strong';
        else if (issues.length <= 2) strength = 'medium';

        return {
            isValid: issues.length === 0,
            strength,
            issues,
        };
    },

    /**
     * URL 유효성 검사
     */
    isValidUrl: (url: string): boolean => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },
};

// String Utilities
export const stringUtils = {
    /**
     * 텍스트 길이 제한 및 말줄임표 추가
     */
    truncate: (text: string, maxLength: number): string => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength - 3) + '...';
    },

    /**
     * 카멜케이스를 케밥케이스로 변환
     */
    camelToKebab: (str: string): string => {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    },

    /**
     * 케밥케이스를 카멜케이스로 변환
     */
    kebabToCamel: (str: string): string => {
        return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    },

    /**
     * 첫 글자 대문자로 변환
     */
    capitalize: (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
};

// Array & Object Utilities
export const arrayUtils = {
    /**
     * 배열을 청크로 분할
     */
    chunk: <T>(array: T[], size: number): T[][] => {
        const chunks: T[][] = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    },

    /**
     * 배열에서 중복 제거
     */
    unique: <T>(array: T[]): T[] => {
        return [...new Set(array)];
    },

    /**
     * 배열을 랜덤하게 섞기
     */
    shuffle: <T>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
};

// Storage Utilities
export const storageUtils = {
    /**
     * 로컬 스토리지에 안전하게 저장
     */
    setItem: (key: string, value: any): void => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    },

    /**
     * 로컬 스토리지에서 안전하게 가져오기
     */
    getItem: <T>(key: string, defaultValue?: T): T | null => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue || null;
        } catch (error) {
            console.error('Failed to read from localStorage:', error);
            return defaultValue || null;
        }
    },

    /**
     * 로컬 스토리지에서 항목 제거
     */
    removeItem: (key: string): void => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Failed to remove from localStorage:', error);
        }
    },
};

// Error Handling Utilities
export const errorUtils = {
    /**
     * 에러 메시지 정규화
     */
    normalizeError: (error: unknown): string => {
        if (error instanceof Error) return error.message;
        if (typeof error === 'string') return error;
        return '알 수 없는 오류가 발생했습니다.';
    },

    /**
     * 네트워크 에러인지 확인
     */
    isNetworkError: (error: unknown): boolean => {
        const message = errorUtils.normalizeError(error).toLowerCase();
        return message.includes('network') || 
               message.includes('fetch') || 
               message.includes('timeout');
    },
};

// Export all utilities
export default {
    dateUtils,
    hashtagUtils,
    titleUtils,
    validationUtils,
    stringUtils,
    arrayUtils,
    storageUtils,
    errorUtils,
};
