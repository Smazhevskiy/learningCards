import React, {FC} from 'react'
import s from '../Packs.module.css'
import {Pagination} from '../../../components/UI/Pagination/Pagination'
import {Select} from '../../../components/UI/Select/Select'
import {setPacksCountOnPage, setPacksCurrentPage} from '../../../store/reducers/packs-reducer'
import {useDispatch} from 'react-redux'

type PacksPaginationProps = {
    totalCount: number
    countPerPage: number
    currentPage: number
}

export const PacksPagination: FC<PacksPaginationProps> = props => {
    const {totalCount, countPerPage, currentPage} = props
    const dispatch = useDispatch()

    const onPageChangeHandler = (page: number) => dispatch(setPacksCurrentPage({page}))
    const onSelectChangeHandler = (option: string) => dispatch(setPacksCountOnPage({count: Number(option)}))

    return (
        <div className={s.paginationContainer}>
            <Pagination totalCount={totalCount}
                        countPerPage={countPerPage}
                        currentPage={currentPage}
                        onChange={onPageChangeHandler}/>
            <div>
                <span style={{paddingRight: 16}}> Show on page:</span>
                <Select options={[5, 20, 50]} onChangeOption={onSelectChangeHandler}/>
            </div>
        </div>
    )
}