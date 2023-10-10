import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import DoctorBooking from '../../src/components/DoctorBooking/index'
import Doctor from '../../src/models/Doctor'
import { renderWithStore } from '../../src/helpers/testHelpers'

jest.mock('../../src/helpers/services', () => ({
  fetchAvailabilities: () => [{
    start: '2023-01-05T16:35:52.918Z'
  },
  {
    start: '2023-01-21T06:41:58.114Z'
  },
  {
    start: '2023-01-15T09:14:07.535Z'
  }],
  bookDoctor: () => ({ createdAt: '2023-01-15T09:14:07.535Z' })
}))

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

const mockFunction = jest.fn(() => {})

describe('DoctorBooking component', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('Render the component', async () => {
    renderWithStore(<DoctorBooking doctor={doctor} setBookedDoctor={mockFunction} />)

    screen.debug()
  })

  test('Click on close', async () => {
    const component = await renderWithStore(<DoctorBooking doctor={doctor} setBookedDoctor={mockFunction} />)

    const closeButton = component.getByText('Close')
    await userEvent.click(closeButton)

    expect(mockFunction).toHaveBeenCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
    expect(mockFunction).toHaveBeenCalledWith(null)
  })
})
