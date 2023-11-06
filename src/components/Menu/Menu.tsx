import {useLocation} from "react-router-dom";
import {EyeOutlined, SearchOutlined} from "@ant-design/icons";
import {FC} from "react";
import styles from './Menu.module.css'
import {menuItemInterface} from "./MenuTypes.ts";
import MenuItem from "./MenuItem.tsx";
import MenuSearch from "./MenuSearch.tsx";


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

const Menu: FC = () => {
    const location = useLocation()
    return (
        <div className={styles.menu}>
            <div>
                {items.map((item) => (
                    <MenuItem key={item.key} item={item} location={location.pathname.split('/')[1]}/>
                ))
                }
            </div>
            <div style={{width: '30%', display: 'flex'}}>
                <MenuSearch/>
            </div>
        </div>

    )
}

export default Menu
