import { RootState } from '../../store/store'

export const selectBookResult = ({ bookResult: { createdAt, date, doctor } }: RootState) => ({ createdAt, date, doctor })
export const selectIsBookResultEdited = ({ bookResult }: RootState) => bookResult.edited
