import { render, cleanup } from '@testing-library/react'
import rerender from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'

import Doctor from '../../src/models/Doctor'
import DoctorList from '../../src/components/DoctorList'
import { renderWithStore } from '../../src/helpers/testHelpers'

const doctors: Doctor[] = [{
  id: '957dc48d-4691-47e7-b1fe-82c91b99d3b2',
  name: 'Dr. Hortense Benoit',
  address: {
    line1: '551 Élisée de la Bûcherie',
    line2: 'Suite 975',
    postalCode: '75830',
    city: 'Le gallhaven',
    country: 'GU'
  }
},
{
  id: 'b76aadc6-bc92-4400-a75a-8c3506353779',
  name: 'Dr. Abdonie Adam',
  address: {
    line1: '050 Garnier de la Paix',
    line2: 'Suite 124',
    postalCode: '44493',
    city: 'Lake Pénélope',
    country: 'PA'
  }
}]

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

describe('DoctorList component', () => {
  afterEach(() => {
    cleanup()
  })

  test('Render the component', async () => {
    const component = render(<DoctorList doctors={doctors} />)

    expect(await component.findByText(doctors[0].name)).toBeInTheDocument()
  })

  test('Snapshot test', () => {
    const tree = rerender.create(<DoctorList doctors={doctors} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Test behaviour after booking clicking', async () => {
    const component = renderWithStore(<DoctorList doctors={doctors} />)

    const firstRender = component.asFragment()
    const button = component.getAllByText('Booking')
    await userEvent.click(button[1])

    expect(await component.findByText('Booking the doctor Dr. Abdonie Adam')).toBeInTheDocument()
    expect(firstRender).not.toBe(component.asFragment())
  })
})
