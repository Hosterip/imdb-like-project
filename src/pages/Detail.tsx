import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {fetchData} from "../API/fetchDetails.ts";
import ContentDetails from "../components/Details/ContentDetails.tsx";
import LoadingErrorHandler, {IError} from "../components/Loading/LoadingErrorHandler.tsx";

interface genresInterface {
    id: number,
    name: string
}

export interface detailsInterface {
    budget: number,
    genres: genresInterface[]
    homepage: string,
    id: number,
    overview: string,
    vote_average: number
    popularity: number,
    poster_path: string
    release_date?: string,
    first_air_date?: string,
    revenue: number,
    status: string
    title?: string,
    name?: string,
}

const Detail = () => {
    const [details, setDetails] = useState<detailsInterface | undefined>()
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
