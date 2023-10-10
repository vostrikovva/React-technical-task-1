import { FC, memo, useCallback } from 'react'
import { Card, Button } from 'react-bootstrap'
import clsx from 'clsx'

import styles from './styles.module.css'
import Doctor from '../../models/Doctor'

interface DoctorInfoProps {
  doctor: Doctor
  setBookedDoctor: (doctor: Doctor | null) => void
}

const DoctorInfo: FC<DoctorInfoProps> = ({ doctor, setBookedDoctor }) => {
  const { name, address } = doctor

  const handleOnClick = useCallback(() => {
    setBookedDoctor(doctor)
  }, [setBookedDoctor, doctor])

  return (
    <Card className={clsx(styles.root, 'm-2')}>
      <Card.Body>
        <Card.Title className="mb-3">{name}</Card.Title>
        {address &&
          <div className="row mb-10">
            <div className="col-auto d-flex align-items-center" >
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
            <Button variant='primary' onClick={handleOnClick}>Booking</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default memo(DoctorInfo)
