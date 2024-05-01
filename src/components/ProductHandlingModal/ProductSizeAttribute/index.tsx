import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Add } from '@mui/icons-material'

import SizeRef from '../../../Domain/Entities/SizeRef'

type Props = {
    value: SizeRef[]
    editable?: boolean
    onChange?: (sizes: SizeRef[]) => void
}

const ProductSizeAttribute = (props: Props) => {
    const [sizes, setSizes] = useState<SizeRef[]>([])

    useEffect(() => {
        if (props.value !== undefined) {
            setSizes(props.value)
        }

        if (props.onChange) {
            props.onChange(sizes)
        }
    }, [sizes])

    const sizeList = sizes.map(size => (
        <li key={size.id || uuidv4()}>
            {
                props.editable ? (
                    <input
                        type="text"
                        value={size.size.value}
                        placeholder='M'
                        onChange={e => handleColorChange(size.id, e.target.value)} />
                ) : (
                    <span>{size.size.value}</span>
                )
            }
        </li>
    ))

    const handleColorChange = (sizeId: string, newValue: string): void => {
        const newSizes = sizes.map(size => {
            if (size.id === sizeId) {
                return new SizeRef({ value: newValue }, '', size.id)
            }

            return size;
        })

        setSizes(newSizes)
    }

    const handleAddSize = (): void => {
        const newSize = new SizeRef({ value: 'm' }, '', uuidv4())

        setSizes([...sizes, newSize])
    }

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