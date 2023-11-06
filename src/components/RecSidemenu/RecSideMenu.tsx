import type { MenuProps } from 'antd';
import {CameraOutlined} from "@ant-design/icons";
import {Menu} from "antd";
import {FC} from "react";
import {RecSideMenuItemsInterface} from "./RecSidemenuTypes.ts";
import styles from './RecSidemenu.module.css'
import RecSideMenuButton from "./RecSideMenuButton.tsx";
const RecSideMenuItems: RecSideMenuItemsInterface[] = [
    {
        key: 'all',
        value: 'All',
        icon: <CameraOutlined/>
    },
    {
        key: 'movie',
        value: 'Movies',
        icon: <CameraOutlined/>
    },
    {
        key: 'tv',
        value: 'TV Shows',
        icon: <CameraOutlined/>
    },
]

interface PropsForRecommendationMenu{
    type: string,
    setType: (value: string) => void
}

const RecSideMenu: FC<PropsForRecommendationMenu> = ({type, setType}) => {
    return (
        <div className={styles.sideMenu}>
            {RecSideMenuItems.map(item => (
                <RecSideMenuButton key={item.key} item={item} type={type} setState={setType}/>
            ))}
        </div>
    );
};

export default RecSideMenu;