const isEnabledByFlag = import.meta.env.VITE_ENABLE_MSW === "true";
const isVercelPreview = import.meta.env.VITE_VERCEL_ENV === "preview";

export const isMockingEnabled = isEnabledByFlag || isVercelPreview;

export const apiBaseUrl = isMockingEnabled
  ? "/api"
  : import.meta.env.VITE_API_URL || "/api";
