import {FC} from "react";
import RecSideMenu from "../components/RecSidemenu/RecSideMenu.tsx";
import ContentList from "../components/ContentList/ContentList.tsx";
import LoadingErrorHandler  from "../components/Loading/LoadingErrorHandler.tsx";
import useFetchContent from "../hooks/useFetchContent.ts";

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
   const {content, type, setType, error, loading} = useFetchContent()

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
