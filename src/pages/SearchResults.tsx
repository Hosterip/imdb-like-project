import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchContent} from "../API/fetchContent.ts";
import {IContent, IResults} from "./Recommendation.tsx";
import ContentList from "../components/ContentList/ContentList.tsx";
import LoadingErrorHandler, {IError} from "../components/Loading/LoadingErrorHandler.tsx";

const mockContent = {
    page: 1,
    results: [],
    total_pages: 500,
    total_results: 10000
}

const SearchResults = () => {
    const [content, setContent] = useState<IContent>(mockContent)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<IError>({name: 'No results :(', isError: false})
    const {query, page} = useParams()

    console.log(query, page)

    useEffect(() => {
        const fetchData = async () => {
            let data = await fetchContent('search', 'multi', page, query?.toLowerCase())
            if (data) {
                setLoading(false)
                if (!data.total_results) {
                    setError({...error, isError: true})
                    return
                }

                data.results = data.results.filter((item: IResults) => item.media_type !== 'person')
                setContent(data)
            }
        }
        fetchData()
    }, [page])
    console.log(content.total_results)
    return (
        <>
            {content.results.length
                ?
                <div style={{display: 'flex'}}>
                    <ContentList results={content.results} total_pages={content.total_pages}/>
                </div>
                :
                <LoadingErrorHandler error={error} loading={loading}/>
            }
        </>
    );
};

export default SearchResults;