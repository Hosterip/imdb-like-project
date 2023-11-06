import {JSX} from "react";

export interface menuItemInterface {
    key: string,
    icon: JSX.Element
}

export interface MenuItemProps {
    item: menuItemInterface,
    location: string
}