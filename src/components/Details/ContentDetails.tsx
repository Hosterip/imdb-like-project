import {FC} from 'react';
import { fallbackImage } from '../../constants/images';
import { detailsInterface } from '../../pages/Detail';
import styles from './contentDetails.module.css'
interface IDetailProps {
    details: detailsInterface
}


const ContentDetails: FC<IDetailProps> = ({details}) => {
    const imagePath = details.poster_path ? `https://image.tmdb.org/t/p/w500${details.poster_path}` : fallbackImage
    const genresGenerator = () => details.genres.map(item => item.name).join(', ')

    return (
        <div className={styles.contentDetails}>
            <img className={styles.poster} alt={'poster'} src={imagePath}/>
            <div style={{margin: '0 20px'}}>
                <h1>Name: {details.title || details.name}</h1>
                <h2>Release date: {details.release_date || details.first_air_date}</h2>
                <h2>Rating on IMDB: {details.vote_average.toFixed(1)}</h2>
                <h2>Genres: {genresGenerator()}</h2>
                <h3>Overview: <span style={{color: '#c8c8c8'}}>{details.overview}</span></h3>
            </div>
        </div>
    );
};

export default ContentDetails;
