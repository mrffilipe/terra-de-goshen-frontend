import styles from './styles.module.css';

import { useEffect } from 'react';

import Overlay from '../Overlay';

type Props = {
    title: string;
    activeModal: boolean;
    children: React.ReactNode;
    onCloseClick: () => void;
};

const Modal = (props: Props) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                props.onCloseClick();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [props]);

    return (
        <Overlay activeOverlay={props.activeModal}>
            <div className={styles.modal} aria-modal="true">
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