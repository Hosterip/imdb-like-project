import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {firstLetterCapital} from "../../helpers/firstLetterCapital.ts";
import {MenuItemProps} from "./MenuTypes.ts";
import styles from './Menu.module.css'


const MenuItem:FC<MenuItemProps>= React.memo(({item, location}) => {
    const classesHandler = () => {
        return `${styles.menuButton} ${location === item.key && styles.active}`
    }

    return (
        <Link className={classesHandler()} to={'/' + item.key}>
            <span>
                {item.icon} {firstLetterCapital(item.key)}
            </span>
        </Link>
    );
})

export default MenuItem;