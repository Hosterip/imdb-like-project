import {FC} from 'react';
import {firstLetterCapital} from "../../helpers/firstLetterCapital.ts";
import { fallbackImage } from '../../shared/constants/images.ts';
import styles from './content.module.css'
import {defaultImagePath} from "../../shared/constants/paths.ts";
import {IResults} from "../../shared/interfaces/cardContentInterfaces.ts";

interface ContentCardInterface {
    item: IResults
}
const ContentCard: FC<ContentCardInterface> = ({item}) => {
    const imagePath = item.poster_path ? defaultImagePath + item.poster_path : fallbackImage
    return (
        <div className={styles.card}>
            <img
                className={styles.img}
                alt={'poster'}
                src={imagePath}
            />
            <div className={styles.cardContent}>
                <h2 className={styles.cutText}>{item.title ?? item.name}</h2>
                <div className={styles.detailsOfMovie}>
                    <span>{(item.release_date ?? item.first_air_date) + " | " + firstLetterCapital(item.media_type)}</span>
                    <span className={styles.rating}>{item.vote_average.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

export default ContentCard;
