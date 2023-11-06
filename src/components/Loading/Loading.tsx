import {Spin} from "antd";
import styles from './loading.module.css'
const Loading = () => {
    return (
        <div className={styles.loading}>
            <Spin size="large" />
        </div>
    );
};

export default Loading;