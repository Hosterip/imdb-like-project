import {FC} from 'react';
import {Card} from "antd";
import {IResults} from "../../pages/Recommendation.tsx";
import {firstLetterCapital} from "../../helpers/firstLetterCapital.ts";
import { fallbackImage } from '../../constants/images.ts';
import styles from './content.module.css'
import {defaultImagePath} from "../../constants/paths.ts";
const {Meta} = Card;

interface ContentCardInterface {
    item: IResults
}
const ContentCard: FC<ContentCardInterface> = ({item}) => {
    const imagePath = item.poster_path ? defaultImagePath + item.poster_path : fallbackImage
    return (
        <Card
            hoverable
            style={{width: 240}}
            cover={
                <img
                    alt={item.title ?? item.name}
                    src={imagePath}
                />
            }
        >
            <Meta title={item.title ?? item.name}
                  description={
                      <div className={styles.detailsOfMovie}>
                          <span>{(item.release_date ?? item.first_air_date) + " | " + firstLetterCapital(item.media_type)}</span>
                          <span className={styles.rating}>{item.vote_average.toFixed(1)}</span>
                      </div>
                  }
            />
        </Card>
    );
};

export default ContentCard;