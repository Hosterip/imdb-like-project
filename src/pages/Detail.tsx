import useFetchDetails from '../hooks/useFetchDetails.ts'
import ContentDetails from "../components/Details/ContentDetails.tsx";
import LoadingErrorHandler from "../components/Loading";

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
