import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import DoctorBookingResult from '../../src/components/DoctorBookingResult'
import BookResult from '../../src/models/BookResult'

const bookResult: BookResult = {
  doctor: {
    id: 'some-id-here',
    name: 'John Snow',
    address: {
      line1: "6037 Tonnin de l'Odéon",
      line2: 'Suite 363',
      postalCode: '98950',
      city: 'Port Sébastien',
      country: 'GF'
    }
  },
  createdAt: '2022-10-22 22:33:13',
  date: '2022-10-25 12:30:00'
}

describe('DoctorBookingResult component', () => {
  afterEach(() => {
    cleanup()
  })

  test('Render the component', async () => {
    render(<DoctorBookingResult {...bookResult} />)
  })

  test('Snapshot test', () => {
    const tree = renderer.create(<DoctorBookingResult {...bookResult} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
