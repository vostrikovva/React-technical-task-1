import { FC } from 'react'

import styles from './styles.module.css'

interface ApplicationLayoutProps {
  children?: React.ReactNode
}

const ApplicationLayout: FC<ApplicationLayoutProps> = ({ children }) => {
  return (
    <>
        <div className='p-3'>
            <h1>
                Doctor booking service
            </h1>
            <hr />
        </div>
        <div className={styles.content}>
            {children}
        </div>
    </>
  )
}

export default ApplicationLayout
