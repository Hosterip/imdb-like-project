import useFetchContent from "../hooks/useFetchContent.ts";
import Search from "../components/Search/Search.tsx";
import LoadingErrorHandler from "../components/Loading";
import ContentList from "../components/ContentList";


const SearchResults = () => {
    const {content, error, loading} = useFetchContent()

    return (
        <>
            {content
                ?
                <div style={{display: 'flex', flexDirection:'column'}}>
                    <Search/>
                    <ContentList results={content.results} total_results={content.total_results}/>
                </div>
                :
                <LoadingErrorHandler error={error} loading={loading}/>
            }
        </>
    );
};

export default SearchResults;