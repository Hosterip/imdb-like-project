import { FC } from 'react'
import { fallbackImage } from '../../shared/constants/images'
import styles from './contentDetails.module.css'
import { defaultImagePath } from '../../shared/constants/paths.ts'
import { IDetails } from '../../shared/interfaces/pageContentInterfaces.ts'
import {ContentDetailsItem} from "./ContentDetailsItem.tsx";
interface IDetailProps {
  details: IDetails
}

export const ContentDetails: FC<IDetailProps> = ({ details }) => {
  const imagePath = details.poster_path
    ? defaultImagePath + details.poster_path
    : fallbackImage

  return (
    <div className={styles.contentDetails}>
      <img
        className={styles.poster}
        alt={details.title || details.name}
        src={imagePath}
      />
      <ContentDetailsItem details={details} />
    </div>
  )
}

