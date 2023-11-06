import React, {FC} from 'react';
import styles from "./RecSidemenu.module.css";
import {RecSideMenuButtonProps, RecSideMenuItemsInterface} from "./RecSidemenuTypes.ts";



const RecSideMenuButton: FC<RecSideMenuButtonProps> = ({item, type, setState}) => {
    const clickHandler = (key) => {
        console.log('click ', key);
        setState(key);
    };
    return (
        <button
            onClick={() => clickHandler(item.key)}
            className={`${styles.btn} ${type === item.key && styles.active}`}
        >
            {item.value}
        </button>
    );
};

export default RecSideMenuButton;