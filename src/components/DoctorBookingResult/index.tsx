import { FC } from 'react'
import { Card } from 'react-bootstrap'
import moment from 'moment'

import styles from './styles.module.css'
import BookResult from '../../models/BookResult'
import DateFormats from '../../constants/DateFormats'

const DoctorBookingResult: FC<BookResult> = ({ doctor, createdAt, date }) => {
  const { name, address } = doctor

  return (
    <Card className={styles.root}>
        <Card.Body>
        <Card.Title className="mb-3">You have an appointment with {name} on {moment(date).format(DateFormats.doctorBooking)}</Card.Title>
        {address &&
            <div className="row mb-10">
            <div className="col-auto d-flex align-items-start" >
                <Card.Subtitle>Address</Card.Subtitle>
            </div>
            <div className="col">
                <Card.Text className="mb-0">{`${address.country}, ${address.city}`}</Card.Text>
                <Card.Text className="mb-0">Postal Code: {address.postalCode}</Card.Text>
                <Card.Text className="mb-0">Address line 1: {address.line1}</Card.Text>
                <Card.Text className="mb-0">Address line 2: {address.line2}</Card.Text>
            </div>
            </div>
        }
        <div className="mt-2 d-flex justify-content-end">
            Created at: {moment(createdAt).format(DateFormats.doctorBooking)}
        </div>
        </Card.Body>
    </Card>
  )
}

export default DoctorBookingResult
