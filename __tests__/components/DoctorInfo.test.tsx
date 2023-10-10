import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import DoctorInfo from '../../src/components/DoctorInfo'
import Doctor from '../../src/models/Doctor'

const mockFunction = jest.fn(() => {})

const doctor: Doctor = {
  id: 'some-id-here',
  name: 'John Snow',
  address: {
    line1: "6037 Tonnin de l'Odéon",
    line2: 'Suite 363',
    postalCode: '98950',
    city: 'Port Sébastien',
    country: 'GF'
  }
}

describe('DoctorInfo component', () => {
  afterEach(() => {
    cleanup()
  })

  test('Render the component', async () => {
    const component = render(<DoctorInfo doctor={doctor} setBookedDoctor={mockFunction} />)

    expect(await component.findByText(doctor.name)).toBeInTheDocument()
  })

  test('Book a doctor through component', async () => {
    const component = render(<DoctorInfo doctor={doctor} setBookedDoctor={mockFunction} />)
    const button = component.getByText('Booking')
    await userEvent.click(button)

    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith(doctor)
  })
})
