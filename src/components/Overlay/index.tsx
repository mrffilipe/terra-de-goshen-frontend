import styles from './styles.module.css';

import { useEffect } from 'react';

type Props = {
    className?: string;
    children: React.ReactNode;
    isOverlayOpen: boolean;
};

const Overlay = (props: Props) => {
    useEffect(() => {
        if (props.isOverlayOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => document.body.classList.remove('no-scroll');
    }, [props.isOverlayOpen]);

    return (
        props.isOverlayOpen && (
            <div className={`${styles.overlay} ${props.className}`}>
                {props.children}
            </div>
        )
    );
};

export default Overlay;