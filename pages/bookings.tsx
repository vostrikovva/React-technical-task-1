import Head from 'next/head'
import { NextPage } from 'next'

import { useAppSelector } from '../src/hooks/useAppSelector'
import { selectBookResult, selectIsBookResultEdited } from '../src/ducks/bookingResult/selectors'
import DoctorBookingResult from '../src/components/DoctorBookingResult'
import ApplicationLayout from '../src/components/ApplicationLayout'

const Bookings: NextPage = () => {
  const result = useAppSelector(selectBookResult)
  const isEdited = useAppSelector(selectIsBookResultEdited)

  return (
      <div>
        <Head>
          <title>Booking Result</title>
        </Head>
        <ApplicationLayout>
          {isEdited ? <DoctorBookingResult {...result} /> : <>You haven&apos;t made an appointment with the doctor yet</>}
        </ApplicationLayout>
      </div>
  )
}

export default Bookings
