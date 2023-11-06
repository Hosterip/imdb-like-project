import {FC} from 'react';
import {Pagination, PaginationProps} from "antd";
import {Link, useNavigate, useParams} from "react-router-dom";
import {IResults} from "../../pages/Recommendation.tsx";
import ContentCard from "./ContentCard.tsx";
import styles from './content.module.css'

interface ContentListInterface {
    results: IResults[]
    total_pages: number
}

const ContentList: FC<ContentListInterface> = ({results, total_pages}) => {
    const navigate = useNavigate()
    const {page} = useParams()

    const onChange: PaginationProps['onChange'] = (page: number) => {
        navigate(`../${page}`, {relative: 'path'})
    }

    return (
        <div className={styles.contentList}>
                <div className={styles.contentListItems}>
                    {results.map((item: IResults) => (
                        <Link key={item.id} to={`/details/${item.media_type}/${item.id}`}>
                            <ContentCard item={item}/>
                        </Link>
                    ))}
                </div>
                <Pagination showQuickJumper current={page ? +page : 1} total={total_pages * 10} onChange={onChange}/>
        </div>
    );
};

export default ContentList;