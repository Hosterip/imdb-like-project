import {FC, useState} from 'react';
import {Card, Spin} from "antd";
import {IResults} from "../../pages/Recommendation.tsx";
import {firstLetterCapital} from "../../helpers/firstLetterCapital.ts";
import { fallbackImage } from '../../constants/images.ts';
import styles from './content.module.css'
const {Meta} = Card;

interface ContentCardInterface {
    item: IResults
}
const ContentCard: FC<ContentCardInterface> = ({item}) => {
    const [loading, setLoading] = useState(true)
    const imagePath = item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : fallbackImage
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={
                <>
                    {loading &&
                        <div className={styles.loadingForImage}>
                            <Spin/>
                        </div>
                    }
                    <img
                        alt={'poster'}
                        src={imagePath}
                        onLoad={() => setLoading(false)}
                    />
                </>
            }
        >
            <Meta title={item.title ?? item.name}
                  description={
                <div className={styles.detailsOfMovie}>
                    <span>{(item.release_date ?? item.first_air_date) + " | " + firstLetterCapital(item.media_type)}</span>
                    <span className={styles.rating}>{item.vote_average.toFixed(1)}</span>
                </div>
            }/>
        </Card>

    );
};

export default ContentCard;