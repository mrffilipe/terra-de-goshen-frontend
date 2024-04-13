import styles from './styles.module.css'

import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import SizeRef from '../../../Domain/Entities/SizeRef'

type Props = {
    value?: SizeRef[]
    onChange?: (sizes: SizeRef[]) => void | undefined
    editable?: boolean
}

const ProductSizeAttribute = (props: Props) => {
    const [sizes, setSizes] = useState<SizeRef[]>(props.value || [])

    useEffect(() => {
        if (props.onChange) {
            props.onChange(sizes)
        }
    }, [sizes, props.onChange])



    const listSizes = sizes.map(size => (
        <li key={size.id || uuidv4()}>
            {
                (props.editable && sizes.length) ?
                    <input
                        type="text"
                        value={size.size.value}
                        onChange={e => handleColorChange(size.id, e.target.value)} /> :
                    <span>{size.size.value}</span>
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
            {listSizes}
            {
                props.editable &&
                <button className={styles.add_btn} onClick={handleAddSize}>+</button>
            }
        </ul>
    )
}

export default ProductSizeAttribute