const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
}

export default apiConfig