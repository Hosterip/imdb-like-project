import { FC } from 'react'
import styles from './RecSidemenu.module.css'
import { RecSideMenuButtonProps } from './RecSidemenuTypes.ts'

const RecSideMenuButton: FC<RecSideMenuButtonProps> = ({
  item,
  type,
  setState,
}) => {
  const clickHandler = (key: string) => {
    console.log('click ', key)
    setState(key)
  }
  return (
    <button
      onClick={() => clickHandler(item.key)}
      className={`${styles.btn} ${type === item.key && styles.active}`}
    >
      {item.value}
    </button>
  )
}

export default RecSideMenuButton
