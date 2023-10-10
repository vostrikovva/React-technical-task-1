import { API_URL } from '../config'

const request = async (url: string, options?: RequestInit | undefined) => {
  const result = await fetch(API_URL + url, options)
  const data = await result.json()

  return data
}

export default request
