import styles from './styles.module.css'

import { useEffect, useRef, useState } from 'react'

type Props = {
    value: string
}

const ProductScript = (props: Props) => {
    // const scriptRef = useRef(null)
    // const [fontSize, setFontSize] = useState<string>('1em')

    // useEffect(() => {
    //     if (scriptRef.current) {
    //         const height = scriptRef.current.offsetHeight
    //         const numberOfCharacteres = props.value.length
    //         const size = Math.floor(height / numberOfCharacteres) - (styles.gap ? parseInt(styles.gap, 10) : 0)

    //         setFontSize(`${Math.max(size, 10)}px`)
    //     }
    // }, [props.value])

    // return (
    //     <div className={styles.script} ref={scriptRef} style={{ fontSize }}>
    //         {
    //             props.value.split('').map((char, index) => (
    //                 <span key={index}>{char}</span>
    //             ))
    //         }
    //     </div>
    // )
}

export default ProductScript