import useFetchDetails from '../hooks/useFetchDetails.ts'
import LoadingErrorHandler from "../components/Loading";
import ContentDetails from "../components/Details";

const Detail = () => {
  const { details, loading, error } = useFetchDetails()

  return (
    <div className={'centralize'}>
        {details && <ContentDetails details={details}/>}
        <LoadingErrorHandler error={error} loading={loading}/>
    </div>
  )
}

export default Detail
