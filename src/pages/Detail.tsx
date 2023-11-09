import ContentDetails from '../components/Details/ContentDetails.tsx'
import LoadingErrorHandler from '../components/Loading/LoadingErrorHandler.tsx'
import useFetchDetails from '../hooks/useFetchDetails.ts'

const Detail = () => {
  const { details, loading, error } = useFetchDetails()

  return (
    <div className={'centralize'}>
      {details && <ContentDetails details={details} />}
      <LoadingErrorHandler loading={loading} error={error} />
    </div>
  )
}

export default Detail
