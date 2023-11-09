import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchData} from "../API/fetchDetails.ts";
import {IDetails} from '../shared/interfaces/pageContentInterfaces.ts'
import ContentDetails from "../components/Details/ContentDetails.tsx";
import LoadingErrorHandler, {IError} from "../components/Loading/LoadingErrorHandler.tsx";



const Detail = () => {
    const [details, setDetails] = useState<IDetails | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<IError>({name: 'Details was not found', isError: false})
    const {type, id} = useParams()
    useEffect(() => {
        if (type && id) {
            const dataHandler = async () => {
                const data = await fetchData(type, id)
                if (data?.genres) {
                    setDetails(data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    setError({...error, isError: true})
                }
            }
            dataHandler()
        }
    }, [type, id]);
    console.log(details)

    return (
        <div className={'centralize'}>
            {details && <ContentDetails details={details}/>}
            <LoadingErrorHandler loading={loading} error={error} />
        </div>
    );
};

export default Detail;
