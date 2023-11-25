import {useLocation} from "react-router-dom";
import {EyeOutlined, SearchOutlined} from "@ant-design/icons";
import {FC} from "react";
import styles from './Menu.module.css'
import {menuItemInterface} from "./MenuTypes.ts";
import {MenuItem} from "./MenuItem.tsx";


const items: menuItemInterface[] = [
    {
        key: 'about',
        icon: <EyeOutlined/>
    },
    {
        key: 'recommendation',
        icon: <SearchOutlined/>
    },
]

export const Menu: FC = () => {
    const location = useLocation()
    return (
        <div className={styles.menu}>
            {items.map((item) => (
                <MenuItem key={item.key} item={item} location={location.pathname.split('/')[1]}/>
            ))
            }
        </div>

    )
}

