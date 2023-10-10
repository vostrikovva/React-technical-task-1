import Address from './Address'

export default interface Doctor {
  id: string
  name: string
  address?: Address
}

export interface BookDoctorBody {
  doctorId: string
  date: string
}

export interface BookDoctorResponse {
  doctorId: string
  date: string
  createdAt: string
  updatedAt: string
  id: string
}
