import { JSX } from 'react'

export interface RecSideMenuItemsInterface {
  key: string
  value: string
  icon: JSX.Element
}

export interface RecSideMenuButtonProps {
  item: RecSideMenuItemsInterface
  type: string
  setState: (n: string) => void
}
