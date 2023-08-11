import axios from 'axios'
import { useEffect, useState } from 'react'

import { APP_DEFAULTS } from '../app-defaults'

export function useFetch(url: string) {
  const [data, setData] = useState([])
  const [error, setError] = useState<unknown | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await axios.get(`${APP_DEFAULTS.URL}/${url}`)
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return { data, error, loading }
}
