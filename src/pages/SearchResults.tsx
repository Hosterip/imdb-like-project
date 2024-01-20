import useFetchContent from "../hooks/useFetchContent.ts";
import Search from "../components/Search/Search.tsx";
import ContentList from "../components/ContentList";
import LoadingErrorHandler from "../components/Loading";


const SearchResults = () => {
    const {content, error, loading} = useFetchContent()

    if(content)
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Search/>
                <ContentList results={content!.results} total_results={content!.total_results}/>
            </div>
        )


    return (
        <LoadingErrorHandler error={error} loading={loading}/>
    );
};

export default SearchResults;