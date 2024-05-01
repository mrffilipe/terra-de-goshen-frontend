import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Add } from '@mui/icons-material'

import ColorRef from '../../../Domain/Entities/ColorRef'

type Props = {
    value: ColorRef[]
    editable?: boolean
    onChange?: (colors: ColorRef[]) => void
}

const ProductColorAttribute = (props: Props) => {
    const [colors, setColors] = useState<ColorRef[]>([])

    useEffect(() => {
        if (props.value !== undefined) {
            setColors(props.value)
        }
    }, [props.value])

    const colorList = colors.map(color => (
        <li key={color.id || uuidv4()}>
            {
                props.editable ? (
                    <input
                        type="color"
                        value={color.color.value}
                        onChange={e => handleColorChange(color.id, e.target.value)} />
                ) : (
                    <span style={{ backgroundColor: color.color.value }}></span>
                )
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
            {colorList}
            {
                props.editable && (
                    <button className={styles.add_btn} onClick={handleAddColor}>
                        <Add />
                    </button>
                )
            }
        </ul>
    )
}

export default ProductColorAttribute