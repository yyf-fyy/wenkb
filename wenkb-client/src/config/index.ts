export const isProd = process.env.NODE_ENV === 'production'
export const baseURL = isProd ? 'http://localhost:6088' : '/api'
export const baseHost = isProd ? 'localhost:6088' : location.host
export const baseOrigin = isProd ? 'http://localhost:6088' : location.origin