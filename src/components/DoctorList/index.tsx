import { FC, memo, useState } from 'react'

import Doctor from '../../models/Doctor'
import DoctorBooking from '../DoctorBooking'
import DoctorInfo from '../DoctorInfo'

interface DoctorInfoProps {
  doctors: Doctor[]
}

const DoctorList: FC<DoctorInfoProps> = ({ doctors }) => {
  const [bookedDoctor, setBookedDoctor] = useState<Doctor | null>(null)

  return (
    <>
      {bookedDoctor !== null && <DoctorBooking doctor={bookedDoctor} setBookedDoctor={setBookedDoctor} />}
      {doctors.map((doctor) => <DoctorInfo key={doctor.id} doctor={doctor} setBookedDoctor={setBookedDoctor} />)}
    </>
  )
}

export default memo(DoctorList)
