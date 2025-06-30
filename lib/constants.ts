// Calyx Application Constants
// 컨텐츠 크리에이터 플랫폼을 위한 상수 정의

// App Metadata
export const APP_CONFIG = {
    name: 'Calyx',
    version: '1.0.0',
    description: 'AI-powered content creator platform',
    author: 'Calyx Team',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
    // Authentication
    auth: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        refresh: '/api/auth/refresh',
        google: '/api/auth/google',
    },
    
    // Content Management
    content: {
        calendar: '/api/content/calendar',
        schedule: '/api/content/schedule',
        history: '/api/content/history',
    },
    
    // AI Services
    ai: {
        hashtag: '/api/ai/hashtag',
        titleAnalyzer: '/api/ai/title-analyzer',
        contentSuggestion: '/api/ai/suggestion',
    },
    
    // User Management
    user: {
        profile: '/api/user/profile',
        settings: '/api/user/settings',
        preferences: '/api/user/preferences',
    },
    
    // Feedback
    feedback: '/api/feedback',
} as const;

// Content Platforms
export const CONTENT_PLATFORMS = {
    YOUTUBE: {
        name: 'YouTube',
        icon: 'youtube',
        color: '#FF0000',
        maxTitleLength: 100,
        maxDescriptionLength: 5000,
        hashtagLimit: 15,
    },
    INSTAGRAM: {
        name: 'Instagram',
        icon: 'instagram',
        color: '#E4405F',
        maxCaptionLength: 2200,
        hashtagLimit: 30,
        storyDuration: 24, // hours
    },
    TIKTOK: {
        name: 'TikTok',
        icon: 'tiktok',
        color: '#000000',
        maxCaptionLength: 2200,
        hashtagLimit: 20,
        videoDuration: 60, // seconds
    },
    BLOG: {
        name: 'Blog',
        icon: 'blog',
        color: '#1E40AF',
        maxTitleLength: 60,
        maxDescriptionLength: 160,
        hashtagLimit: 10,
    },
} as const;

// Pagination
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 10,
    MAX_PAGE_SIZE: 50,
    CALENDAR_VIEW_SIZE: 7, // days
    HISTORY_VIEW_SIZE: 20,
} as const;

// Time Constants
export const TIME_CONSTANTS = {
    // Cache durations
    CACHE_DURATION: {
        SHORT: 5 * 60 * 1000, // 5 minutes
        MEDIUM: 30 * 60 * 1000, // 30 minutes
        LONG: 24 * 60 * 60 * 1000, // 24 hours
    },
    
    // Session
    SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
    
    // Rate limiting
    RATE_LIMIT: {
        HASHTAG_GENERATION: 10, // requests per minute
        TITLE_ANALYSIS: 20, // requests per minute
    },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
    AUTH: {
        UNAUTHORIZED: '로그인이 필요합니다.',
        FORBIDDEN: '접근 권한이 없습니다.',
        INVALID_TOKEN: '유효하지 않은 토큰입니다.',
        SESSION_EXPIRED: '세션이 만료되었습니다.',
    },
    API: {
        NETWORK_ERROR: '네트워크 오류가 발생했습니다.',
        TIMEOUT: '요청 시간이 초과되었습니다.',
        SERVER_ERROR: '서버 오류가 발생했습니다.',
        NOT_FOUND: '요청한 리소스를 찾을 수 없습니다.',
    },
    VALIDATION: {
        REQUIRED_FIELD: '필수 입력 항목입니다.',
        INVALID_FORMAT: '올바르지 않은 형식입니다.',
        TOO_LONG: '입력 길이가 너무 깁니다.',
        TOO_SHORT: '입력 길이가 너무 짧습니다.',
    },
    AI: {
        GENERATION_FAILED: 'AI 생성에 실패했습니다.',
        QUOTA_EXCEEDED: 'AI 사용량을 초과했습니다.',
        INVALID_INPUT: '올바르지 않은 입력입니다.',
    },
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
    AUTH_TOKEN: 'calyx_auth_token',
    REFRESH_TOKEN: 'calyx_refresh_token',
    USER_PREFERENCES: 'calyx_user_preferences',
    THEME_MODE: 'calyx_theme_mode',
    LANGUAGE: 'calyx_language',
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
    AI_HASHTAG_GENERATION: true,
    AI_TITLE_ANALYSIS: true,
    CALENDAR_INTEGRATION: true,
    GOOGLE_OAUTH: true,
    FEEDBACK_SYSTEM: true,
} as const;

// Default Values
export const DEFAULTS = {
    CALENDAR: {
        VIEW_MODE: 'week',
        START_DATE: new Date(),
        WORKING_HOURS: {
            start: 9,
            end: 18,
        },
    },
    HASHTAG: {
        MAX_COUNT: 10,
        MIN_LENGTH: 2,
        MAX_LENGTH: 20,
    },
    TITLE: {
        MIN_LENGTH: 10,
        MAX_LENGTH: 60,
        OPTIMAL_LENGTH: 30,
    },
} as const;

export type PlatformType = keyof typeof CONTENT_PLATFORMS;
export type ApiEndpoint = typeof API_ENDPOINTS;
export type ErrorMessage = typeof ERROR_MESSAGES;
