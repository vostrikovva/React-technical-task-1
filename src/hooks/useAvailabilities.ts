import { useState, useEffect } from 'react'

import services from '../helpers/services'
import Availability from '../models/Availability'

const useAvailabilities = (doctorId: string) => {
  const [availabilities, setAvailabilities] = useState<Availability[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const asyncFunc = async () => {
      setIsLoading(true)
      const result = await services.fetchAvailabilities(doctorId)
      setIsLoading(false)
      setAvailabilities(result)
    }

    asyncFunc()
  }, [doctorId])

  return { availabilities, isLoading }
}

export default useAvailabilities
