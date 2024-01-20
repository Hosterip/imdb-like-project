import styles from "./contentDetails.module.css";
import {IDetails} from "../../shared/interfaces/pageContentInterfaces.ts";
import {FC} from "react";

interface IContentDetailsItem {
    details: IDetails
}

export const ContentDetailsItem: FC<IContentDetailsItem> = ({details}) => {
    const genresGenerator = () =>
        details.genres.map((item) => item.name).join(', ')
    return (
        <div className={styles.contentDetailsItem}>
            <h1 style={{color: "#ffead6"}}>{details.title || details.name}</h1>
            <br/>
            <h2>Release date: {details.release_date || details.first_air_date}</h2>
            <h2>Rating on IMDB: {details.vote_average.toFixed(1)}</h2>
            <h2>Genres: {genresGenerator()};</h2>
            {details.name && <h2>Status: {details.status}</h2>}
            <h3 className={styles.overview}>
                Overview: <span style={{ color: '#c8c8c8' }}>{details.overview}</span>
            </h3>
        </div>
    );
};

