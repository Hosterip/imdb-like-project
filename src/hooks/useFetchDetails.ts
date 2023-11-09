import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../API/fetchDetails'
import { IError } from '../components/Loading/LoadingErrorHandler'
import { IDetails } from '../shared/interfaces/pageContentInterfaces'

export default function useFetchDetails() {
  const [details, setDetails] = useState<IDetails | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<IError>({
    name: 'Details was not found',
    isError: false,
  })
  const { type, id } = useParams()
  useEffect(() => {
    if (type && id) {
      const dataHandler = async () => {
        const data = await fetchData(type, id)
        if (data?.genres) {
          setDetails(data)
          setLoading(false)
        } else {
          setLoading(false)
          setError({ ...error, isError: true })
        }
      }
      dataHandler()
    }
  }, [type, id])
  return { details, loading, error }
}
