import React, {FC, useState} from 'react'
import s from './Sort.module.css'

type SortPacksProps = {
    sortBy: string
    sortCallback: (sortMethod: string) => void
}

export const Sort: FC<SortPacksProps> = ({sortBy, sortCallback, children}) => {
    const [sortToggle, setSortToggle] = useState(false)

    const onSortHandler = () => {
        setSortToggle(!sortToggle)
        sortCallback(`${Number(sortToggle)}${sortBy}`)
    }

    const classNames = `${s.container} ${sortToggle && s.up} ${!sortToggle && s.down}`

    return (
        <div onClick={onSortHandler} className={classNames}>
            {children}
        </div>
    )
}