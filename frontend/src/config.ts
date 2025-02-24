const baseURL = import.meta.env.NODE_ENV === 'production' ? '' : 'http://localhost:9000'

export const config = {
  URL_API_PRIVATE: `${baseURL}/api`,
  URL_API_PUBLIC: `${baseURL}/api/public`,
  URL_STATIC: `${baseURL}/static`,
  AUTH0_DOMAIN: import.meta.env.VITE_APP_AUTH0_DOMAIN || '',
  AUTH0_CLIENT_ID: import.meta.env.VITE_APP_AUTH0_CLIENT_ID || '',
  AUTH0_AUDIENCE: import.meta.env.VITE_APP_AUTH0_AUDIENCE || '',
}