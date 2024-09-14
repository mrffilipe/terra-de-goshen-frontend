import styles from './styles.module.css';

import { useEffect } from 'react';

type Props = {
    className?: string;
    children: React.ReactNode;
    activeOverlay: boolean;
};

const Overlay = (props: Props) => {
    useEffect(() => {
        if (!props.activeOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [props.activeOverlay]);

    return (
        <div className={`${styles.overlay} ${props.activeOverlay ? styles.visible : ''}`}>
            {props.children}
        </div>
    );
};

export default Overlay;