import Head from 'next/head'
import { NextPage } from 'next'

import DoctorList from '../src/components/DoctorList'
import ApplicationLayout from '../src/components/ApplicationLayout/index'
import useDoctors from '../src/hooks/useDoctors'

const Availabilities: NextPage = () => {
  const { doctors, isLoading } = useDoctors()

  return (
    <div>
      <Head>
        <title>Doctors availabilities</title>
      </Head>
      <ApplicationLayout>
        {isLoading ? 'Loading data' : <DoctorList doctors={doctors} />}
      </ApplicationLayout>
    </div>
  )
}

export default Availabilities
