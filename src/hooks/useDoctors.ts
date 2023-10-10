import { useState, useEffect } from 'react'

import Doctor from '../models/Doctor'
import services from '../helpers/services'

const useDoctors = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const asyncFunc = async () => {
      setIsLoading(true)
      const doctors = await services.fetchDoctors()
      setIsLoading(false)
      setDoctors(doctors)
    }

    asyncFunc()
  }, [])

  return { doctors, isLoading }
}

export default useDoctors
