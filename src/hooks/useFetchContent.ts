import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IContent, IResults} from "../pages/Recommendation.tsx";
import {IError} from "../components/Loading/LoadingErrorHandler.tsx";
import {fetchContent} from "../API/fetchContent.ts";

type whichType = 'search' | 'trending'

const useFetchContent = () => {
    const {query, page} = useParams()
    const [type, setType] = useState('all')
    const [content, setContent] = useState<IContent | undefined>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<IError>({
        name: query ? 'No results were found' : 'Error have occurred',
        isError: false
    })

    useEffect(() => {
        let which: whichType = query ? 'search' : 'trending'
        let typeForFetch = query ? 'multi' : type
        const fetchData = async () => {
            let data = await fetchContent(which, typeForFetch, page, query?.toLowerCase() || undefined)
            if (data) {
                setLoading(false)
                if (!data.total_results) {
                    setError({...error, isError: true})
                    return
                }
                if (query) {
                    data.results = data.results.filter((item: IResults) => item.media_type !== 'person')
                }
                setContent(data)
            }
        }
        fetchData()
    }, [page, type])
    return {
        content,
        loading,
        error,
        type,
        setType
    }
};

export default useFetchContent;