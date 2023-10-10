import { render, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom'

import ApplicationLayout from '../../src/components/ApplicationLayout'
import DoctorInfo from '../../src/components/DoctorInfo'
import Doctor from '../../src/models/Doctor'

describe('ApplicationLayout component', () => {
  afterEach(() => {
    cleanup()
  })

  test('Render the component without children', async () => {
    const component = render(<ApplicationLayout />)

    expect(await component.findByText('Doctor booking service')).toBeInTheDocument()
  })

  test('Render the component with DoctorInfo', async () => {
    const mockFunction = jest.fn(() => {})

    const doctor: Doctor = {
      id: 'some-id-here',
      name: 'John Snow'
    }

    const component = render(<ApplicationLayout>
        <DoctorInfo doctor={doctor} setBookedDoctor={mockFunction} />
    </ApplicationLayout>)

    expect(await component.findByText('Doctor booking service')).toBeInTheDocument()
    expect(await component.findByText(doctor.name)).toBeInTheDocument()
    expect(mockFunction).not.toHaveBeenCalled()
  })

  test('Snapshot test', () => {
    const tree = renderer.create(<ApplicationLayout />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
