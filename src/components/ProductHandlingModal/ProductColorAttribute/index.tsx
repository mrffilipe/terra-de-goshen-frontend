import styles from './styles.module.css'

import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Add } from '@mui/icons-material'

type Props = {
    value: Color
    editable?: boolean
    onChange?: (colors: Color) => void
}

const ProductColorAttribute = (props: Props) => {
    const [colors, setColors] = useState<Color>({
        existingColors: [],
        newColors: [],
        deletedColors: []
    })

    useEffect(() => {
        if (props.value !== undefined) {
            setColors({
                existingColors: props.value.existingColors,
                newColors: props.value.newColors ?? [],
                deletedColors: props.value.deletedColors ?? []
            })
        }
    }, [props.value])

    const handleColorChange = (colorId: string, newValue: string): void => {
        const updatedExistingColors = colors.existingColors.map(color => {
            if (color.id === colorId) {
                return { ...color, value: newValue }
            }

            return color
        })

        const updatedNewColors = (colors.newColors ?? []).map(color => {
            if (color.id === colorId) {
                return { ...color, value: newValue }
            }

            return color
        })

        const updatedColors = { ...colors, existingColors: updatedExistingColors, newColors: updatedNewColors }

        setColors(updatedColors)

        props.onChange && props.onChange(updatedColors)
    }

    const handleAddColor = (): void => {
        const newColor: NewColor = { id: uuidv4(), value: '#000' }

        const updatedColors = { ...colors, newColors: [...(colors.newColors ?? []), newColor] }

        setColors(updatedColors)

        props.onChange && props.onChange(updatedColors)
    }

    const handleDeleteColor = (colorId: string): void => {
        const colorToDelete = colors.existingColors.find(color => color.id === colorId)

        let updatedColors

        if (colorToDelete) {
            updatedColors = {
                ...colors,
                existingColors: colors.existingColors.filter(color => color.id !== colorId),
                deletedColors: [...(colors.deletedColors ?? []), { id: colorId }]
            }
        } else {
            updatedColors = {
                ...colors,
                newColors: (colors.newColors ?? []).filter(color => color.id !== colorId)
            }
        }

        setColors(updatedColors)

        props.onChange && props.onChange(updatedColors)
    }

    const colorList = [...colors.existingColors, ...(colors.newColors ?? [])].map(color => (
        <li key={color.id}>
            {
                props.editable ? (
                    <input
                        type="color"
                        value={color.value}
                        onChange={e => handleColorChange(color.id, e.target.value)} />
                ) : (
                    <span style={{ backgroundColor: color.value }}></span>
                )
            }
        </li>
    ))

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