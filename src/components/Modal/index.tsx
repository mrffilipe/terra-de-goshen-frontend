import styles from './styles.module.css';

import Overlay from '../Overlay';

type Props = {
    title: string;
    activeModal: boolean;
    children: React.ReactNode;
    onCloseClick: () => void;
};

const Modal = (props: Props) => {
    return (
        <Overlay activeOverlay={props.activeModal}>
            <div className={styles.modal}>
                <button className={styles.close_button} onClick={props.onCloseClick}>
                    X
                </button>
                <div className={styles.modal_header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.modal_body}>
                    {props.children}
                </div>
            </div>
        </Overlay>
    );
};

export default Modal;