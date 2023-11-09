import { FC } from 'react'
import { fallbackImage } from '../../shared/constants/images'
import styles from './contentDetails.module.css'
import { defaultImagePath } from '../../shared/constants/paths.ts'
import { IDetails } from '../../shared/interfaces/pageContentInterfaces.ts'
interface IDetailProps {
  details: IDetails
}

const ContentDetails: FC<IDetailProps> = ({ details }) => {
  const imagePath = details.poster_path
    ? defaultImagePath + details.poster_path
    : fallbackImage
  const genresGenerator = () =>
    details.genres.map((item) => item.name).join(', ')
  return (
    <div className={styles.contentDetails}>
      <img
        className={styles.poster}
        alt={details.title || details.name}
        src={imagePath}
      />
      <div className={styles.contentDetailsItem}>
        <h1>Name: {details.title || details.name}</h1>
        <h2>Release date: {details.release_date || details.first_air_date}</h2>
        <h2>Rating on IMDB: {details.vote_average.toFixed(1)}</h2>
        <h2>Genres: {genresGenerator()};</h2>
        {details.name && <h2>Status: {details.status}</h2>}
        <h3 className={styles.overview}>
          Overview: <span style={{ color: '#c8c8c8' }}>{details.overview}</span>
        </h3>
      </div>
    </div>
  )
}

export default ContentDetails
