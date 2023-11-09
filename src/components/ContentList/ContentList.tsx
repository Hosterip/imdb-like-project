import {FC} from 'react';
import {Pagination, PaginationProps} from "antd";
import {Link, useNavigate, useParams} from "react-router-dom";
import {IResults} from "../../shared/interfaces/cardContentInterfaces.ts";
import ContentCard from "./ContentCard.tsx";
import styles from './content.module.css'

interface IContentList {
    results: IResults[]
    total_results: number
}

const ContentList: FC<IContentList> = ({results, total_results}) => {
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
                <Pagination showQuickJumper current={page ? +page : 1} pageSize={20} total={total_results} onChange={onChange}/>
        </div>
    );
};

export default ContentList;