import API_ROUTES from '../constants/APIRoutes'
import Availability from '../models/Availability'
import Doctor, { BookDoctorBody, BookDoctorResponse } from '../models/Doctor'
import request from './request'

const services = {
  fetchDoctors: async () => await request(API_ROUTES.doctors) as Doctor[],
  fetchAvailabilities: async (doctorId: string) => await request(`${API_ROUTES.availabilities}?doctorId=${doctorId}`) as Availability[],
  bookDoctor: async (body: BookDoctorBody) => await request(API_ROUTES.bookDoctor, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  }) as BookDoctorResponse
}

export default services
