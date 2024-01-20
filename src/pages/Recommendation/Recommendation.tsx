import {FC} from "react";
import useFetchContent from "../../hooks/useFetchContent.ts";
import Search from "../../components/Search/Search.tsx";
import RecSideMenu from "../../components/RecSidemenu";
import styles from './recommendation.module.css'
import ContentList from "../../components/ContentList";
import LoadingErrorHandler from "../../components/Loading";

const Recommendation: FC = () => {
    const {content, type, setType, error, loading} = useFetchContent()
    if (content)
        return (
            <div className={styles.recommendation}>
                <RecSideMenu type={type} setType={setType}/>
                <div>
                    <Search/>
                    <ContentList results={content.results} total_results={content.total_results}/>
                </div>
            </div>
        )
    return (
        <LoadingErrorHandler loading={loading} error={error}/>
    );
};

export default Recommendation;
