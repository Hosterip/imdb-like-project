import {FC, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import RecSideMenu from "../components/RecSidemenu/RecSideMenu.tsx";
import {fetchContent} from "../API/fetchContent.ts";
import ContentList from "../components/ContentList/ContentList.tsx";
import LoadingErrorHandler, {IError} from "../components/Loading/LoadingErrorHandler.tsx";

export interface IResults {
    adult: boolean,
    backdrop_path: string,
    id: number,
    vote_average: number
    name?: string
    title?: string
    original_language: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    first_air_date?: string,
    release_date?: string,
}

export interface IContent {
    page?: number
    results: IResults[]
    total_results: number
    total_pages: number
}

const Recommendation: FC = () => {
    const [content, setContent] = useState<IContent | undefined>()
    const [error, setError] = useState<IError>({name: 'Recommendation Error', isError: false})
    const [loading, setLoading] = useState<boolean>(true)
    const [type, setType] = useState('all')
    const {page} = useParams()


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchContent('trending', type, page)
            if (data?.results) {
                setContent(data)
                setLoading(false)
            } else {
                setLoading(false)
                setError({...error, isError: true})
            }
        }
        fetchData()
    }, [page, type])

    return (
        <>
            {content
            ?
                <div style={{display: 'flex'}}>
                    <RecSideMenu type={type} setType={setType}/>
                    <ContentList results={content.results} total_pages={content.total_pages}/>
                </div>
                :
                <LoadingErrorHandler loading={loading} error={error} />
            }
        </>


    );
};

export default Recommendation;
