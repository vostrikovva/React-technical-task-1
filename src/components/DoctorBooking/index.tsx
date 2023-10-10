import { FC, useCallback, useMemo, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import moment from 'moment'
import Router from 'next/router'

import Doctor, { BookDoctorBody } from '../../models/Doctor'
import DateFormats from '../../constants/DateFormats'
import AppRoutes from '../../constants/AppRoutes'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { bookingResultActions } from '../../ducks/bookingResult'
import services from '../../helpers/services'
import useAvailabilities from '../../hooks/useAvailabilities'

interface DoctorBookingProps {
  doctor: Doctor
  setBookedDoctor: (doctor: Doctor | null) => void
}

const DoctorBooking: FC<DoctorBookingProps> = ({ doctor, setBookedDoctor }) => {
  const { availabilities, isLoading } = useAvailabilities(doctor.id)
  const [selectedValue, setSelectedValue] = useState('-1')
  const dispatch = useAppDispatch()

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value)
  }, [setSelectedValue])

  const handleOnClose = useCallback(() => {
    setBookedDoctor(null)
  }, [setBookedDoctor])

  const handleOnSave = useCallback(async () => {
    try {
      const body: BookDoctorBody = {
        doctorId: doctor.id,
        date: selectedValue
      }

      const { createdAt } = await services.bookDoctor(body)

      const preparedData = {
        doctor,
        createdAt,
        date: body.date
      }

      dispatch(bookingResultActions.onBooked(preparedData))
      Router.push(AppRoutes.bookingDoctorResult, undefined, { shallow: false })
    } catch (error) {
      console.error(error)
    }
  }, [dispatch, doctor, selectedValue])

  const options = useMemo(() => {
    return (
      <>
        <option value="-1">Select date</option>
        {availabilities.map((availability) => (
          <option key={availability.start} value={moment(availability.start).format(DateFormats.doctorBooking)}>
            {moment(availability.start).format(DateFormats.doctorBooking)}
          </option>)
        )}
      </>
    )
  }, [availabilities])

  return (
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>Booking the doctor {doctor.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {isLoading
              ? 'Loading... Please, stand by'
              : <>
                {availabilities.length === 0
                  ? 'Sorry, the doctor is busy'
                  : <Form.Select role="select_date" value={selectedValue} onChange={handleOnChange}>{options}</Form.Select>
                }
             </>
            }
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" className="mr-2" onClick={handleOnClose}>Close</Button>
            <Button variant="primary" onClick={handleOnSave} disabled={selectedValue === '-1'}>Save changes</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DoctorBooking
