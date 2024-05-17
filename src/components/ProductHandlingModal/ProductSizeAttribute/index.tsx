import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Add } from '@mui/icons-material'

type Props = {
    value: Size
    editable?: boolean
    onChange?: (sizes: Size) => void
}

const ProductSizeAttribute = (props: Props) => {
    const [sizes, setSizes] = useState<Size>({
        existingSizes: [],
        newSizes: [],
        deletedSizes: []
    })

    useEffect(() => {
        if (props.value !== undefined) {
            setSizes({
                existingSizes: props.value.existingSizes,
                newSizes: props.value.newSizes ?? [],
                deletedSizes: props.value.deletedSizes ?? []
            })
        }
    }, [props.value])

    const handleSizeChange = (sizeId: string, newValue: string): void => {
        const updatedExistingSizes = sizes.existingSizes.map(size => {
            if (size.id === sizeId) {
                return { ...size, value: newValue }
            }

            return size
        })

        const updatedNewSizes = (sizes.newSizes ?? []).map(size => {
            if (size.id === sizeId) {
                return { ...size, value: newValue }
            }

            return size
        })

        const updatedSizes = { ...sizes, existingSizes: updatedExistingSizes, newSizes: updatedNewSizes }

        setSizes(updatedSizes)

        props.onChange && props.onChange(updatedSizes)
    }

    const handleAddSize = (): void => {
        const newSize: NewSize = { id: uuidv4(), value: 'p' }

        const updatedSizes = { ...sizes, newSizes: [...(sizes.newSizes ?? []), newSize] }

        setSizes(updatedSizes)

        props.onChange && props.onChange(updatedSizes)
    }

    const handleDeleteSize = (sizeId: string): void => {
        const sizeToDelete = sizes.existingSizes.find(size => size.id === sizeId)

        let updatedSizes

        if (sizeToDelete) {
            updatedSizes = {
                ...sizes,
                existingSizes: sizes.existingSizes.filter(size => size.id !== sizeId),
                deletedSizes: [...(sizes.deletedSizes ?? []), { id: sizeId }]
            }
        } else {
            updatedSizes = {
                ...sizes,
                newSizes: (sizes.newSizes ?? []).filter(size => size.id !== sizeId)
            }
        }

        setSizes(updatedSizes)

        props.onChange && props.onChange(updatedSizes)
    }

    const sizeList = [...sizes.existingSizes, ...(sizes.newSizes ?? [])].map(size => (
        <li key={size.id}>
            {
                props.editable ? (
                    <input
                        type="text"
                        value={size.value}
                        placeholder='M'
                        onChange={e => handleSizeChange(size.id, e.target.value)} />
                ) : (
                    <span>{size.value}</span>
                )
            }
        </li>
    ))

    return (
        <ul className={styles.product_size_attribute}>
            {sizeList}
            {
                props.editable && (
                    <button className={styles.add_btn} onClick={handleAddSize}>
                        <Add />
                    </button>
                )
            }
        </ul>
    )
}

export default ProductSizeAttribute