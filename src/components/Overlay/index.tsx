import styles from './styles.module.css';

import { useEffect } from 'react';

type Props = {
    className?: string;
    children: React.ReactNode;
    activeOverlay: boolean;
};

const Overlay = ({ children, activeOverlay }: Props) => {
    useEffect(() => {
        if (activeOverlay) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [activeOverlay]);

    return (
        <div className={`${styles.overlay} ${activeOverlay ? styles.visible : ''}`}>
            {children}
        </div>
    );
};

export default Overlay;