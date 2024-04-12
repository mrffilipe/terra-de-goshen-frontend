import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import ColorRef from '../../../Domain/Entities/ColorRef'

type Props = {
    colors?: ColorRef[]
    onChange?: (colors: ColorRef[]) => void | undefined
    editable?: boolean
}

const ProductColorAttribute = (props: Props) => {
    const [colors, setColors] = useState<ColorRef[]>(props.colors || [])

    useEffect(() => {
        if (props.onChange) {
            props.onChange(colors)
        }
    }, [colors, props.onChange])

    const listColors = colors.map(color => (
        <li key={color.id || uuidv4()}>
            {
                (props.editable && colors.length) ?
                    <input
                        type="color"
                        value={color.color.value}
                        onChange={e => handleColorChange(color.id, e.target.value)} /> :
                    <span style={{ backgroundColor: color.color.value }}></span>
            }
        </li>
    ))

    const handleColorChange = (colorId: string, newValue: string): void => {
        const newColors = colors.map(color => {
            if (color.id === colorId) {
                return new ColorRef({ value: newValue }, '', color.id)
            }

            return color;
        })

        setColors(newColors)
    }

    const handleAddColor = (): void => {
        const newColor = new ColorRef({ value: '#000' }, '', uuidv4())

        setColors([...colors, newColor])
    }

    return (
        <ul className={styles.product_color_attribute}>
            {listColors}
            {
                props.editable &&
                <button className={styles.add_btn} onClick={handleAddColor}>+</button>
            }
        </ul>
    )
}

export default ProductColorAttribute