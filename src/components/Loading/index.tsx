import styles from './styles.module.css';

import Overlay from '../Overlay';

type Props = {
    isLoading: boolean;
};

const Loading = (props: Props) => {
    return (
        <Overlay activeOverlay={props.isLoading}>
            <div className={styles.loading}>
                <div className={styles.loading_spinner}></div>
                <p>Carregando...</p>
            </div>
        </Overlay>
    );
};

export default Loading;