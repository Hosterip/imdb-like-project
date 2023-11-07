import ContentList from "../components/ContentList/ContentList.tsx";
import LoadingErrorHandler from "../components/Loading/LoadingErrorHandler.tsx";
import useFetchContent from "../hooks/useFetchContent.ts";


const SearchResults = () => {
    const {content, error, loading} = useFetchContent()

    return (
        <>
            {content
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