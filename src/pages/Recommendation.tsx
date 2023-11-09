import {FC} from "react";
import RecSideMenu from "../components/RecSidemenu/RecSideMenu.tsx";
import ContentList from "../components/ContentList/ContentList.tsx";
import LoadingErrorHandler from "../components/Loading/LoadingErrorHandler.tsx";
import useFetchContent from "../hooks/useFetchContent.ts";

const Recommendation: FC = () => {
    const {content, type, setType, error, loading} = useFetchContent()
    console.log(content)
    return (
        <>
            {content
                ?
                <div style={{display: 'flex'}}>
                    <RecSideMenu type={type} setType={setType}/>
                    <ContentList results={content.results} total_results={content.total_results}/>
                </div>
                :
                <LoadingErrorHandler loading={loading} error={error}/>
            }
        </>


    );
};

export default Recommendation;
