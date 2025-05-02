// @ts-nocheck
export const IS_DEV = true //process.env.EXPO_PUBLIC_ENV === 'development';
export const IS_PROD = process.env.EXPO_PUBLIC_ENV === 'production';
export const IS_PREVIEW = process.env.EXPO_PUBLIC_ENV === 'preview';

export const SCREENS = {
    OVERVIEW: 'Overview',
    NOTIFICATIONS: 'Notifications',
    INSIGHTS: 'Insights',
    ENTRIES: 'Entries',
    ADD: 'Add',
    //
    SNAP_REDIRECT: 'SnapRedirect',
    REMINDERS: 'Reminders',
    SETTINGS: 'Settings',
    EDIT_REMINDER: 'EditReminder',
    GOALS: 'Goals',
    EDIT_GOAL: 'EditGoal',
    MEAL_FILTERS: 'MealFilters',
    MEAL_SEARCH: 'MealSearch',
    MEAL_DETAILS: 'MealDetails',
    MEAL_REVIEW: 'MealReview',
    EDIT_MEAL: 'EditMeal',
    STREAKS: 'Streaks',
} as const;

export type ScreensType = string;

export const STACKS = {
    MAIN_STACK: 'MainStack',
    TABS_STACK: 'TabsStack',
    ADD_STACK: 'AddStack',
    
} as const;

export type StackType = string;

export const dropShadow = {
    shadowColor: '#00000040',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,   
}
