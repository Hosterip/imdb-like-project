import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './Menu.module.css'
const MenuSearch = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setValue(e.currentTarget.value)
    }

    const onSearch = (e: React.FormEvent<HTMLFormElement> | React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault()
        if(value.trim()) {
            navigate(`/search/${value}`)
        }
    }

    return (
        <form className={styles.search} onSubmit={onSearch}>
            <input
                className={styles.searchInput}
                type="text"
                placeholder='Input the name of TV Show or Movie'
                value={value}
                onChange={onChangeHandler}
            />
            <button
                className={styles.searchBtn}
                onClick={onSearch}
            >
                Search!
            </button>
        </form>
    );
};

export default MenuSearch;